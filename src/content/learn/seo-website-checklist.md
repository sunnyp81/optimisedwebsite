---
title: "SEO Website Checklist"
metaTitle: "SEO Website Checklist: 30+ Points to Audit Before Launch | OptimisedWebsite"
metaDescription: "Complete checklist for auditing an SEO-optimised website before launch. Covers technical setup, content quality, schema markup, and performance benchmarks."
h1: "SEO Website Checklist: Audit Before You Launch"
targetKeyword: "seo website checklist"
intent: "informational"
schemaTypes: ["Article", "FAQPage"]
relatedSlugs: ["what-should-an-seo-website-include", "schema-markup-guide", "internal-linking-strategy"]
hubBacklink:
  anchor: "SEO website guide"
  href: "/learn/"
faqs:
  - q: "When should I run this checklist?"
    a: "Run through the full checklist twice: once during the build process (to catch issues early) and once immediately before launch. After launch, re-audit quarterly to catch regressions from content updates, plugin changes, or platform migrations."
  - q: "What is the most commonly missed item on this checklist?"
    a: "Internal linking. Most websites have some internal links in the navigation, but contextual links within the body content — connecting related pages with descriptive anchor text — are frequently overlooked. This is one of the highest-impact, lowest-effort improvements you can make."
  - q: "Do I need to score 100 on PageSpeed Insights?"
    a: "No. Aim for 90+ on mobile. A score of 100 often requires sacrificing functionality that users need. Focus on passing Core Web Vitals (LCP under 2.5 seconds, CLS under 0.1, INP under 200ms) rather than chasing a perfect score."
  - q: "Should I use a paid SEO audit tool or this manual checklist?"
    a: "Both. Automated tools like Screaming Frog or Sitebulb catch technical issues at scale (broken links, missing alt text, duplicate titles). This checklist covers strategic elements that automated tools miss, such as content quality, schema relevance, and topical coverage."
datePublished: "2026-05-13"
dateModified: "2026-05-13"
---

This checklist covers every element an SEO-optimised website needs before going live. Each item directly affects ranking performance, and missing even a few can undermine the entire build. Work through it systematically during your build and again before launch.

## Technical Foundation

### Canonical URLs
Every page must have a `<link rel="canonical">` tag in the `<head>` pointing to its preferred URL. Check that trailing slashes are consistent (either every URL has one or none do). Verify that HTTP redirects to HTTPS and that the www/non-www version redirects to the canonical version.

Test by viewing page source on five representative pages. The canonical URL should match the URL in the browser's address bar exactly.

### XML Sitemap
The sitemap must list every indexable page with accurate `<lastmod>` dates. It should exclude noindexed pages, redirected URLs, and admin pages.

Submit the sitemap to Google Search Console and Bing Webmaster Tools. Verify that the page count in the sitemap matches the number of pages you expect to be indexed.

### Robots.txt
Robots.txt should allow crawling of all valuable pages and block admin areas, search results pages, tag/category archives (if they duplicate content), and staging environments.

Verify the sitemap URL is referenced in robots.txt with a `Sitemap:` directive. Test with Google's robots.txt tester in Search Console.

### HTTPS and Security
The entire site must load over HTTPS with a valid SSL certificate. Mixed content warnings (HTTP resources loaded on HTTPS pages) must be resolved. HTTP URLs must 301 redirect to their HTTPS equivalents.

### Redirect Chain Audit
Check for redirect chains (URL A redirects to URL B, which redirects to URL C). Each chain wastes crawl budget and dilutes link equity. Every redirect should point directly to the final destination URL.

## On-Page SEO

### Meta Titles
Every page needs a unique meta title under 60 characters. The title should include the target keyword and be written to maximise click-through rate. Avoid templated titles that repeat the same format across the site.

Check for duplicates across the entire site. No two pages should share the same meta title.

### Meta Descriptions
Every page needs a unique meta description under 155 characters. The description should summarise what the page covers and give searchers a reason to click. Include the target keyword or a close variant naturally.

### Heading Hierarchy
Each page must have exactly one H1 tag containing the primary keyword. H2 tags divide content into major sections. H3 tags subdivide further where needed. No heading levels should be skipped (H1 followed directly by H3 is incorrect).

Review every page's heading structure. If the headings alone do not form a coherent outline of the page's content, the structure needs revision.

