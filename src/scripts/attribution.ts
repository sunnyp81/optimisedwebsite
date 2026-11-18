// First-party entry attribution. Stores the entry page and external referrer in
// sessionStorage only while analytics consent is true; cleared when consent is withdrawn.
const CONSENT_KEY = 'ow-consent-v1';
const ENTRY_KEY = 'ow-entry-v1';
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const;

interface Entry {
  page: string;
  referrer: string;
  utm: Record<string, string>;
}

export function hasConsent(): boolean {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    return !!raw && JSON.parse(raw).analytics === true;
  } catch {
    return false;
  }
}

function isInternalReferrer(): boolean {
  try {
    if (!document.referrer) return false;
    const strip = (h: string) => h.replace(/^www\./, '');
    return strip(new URL(document.referrer).hostname) === strip(location.hostname);
  } catch {
    return false;
  }
}

// One id per page load, reused on retry, so duplicate deliveries can be spotted.
const SUBMISSION_ID: string = (() => {
  try {
    return crypto.randomUUID();
  } catch {
    return 'ow-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 10);
  }
})();

function externalReferrer(): string {
  try {
    if (!document.referrer) return '';
    const ref = new URL(document.referrer);
    const strip = (h: string) => h.replace(/^www\./, '');
    if (strip(ref.hostname) === strip(location.hostname)) return '';
    return ref.origin + ref.pathname;
  } catch {
    return '';
  }
}

function readEntry(): Entry | null {
  try {
    const raw = sessionStorage.getItem(ENTRY_KEY);
    return raw ? (JSON.parse(raw) as Entry) : null;
  } catch {
    return null;
  }
}

export function clearEntry(): void {
  try {
    sessionStorage.removeItem(ENTRY_KEY);
  } catch {
    /* storage blocked */
  }
}

export function captureEntry(): void {
  if (!hasConsent()) {
    clearEntry();
    return;
  }
  if (readEntry()) return;
  const params = new URLSearchParams(location.search);
  const utm: Record<string, string> = {};
  UTM_KEYS.forEach((key) => {
    const value = params.get(key);
    if (value) utm[key] = value.slice(0, 200);
  });
  try {
    // Consent given after internal navigation: the true entry page is not known.
    const internal = isInternalReferrer();
    const entry: Entry = { page: internal ? 'unknown' : location.pathname, referrer: externalReferrer(), utm: internal ? {} : utm };
    sessionStorage.setItem(ENTRY_KEY, JSON.stringify(entry));
  } catch {
    /* storage blocked */
  }
}

// Fields sent with a form. Entry fields are "unknown" unless consent allows and an entry exists.
export function attributionFields(defaultOffer: string): Record<string, string> {
  const entry = hasConsent() ? readEntry() : null;
  const offerParam = new URLSearchParams(location.search).get('offer') || '';
  const offer = /^[a-z0-9-]{1,60}$/.test(offerParam) ? offerParam : defaultOffer;
  const fields: Record<string, string> = {
    entry_page: entry?.page || 'unknown',
    entry_referrer: entry?.referrer || 'unknown',
    form_url: location.pathname,
    submission_id: SUBMISSION_ID,
    offer: offer || 'unknown',
  };
  if (entry) {
    Object.entries(entry.utm).forEach(([key, value]) => {
      fields['entry_' + key] = value;
    });
  }
  return fields;
}

export function initAttribution(): void {
  captureEntry();
  window.addEventListener('ow:consent', (e) => {
    const detail = (e as CustomEvent<{ analytics?: boolean }>).detail;
    if (detail && detail.analytics === true) captureEntry();
    else clearEntry();
  });
  window.addEventListener('storage', (e) => {
    if (e.key === CONSENT_KEY && !hasConsent()) clearEntry();
  });
}
