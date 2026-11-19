---
title: "Recover Rankings After a Site Migration"
metaTitle: "Site Migration Went Wrong? How to Recover Lost Rankings | OptimisedWebsite"
metaDescription: "Lost rankings after a site migration? Compare old and new URLs, fix redirect chains and 404s, restore lost content and check canonicals, noindex and internal links."
h1: "Site Migration Went Wrong? How to Recover Lost Rankings"
targetKeyword: "recover rankings after site migration"
intent: "informational"
schemaTypes: ["Article", "FAQPage"]
relatedSlugs:
  - "website-redesign-seo-checklist"
  - "redirect-map-template"
  - "website-redesign-statistics"
hubBacklink:
  anchor: "SEO website guide"
  href: "/learn/"
glance:
  points:
    - "Find which pages lost clicks. Compare Search Console clicks for each old and new URL pair over the 28 days before and after launch."
    - "Test every old URL against the map. Kept URLs return 200, moved URLs return one 301 or 308 to the mapped page and removed URLs return 404 or 410."
    - "Check the new pages for noindex, wrong canonicals, blocked robots.txt rules and missing content."
    - "Point internal links at the new URLs directly and resubmit the sitemap."
    - "Recovery is possible but not guaranteed. Measure it after Google recrawls the corrected URLs."
  image:
    src: "/images/learn/recover-rankings-after-site-migration.webp"
    alt: "Terminal output of a redirect check on optimisedwebsite.com: http returns 301 to https, the URL without a trailing slash returns 308 to the slash version, and the final URL returns 200 OK"
    caption: "Own screenshot: a redirect check run on optimisedwebsite.com on 19 November 2026."
serviceCta:
  heading: "Need someone to diagnose and fix a migration that has already gone live?"
  label: "Request a Build Plan"
  href: "/order/?offer=website-redesign-seo-migration"
faqs:
  - q: "How long does it take to recover rankings after a bad migration?"
    a: "There is no fixed timeline. Recovery starts only after Google recrawls the corrected URLs. Our website redesign statistics page collects published study data on migration recovery times with each source and sample stated."
  - q: "Should I roll back to the old site?"
    a: "Usually not. A rollback is rarely needed. Most losses come from missing redirects, noindex tags or lost content that can be fixed on the new site. Consider a rollback only when the new site cannot be fixed quickly and the old one still works."
  - q: "Is it too late to add redirects weeks after launch?"
    a: "No. Add them as soon as you find the gap. Google treats a permanent redirect as a signal that the target should be canonical and recommends server-side redirects where possible."
  - q: "Could a Google update be the cause instead?"
    a: "It can. Check the Google Search Status Dashboard for ranking updates near your launch date. A drop limited to migrated URLs points to the migration. A drop across unchanged pages points elsewhere."
datePublished: "2026-11-19"
dateModified: "2026-11-19"
---

To recover rankings after a site migration find the pages that lost clicks and test what their old URLs do now. Most losses trace back to five faults: missing or wrong redirects, redirect chains, lost content, noindex or canonical mistakes and internal links that still point at old URLs. Fix them in that order. Recovery is possible once Google recrawls the corrected pages but it is not guaranteed, so measure whether it happens.

