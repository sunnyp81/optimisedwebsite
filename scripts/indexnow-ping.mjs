import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

const SITE = 'https://optimisedwebsite.com';
// IndexNow keys are intentionally public and verified by the matching root file.
const KEY = process.env.INDEXNOW_KEY || 'ff2615a610024c649de618c3b59ec18a';

// Submit only sitemap URLs: noindex previews and utility pages in dist/ must never be pushed.
function sitemapUrls(dir) {
  const urls = [];
  for (const f of readdirSync(dir).filter((n) => /^sitemap-\d+\.xml$/.test(n))) {
    const xml = readFileSync(join(dir, f), 'utf8');
    for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) urls.push(m[1]);
  }
  return urls;
}

// Optional: node scripts/indexnow-ping.mjs <path> [<path> ...] submits only those sitemap URLs.
const only = [...new Set(process.argv.slice(2).map((p) => (p.startsWith('http') ? p : `${SITE}${p}`)))];
const all = sitemapUrls('dist');
const urls = only.length ? all.filter((u) => only.includes(u)) : all;
if (only.length && urls.length !== only.length) {
  console.error(`Not in sitemap, refusing: ${only.filter((u) => !all.includes(u)).join(', ')}`);
  process.exit(1);
}
if (!urls.length) {
  console.error('No sitemap URLs found; refusing to submit.');
  process.exit(1);
}
console.log(`Submitting ${urls.length} URLs to IndexNow...`);

const res = await fetch('https://api.indexnow.org/IndexNow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    host: 'optimisedwebsite.com',
    key: KEY,
    keyLocation: `${SITE}/${KEY}.txt`,
    urlList: urls
  })
});

if (res.status !== 200 && res.status !== 202) {
  console.error(`IndexNow submission failed: HTTP ${res.status}`);
  process.exitCode = 1;
} else {
  console.log(`IndexNow response: ${res.status}`);
}
