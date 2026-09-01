import { readdirSync, statSync } from 'fs';
import { join } from 'path';

const SITE = 'https://optimisedwebsite.com';
// IndexNow keys are intentionally public and verified by the matching root file.
const KEY = process.env.INDEXNOW_KEY || 'ff2615a610024c649de618c3b59ec18a';

function getAllPages(dir, base = '') {
  const urls = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const rel = base ? `${base}/${entry}` : entry;
    if (statSync(full).isDirectory()) {
      urls.push(...getAllPages(full, rel));
    } else if (entry === 'index.html') {
      const path = base ? `/${base}/` : '/';
      urls.push(`${SITE}${path}`);
    }
  }
  return urls;
}

const urls = getAllPages('dist');
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

console.log(`IndexNow response: ${res.status}`);
