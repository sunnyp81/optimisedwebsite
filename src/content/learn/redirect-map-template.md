---
title: "Redirect Map Template"
metaTitle: "Redirect Map Template: Free CSV With 13 Columns and a Worked Example | OptimisedWebsite"
metaDescription: "Free redirect map template as a CSV. 13 columns from old URL to test result, a worked example of 10 rows and the rules for choosing 301, consolidation or 410."
h1: "Redirect Map Template: Free CSV and a Worked Example"
targetKeyword: "redirect map template"
intent: "informational"
schemaTypes: ["Article", "FAQPage"]
relatedSlugs:
  - "website-redesign-seo-checklist"
  - "recover-rankings-after-site-migration"
  - "website-redesign-statistics"
hubBacklink:
  anchor: "SEO website guide"
  href: "/learn/"
citation: true
glance:
  points:
    - "A redirect map is a spreadsheet with one row per old URL and its intended outcome: keep, redirect to one new URL or remove."
    - "Fill it before launch from a crawl, your XML sitemap and Search Console so no URL with clicks or links is missed."
    - "Give each row one outcome: keep an unchanged URL live with 200, 301 to an equivalent page, 301 to a merged page or 404 or 410 for removed content."
    - "Test every row after launch. Kept URLs return 200, moved URLs return one 301 or 308 to the mapped page and removed URLs return 404 or 410."
  image:
    src: "/images/learn/redirect-map-template.webp"
    alt: "The redirect map template open as a table with columns old_url, new_url, action and redirect_code, filled with seven example rows"
    caption: "Own screenshot: 4 of the 13 columns of the free redirect-map-template.csv."
  action:
    label: "Download the CSV template"
    href: "/downloads/redirect-map-template.csv"
serviceCta:
  heading: "Want the redirect map built and tested for your redesign?"
  label: "Request a Build Plan"
  href: "/order/?offer=website-redesign-seo-migration"
faqs:
  - q: "What is the difference between a redirect map and a sitemap?"
    a: "A sitemap lists the URLs you want indexed on the live site. A redirect map pairs old URLs with new ones so the server knows where to send each request. You need both in a migration."
  - q: "Should every old URL be redirected?"
    a: "No. Redirect URLs that have an equivalent page. Let content that was removed on purpose return 404 or 410. Google warns that sending many old URLs to one unrelated page such as the homepage can be treated as a soft 404."
  - q: "Can I use one rule instead of hundreds of rows?"
    a: "Yes when URLs change in a pattern. A rule such as removing .html from every path can replace many rows. Keep the rows in the map anyway so each one can be tested."
  - q: "Which redirect code should the map use?"
    a: "Use 301 or 308 for permanent moves. Google recommends permanent server-side redirects where possible."
datePublished: "2026-11-19"
dateModified: "2026-11-19"
---

A redirect map template is a spreadsheet that pairs every old URL with the new URL it should redirect to.

Download the free <a href="/downloads/redirect-map-template.csv" download>redirect map template CSV</a>. It has 13 columns and 10 example rows. Open it in Google Sheets or Excel. Replace the example rows with your own crawl.

## Columns to Include

Each column answers one question about the old URL. The first six describe what you are moving. The next five record the decision. The last two prove it worked.

| Column | What goes in it |
|---|---|
| old_url | Full old URL including protocol |
| old_status | Status code on the old site before launch |
| priority | High, Medium or Low from clicks, links and enquiries |
| clicks_12m | Search Console clicks over the last 12 months |
| referring_domains | Sites linking to the URL from your backlink tool |
| old_title | Title tag of the old page |
| new_url | The single page that replaces it, blank if removed |
| action | Redirect, Keep or Remove |
| match_type | Exact, Equivalent, Consolidated or None |
| redirect_code | 301, 308, 404 or 410 |
| notes | Why the match was chosen |
| test_status | Status and final URL found after launch |
| tested_on | Date of the test |

The clicks_12m and referring_domains columns set the priority. A page with clicks or links needs a careful match. A page with neither can still redirect but deserves less review time. The same columns work after launch too: they are the first tool to [recover rankings after a site migration](/learn/recover-rankings-after-site-migration/) that went live without a map.

