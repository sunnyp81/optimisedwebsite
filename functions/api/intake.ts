// Cloudflare Pages Function: same-origin proxy for the order/contact forms.
// Keeps the external worker's CORS surface untouched — this route is same-origin,
// the browser never talks to the worker directly.

interface PagesContext {
  request: Request;
}

const WORKER_URL = 'https://aaa-intake.sunnypat81.workers.dev';
const MAX_BODY_BYTES = 10_000;
const MAX_FIELD_LENGTH = 5_000;

// Union of every field the order and contact forms submit, plus the honeypot.
const ALLOWED_FIELDS = new Set([
  'name', 'email', 'phone', 'niche', 'audience', 'domain',
  'competitors', 'budget', 'message', 'source', 'form_type',
  'landing_page', 'entry_page', 'entry_referrer', 'form_url', 'offer', 'submission_id',
  'entry_utm_source', 'entry_utm_medium', 'entry_utm_campaign', 'entry_utm_term', 'entry_utm_content',
]);

const jsonResponse = (body: Record<string, unknown>, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  });

function isSameOrigin(request: Request): boolean {
  const origin = request.headers.get('Origin');
  if (!origin) return true; // no Origin header (e.g. same-tab form nav fallback) — allow
  try {
    return new URL(origin).host === new URL(request.url).host;
  } catch {
    return false;
  }
}

function sanitiseField(value: unknown): string | null {
  if (typeof value !== 'string') return null;
  // eslint-disable-next-line no-control-regex
  const stripped = value.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, '').trim();
  if (!stripped) return null;
  return stripped.slice(0, MAX_FIELD_LENGTH);
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function onRequestPost({ request }: PagesContext): Promise<Response> {
  if (!isSameOrigin(request)) {
    return jsonResponse({ ok: false, error: 'Forbidden' }, 403);
  }

  const contentLength = Number(request.headers.get('Content-Length') || '0');
  if (contentLength > MAX_BODY_BYTES) {
    return jsonResponse({ ok: false, error: 'Payload too large' }, 413);
  }

  let raw: unknown;
  try {
    const text = await request.text();
    if (new TextEncoder().encode(text).byteLength > MAX_BODY_BYTES) {
      return jsonResponse({ ok: false, error: 'Payload too large' }, 413);
    }
    raw = JSON.parse(text);
  } catch {
    return jsonResponse({ ok: false, error: 'Invalid JSON' }, 400);
  }

  if (typeof raw !== 'object' || raw === null || Array.isArray(raw)) {
    return jsonResponse({ ok: false, error: 'Invalid payload' }, 400);
  }
  const input = raw as Record<string, unknown>;

  // Honeypot: bots fill hidden fields. Pretend success, drop the submission silently.
  if (sanitiseField(input.website)) {
    return jsonResponse({ ok: true }, 200);
  }

  const clean: Record<string, string> = {};
  for (const key of ALLOWED_FIELDS) {
    const value = sanitiseField(input[key]);
    if (value) clean[key] = value;
  }

  if (!clean.name || !clean.email) {
    return jsonResponse({ ok: false, error: 'Name and email are required' }, 400);
  }
  if (!EMAIL_RE.test(clean.email)) {
    return jsonResponse({ ok: false, error: 'Invalid email address' }, 400);
  }
  if (clean.form_type === 'order' && !clean.niche) {
    return jsonResponse({ ok: false, error: 'Industry is required' }, 400);
  }
  if (clean.form_type === 'contact' && !clean.message) {
    return jsonResponse({ ok: false, error: 'Message is required' }, 400);
  }
  if (clean.form_type !== 'order' && clean.form_type !== 'contact') {
    return jsonResponse({ ok: false, error: 'Invalid form type' }, 400);
  }

  // The upstream worker forwards only name, email, phone, message and referer,
  // so fold the lead context into the message as readable labelled lines.
  const cap = (v: string | undefined, n = 100) => (v ? v.slice(0, n) : v);
  const submissionId = /^[A-Za-z0-9-]{8,64}$/.test(clean.submission_id || '') ? clean.submission_id : undefined;
  const context = [
    ['Submission ID', submissionId],
    ['Form', clean.form_type],
    ['Offer', cap(clean.offer) || 'unknown'],
    ['Budget', cap(clean.budget)],
    ['Industry', cap(clean.niche)],
    ['Domain', cap(clean.domain, 300)],
    ['Form page', cap(clean.form_url || clean.landing_page) || 'unknown'],
    ['Entry page', cap(clean.entry_page) || 'unknown'],
    ['Source', cap(clean.entry_referrer) || 'unknown'],
    ['UTM source', cap(clean.entry_utm_source, 80)],
    ['UTM medium', cap(clean.entry_utm_medium, 80)],
    ['UTM campaign', cap(clean.entry_utm_campaign, 80)],
    ['UTM term', cap(clean.entry_utm_term, 80)],
    ['UTM content', cap(clean.entry_utm_content, 80)],
  ]
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n');
  const extras = [
    clean.audience ? `Audience: ${clean.audience}` : '',
    clean.competitors ? `Competitors: ${clean.competitors}` : '',
  ].filter(Boolean).join('\n');
  const original = [clean.message, extras].filter(Boolean).join('\n');
  // Truncate the visitor's text first so the context block always survives.
  const tail = `\n\n--- Lead context ---\n${context}`;
  const room = Math.max(0, MAX_FIELD_LENGTH - tail.length);
  clean.message = `${original.slice(0, room)}${original ? tail : tail.trimStart()}`;

  // Forward the Referer without its query string.
  let referer = `${new URL(request.url).origin}/`;
  try {
    const r = new URL(request.headers.get('Referer') || '');
    referer = r.origin + r.pathname;
  } catch {
    /* keep default */
  }

  try {
    const siteOrigin = new URL(request.url).origin;
    const upstream = await fetch(WORKER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Origin': siteOrigin,
        'Referer': referer,
      },
      body: JSON.stringify(clean),
    });

    if (!upstream.ok) {
      return jsonResponse({ ok: false, error: 'Delivery failed' }, 502);
    }

    return jsonResponse({ ok: true }, 200);
  } catch {
    return jsonResponse({ ok: false, error: 'Delivery failed' }, 502);
  }
}

export async function onRequestGet(): Promise<Response> {
  return jsonResponse({ ok: false, error: 'Method not allowed' }, 405);
}
