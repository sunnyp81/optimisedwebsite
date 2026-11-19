---
title: "Website Redesign SEO Checklist"
metaTitle: "Website Redesign SEO Checklist: 24 Steps From Pre-Launch to Day 30 | OptimisedWebsite"
metaDescription: "A website redesign SEO checklist in three phases: 10 pre-launch steps, 6 launch-day steps and 8 post-launch checks up to day 30, each with a pass test."
h1: "Website Redesign SEO Checklist: 24 Steps Before, During and After Launch"
targetKeyword: "website redesign seo checklist"
intent: "informational"
schemaTypes: ["Article", "FAQPage"]
relatedSlugs:
  - "redirect-map-template"
  - "recover-rankings-after-site-migration"
  - "website-redesign-statistics"
hubBacklink:
  anchor: "SEO website guide"
  href: "/learn/"
glance:
  points:
    - "Before launch: record a baseline and crawl every old URL. Build a redirect map for every URL with clicks or links."
    - "On staging: block crawlers and crawl the new site. Test every mapped redirect before the switch."
    - "On launch day: switch DNS and redirects together. Remove the staging noindex and submit the new sitemap."
    - "After launch: check Search Console on day 1, day 3 and day 7. Compare clicks against the baseline at day 14 and day 30."
  image:
    src: "/images/learn/website-redesign-seo-checklist.webp"
    alt: "Terminal output of a launch check on optimisedwebsite.com: the homepage returns 200 OK with no X-Robots-Tag header, no robots or googlebot meta tag, and robots.txt has no Disallow rule"
    caption: "Own screenshot: a launch-day indexing check run on optimisedwebsite.com on 19 November 2026."
serviceCta:
  heading: "Want the redirect map, staging crawl and day 30 checks done for you?"
  label: "Request a Build Plan"
  href: "/order/?offer=website-redesign-seo-migration"
faqs:
  - q: "When should the SEO checklist start in a redesign project?"
    a: "Start it before design work begins. The URL inventory and baseline need the old site live and unchanged. Decisions about page names and structure then follow the map instead of breaking it."
  - q: "How is this different from a new website SEO checklist?"
    a: "A new site has no history to protect. A redesign checklist exists to carry existing rankings, links and indexed URLs across to the new site. The extra work is the baseline, the redirect map and the post-launch comparison."
  - q: "How long should I keep the old redirects?"
    a: "Google recommends keeping redirects for as long as possible and generally at least 1 year. Leaving them in place permanently costs little and protects old links."
  - q: "Do I need the Change of Address tool for a redesign?"
    a: "Only if the domain or subdomain changes. Google says the tool is for moves from one domain or subdomain to another. URL changes on the same domain need redirects and an updated sitemap instead."
datePublished: "2026-11-19"
dateModified: "2026-11-19"
---

A website redesign SEO checklist has three phases. Pre-launch work protects what already ranks. Launch-day work switches everything over in the right order. Post-launch checks catch problems while they are still cheap to fix. Each step below has a pass test so you know when it is done.

