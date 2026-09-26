---
title: "Schema Markup Statistics"
metaTitle: "Schema Markup Statistics 2025-2026 | OptimisedWebsite"
metaDescription: "50% of homepages use structured data in 2025, JSON-LD leads at 43%, and Google has restricted FAQ and HowTo rich results since 2023. Sourced data."
h1: "Schema Markup Statistics"
targetKeyword: "schema markup statistics"
intent: "informational"
schemaTypes: ["Article", "FAQPage"]
relatedSlugs: ["schema-markup-guide", "what-should-an-seo-website-include", "seo-website-checklist"]
hubBacklink:
  anchor: "SEO website guide"
  href: "/learn/"
faqs:
  - q: "What percentage of websites use schema markup?"
    a: "This page treats schema markup and structured data as the same thing, since schema markup is the vocabulary most structured data on the web uses. This depends on what is measured. Among crawled homepages, 50% carried structured data of some kind on both desktop and mobile in 2025, up from 48% (desktop) and 49% (mobile) in 2024, according to the HTTP Archive Web Almanac. Among the sample of websites W3Techs tracks, which samples a site's homepage and a few other pages rather than crawling every page, 55.7% show JSON-LD somewhere on the site as of 26 September 2026, and 20.2% show no detected structured data format."
  - q: "Is JSON-LD more popular than Microdata or RDFa?"
    a: "Yes in both datasets reviewed here. W3Techs found JSON-LD on 55.7% of its tracked websites against 36.8% for RDFa and 21.3% for Microdata on 26 September 2026. On homepages specifically, the HTTP Archive Web Almanac found JSON-LD on 43% of pages in 2025 against 17% for Microdata (desktop) and 1% for RDFa. Google recommends JSON-LD because it sits in a separate script tag and does not need to be embedded in the visible HTML."
  - q: "Which schema types are most common?"
    a: "WebSite and SearchAction are the two most-used homepage types, appearing on 36-37% and 28% of homepages respectively in 2025. Organization overtook WebPage for the first time in the 2025 data, reaching 26.74% of desktop homepages. On inner pages, ListItem and BreadcrumbList lead, each appearing on 27-29% of pages."
  - q: "Did Google's FAQ and HowTo rich result changes reduce schema adoption?"
    a: "Desktop FAQPage markup rose from 0.2% in 2022 to 0.6% in 2024, the latest year the Web Almanac has analysed for this schema type, even after Google restricted FAQ rich results to authoritative government and health sites in August 2023 and removed HowTo rich results entirely by 13 to 14 September 2023. Google went on to deprecate FAQ rich results for every remaining site from 7 May 2026. This is an adoption count, not a causal test, and no published Web Almanac chapter yet covers FAQPage adoption after the May 2026 change."
  - q: "Does WordPress affect schema markup adoption figures?"
    a: "WordPress runs 40.2% of the websites W3Techs tracks as of 26 September 2026. Popular WordPress SEO plugins offer built-in options to generate Organization, WebSite, Article and BreadcrumbList schema without hand-coded JSON-LD, though some need short setup steps such as site representation details or turning on breadcrumbs. The adoption data does not break figures down by CMS, so this plugin behaviour is a plausible contributor to those types' popularity, not a measured link."
  - q: "Does schema markup improve click-through rate?"
    a: "No controlled study found in the sources reviewed for this page isolates schema markup's effect on click-through rate. Google has published case studies where sites added VideoObject markup alongside other technical fixes and saw large increases in video clicks, but video volume and indexing fixes changed at the same time, so schema cannot be credited alone. Treat any CTR claim tied to schema markup as observational, not proven causal."
datePublished: "2026-09-26"
dateModified: "2026-09-26"
citation: false
charts:
  - title: "Structured data format share on homepages (2025)"
    source: "HTTP Archive Web Almanac"
    sourceUrl: "https://almanac.httparchive.org/en/2025/seo"
    date: "2025"
    unit: "%"
    rows:
      - label: "JSON-LD"
        value: 43.0
      - label: "Microdata"
        value: 17.0
      - label: "RDFa"
        value: 1.0
  - title: "Homepages with any structured data (desktop)"
    source: "HTTP Archive Web Almanac"
    sourceUrl: "https://almanac.httparchive.org/en/2025/seo"
    date: "2024 vs 2025"
    unit: "%"
    rows:
      - label: "2024"
        value: 48.0
      - label: "2025"
        value: 50.0