<figure style="margin: 2rem 0;">
<svg viewBox="0 0 720 230" role="img" aria-labelledby="rr-t rr-d" style="width: 100%; height: auto; display: block;">
<title id="rr-t">Migration recovery diagnosis order</title>
<desc id="rr-d">Five checks in order: 1 compare old and new URLs, 2 redirects and 404s, 3 lost content, 4 canonical and noindex, 5 internal links. An arrow leads to recrawl and recovery.</desc>
<g font-size="14" fill="currentColor" text-anchor="middle">
<rect x="10" y="30" width="130" height="80" rx="12" fill="var(--color-accent-2)" opacity="0.15" />
<text x="75" y="62" font-weight="700">1. Compare</text>
<text x="75" y="84">old vs new URLs</text>
<rect x="152" y="30" width="130" height="80" rx="12" fill="var(--color-accent-2)" opacity="0.15" />
<text x="217" y="62" font-weight="700">2. Redirects</text>
<text x="217" y="84">chains and 404s</text>
<rect x="294" y="30" width="130" height="80" rx="12" fill="var(--color-accent-2)" opacity="0.15" />
<text x="359" y="62" font-weight="700">3. Content</text>
<text x="359" y="84">what went missing</text>
<rect x="436" y="30" width="130" height="80" rx="12" fill="var(--color-accent-2)" opacity="0.15" />
<text x="501" y="62" font-weight="700">4. Indexing</text>
<text x="501" y="84">canonical, noindex</text>
<rect x="578" y="30" width="130" height="80" rx="12" fill="var(--color-accent-2)" opacity="0.15" />
<text x="643" y="62" font-weight="700">5. Links</text>
<text x="643" y="84">internal links</text>
<line x1="40" y1="160" x2="640" y2="160" stroke="var(--color-rule)" stroke-width="4" />
<polygon points="640,150 660,160 640,170" fill="var(--color-accent)" />
<text x="360" y="200">Fix in this order, then wait for Google to recrawl the corrected URLs</text>
</g>
</svg>
<figcaption style="font-size: 0.85em; text-align: center;">Work through the five checks in order. Early checks explain most drops.</figcaption>
</figure>

## Step 1: Compare Old and New URLs

Start with data rather than guesses. The goal is a list of the mapped pages that lost traffic, measured as old URL and new URL together.

1. In Google Search Console open Performance and compare the 28 days after launch with the 28 days before.
2. Export clicks per page for both periods. If the domain changed, export from the old and the new Search Console property because each one reports only its own URLs.
3. Group the rows with the redirect map so each old URL sits with the new URL it maps to.
4. Add up the clicks for each group before launch and after launch. Flag the groups where the total fell.

Do not sort old URLs on their own by lost clicks. An old URL loses its clicks after every successful move because the traffic passes to the new URL, so that list flags working redirects as losses.

This comparison needs the redirect map from the project. Build one now from the export if you did not keep one. The [redirect map template](/learn/redirect-map-template/) gives you the columns.

Rule out outside causes at this point. Check the <a href="https://status.search.google.com/" target="_blank" rel="noopener noreferrer">Google Search Status Dashboard</a> for ranking updates near your launch date. A drop limited to migrated URLs points to the migration.

## Step 2: Find Redirect Chains and 404s

Crawl the full list of old URLs and record the status code and final destination for each. Check every result against the redirect map before acting. Kept URLs should return 200. Moved URLs should return one 301 or 308 to their mapped destination. Removed URLs should return 404 or 410.

| What the crawl shows | What it means | Fix |
|---|---|---|
| 404 or 410 on a URL the map marks as moved | Redirect missing | Add a 301 to the mapped page |
| 302 or 307 | Temporary redirect | Change to 301 or 308 |
| Two or more hops | Redirect chain | Point the first URL at the final page |
| Many old URLs to the homepage | Irrelevant redirect | Map each to a page with the same intent |
| 200 on an old URL | Kept on purpose or redirect missing | Check the map. Leave kept URLs alone. Add the 301 for moved URLs |

Google treats temporary redirects differently. Its <a href="https://developers.google.com/search/docs/crawling-indexing/301-redirects" target="_blank" rel="noopener noreferrer">redirects documentation</a> says a temporary redirect is not treated as a signal that the target should be canonical. Sending many old URLs to one unrelated page such as the homepage can be treated as a soft 404 according to Google's site move guidance.