### Content Quality and Depth
Each page must contain original content that matches the search intent behind its target keyword. Verify that no two pages target the same keyword (cannibalisation) and that every page provides sufficient depth to satisfy user intent.

Check word counts against competing pages that currently rank for your target keywords. If the top five results average 1,500 words and your page has 400 words, you are unlikely to compete.

### Image Optimisation
All images must have descriptive alt text that aids accessibility and provides context to search engines. Images should be compressed and served in modern formats (WebP or AVIF where browser support allows). Explicit width and height attributes prevent layout shifts.

### Internal Links
Every page must link to its parent hub page and to two or three related pages within its topical cluster, following a deliberate [internal linking strategy](/learn/internal-linking-strategy/). Anchor text should be descriptive and keyword-relevant, not generic ("click here", "read more").

Check for orphan pages — pages with no internal links pointing to them. Every indexable page should be reachable through at least one contextual internal link.

## Schema Markup

### Organization/LocalBusiness
The homepage must carry Organization or LocalBusiness schema with the company name, URL, logo, contact details, and social profile links. Use a consistent `@id` value that other pages can reference.

### Per-Page Schema
Each page type needs appropriate schema:
- Service pages: ProfessionalService or Service with provider, area served, and pricing
- Article pages: Article with headline, dates, publisher reference
- FAQ sections: FAQPage with matching visible Q&A content
- Hub pages: CollectionPage with ItemList referencing child pages

### BreadcrumbList
Every page should carry BreadcrumbList schema matching the visible breadcrumb navigation. The list should start from the homepage and include every level of the hierarchy.

### Validation
Test representative pages with Google's Rich Results Test and Schema Markup Validator. Fix all errors. Review warnings and address any that indicate missing recommended properties. Our [schema markup guide](/learn/schema-markup-guide/) walks through each type in detail.

## Performance

### Core Web Vitals
Test with Google PageSpeed Insights on mobile. Target benchmarks:
- Largest Contentful Paint (LCP): under 2.5 seconds
- Cumulative Layout Shift (CLS): under 0.1
- Interaction to Next Paint (INP): under 200 milliseconds

### Page Weight
Total page weight should be under 1MB for text-heavy pages. Minimise JavaScript, compress CSS, and lazy-load images below the fold.

### Font Loading
Web fonts should be preloaded or use `font-display: swap` to prevent invisible text during loading. Limit custom fonts to two families maximum.

## Accessibility

### Keyboard Navigation
Verify that all interactive elements (links, buttons, forms) are accessible via keyboard. Tab order should follow the visual layout. A "skip to content" link should be the first focusable element.

### Colour Contrast
Text must meet WCAG AA contrast ratios: 4.5:1 for normal text, 3:1 for large text. Test with a browser extension or online contrast checker.

### Semantic HTML
Pages should use semantic elements (`<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`) rather than generic `<div>` wrappers. ARIA labels should supplement, not replace, semantic structure.

## Pre-Launch Final Checks

### Mobile Responsiveness
Test every page template on mobile, tablet, and desktop viewports. Text should be readable without zooming. Touch targets should be large enough to tap accurately. No horizontal scrolling.

### Open Graph Tags
Verify `og:title`, `og:description`, `og:image`, and `og:url` tags on every page. Test social sharing previews using Facebook's Sharing Debugger and Twitter's Card Validator.

### Analytics Setup
Google Analytics (GA4) or a privacy-focused alternative should be installed and verified as tracking pageviews. Google Search Console should be connected and the sitemap submitted.

### 404 Page
A custom 404 page should exist with navigation links and a search function (if applicable). Users who reach a dead URL should be guided back into the site, not stranded.

### Legal Pages
Privacy policy, cookie policy, and terms of service pages should be present and linked from the footer. These are required for Google AdSense eligibility and build user trust.

## Post-Launch Actions

Within the first 48 hours after launch:
1. Submit the sitemap to Google Search Console and Bing Webmaster Tools
2. Request indexing for the homepage and top five pages
3. Verify that robots.txt is accessible and correctly configured
4. Test five representative URLs with the Rich Results Test
5. Run a full-site crawl with Screaming Frog or Sitebulb to catch any issues the manual review missed
6. Set up Search Console alerts for crawl errors and indexing issues

If running this checklist reveals more gaps than you want to fix yourself, our [SEO website build](/seo-web-design/) delivers a site that passes every point above before handover.