<figure style="margin: 2rem 0;">
<svg viewBox="0 0 720 250" role="img" aria-labelledby="rm-t rm-d" style="width: 100%; height: auto; display: block;">
<title id="rm-t">How to choose the outcome for each old URL</title>
<desc id="rm-d">Decision flow. Is the URL unchanged on the new site? Keep it live with HTTP 200 and no redirect. Does an equivalent page exist? Yes: 301 redirect, match type exact or equivalent. Was the content merged into another page? Yes: 301 to the merged page, match type consolidated. Otherwise the content was removed on purpose: 404 or 410.</desc>
<g font-size="13" fill="currentColor" text-anchor="middle">
<rect x="250" y="10" width="220" height="44" rx="10" fill="var(--color-accent-2)" opacity="0.15" />
<text x="360" y="37" font-weight="700">Old URL from the crawl</text>
<line x1="90" y1="54" x2="630" y2="54" stroke="currentColor" stroke-width="2" />
<line x1="90" y1="54" x2="90" y2="84" stroke="currentColor" stroke-width="2" />
<rect x="10" y="84" width="160" height="60" rx="10" fill="var(--color-rule)" opacity="0.6" />
<text x="90" y="110">URL unchanged</text>
<text x="90" y="130">on the new site?</text>
<line x1="90" y1="144" x2="90" y2="174" stroke="currentColor" stroke-width="2" />
<rect x="10" y="174" width="160" height="60" rx="10" fill="var(--color-accent)" opacity="0.35" />
<text x="90" y="200" font-weight="700">Keep</text>
<text x="90" y="220">200, no redirect</text>
<line x1="270" y1="54" x2="270" y2="84" stroke="currentColor" stroke-width="2" />
<rect x="190" y="84" width="160" height="60" rx="10" fill="var(--color-rule)" opacity="0.6" />
<text x="270" y="110">Equivalent page</text>
<text x="270" y="130">exists?</text>
<line x1="270" y1="144" x2="270" y2="174" stroke="currentColor" stroke-width="2" />
<rect x="190" y="174" width="160" height="60" rx="10" fill="var(--color-accent)" opacity="0.35" />
<text x="270" y="200" font-weight="700">301 redirect</text>
<text x="270" y="220">Exact or Equivalent</text>
<line x1="450" y1="54" x2="450" y2="84" stroke="currentColor" stroke-width="2" />
<rect x="370" y="84" width="160" height="60" rx="10" fill="var(--color-rule)" opacity="0.6" />
<text x="450" y="110">Content merged</text>
<text x="450" y="130">into another page?</text>
<line x1="450" y1="144" x2="450" y2="174" stroke="currentColor" stroke-width="2" />
<rect x="370" y="174" width="160" height="60" rx="10" fill="var(--color-accent)" opacity="0.35" />
<text x="450" y="200" font-weight="700">301 to merged page</text>
<text x="450" y="220">Consolidated</text>
<line x1="630" y1="54" x2="630" y2="84" stroke="currentColor" stroke-width="2" />
<rect x="550" y="84" width="160" height="60" rx="10" fill="var(--color-rule)" opacity="0.6" />
<text x="630" y="110">Removed on purpose</text>
<text x="630" y="130">with no equivalent?</text>
<line x1="630" y1="144" x2="630" y2="174" stroke="currentColor" stroke-width="2" />
<rect x="550" y="174" width="160" height="60" rx="10" fill="var(--color-rule)" opacity="0.9" />
<text x="630" y="200" font-weight="700">404 or 410</text>
<text x="630" y="220">None</text>
</g>
</svg>
<figcaption style="font-size: 0.85em; text-align: center;">Every row ends in one of four outcomes. The action and match type columns record which.</figcaption>
</figure>

## Worked Example: 10 Rows

The rows below come from an imaginary plumbing firm moving from an old site to a new structure on the same domain. They show each match type. The clicks and links columns are left blank in the download for your own data.

| Old URL | New URL | Match type | Code |
|---|---|---|---|
| /index.php | / | Exact | 301 |
| /boiler-repair.html | /services/boiler-repair/ | Exact | 301 |
| /boiler-servicing.html | /services/boiler-servicing/ | Consolidated | 301 |
| /annual-boiler-service.html | /services/boiler-servicing/ | Consolidated | 301 |
| /blog/2019/05/how-to-bleed-a-radiator/ | /guides/bleed-a-radiator/ | Exact | 301 |
| /areas/guildford.htm | /areas/guildford/ | Exact | 301 |
| /about-us.html | /about/ | Exact | 301 |
| /contact-us.php | /contact/ | Exact | 301 |
| /gallery.html | /projects/ | Equivalent | 301 |
| /summer-offer-2021.html | none | None | 410 |

Two old service pages merge into one new page in rows 3 and 4. That is a fair consolidation because both pages answered the same question. The expired offer in row 10 has no equivalent so it returns 410 rather than a redirect to the homepage.

## How to Fill the Template

1. **Collect old URLs.** Crawl the live site. Add URLs from the XML sitemap, Search Console and analytics so orphan pages are included.
2. **Add the data columns.** Paste 12 months of clicks per page from Search Console. Add referring domains from your backlink tool.
3. **Set the priority.** Mark pages with clicks, links or enquiries as High and review them first.
4. **Choose one new URL per row.** Pick the page that answers the same question. Never chain one old URL to another old URL.
5. **Turn the map into server rules.** Your developer converts the rows into redirect rules for the server, CDN or CMS.
6. **Test before and after launch.** Run the old URLs against staging and again on the live site. Kept URLs should return 200, moved URLs one 301 or 308 to the mapped URL and removed URLs 404 or 410. Record the result in test_status and tested_on.

This template is step 5 of a wider [website redesign SEO checklist](/learn/website-redesign-seo-checklist/) that also covers staging and the first 30 days after launch.

## Rules That Keep the Map Clean

Four rules keep the map clean.

- One old URL maps to one new URL.
- No row points at a URL that itself redirects.
- New URLs in the map return 200 and carry a canonical that points to themselves.
- Internal links on the new site point at the new URLs directly rather than through the map.

Google's <a href="https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes" target="_blank" rel="noopener noreferrer">site move documentation</a> backs these rules. It recommends permanent redirects such as 301 and 308 and advises keeping them for as long as possible and generally at least 1 year. It warns that redirecting many old URLs to one irrelevant page such as the homepage can be treated as a soft 404.

## When the Map Gets Too Big

A site with hundreds of URLs and several years of backlinks takes days to map well. If the map feeds a full redesign the risk sits in the match decisions rather than in the spreadsheet.

That work is the core of [SEO migration when redesigning a website](/website-redesign-seo-migration/): the map, staging tests and post-launch checks done as one project.