<figure style="margin: 2rem 0;">
<svg viewBox="0 0 720 170" role="img" aria-labelledby="rc2-t rc2-d" style="width: 100%; height: auto; display: block;">
<title id="rc2-t">Redirect chain compared with a direct redirect</title>
<desc id="rc2-d">Top row: old URL redirects to an interim URL which redirects to the new page, two hops. Bottom row: old URL redirects straight to the new page, one hop.</desc>
<g font-size="14" fill="currentColor" text-anchor="middle">
<text x="10" y="45" text-anchor="start" font-weight="700">Chain</text>
<rect x="90" y="20" width="160" height="40" rx="8" fill="var(--color-rule)" opacity="0.6" />
<text x="170" y="45">/old-page.html</text>
<line x1="250" y1="40" x2="300" y2="40" stroke="currentColor" stroke-width="2" />
<rect x="300" y="20" width="160" height="40" rx="8" fill="var(--color-rule)" opacity="0.6" />
<text x="380" y="45">/old-page/</text>
<line x1="460" y1="40" x2="510" y2="40" stroke="currentColor" stroke-width="2" />
<rect x="510" y="20" width="190" height="40" rx="8" fill="var(--color-accent)" opacity="0.35" />
<text x="605" y="45">/services/new-page/</text>
<text x="10" y="125" text-anchor="start" font-weight="700">Direct</text>
<rect x="90" y="100" width="160" height="40" rx="8" fill="var(--color-rule)" opacity="0.6" />
<text x="170" y="125">/old-page.html</text>
<line x1="250" y1="120" x2="510" y2="120" stroke="var(--color-accent-2)" stroke-width="3" />
<text x="380" y="112">one 301</text>
<rect x="510" y="100" width="190" height="40" rx="8" fill="var(--color-accent)" opacity="0.35" />
<text x="605" y="125">/services/new-page/</text>
</g>
</svg>
<figcaption style="font-size: 0.85em; text-align: center;">Collapse every chain so the old URL points straight at the final page.</figcaption>
</figure>

## Step 3: Check for Lost Content

A redirect to a thinner page is still a loss. Open each old URL in the Wayback Machine or your old backups and compare it with the new page.

- Check the title tag and H1 against the old version.
- Check that the sections which answered the main queries still exist.
- Check that FAQs, tables and product details survived the move.
- Check that the page still has its images with alt text.

Restore what answered the search query. Search Console shows which queries each old page ranked for so you know which sections matter.

## Step 4: Check Canonical and Noindex Mistakes

These faults can remove pages from results even when redirects work.

- **Leftover noindex.** Staging sites often carry a noindex tag or header that ships to live. Use the URL Inspection tool in Search Console on a few key pages.
- **Wrong canonicals.** Each new page should carry a canonical that points to itself. A canonical pointing at staging, the old domain or the homepage tells Google to index something else.
- **robots.txt blocks.** Check that the live robots.txt does not still block folders from development.
- **Sitemap errors.** The sitemap should list only new indexable URLs that return 200.

The [website redesign SEO checklist](/learn/website-redesign-seo-checklist/) puts these checks on launch day so they do not ship again on your next project.

## Step 5: Fix Internal Links

Internal links that still point at old URLs force every visit through a redirect. Crawl the new site and export every internal link to a 3xx URL. Update each one to the final URL. Do the same for navigation, footers and links inside body content.

Then resubmit the sitemap in Search Console and Bing Webmaster Tools. Ask the sites that link to your most valuable old pages to update their links.

## What to Expect After the Fixes

Fixes take effect only after Google recrawls the corrected URLs. Google does not publish a recovery date for a migration that went wrong and no one can promise one.

Google's <a href="https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes" target="_blank" rel="noopener noreferrer">site move guidance</a> says visibility may fluctuate temporarily during a move and that a small to medium-sized site can take a few weeks for most pages to move. Larger sites take longer.

Google's <a href="https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops" target="_blank" rel="noopener noreferrer">guide to debugging search traffic drops</a> says rankings can fluctuate while Google recrawls and reindexes a moved site. If a drop is not recovering it points you to the site move troubleshooting steps.

Track progress the same way you found the problem. Compare clicks per mapped group each week against the pre-launch baseline. That comparison shows whether recovery is happening rather than assuming it will. Published study data on recovery times sits on our website redesign statistics page linked below.

## When to Get Help

Get help when the drop covers many pages, when redirects run at server level you cannot edit or when the cause is still unclear after Step 4.

A managed service for [SEO migration when redesigning a website](/website-redesign-seo-migration/) covers the URL comparison, the redirect fixes and a 30 day monitoring window.
