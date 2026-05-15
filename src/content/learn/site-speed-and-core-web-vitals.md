---
title: "Site Speed and Core Web Vitals"
metaTitle: "Site Speed and Core Web Vitals for SEO | Optimisation Guide"
metaDescription: "Improve Core Web Vitals for better SEO rankings. Covers LCP, CLS and INP with practical optimisation steps. Learn why static sites score perfectly."
h1: "Site Speed and Core Web Vitals for SEO"
targetKeyword: "core web vitals seo"
intent: "informational"
schemaTypes: ["Article", "FAQPage"]
relatedSlugs:
  - "how-google-ranks-websites"
  - "eeat-and-trust-signals"
  - "seo-content-writing-guide"
hubBacklink:
  anchor: "SEO website guide"
  href: "/learn/"
faqs:
  - q: "What are Core Web Vitals?"
    a: "Core Web Vitals are three metrics Google uses to measure real-user page experience: Largest Contentful Paint (loading speed), Cumulative Layout Shift (visual stability) and Interaction to Next Paint (responsiveness)."
  - q: "Do Core Web Vitals directly affect Google rankings?"
    a: "Core Web Vitals are a confirmed Google ranking factor within the page experience signals. Pages passing all three thresholds gain a ranking advantage, especially in competitive SERPs where content quality is similar."
  - q: "What is a good LCP score?"
    a: "A good LCP score is under 2.5 seconds. Scores between 2.5 and 4.0 seconds need improvement. Scores above 4.0 seconds are poor and likely hurt your rankings."
  - q: "What is a good CLS score?"
    a: "A good CLS score is under 0.1. Scores between 0.1 and 0.25 need improvement. Scores above 0.25 indicate significant layout instability that harms both user experience and rankings."
  - q: "What is a good INP score?"
    a: "A good INP score is under 200 milliseconds. Scores between 200ms and 500ms need improvement. Scores above 500ms indicate poor responsiveness that frustrates users and suppresses rankings."
  - q: "Why do static sites like Astro score perfectly on Core Web Vitals?"
    a: "Static sites ship pre-rendered HTML with zero client-side JavaScript by default. No JavaScript means instant interactivity (perfect INP), no layout shifts from dynamic content injection (perfect CLS) and fast loading from lightweight HTML files (excellent LCP)."
  - q: "How do I check my Core Web Vitals scores?"
    a: "Check Core Web Vitals in Google Search Console's Core Web Vitals report for field data, PageSpeed Insights for individual page analysis and Chrome DevTools Lighthouse for lab testing during development."
  - q: "Can I pass Core Web Vitals on WordPress?"
    a: "WordPress sites can pass Core Web Vitals but require significant optimisation: caching plugins, image compression, minimal plugins, optimised themes and often a CDN. Static sites pass by default without any of these workarounds."
datePublished: "2026-05-14"
dateModified: "2026-05-14"
---

Core Web Vitals measure how fast, stable and responsive your website feels to real users. Google uses these three metrics as ranking signals within its broader page experience assessment.

Sites that pass all three Core Web Vitals thresholds rank higher than slower competitors, especially in SERPs where content quality is closely matched. Fixing Core Web Vitals is one of the few ranking improvements you can measure objectively before and after.

## The Three Core Web Vitals Explained

Google distils page experience into three measurable metrics. Each targets a different aspect of how users perceive your site's performance.

### Largest Contentful Paint (LCP)

LCP measures how quickly the largest visible element renders on screen. The largest element is typically a hero image, heading block or above-the-fold text paragraph.

Target: under 2.5 seconds.

LCP reflects perceived loading speed. Users do not care about total page weight or number of HTTP requests. They care about seeing useful content quickly. A page that loads a visible heading in 1.2 seconds feels fast even if background resources take another 3 seconds to finish.

### Cumulative Layout Shift (CLS)

CLS measures visual stability during page load. Layout shifts occur when visible elements move position after rendering — a paragraph jumps down when an ad loads above it, or a button shifts sideways when a font file arrives.

Target: under 0.1.

