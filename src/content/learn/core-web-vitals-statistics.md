---
title: "Core Web Vitals Statistics"
metaTitle: "Core Web Vitals Statistics 2026 | Pass Rates by Device"
metaDescription: "55.6% of origins pass Core Web Vitals as of August 2026. Pass rates by device, metric, CMS and year, sourced from CrUX and the Web Almanac."
h1: "Core Web Vitals Statistics"
targetKeyword: "core web vitals statistics"
intent: "informational"
schemaTypes: ["Article", "FAQPage"]
relatedSlugs:
  - "site-speed-and-core-web-vitals"
  - "seo-website-checklist"
  - "how-google-ranks-websites"
hubBacklink:
  anchor: "SEO website guide"
  href: "/learn/"
faqs:
  - q: "What percentage of origins pass Core Web Vitals?"
    a: "55.6% of origins passed all three Core Web Vitals in the August 2026 Chrome UX Report dataset, published 8 September 2026. Individually, 68.1% passed Largest Contentful Paint, 81.5% passed Cumulative Layout Shift and 85.3% passed Interaction to Next Paint."
  - q: "Has the Core Web Vitals pass rate improved over time?"
    a: "Yes. The Web Almanac 2025 Performance chapter reports the share of sites with good Core Web Vitals on mobile rose from 32% in 2021 to 48% in 2025, and on desktop from 41% to 56% over the same period."
  - q: "When did INP replace FID as a Core Web Vital?"
    a: "Interaction to Next Paint (INP) officially replaced First Input Delay (FID) as the responsiveness Core Web Vital on 12 March 2024. In the CrUX dataset used for that switch, 48.8% of origins had good Core Web Vitals under the old FID-based scoring, against 45.6% under INP, a 3.2 percentage point drop from moving to the stricter metric."
  - q: "Which Core Web Vitals metric is hardest to pass?"
    a: "Largest Contentful Paint (LCP) is the weakest of the three in the current CrUX dataset, with a 68.1% global pass rate against 81.5% for Cumulative Layout Shift and 85.3% for Interaction to Next Paint (August 2026 data). On mobile specifically, the Web Almanac 2025 Performance chapter also found LCP the weakest metric, passing at 62% against 74% on desktop."
  - q: "Do WordPress sites pass Core Web Vitals?"
    a: "45% of WordPress sites passed all three Core Web Vitals on mobile in the Web Almanac 2025 CMS chapter, against 74% for Wix and 85% for Duda. WordPress's pass rate has risen from under 15% in January 2020 to 41% by July 2024, per the Web Almanac 2024 CMS chapter, but it still trails page-builder platforms with tighter defaults."
  - q: "How much has page weight grown?"
    a: "The median desktop home page grew from 1,208 KB in October 2014 to 2,862 KB in July 2025, and the median mobile home page from 505 KB to 2,559 KB over the same period, per the Web Almanac 2025 Page Weight chapter. Images and JavaScript are the largest components of that page weight in the 2025 dataset, at 911 KB and 632 KB respectively on the median mobile home page."
  - q: "Is passing Core Web Vitals associated with better conversion rates?"
    a: "The evidence is observational, not experimental, so it shows association rather than proof of cause. Google's Renault case study used regression on a four-month, 33-country dataset and estimated that a 1 second LCP improvement is associated with a 13% increase in conversions on Renault's landing pages when LCP is around 1 second. The older Milliseconds Make Millions study, run by 55 and Deloitte Digital and commissioned by Google, directly monitored sessions on 37 sites and found a 0.1 second speed improvement across four metrics was associated with retail consumers spending 9.2% more. Both are observational findings from specific datasets, not controlled experiments or guarantees for any other site."
datePublished: "2026-09-26"
dateModified: "2026-09-26"
citation: false
charts:
  - title: "Origins passing all three Core Web Vitals, mobile (2021-2025)"
    source: "Web Almanac 2025 Performance chapter"
    sourceUrl: "https://almanac.httparchive.org/en/2025/performance"
    date: "2021-2025 (July 2025 dataset)"
    unit: "%"
    rows:
      - label: "2021"
        value: 32
      - label: "2022"
        value: 31
      - label: "2023"
        value: 36
      - label: "2024"
        value: 44
      - label: "2025"
        value: 48
  - title: "Core Web Vitals metric pass rates (global, Aug 2026)"
    source: "CrUX release notes"
    sourceUrl: "https://developer.chrome.com/docs/crux/release-notes"
    date: "August 2026"
    unit: "%"
    rows:
      - label: "LCP"
        value: 68.1
      - label: "CLS"
        value: 81.5
      - label: "INP"
        value: 85.3