---

50% of homepages carried structured data in 2025, up from 48% on desktop and 49% on mobile in 2024, according to the HTTP Archive Web Almanac published 15 January 2026. JSON-LD is the leading format at 43% of homepages. Google has restricted or removed FAQ and HowTo rich results since 2023, and FAQPage markup use still grew through the latest year the Web Almanac has measured.

This page collects sourced structured data statistics: overall adoption, format share, schema type breakdown, rich result eligibility changes, and the plausible CMS effect on adoption. Every figure below carries its source and period. The dataset behind this page is available as a [CSV download](/downloads/schema-markup-statistics.csv).

## How many websites use structured data?

Homepage structured data adoption reached 50% on desktop and 50% on mobile in 2025. That is up 2 percentage points on desktop and 1 percentage point on mobile from 2024's 48% and 49%, per the [HTTP Archive Web Almanac](https://almanac.httparchive.org/en/2025/seo) (published 15 January 2026, updated 9 June 2026).

W3Techs figures run on a different method. It samples a website's homepage and a few other pages and counts a format as used if it appears on any of the pages it visits, so its numbers are not directly comparable to HTTP Archive's per-page crawl figures. On 26 September 2026, W3Techs recorded 20.2% of its tracked websites with no detected structured data format.

## Is JSON-LD the leading structured data format?

On homepages, JSON-LD rose from 41% (desktop) and 40% (mobile) in 2024 to 43% on both in 2025, a gain of 2 to 3 percentage points in one year. Microdata dropped by 1 percentage point on both desktop and mobile over the same period, reaching 17% desktop and 16% mobile. Homepage RDFa and Microformats2 stayed marginal, at 1% and 0.14% respectively in 2025.

The 2024 HTTP Archive structured data chapter's top-line adoption section states JSON-LD use at 34% of pages in 2022 rising to 41% in 2024, a 7 percentage point gain and 20.6% relative growth on those two figures. The same chapter also states 37% for JSON-LD in 2024 in one of its year-on-year charts. The chapter labels its 34%-to-41% figures as its overall adoption rates and its 37% figure as part of a separate year-on-year device chart, but does not say in the text whether the two series draw on the same underlying crawl. This page reports both figures as the chapter states them.

On the websites W3Techs tracks, JSON-LD sits at 55.7%, RDFa at 36.8%, Microdata at 21.3%, and Open Graph at 72.2% as of 26 September 2026. W3Techs does not publish the technical reason its RDFa figure runs well above the RDFa share HTTP Archive measures on homepages, so this page reports both figures without explaining the gap.

JSON-LD use on inner pages lags homepages slightly, reaching 39% of desktop inner pages and 37% of mobile inner pages in 2025 against 43% on homepages. Microdata runs the other way: 19% on inner pages against 17% (desktop) and 16% (mobile) on homepages. This gap may reflect more direct SEO attention on homepages and CMS-templated markup on inner pages, though the adoption data alone does not test that explanation.

## Which schema types are most common?

WebSite and SearchAction remain the two most-used homepage types, unchanged since 2022. WebSite appeared on 36% of mobile homepages in 2025, up from 35% in 2024 and 30% in 2022. SearchAction held at 28% on both desktop and mobile in 2025.

Organization overtook WebPage for the first time in the 2025 dataset, reaching 26.74% of desktop homepages against WebPage's 25%.

On inner pages, ListItem and BreadcrumbList lead at 27 to 29% each. ListItem usage on mobile inner pages fell, from 30% in 2024 to 27% in 2025, a 3 percentage point drop.

A separate 2024 HTTP Archive page sample (all mobile pages, not homepages only) gives further context on these types outside the homepage: WebSite led at 12.73%, Organization at 7.16%, LocalBusiness at 3.97%, BreadcrumbList at 5.66%, ItemList at 2.44%, WebPage at 1.49%, BlogPosting at 1.40%, Product at 0.77%, and Article at 0.18%. VideoObject appeared on only 0.9% of pages in 2024, a small share of the wider page sample this figure is drawn from. Our [schema markup guide](/learn/schema-markup-guide/) covers how to add these types without breaking Google's structured data policies.

