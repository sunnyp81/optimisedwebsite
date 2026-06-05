// Generates public/og-default.png (1200x630) for social/WhatsApp link previews.
// Pure SVG rasterised via sharp (system fonts: Bitstream Charter for the
// editorial serif headline, Liberation Sans for body, DejaVu Sans Mono labels).
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';

const W = 1200, H = 630;

// Pill helper so spacing/padding stays consistent.
const pill = (x, y, w, accent, dot, text, label) => `
    <g transform="translate(${x},${y})">
      <rect width="${w}" height="52" rx="26" fill="${accent}" fill-opacity="0.14" stroke="${accent}" stroke-opacity="0.5" stroke-width="1.5"/>
      <circle cx="30" cy="26" r="5.5" fill="${dot}"/>
      <text x="52" y="34" font-family="DejaVu Sans Mono, monospace" font-size="21" font-weight="700" fill="${text}">${label}</text>
    </g>`;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0b1220"/>
      <stop offset="1" stop-color="#111a2e"/>
    </linearGradient>
    <linearGradient id="ink" x1="0" y1="0" x2="1" y2="0.4">
      <stop offset="0" stop-color="#fbbf24"/>
      <stop offset="0.55" stop-color="#f59e0b"/>
      <stop offset="1" stop-color="#a78bfa"/>
    </linearGradient>
    <radialGradient id="amberGlow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#fbbf24" stop-opacity="0.20"/>
      <stop offset="1" stop-color="#fbbf24" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="violetGlow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#7c3aed" stop-opacity="0.26"/>
      <stop offset="1" stop-color="#7c3aed" stop-opacity="0"/>
    </radialGradient>
    <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.3" fill="#ffffff" fill-opacity="0.05"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#dots)"/>
  <ellipse cx="1120" cy="-20" rx="540" ry="430" fill="url(#amberGlow)"/>
  <ellipse cx="80" cy="700" rx="540" ry="430" fill="url(#violetGlow)"/>
  <rect x="18" y="18" width="${W - 36}" height="${H - 36}" rx="22" fill="none" stroke="#fbbf24" stroke-opacity="0.16" stroke-width="2"/>

  <!-- Logo + wordmark -->
  <g transform="translate(72,58)">
    <rect x="0" y="0" width="46" height="46" rx="12" fill="#fbbf24"/>
    <polyline points="11,32 20,23 27,27 35,15" fill="none" stroke="#7c3aed" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="62" y="31" font-family="Liberation Sans, DejaVu Sans, sans-serif" font-size="26" font-weight="700" fill="#f8fafc" letter-spacing="-0.5">OptimisedWebsite</text>
  </g>

  <!-- Lighthouse-style gauge (right) -->
  <g transform="translate(975,232)">
    <circle r="116" fill="#0b1220" fill-opacity="0.45"/>
    <circle r="98" fill="none" stroke="#ffffff" stroke-opacity="0.08" stroke-width="13"/>
    <circle r="98" fill="none" stroke="#10b981" stroke-width="13" stroke-linecap="round"
            stroke-dasharray="604 616" transform="rotate(-90)"/>
    <text x="0" y="16" text-anchor="middle" font-family="Bitstream Charter, Georgia, serif" font-size="74" font-weight="700" fill="#f8fafc">100</text>
    <text x="0" y="150" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-size="19" fill="#94a3b8" letter-spacing="3">LIGHTHOUSE</text>
  </g>

  <!-- Headline -->
  <g font-family="Bitstream Charter, Georgia, DejaVu Serif, serif" font-weight="700" letter-spacing="-1.5">
    <text x="72" y="252" font-size="82" fill="#f8fafc">SEO Websites</text>
    <text x="72" y="350" font-size="82" fill="#f8fafc">That <tspan fill="url(#ink)">Get Found.</tspan></text>
  </g>

  <!-- Subhead -->
  <text x="74" y="416" font-family="Liberation Sans, DejaVu Sans, sans-serif" font-size="28" fill="#cbd5e1" letter-spacing="-0.3">Built to rank, not just to look good. Live in 7 days.</text>

  <!-- Pills (generous gaps; widths sized to fit the mono text) -->
  ${pill(72, 462, 250, '#10b981', '#34d399', '#6ee7b7', 'Lighthouse 100')}
  ${pill(346, 462, 250, '#fbbf24', '#fbbf24', '#fcd34d', '7-day delivery')}
  ${pill(620, 462, 216, '#a78bfa', '#a78bfa', '#c4b5fd', 'From &#163;1,500')}

  <!-- Footer -->
  <text x="74" y="566" font-family="DejaVu Sans Mono, monospace" font-size="22" fill="#94a3b8" letter-spacing="1">optimisedwebsite.com</text>
  <text x="1128" y="566" text-anchor="end" font-family="DejaVu Sans Mono, monospace" font-size="19" fill="#64748b" letter-spacing="1">Built in Britain</text>
</svg>`;

const png = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
writeFileSync('public/og-default.png', png);
console.log('Wrote public/og-default.png', (png.length / 1024).toFixed(1) + 'KB');
