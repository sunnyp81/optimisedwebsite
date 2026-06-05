// Generates public/og-default.png (1200x630) for social/WhatsApp link previews.
// Pure SVG rasterised via sharp (uses system fonts: Bitstream Charter for the
// editorial serif headline, Liberation Sans for body, DejaVu Sans Mono labels).
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';

const W = 1200, H = 630;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0b1220"/>
      <stop offset="1" stop-color="#111a2e"/>
    </linearGradient>
    <linearGradient id="ink" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#fbbf24"/>
      <stop offset="0.55" stop-color="#f59e0b"/>
      <stop offset="1" stop-color="#a78bfa"/>
    </linearGradient>
    <radialGradient id="amberGlow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#fbbf24" stop-opacity="0.22"/>
      <stop offset="1" stop-color="#fbbf24" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="violetGlow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#7c3aed" stop-opacity="0.28"/>
      <stop offset="1" stop-color="#7c3aed" stop-opacity="0"/>
    </radialGradient>
    <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.3" fill="#ffffff" fill-opacity="0.05"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#dots)"/>
  <ellipse cx="1080" cy="40" rx="520" ry="420" fill="url(#amberGlow)"/>
  <ellipse cx="120" cy="640" rx="520" ry="420" fill="url(#violetGlow)"/>
  <rect x="0" y="0" width="${W}" height="${H}" fill="none" stroke="#fbbf24" stroke-opacity="0.18" stroke-width="2"/>

  <!-- Logo + wordmark -->
  <g transform="translate(72,60)">
    <rect x="0" y="0" width="46" height="46" rx="12" fill="#fbbf24"/>
    <polyline points="11,32 20,23 27,27 35,15" fill="none" stroke="#7c3aed" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="62" y="31" font-family="Liberation Sans, DejaVu Sans, sans-serif" font-size="26" font-weight="700" fill="#f8fafc" letter-spacing="-0.5">OptimisedWebsite</text>
  </g>

  <!-- Headline -->
  <g font-family="Bitstream Charter, Georgia, DejaVu Serif, serif" font-weight="700">
    <text x="70" y="270" font-size="96" fill="#f8fafc" letter-spacing="-2">SEO Websites</text>
    <text x="70" y="370" font-size="96" fill="#f8fafc" letter-spacing="-2">That <tspan fill="url(#ink)">Get Found.</tspan></text>
  </g>

  <!-- Subhead -->
  <text x="72" y="438" font-family="Liberation Sans, DejaVu Sans, sans-serif" font-size="30" fill="#cbd5e1" letter-spacing="-0.3">Built to rank, not just to look good. Lighthouse 100. Live in 7 days.</text>

  <!-- Pills -->
  <g font-family="DejaVu Sans Mono, monospace" font-size="20" font-weight="700">
    <g transform="translate(72,486)">
      <rect width="206" height="46" rx="23" fill="#10b981" fill-opacity="0.14" stroke="#10b981" stroke-opacity="0.45" stroke-width="1.5"/>
      <circle cx="26" cy="23" r="5" fill="#34d399"/>
      <text x="44" y="30" fill="#6ee7b7">Lighthouse 100</text>
    </g>
    <g transform="translate(296,486)">
      <rect width="200" height="46" rx="23" fill="#fbbf24" fill-opacity="0.14" stroke="#fbbf24" stroke-opacity="0.45" stroke-width="1.5"/>
      <circle cx="26" cy="23" r="5" fill="#fbbf24"/>
      <text x="44" y="30" fill="#fcd34d">7-day delivery</text>
    </g>
    <g transform="translate(514,486)">
      <rect width="168" height="46" rx="23" fill="#7c3aed" fill-opacity="0.16" stroke="#a78bfa" stroke-opacity="0.5" stroke-width="1.5"/>
      <circle cx="26" cy="23" r="5" fill="#a78bfa"/>
      <text x="44" y="30" fill="#c4b5fd">From &#163;1,500</text>
    </g>
  </g>

  <!-- Lighthouse-style gauge -->
  <g transform="translate(985,250)">
    <circle r="118" fill="#0b1220" fill-opacity="0.5"/>
    <circle r="100" fill="none" stroke="#ffffff" stroke-opacity="0.08" stroke-width="14"/>
    <circle r="100" fill="none" stroke="#10b981" stroke-width="14" stroke-linecap="round"
            stroke-dasharray="616 628" transform="rotate(-90)"/>
    <text x="0" y="14" text-anchor="middle" font-family="Bitstream Charter, Georgia, serif" font-size="76" font-weight="700" fill="#f8fafc">100</text>
    <text x="0" y="150" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-size="20" fill="#94a3b8" letter-spacing="3">LIGHTHOUSE</text>
  </g>

  <!-- URL -->
  <text x="72" y="586" font-family="DejaVu Sans Mono, monospace" font-size="22" fill="#94a3b8" letter-spacing="1">optimisedwebsite.com</text>
  <text x="1128" y="586" text-anchor="end" font-family="DejaVu Sans Mono, monospace" font-size="20" fill="#64748b" letter-spacing="1">Built in Britain</text>
</svg>`;

const png = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
writeFileSync('public/og-default.png', png);
console.log('Wrote public/og-default.png', (png.length / 1024).toFixed(1) + 'KB');