---

55.6% of origins passed all three Core Web Vitals in the August 2026 Chrome UX Report (CrUX) dataset, published 8 September 2026, according to Google's own CrUX release notes. Individually, 68.1% of origins passed Largest Contentful Paint (LCP), 81.5% passed Cumulative Layout Shift (CLS) and 85.3% passed Interaction to Next Paint (INP), the metric that replaced First Input Delay (FID) in March 2024.

This page collects pass rates by device, metric, year and content management system (2025 Web Almanac data, alongside the latest monthly CrUX snapshot), sourced directly from CrUX, the HTTP Archive's Web Almanac and Google's own case studies. Every figure below is linked to the chapter or dataset it came from, with the reporting period stated.

## What is the current Core Web Vitals pass rate?

The Chrome UX Report is Google's field dataset of real-user page loads in Chrome, and it is the dataset behind Search Console's Core Web Vitals report. Its most recent monthly release, based on August 2026 traffic and published 8 September 2026, recorded:

- **55.6%** of origins with good Core Web Vitals (all three metrics), across 18,294,881 tracked origins ([CrUX release notes](https://developer.chrome.com/docs/crux/release-notes), August 2026 dataset).
- **68.1%** with good LCP, **81.5%** with good CLS and **85.3%** with good INP, individually ([CrUX release notes](https://developer.chrome.com/docs/crux/release-notes), August 2026 dataset).

INP has the highest individual pass rate but the combined score still trails it by close to 30 percentage points because a site only counts as passing overall if it clears all three thresholds at once. LCP is the metric most sites fail on, and the one worth checking first on a slow site.

## Has the Core Web Vitals pass rate improved over time?

Yes, on both device types. Desktop gains have flattened more recently than mobile gains. The Web Almanac 2025 Performance chapter tracked the share of origins with good Core Web Vitals (all three, combined) every year since 2021, using July HTTP Archive and CrUX data each year:

| Year | Mobile | Desktop |
|------|--------|---------|
| 2021 | 32% | 41% |
| 2022 | 31% | 44% |
| 2023 | 36% | 48% |
| 2024 | 44% | 55% |
| 2025 | 48% | 56% |

Mobile gained 16 percentage points between 2021 and 2025; desktop gained 15 points over the same period. Desktop's 2024-to-2025 gain was only 1 point against mobile's 4-point gain ([Web Almanac 2025 Performance chapter, Figure 7.1](https://almanac.httparchive.org/en/2025/performance)).

Pass rates also vary by site popularity. Among the 1,000 most popular sites tracked, 51% pass on mobile and 59% on desktop; the pass rate dips to 42% mobile for the top 10,000 sites and 37% mobile for the top 100,000, before recovering for the long tail of smaller sites ([Web Almanac 2025 Performance chapter, Figure 7.2](https://almanac.httparchive.org/en/2025/performance)). Page type shows a similar pattern in the aggregate figures: home pages pass at a lower rate than secondary pages, 45% versus 56% on mobile and 47% versus 61% on desktop. The Web Almanac's authors suggest this may relate to home pages carrying more dynamic marketing content and secondary pages benefiting more often from a cached visit. The chapter presents this as a possible explanation rather than a proven cause ([Web Almanac 2025 Performance chapter, Figure 7.3](https://almanac.httparchive.org/en/2025/performance)).

## LCP, INP and CLS: how each metric performs by device

Mobile and desktop diverge sharply on individual metrics, in opposite directions depending on the metric. The Web Almanac 2025 Performance chapter's July 2025 dataset shows:

**Largest Contentful Paint** (target: 2.5 seconds or less): 74% good on desktop, 62% good on mobile ([Figure 7.7](https://almanac.httparchive.org/en/2025/performance)). LCP has the lowest mobile pass rate of the three metrics. On desktop it sits close to CLS's 72%.

**Interaction to Next Paint** (target: 200 milliseconds or less): 97% good on desktop, 77% good on mobile ([Figure 7.13](https://almanac.httparchive.org/en/2025/performance)), the widest device gap of the three metrics.

**Cumulative Layout Shift** (target: 0.1 or less): 81% good on mobile, 72% good on desktop ([Figure 7.17](https://almanac.httparchive.org/en/2025/performance)), the one metric where mobile outperforms desktop. Mobile CLS has climbed from 62% good in 2021 to 81% in 2025, a bigger five-year gain than desktop CLS made over the same window (62% to 72%) ([Figure 7.18](https://almanac.httparchive.org/en/2025/performance)).

## When did INP replace FID, and what changed?

INP officially became the third Core Web Vital, replacing First Input Delay, on 12 March 2024 ([web.dev announcement](https://web.dev/blog/inp-cwv-march-12)). Chrome fully deprecated FID as a metric on 9 September 2024, per the Web Almanac 2024 CMS chapter.

INP measures the full interaction latency of every click, tap and keypress during a visit, not just the first one. That makes it a stricter test than FID. Google's own CrUX release notes show the effect on the day of the switch: in the February 2024 dataset, 48.8% of origins had good Core Web Vitals scored with the old FID metric against 45.6% scored with INP in its place, a 3.2 percentage point drop from moving to the harder metric ([CrUX release notes](https://developer.chrome.com/docs/crux/release-notes)). Sites that scored well on FID because their first interaction was fast, but slowed down on later interactions (an infinite-scroll feed loading more items, for example) were the ones this switch caught out.

## Which CMS platforms pass Core Web Vitals?

Passing rates vary enormously by platform, and the gap has widened rather than closed in the last year. The Web Almanac 2025 CMS chapter measured the share of mobile sites on each platform passing all three Core Web Vitals, using the CrUX-based Core Web Vitals Technology Report:

| Platform | 2025 pass rate |
|----------|------|
| Duda | 85% |
| TYPO3 CMS | 79% |
| Wix | 74% (up from 55% in 2024) |
| WordPress | 45% |
| Weebly | 47% (down slightly from 2024, the only platform to decline) |

Wix gained 19 percentage points between 2024 and 2025, a 34.5% relative increase, the largest jump of the ten platforms the chapter tracked ([Web Almanac 2025 CMS chapter, Figure 12.8](https://almanac.httparchive.org/en/2025/cms)). WordPress, despite powering 64.3% of mobile sites that run a detectable CMS and 35.6% of all mobile websites tracked, remains among the lowest performers on this metric, trailing Wix by 29 percentage points in 2025.

WordPress's own trajectory has still improved substantially over the longer term: the Web Almanac 2024 CMS chapter's tracked pass rate for WordPress origins rose from under 15% in January 2020 to 41% by July 2024 ([Web Almanac 2024 CMS chapter, Figure 12.29](https://almanac.httparchive.org/en/2024/cms)). Duda, TYPO3 CMS and Wix all pass at markedly higher rates than WordPress in this dataset. A [technical SEO setup](/services/technical-seo-setup/) that limits plugin and theme variability on a self-hosted site is one available lever. The CMS-level figures above are platform-wide averages, not a controlled comparison of otherwise identical sites.

## How much has page weight grown?

Median page weight has grown substantially over the past decade, on both desktop and mobile. The Web Almanac 2025 Page Weight chapter's July 2025 dataset shows:

- Median desktop home page: 1,208 KB in October 2014 to 2,862 KB in July 2025, an increase of 136.9% ([Web Almanac 2025 Page Weight chapter, Figure 14.1](https://almanac.httparchive.org/en/2025/page-weight)).
- Median mobile home page: 505 KB in October 2014 to 2,559 KB in July 2025, an increase of 406.7% ([Figure 14.1](https://almanac.httparchive.org/en/2025/page-weight)).
- Median mobile inner page (a non-home page on the same site): 1,366 KB in May 2022 to 1,769 KB in July 2025, up 29.5%. The median desktop inner page rose 24.7% over the same period, from 1,574 KB to 1,963 KB ([Figure 14.2](https://almanac.httparchive.org/en/2025/page-weight)).
- The median home page is 45.8% heavier than the median inner page on desktop (2,862 KB versus 1,963 KB) ([Figures 14.1, 14.2 and 14.7](https://almanac.httparchive.org/en/2025/page-weight)).

Of the median mobile home page's 2,559 KB in July 2025, images make up the largest single component at 911 KB and JavaScript the second largest at 632 KB, together over half the page. Fonts (122 KB), CSS (77 KB) and HTML (22 KB) are smaller individual components, with the remainder split across other resource types not broken out separately in the source ([Figure 14.5](https://almanac.httparchive.org/en/2025/page-weight)). Heavy image and JavaScript payloads are a common route to a slow LCP and a poor INP score. A static-first build that ships minimal client-side JavaScript by default starts from a smaller baseline for both, as covered in our guide to [site speed and Core Web Vitals](/learn/site-speed-and-core-web-vitals/).

## Is passing Core Web Vitals associated with better conversion rates?

The published evidence here is observational, not a controlled experiment, so treat it as correlation from a specific dataset, not a guaranteed outcome on any given site.

Google's Renault case study analysed over 10 million landing page visits across 33 countries between December 2020 and March 2021, using linear regression to relate LCP to bounce and conversion rate on Renault's brand sites. The regression model estimated that a 1 second LCP improvement is associated with a 13% increase in conversions when LCP is around 1 second. The same model estimated that a 1 second LCP improvement is associated with up to a 14 percentage point decrease in bounce rate when the resulting LCP is under 1.6 seconds, against a smaller estimated decrease of around 5 points when the resulting LCP is still above 1.6 seconds ([web.dev case study: Renault](https://web.dev/case-studies/renault)). The source itself states these are regression-derived estimates of association, not a causal experiment or a direct comparison between two groups of pages.

An older study called Milliseconds Make Millions, run by 55 and Deloitte Digital and commissioned by Google, monitored 37 European and US mobile sites across more than 30 million sessions for 30 days at the end of 2019. It found a 0.1 second improvement across four speed metrics was associated with retail consumers spending 9.2% more and a 21.6% increase in users progressing to the form submission page on lead-generation sites ([web.dev case study: Milliseconds Make Millions](https://web.dev/case-studies/milliseconds-make-millions)). This study predates INP as a metric and used older speed metrics (First Meaningful Paint, Estimated Input Latency). Treat it as historical directional evidence, not a current Core Web Vitals benchmark.

## Method and limitations

Pass-rate and metric figures on this page come from two primary sources: Google's Chrome UX Report (CrUX), a field dataset of real Chrome user page loads collected at the origin level, and the HTTP Archive's Web Almanac, which combines CrUX field data with HTTP Archive lab crawls (Lighthouse and WebPageTest) across millions of URLs. CrUX release-note figures are origin-level (the whole domain, not one URL) and are updated monthly. Web Almanac figures cited here are from the 2025 edition (primary analysis based on July 2025 data) and the 2024 edition where a longer trend line was needed.

Limitations: CrUX and the Web Almanac measure real Chrome traffic, so results skew towards the sites and users Chrome sees and may not represent every browser's users equally. CMS pass rates reflect typical configurations of each platform in the wild, not a controlled comparison of identical sites; a well-optimised WordPress site can beat a poorly optimised Wix site. The two business-outcome case studies are single studies from before 2022 covering a limited set of brands and sites, are observational rather than experimental, and should not be read as fixed rules for what any one site will see if it improves its own scores. Where a Web Almanac chapter's own body text did not reconcile with its own published chart figures, this page uses the chart figures and recomputes percentages directly from them rather than repeating the inconsistent text.

## How to cite this page

Optimised Website, "Core Web Vitals Statistics," updated 26 September 2026. Available at: https://optimisedwebsite.com/learn/core-web-vitals-statistics/

## Download the data

[Download all figures on this page as a CSV](/downloads/core-web-vitals-statistics.csv), with each figure's source name, source link and reporting period.

If your own site's Core Web Vitals scores fall well below the pass rates above, a technical SEO setup that audits plugin, theme and script bloat site-wide is one starting point.