<figure style="margin: 2rem 0;">
<svg viewBox="0 0 720 200" role="img" aria-labelledby="rc-t rc-d" style="width: 100%; height: auto; display: block;">
<title id="rc-t">Redesign SEO timeline</title>
<desc id="rc-d">Three phases on a timeline: pre-launch with 10 steps, launch day with 6 steps, and post-launch checks at day 1, day 7, day 14 and day 30.</desc>
<line x1="40" y1="100" x2="680" y2="100" stroke="var(--color-rule)" stroke-width="4" />
<rect x="40" y="40" width="260" height="40" rx="10" fill="var(--color-accent-2)" opacity="0.15" />
<text x="170" y="66" text-anchor="middle" font-size="16" font-weight="700" fill="currentColor">Pre-launch: 10 steps</text>
<rect x="320" y="40" width="120" height="40" rx="10" fill="var(--color-accent)" opacity="0.35" />
<text x="380" y="66" text-anchor="middle" font-size="16" font-weight="700" fill="currentColor">Launch: 6</text>
<rect x="460" y="40" width="220" height="40" rx="10" fill="var(--color-accent-2)" opacity="0.15" />
<text x="570" y="66" text-anchor="middle" font-size="16" font-weight="700" fill="currentColor">Post-launch: 8 checks</text>
<circle cx="380" cy="100" r="9" fill="var(--color-accent)" />
<text x="380" y="135" text-anchor="middle" font-size="14" fill="currentColor">Day 0</text>
<circle cx="480" cy="100" r="6" fill="var(--color-accent-2)" />
<text x="480" y="135" text-anchor="middle" font-size="13" fill="currentColor">Day 1</text>
<circle cx="540" cy="100" r="6" fill="var(--color-accent-2)" />
<text x="540" y="135" text-anchor="middle" font-size="13" fill="currentColor">Day 7</text>
<circle cx="600" cy="100" r="6" fill="var(--color-accent-2)" />
<text x="600" y="135" text-anchor="middle" font-size="13" fill="currentColor">Day 14</text>
<circle cx="670" cy="100" r="6" fill="var(--color-accent-2)" />
<text x="670" y="135" text-anchor="middle" font-size="13" fill="currentColor">Day 30</text>
<text x="170" y="135" text-anchor="middle" font-size="13" fill="currentColor">Old site still live and unchanged</text>
<text x="360" y="180" text-anchor="middle" font-size="13" fill="currentColor">Redirects go live in the same switch as the new site</text>
</svg>
<figcaption style="font-size: 0.85em; text-align: center;">The checklist runs on one timeline. The old site stays untouched until the launch switch.</figcaption>
</figure>

## Pre-Launch: 10 Steps on the Old and Staging Sites

Do these while the old site is still live. Most of them cannot be done once it is gone.

1. **Export a 12 month baseline.** Pull clicks, impressions and position per page from Google Search Console. Pull organic sessions and conversions per landing page from your analytics. Pass: one saved file with a row per page.
2. **Crawl every old URL.** Use a crawler such as Screaming Frog or Sitebulb. Add URLs from the XML sitemap, Search Console, analytics and your backlink report so orphan pages and existing redirect sources are included. Pass: one list of every URL that returns 200 plus every legacy redirect source with its current destination.
3. **List the URLs with backlinks.** Export linked pages from Search Console or a backlink tool. Pass: each linked URL is marked in the inventory.
4. **Save titles, meta descriptions and H1s.** Keep them in the inventory so nothing is lost in a content transfer. Pass: three filled columns per URL.
5. **Build the redirect map.** Give every old URL one outcome: keep, 301 to an equivalent page or remove with a 404 or 410. Use the [redirect map template](/learn/redirect-map-template/) for the columns. Pass: no URL with clicks or links is left without an outcome.
6. **Check each match for intent.** A redirect target must answer the same question as the old page. Pass: no batch of old URLs points at the homepage.
7. **Block the staging site.** Use password protection or a noindex header on staging. Pass: staging returns 401 or carries noindex on every page.
8. **Crawl staging.** Check titles, canonicals, internal links and status codes on the new build. Pass: zero internal links to 404s or redirects.
9. **Test the redirect map on staging.** Run every old path against the staging server. Pass: kept URLs return 200, moved URLs return one 301 or 308 to a mapped URL that itself returns 200, and removed URLs return 404 or 410.
10. **Plan the switch.** Write the order of DNS, redirect rules, robots.txt and sitemap changes. Name who does each one. Pass: a written run sheet with times.

## Launch Day: 6 Steps in One Switch

Launch day is about order. Redirects must be live in the same moment as the new site.