Layout shifts frustrate users because they cause misclicks. A user reaching for a "Read More" link that suddenly moves 200px down and clicking a "Buy Now" button instead represents a direct usability failure.

### Interaction to Next Paint (INP)

INP measures responsiveness to user interactions. It tracks the delay between a user clicking, tapping or pressing a key and the browser visually responding.

Target: under 200 milliseconds.

INP replaced First Input Delay (FID) in March 2024. FID only measured the first interaction. INP measures responsiveness throughout the entire page session, catching slow interactions that FID missed.

## How Core Web Vitals Affect Rankings

Google confirmed Core Web Vitals as a ranking signal in June 2021. The page experience update integrates CWV with mobile-friendliness, HTTPS, safe browsing and no intrusive interstitials.

Core Web Vitals act as a tiebreaker. Two pages with equally strong content, backlinks and E-E-A-T compete on page experience. The faster, more stable page wins the higher position.

The ranking impact scales with competition. In a SERP where all top 10 results have excellent content, Core Web Vitals differences can move positions significantly. In a SERP with weak competition, strong content alone overrides poor CWV scores.

Google Search Console reports Core Web Vitals at the site level, grouping URLs into Good, Needs Improvement and Poor categories. A site with predominantly "Poor" CWV scores faces a ranking headwind across all pages.

## Why Static Sites Score Perfectly

Static site generators like Astro produce pre-rendered HTML files with zero client-side JavaScript by default. This architecture eliminates the three primary causes of Core Web Vitals failures.

### Zero JavaScript = Perfect INP

JavaScript execution is the main cause of poor INP scores. Every script that runs in the browser adds potential delay between user interactions and visual responses. React, Vue and Angular applications ship hundreds of kilobytes of JavaScript that must parse and execute before the page becomes fully interactive.

Static HTML pages respond to clicks instantly. The browser processes link clicks and form submissions natively without waiting for JavaScript frameworks to hydrate.

### No Dynamic Injection = Perfect CLS

Client-side JavaScript applications inject content after initial render. A React component that fetches data and renders a list causes layout shifts as content appears and pushes other elements around.

Static pages render their complete layout on first paint. Every element occupies its final position from the moment the HTML arrives. No content injection means no layout shifts.

### Lightweight HTML = Excellent LCP

A typical static page weighs 15-30KB of HTML. A WordPress page with plugins, theme framework and dynamic sidebar can weigh 300-500KB before images.

Smaller pages load faster. Static HTML served from a CDN edge node reaches the browser in under 500ms on most connections. The largest contentful paint (usually a heading or hero section) renders almost immediately.

### Real-World Comparison

| Metric | Static Site (Astro) | WordPress (typical) | React SPA |
|--------|-------------------|-------------------|-----------|
| LCP | 0.5-1.2s | 2.0-4.5s | 2.5-6.0s |
| CLS | 0.00 | 0.05-0.35 | 0.10-0.50 |
| INP | < 50ms | 100-400ms | 150-800ms |

## Optimising LCP

Reduce LCP by addressing the four main bottlenecks: server response time, render-blocking resources, resource load time and client-side rendering.

### Server Response Time

Serve pages from a CDN with edge caching. Cloudflare Pages and Vercel deploy static files to 200+ global edge nodes, delivering sub-100ms server response times regardless of user location.

Avoid server-side rendering for content that does not change between requests. Pre-build pages at deploy time and serve them as cached static files.

### Render-Blocking Resources

Inline critical CSS directly in the HTML `<head>`. External stylesheets block rendering until downloaded. Inlining the CSS needed for above-the-fold content eliminates this blocking step.

Load non-critical CSS asynchronously using `media="print"` with an `onload` handler that switches to `media="all"`.

Defer all JavaScript with `defer` or `async` attributes. Better still, eliminate client-side JavaScript entirely for content-focused pages.

### Image Optimisation

Use modern image formats. WebP reduces file sizes by 25-35% compared to JPEG. AVIF reduces sizes by 50% or more.

Set explicit `width` and `height` attributes on every image element. This reserves layout space before the image loads, preventing CLS.