## Has Google's FAQ and HowTo rich result crackdown reduced adoption?

Google restricted FAQ rich results to well-known, authoritative government and health websites in August 2023, saying the feature would no longer be shown regularly for other sites. Google removed HowTo rich results entirely, on both desktop and mobile, by 13 to 14 September 2023. Google then deprecated the FAQ rich result feature for every remaining site, effective 7 May 2026, and removed the supporting documentation on 15 June 2026.

Adoption did not collapse alongside the 2023 restriction. FAQPage markup on desktop pages rose from 0.2% in 2022 to 0.6% in 2024, a threefold increase, in the same HTTP Archive chapter that reports the format-share figures above. HowTo markup stayed below 1% on both desktop and mobile throughout, having never reached high adoption before its removal. No published Web Almanac chapter yet covers FAQPage adoption after the May 2026 full deprecation, so this page cannot yet say whether that later change moved adoption.

This is an observational pattern from adoption counts alone, not a causal test. Our [schema markup service](/services/schema-markup/) builds FAQPage and the other types covered here as part of an entity-linked schema graph, independent of which rich results Google currently displays.

## Does the CMS someone uses affect their schema markup?

WordPress runs 40.2% of the websites W3Techs tracks as of 26 September 2026. Popular WordPress SEO plugins offer built-in options to generate Organization, WebSite, Article and BreadcrumbList schema without the site owner hand-coding JSON-LD, though several of these need short setup steps, such as entering site representation details or turning on breadcrumbs, rather than working with zero configuration.

That plugin behaviour is a plausible contributor to why those types appear among the most common in the homepage and inner-page figures above. The source data does not break adoption down by CMS, so this is an inference from adoption patterns, not a measured causal test.

## Is there credible evidence schema markup improves click-through rate?

No controlled study in the sources reviewed for this page isolates schema markup's effect on click-through rate. Google has published two case studies where sites added VideoObject markup: [Vidio](https://developers.google.com/search/case-studies/vidio-case-study) saw roughly 3x video impressions and close to 2x video clicks between Q1 2022 and Q1 2023, and [Italiaonline](https://developers.google.com/search/case-studies/cross-regional-video-seo-case-study) reported an 841% increase in video clicks alongside an 85% drop in video indexing errors.

Both case studies bundled schema markup with other technical SEO fixes and, in Vidio's case, a roughly 30% rise in video volume over the same period. Neither isolates structured data as the sole cause. Treat both only as cases where higher video visibility was reported alongside schema and other technical changes, not proof that schema alone drives clicks.

## Method

Every figure on this page is quoted or computed directly from the publisher named next to it: the HTTP Archive Web Almanac (2024 and 2025 editions), W3Techs, and Google Search Central's own changelog and case studies. Percentage-point changes and relative growth figures are calculated by a short compute script from the raw source percentages, so every derived number on this page reproduces from published source figures.

## Limitations

The HTTP Archive homepage figures (2025 chapter) and the broader page-sample figures (2024 chapter) come from different crawl samples and cannot be merged into one time series; each is labelled with its population above. The 2024 chapter itself states two different JSON-LD figures for 2024 (41% in its top-line adoption prose, 37% in one of its year-on-year charts) without stating whether they share a page sample; this page reports both figures rather than picking one silently. W3Techs figures are a live daily snapshot of a tracked website sample, not a fixed historical dataset, so its 26 September 2026 figures will move day to day, and its per-site method is not directly comparable to HTTP Archive's per-page method. The August 2023 FAQ restriction is confirmed directly in Google's own blog post and in its later changelog entries. No source in this review isolates schema markup as the sole cause of a click-through or ranking change.

## How to cite this page

OptimisedWebsite, "Schema Markup Statistics," accessed [the date you viewed this page], https://optimisedwebsite.com/learn/schema-markup-statistics/. Data sourced from the HTTP Archive Web Almanac, W3Techs and Google Search Central, each named next to the figures it supports above. Download the [CSV of the figures on this page](/downloads/schema-markup-statistics.csv).
