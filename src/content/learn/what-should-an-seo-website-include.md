---
title: "What Should an SEO Website Include?"
metaTitle: "What Should an SEO Website Include? | OptimisedWebsite"
metaDescription: "The essential elements every SEO-optimised website needs — from schema markup and heading hierarchy to internal linking and content depth."
h1: "What Should an SEO Website Include?"
targetKeyword: "what should an seo website include"
intent: "informational"
schemaTypes: ["Article", "FAQPage"]
relatedSlugs: ["what-is-an-seo-optimised-website", "seo-website-checklist", "schema-markup-guide"]
hubBacklink:
  anchor: "SEO website guide"
  href: "/learn/"
faqs:
  - q: "What is the minimum number of pages an SEO website needs?"
    a: "There is no fixed minimum, but most effective SEO websites have at least 15-20 pages to establish topical coverage. A five-page brochure site rarely competes against competitors with deeper content. The right number depends on your industry and the keyword data."
  - q: "Does every page need its own schema markup?"
    a: "Yes. Each page should carry schema relevant to its content type — Article for blog posts, ProfessionalService for service pages, FAQPage for FAQ sections, LocalBusiness or Organization for the homepage. Generic sitewide schema misses the specificity that search engines value."
  - q: "Should I include a blog on my SEO website?"
    a: "A blog is one way to publish supporting content, but the format matters less than the strategy. What matters is that you have informational pages targeting real search queries and linking back to your commercial pages. Whether you call it a blog, a resource centre, or a knowledge base is irrelevant to search engines."
datePublished: "2026-05-13"
dateModified: "2026-05-13"
---

An SEO-optimised website requires specific technical, structural, and content elements working together. Missing any one of these components weakens the whole system. Search engines evaluate sites holistically rather than page by page.

This guide covers the concrete elements your site needs, ordered by their impact on ranking performance. If you are planning a new build or auditing an existing site, use this as a reference for what to prioritise.

## Keyword-Mapped URL Structure

Every indexable page on the site should target a specific keyword or keyword cluster. The URL structure should reflect the site's topical hierarchy, with hub pages at the top level and supporting pages nested underneath.

For a financial adviser's website, this might look like:
- `/pensions/` — hub page covering pension advice broadly
- `/pensions/salary-sacrifice/` — specific pension type
- `/pensions/pension-drawdown/` — another specific type
- `/pensions/state-pension-age/` — informational supporting content

Each URL is short, descriptive, and contains the primary keyword for that page. Avoid parameter-heavy URLs, unnecessary folder nesting, or generic slugs like `/page-1/` or `/service-2/`.

## Strict Heading Hierarchy

Every page needs exactly one H1 tag containing the primary keyword or its closest semantic match. Below the H1, H2 tags divide the content into major sections, each addressing a distinct subtopic. H3 tags subdivide further where needed.

Search engines use heading hierarchy to understand page structure and topical coverage. Skipping levels (jumping from H1 to H3) or using multiple H1s sends confusing signals. Headings should read as a logical outline of the page's content — if someone read only your headings, they should understand what the page covers.

## Per-Page JSON-LD Schema Markup

Schema markup tells search engines what type of content a page contains and how entities on the page relate to each other. An SEO-optimised website implements schema as JSON-LD in the page head, with markup specific to each page type.

The homepage typically carries Organization or LocalBusiness schema with the company name, address, contact details, and social profiles. Service pages carry ProfessionalService or Service schema with descriptions, pricing, and area served. Article pages carry Article schema with headline, publication date, and publisher reference. FAQ sections carry FAQPage schema that can produce rich results in Google.

All schema should reference a shared `@id` for the organisation entity, creating a connected graph that search engines can follow across the site. Our [schema markup guide](/learn/schema-markup-guide/) explains how to build this graph in practice.

## Internal Linking Architecture

Internal links serve two purposes: distributing PageRank across the site and establishing topical relationships between pages.