Implement lazy loading with `loading="lazy"` on below-the-fold images. Eager-load the hero image or LCP element — lazy-loading it delays LCP.

Serve responsive images with `srcset` and `sizes` attributes. Mobile users should not download desktop-sized images.

### Font Loading

Self-host fonts rather than loading from Google Fonts. External font requests add DNS lookup, connection and download time.

Use `font-display: swap` in your `@font-face` declarations. This displays text immediately in a fallback font while the custom font downloads, preventing invisible text that delays LCP.

Preload your primary font file with `<link rel="preload" as="font" crossorigin>` in the document head.

## Optimising CLS

Layout shifts occur when the browser recalculates element positions after initial render. Eliminate shifts by reserving space for all dynamic content.

### Reserve Space for Media

Set width and height on all `<img>` and `<video>` elements. Modern browsers use these attributes to calculate aspect ratios and reserve space before the media loads.

Use CSS `aspect-ratio` for responsive containers that hold embedded content (iframes, maps, video players).

### Stabilise Font Loading

Font swaps cause layout shifts when the fallback font and custom font have different metrics. Use a font fallback with matched metrics or the `size-adjust` CSS property to minimise text reflow.

### Avoid Late-Loading Content

Do not inject banners, cookie notices or promotional bars above existing content. These elements push the page down and trigger large layout shifts. Place notification bars in fixed positions that do not displace other content.

Avoid dynamically resizing elements after load. Set fixed heights on ad containers, sidebar widgets and embedded content.

## Optimising INP

Responsiveness depends on how quickly the browser processes user interactions and paints the result. Heavy JavaScript execution blocks the main thread and delays visual responses.

### Reduce JavaScript

Remove unused JavaScript libraries. Audit your bundle with Chrome DevTools Coverage panel. Many WordPress sites load 500KB+ of JavaScript where 70% goes unused.

Split remaining JavaScript into small chunks loaded on demand. Interaction-specific code (modal dialogs, form validation) should load only when the user triggers that interaction.

### Yield to the Main Thread

Long JavaScript tasks (over 50ms) block the main thread and delay interaction responses. Break long tasks into smaller chunks using `requestIdleCallback` or `scheduler.yield()`.

Move heavy computation to Web Workers. Data processing, sorting and filtering operations do not need main thread access.

### Minimise DOM Size

Large DOM trees (over 1,500 nodes) slow down style recalculations and layout operations triggered by user interactions. Keep your DOM lean by removing unnecessary wrapper elements and avoiding deeply nested structures.

Static sites naturally produce lean DOMs. A [technical SEO setup](/services/technical-seo-setup/) built on Astro generates clean HTML without the div-heavy wrapper layers that JavaScript frameworks inject.

## Measuring Core Web Vitals

Use multiple measurement sources to get a complete picture of your site's performance.

### Field Data (Real Users)

Google Search Console's Core Web Vitals report shows real-user performance data aggregated over 28 days. This is the data Google uses for ranking decisions.

Chrome User Experience Report (CrUX) provides the same field data through BigQuery, the CrUX API and PageSpeed Insights.

### Lab Data (Testing)

PageSpeed Insights analyses individual URLs and shows both field data (from CrUX) and lab data (from Lighthouse).

Chrome DevTools Performance panel lets you simulate slow connections and CPU throttling to test worst-case performance.

WebPageTest.org provides detailed waterfall charts showing exactly which resources cause performance bottlenecks.

## Core Web Vitals and SEO Strategy

Core Web Vitals optimisation delivers compounding returns. Faster pages rank higher, attract more clicks, reduce bounce rates and increase conversions.

A page that loads in 1.2 seconds converts at roughly double the rate of one loading in 3.5 seconds. Core Web Vitals improvements affect revenue directly, beyond the indirect benefit of higher rankings.

Choose your technology stack based on performance requirements. Static sites pass Core Web Vitals by default. WordPress requires ongoing optimisation effort. Single-page applications require extensive performance engineering.

An [SEO website checklist](/learn/seo-website-checklist/) should include Core Web Vitals targets for every page. Set performance budgets during development rather than retrofitting speed improvements after launch.