1. **Deploy the new site and redirect rules together.** Pass: within minutes of the switch a sample of 20 old URLs returns what the map says. Kept URLs return 200, moved URLs return one 301 or 308 to the mapped URL and that URL returns 200, and removed URLs return 404 or 410.
2. **Remove the staging block.** Delete the noindex meta tag, the X-Robots-Tag header and any password wall. Check robots.txt on the live domain. Google's <a href="https://developers.google.com/search/docs/crawling-indexing/block-indexing" target="_blank" rel="noopener noreferrer">noindex documentation</a> says noindex works as a meta tag or as an HTTP response header, so check both. Pass: key pages return 200 to a logged-out request, show no noindex in the robots meta tag or the X-Robots-Tag header and are allowed by robots.txt.
3. **Confirm self-referencing canonicals.** Google asks for each new URL to carry a canonical that points to itself. Pass: canonicals on 10 key pages match their live URLs.
4. **Submit the new XML sitemap** in Google Search Console and Bing Webmaster Tools. Pass: both report the sitemap as read.
5. **File a Change of Address** if the domain changed. Google's <a href="https://support.google.com/webmasters/answer/9370220" target="_blank" rel="noopener noreferrer">Change of Address tool</a> is for domain or subdomain moves only. Pass: the request shows as accepted or is marked not needed.
6. **Check analytics and conversion tracking.** Submit a test enquiry on a form you own. Pass: the event shows in your analytics real-time report.

| Launch item | Who checks | Pass test |
|---|---|---|
| Redirect rules | Developer | 20 sampled old URLs match the map |
| Crawl and index access | SEO | Logged-out 200, no noindex in meta tag or X-Robots-Tag, allowed by robots.txt |
| Canonicals | SEO | 10 key pages point to themselves |
| Sitemap | SEO | Read by Google and Bing |
| Tracking | Owner | Test enquiry recorded |

## Post-Launch: 8 Checks Up to Day 30

Watch for errors early. The checks below run in date order from day 1 to day 30.

1. **Day 1: re-crawl the full old URL list.** Pass: kept URLs return 200, moved URLs return one 301 or 308 to a mapped URL that itself returns 200, and removed URLs return 404 or 410.
2. **Day 1: check for redirect chains.** Pass: every redirect is one hop.
3. **Day 1: update internal links** so they point at new URLs directly. Pass: the crawl shows zero internal links to redirects.
4. **Day 3: review Search Console page indexing.** Look for new 404s, soft 404s and pages excluded by noindex. Pass: each new error has an owner.
5. **Day 7: compare clicks per mapped group against the baseline.** Add up each distinct old and new URL in the group once, so a page that several old URLs merged into is not counted twice. Compare the 7 days after launch with the same 7 weekdays before launch, not with the 12-month total. Use both Search Console properties if the domain changed. Pass: every group with a drop is listed with a cause or marked under review.
6. **Day 7: ask key linking sites to update links.** Start with the pages that had the most referring domains. Pass: requests sent.
7. **Day 14: compare positions for your top queries.** Pass: a written note per query that moved.
8. **Day 30: run the full comparison again.** Pass: a short report of what recovered and what still needs work.

Expect some movement in this window. Google's <a href="https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes" target="_blank" rel="noopener noreferrer">site move guidance</a> states that visibility may fluctuate temporarily during a move and that a small to medium-sized site can take a few weeks for most pages to move.

Keep the redirects live. Google recommends keeping them for as long as possible and generally at least 1 year. Follow the steps to [recover rankings after a site migration](/learn/recover-rankings-after-site-migration/) if the day 7 comparison shows a sharp drop.

## What This Checklist Does Not Cover

This list protects existing rankings. It does not plan new content or choose keywords for new pages. A brand-new build with no history needs a launch checklist instead because there is nothing to redirect.

## Getting the Checklist Done

Most of the risk sits in steps 5, 6 and 9 of the pre-launch phase. A missed URL or a wrong match can cost rankings that are slow to return.

Use a managed approach to [SEO migration when redesigning a website](/website-redesign-seo-migration/) when those steps look like more than your team can run. It covers the map, the staging tests and the day 30 checks.