Every page should link to its parent hub using descriptive anchor text. Hub pages should link to all their child pages. Related pages should cross-link to each other where the connection is genuinely relevant. The anchor text should describe what the destination page covers, not generic phrases.

A common pattern is the "hub and spoke" model, set out in full in our [internal linking strategy](/learn/internal-linking-strategy/) guide. The hub page covers a topic broadly and links to detailed pages on each subtopic. Each spoke page links back to the hub and to two or three related spokes. This creates a tight topical cluster that search engines can crawl efficiently.

## XML Sitemap and Robots.txt

The XML sitemap lists every page you want search engines to index, along with their last modification dates. Submit it to Google Search Console and Bing Webmaster Tools after launch.

Robots.txt controls crawler access. Block admin pages, search results pages, tag archives, and any other thin or duplicate content from being crawled. Ensure all valuable pages are accessible and that the sitemap URL is referenced in robots.txt.

## Canonical Tags on Every Page

Each page needs a `<link rel="canonical">` tag pointing to its preferred URL. This prevents duplicate content issues caused by trailing slashes, query parameters, HTTP/HTTPS variations, and www/non-www versions.

Without canonical tags, search engines may split ranking signals across multiple versions of the same page, weakening each version's ability to rank.

## Meta Titles and Descriptions

Every page needs a unique meta title under 60 characters and a meta description under 155 characters. The meta title should include the target keyword and be written to maximise click-through rate from search results. The description should summarise what the page covers and include a reason to click.

Avoid templated titles that repeat the same format across every page. Search engines devalue cookie-cutter titles, and users skip over them in results pages.

## Mobile-First Responsive Design

Google indexes the mobile version of your site first. If the mobile experience is poor — slow loading, text too small, elements overlapping, horizontal scrolling — your rankings suffer regardless of how the desktop version looks.

An SEO-optimised website uses responsive design that adapts to all screen sizes. Touch targets are large enough to tap accurately. Text is readable without zooming. No content is hidden on mobile that exists on desktop, because Google will only see the mobile version.

## Core Web Vitals Performance

Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), and Interaction to Next Paint (INP) are ranking factors. An SEO-optimised website scores well on these metrics through lightweight code, optimised images, font preloading, and minimal layout shifts.

Static site generators like Astro produce pre-rendered HTML that loads fast by default. Avoid heavy JavaScript frameworks that require client-side rendering, large CSS files that block rendering, and unoptimised images that slow LCP.

## Original Content Written for Search Intent

Every page needs original content that matches the search intent behind its target keyword. Informational keywords need explanatory content that answers the question thoroughly. Commercial keywords need comparison or evaluation content that helps the searcher make a decision. Transactional keywords need clear calls to action with trust signals like reviews, guarantees, and pricing.

Content depth matters. Pages with 300 words of generic copy do not compete against pages with 1,500 words of specific, factual information. The depth should match what the query demands — some questions need brief, direct answers, while others require detailed guides.

## Open Graph and Social Meta Tags

Open Graph tags control how your pages appear when shared on social media. Each page should have `og:title`, `og:description`, `og:image`, and `og:url` tags. Twitter card meta tags serve the same purpose for X (formerly Twitter).

These tags do not directly affect search rankings, but they improve click-through rates from social sharing, which drives traffic and can indirectly support SEO through increased engagement and backlink opportunities.

## Accessibility Fundamentals

Accessible websites tend to rank better because many accessibility requirements overlap with SEO best practices. Proper heading hierarchy, descriptive alt text on images, semantic HTML elements, and keyboard navigation all benefit both screen reader users and search engine crawlers.

An SEO-optimised website uses semantic HTML, `<nav>`, `<main>`, `<article>`, `<section>` and `<footer>`, rather than generic `<div>` elements. Skip-to-content links, ARIA labels where needed, and sufficient colour contrast round out the accessibility baseline.

Every element on this list is included as standard in our [SEO website build](/seo-web-design/), with the full scope and fixed price set out on our [pricing page](/pricing/).
