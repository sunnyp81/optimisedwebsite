---
title: "Website Accessibility Statistics"
metaTitle: "Website Accessibility Statistics 2026 | OptimisedWebsite"
metaDescription: "95.9% of home pages fail WCAG checks in 2026, averaging 56.1 errors each. UK legal rules and EU deadlines, with sourced data and a CSV download."
h1: "Website Accessibility Statistics"
targetKeyword: "website accessibility statistics"
intent: "informational"
schemaTypes: ["Article", "FAQPage"]
relatedSlugs: ["what-should-an-seo-website-include", "seo-website-checklist", "core-web-vitals-statistics"]
hubBacklink:
  anchor: "SEO website guide"
  href: "/learn/"
faqs:
  - q: "How many accessibility errors does the average website have?"
    a: "56.1 detectable accessibility errors per home page on average, across the one million home pages WebAIM tested in February 2026. That is up 10.1% from 51 errors per page in the 2025 analysis. 95.9% of home pages had at least one detected WCAG 2 conformance failure, up from 94.8% in 2025."
  - q: "What are the most common website accessibility failures?"
    a: "Six failure types account for 96% of all errors WebAIM detected in February 2026: low contrast text (83.9% of home pages), missing alternative text for images (53.1%), missing form input labels (51%), empty links (46.3%), empty buttons (30.6%), and missing document-level language (13.5%). These same six types have led every WebAIM Million report for seven consecutive years."
  - q: "How many people in the UK report a disability?"
    a: "16.8 million people in the UK, 25% of the population, reported a disability in the 2023/24 Family Resources Survey run by the Department for Work and Pensions. That is up from 18% in 2002/03. Prevalence rises with age: 12% of children, 24% of working-age adults, and around 45% of adults over State Pension age reported a disability in 2023/24. This figure counts self-reported disability under the Equality Act's definition, not the number of people who have actually encountered an inaccessible website."
  - q: "What does UK law require for website accessibility?"
    a: "Section 6 of the Equality Act 2010 defines disability, and sections 20 and 29(7) place a duty on service providers, including website owners, to make reasonable adjustments; this Act covers England, Scotland and Wales, with Northern Ireland covered by its own Disability Discrimination Act 1995. Public sector websites carry an additional, technical duty under the Public Sector Bodies Accessibility Regulations 2018, which took effect on 23 September 2018 and currently set WCAG 2.2 AA conformance plus a published accessibility statement as the standard, with limited exemptions for a valid legal reason."
  - q: "When does the European Accessibility Act apply?"
    a: "The European Accessibility Act, Directive (EU) 2019/882, applies to new in-scope products placed on the market and services provided after 28 June 2025. A transitional period runs to 28 June 2030 for services still using products already lawfully in use. Member States may also choose to let self-service terminals lawfully in use before 28 June 2025 stay in service until the end of their economically useful life, up to 20 years after first entering use, and Member States may apply the Article 4(8) obligations as late as 28 June 2027."
  - q: "Is website accessibility getting better or worse?"
    a: "Both trends appear in the data, depending on the metric and the measurement method. WebAIM's error-detection method found accessibility on the top one million home pages getting worse in 2026, with WCAG failures and errors per page both rising after several years of small gains. The HTTP Archive Web Almanac's Lighthouse-based method found the median accessibility score rising slowly, from 80% in 2020 to 84% in 2024, alongside real gains in specific tests such as image alt text and colour contrast. The two methods sample different pages and score differently, so read them as separate views rather than a single trend."
datePublished: "2026-09-26"
dateModified: "2026-09-26"
---

95.9% of the top one million home pages had a detected WCAG 2 conformance failure in February 2026, averaging 56.1 errors per page, according to the WebAIM Million. In the UK, 16.8 million people, 25% of the population, reported a disability in the 2023/24 Family Resources Survey. This page collects sourced statistics on error rates, common failures, UK disability prevalence, and the legal deadlines that apply to UK and EU websites.

This page states the data period next to every figure and separates automated error-scan data from self-reported survey data, because the two measure different things. The dataset behind this page is available as a [CSV download](/downloads/website-accessibility-statistics.csv).

## How many accessibility errors does the average website have?

WebAIM's February 2026 scan of one million home pages detected 56,114,377 distinct accessibility errors, an average of 56.1 per page. That average rose 10.1% from 51 errors per page in the February 2025 analysis, reversing several years of small year-on-year improvement.

95.9% of the home pages tested had at least one detected WCAG 2 conformance failure, up from 94.8% in 2025. WebAIM attributes part of the rise to growing page complexity: the average home page carried 1,437 elements in 2026, a 14.3% increase in a single year, and the sample as a whole contained over 1.4 billion page elements. ARIA use grew even faster. WebAIM detected 133,589,803 ARIA attributes across the sample, over 133 per page on average, a 27% increase in one year and roughly six times the 2019 figure.

## What are the most common website accessibility failures?

Six failure types accounted for 96% of every error WebAIM detected in February 2026, and the same six have topped the WebAIM Million for seven consecutive years.

| Failure type | Home pages affected |
|---|---|
| Low contrast text | 83.9% |
| Missing alternative text for images | 53.1% |
| Missing form input labels | 51% |
| Empty links | 46.3% |
| Empty buttons | 30.6% |
| Missing document-level language | 13.5% |

Heading structure also carried widespread issues in the same dataset. 18.1% of home pages had more than one `<h1>` element, up from 16.3% in 2025, and 41.8% of pages skipped a heading level, such as jumping from `<h2>` to `<h4>`, up from 39% in 2025. Screen reader users often navigate a page by jumping between headings, so a missing or skipped level can disrupt that navigation. Our [technical SEO setup](/services/technical-seo-setup/) work checks heading hierarchy and document structure alongside crawlability.

## Is website accessibility getting better or worse?

The HTTP Archive Web Almanac scores accessibility differently, using Google Lighthouse's automated audit rather than WebAIM's error count, and its 2024 chapter shows gradual improvement rather than decline. The median Lighthouse accessibility score reached 84% in 2024, up from 83% in 2022 and 80% in 2020.

Individual tests improved further. 69% of images passed the Lighthouse alt-text audit in 2024, up from 59% in 2022. Colour contrast lagged behind: the Lighthouse contrast test found sufficient text colour contrast on only 29% of mobile pages and 28% of desktop pages in 2024, both up from 23% in 2022, which still means more than 70% of pages failed the check on both device types. Skip links, which let keyboard and screen reader users jump past repeated navigation, likely appeared on 24% of both desktop and mobile pages, per the Web Almanac's detection method. One trend ran the wrong way: over 50% of mobile home pages used the `role="button"` attribute on at least one element in 2024, up from 33% in 2022. The Web Almanac says this may indicate sites building custom button-like elements from `<div>` or `<span>` tags, or redundantly applying the role to native `<button>` elements.

WebAIM's error-count method and the Web Almanac's Lighthouse-score method sample different page sets and score accessibility differently, so a rising Lighthouse median and a rising WebAIM error count are not a contradiction. Treat them as two separate views of the same underlying problem rather than a single combined trend.

## How many people in the UK report a disability?

16.8 million people in the UK, 25% of the population, reported a disability in the 2023/24 Family Resources Survey, the Department for Work and Pensions' annual household survey. That share has risen from 18% in 2002/03, an increase of around seven percentage points, with most of the rise occurring in the last decade. This figure counts self-reported disability against the Equality Act's definition; it is not a direct measure of how many people encounter an inaccessible website.

Disability prevalence rises sharply with age. 12% of children, 24% of working-age adults, and around 45% of adults over State Pension age reported a disability in 2023/24. Prevalence also varies by nation: Wales (30%) and Scotland (28%) ran above the UK average, while England (23%) ran slightly below it.

## What does UK law require for website accessibility?

Section 6 of the Equality Act 2010 defines disability as a physical or mental impairment with a substantial and long-term adverse effect on someone's ability to carry out normal day-to-day activities. Sections 20 and 29(7) of the Act place a duty on service providers, a category that includes most commercial website owners, to make reasonable adjustments so disabled customers are not put at a substantial disadvantage. The Act covers England, Scotland and Wales; Northern Ireland has its own, similar duty under the Disability Discrimination Act 1995. Neither Act names websites or sets a technical standard, so what counts as a reasonable adjustment depends on the service and the cost and practicality of the fix.

Public sector bodies carry an additional, technical duty on top of the general reasonable adjustments duty. The Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018 took effect on 23 September 2018. New public sector websites had to comply by 23 September 2019, existing websites by 23 September 2020, and mobile apps by 23 June 2021. GOV.UK's guidance, last updated 30 September 2024, sets WCAG 2.2 AA conformance and a published accessibility statement as the current standard, while allowing specific, limited exemptions where a public sector body has a valid legal reason for not meeting a requirement. Our [what should an SEO website include](/learn/what-should-an-seo-website-include/) guide covers where accessibility fits alongside the other technical elements a site needs.

## What is the European Accessibility Act, and when does it apply?

The European Accessibility Act, Directive (EU) 2019/882, applies to new in-scope products placed on the EU market and services provided to consumers after 28 June 2025. Member States had to transpose the directive into national law by 28 June 2022, ahead of that application date.

A transitional period runs to 28 June 2030, during which service providers may keep providing services using products that were already lawfully in use for similar services beforehand. Member States may also choose to let self-service terminals lawfully in use before 28 June 2025 stay in service until the end of their economically useful life, up to 20 years after they first entered use, though this extension is not automatic in every Member State. Service contracts agreed before 28 June 2025 may continue unaltered for up to five years past that date. Member States may also apply the Article 4(8) obligations as late as 28 June 2027. The Act covers a defined list of products and services, including e-commerce, banking and e-book services, rather than every website in general, so scope needs checking against the directive's own list before assuming it applies.

## Method

WebAIM Million figures are quoted directly from WebAIM's published February 2026 report, based on its WAVE-powered automated scan of the home pages of the top one million sites. HTTP Archive Web Almanac figures are quoted from the 2024 accessibility chapter, based on Google Lighthouse's automated axe-core accessibility audit. UK disability figures are quoted from the House of Commons Library's briefing on the Department for Work and Pensions' Family Resources Survey 2023/24. Legal dates are quoted directly from the relevant legislation, GOV.UK guidance, and the EU's own Directive (EU) 2019/882 text on EUR-Lex. Percentage-point changes are calculated by a short compute script from the published rates, so every derived figure on this page reproduces from a cited source figure.

## Limitations

Automated scans such as WAVE and Lighthouse detect a subset of WCAG success criteria and cannot catch every accessibility barrier, such as whether alt text is meaningful rather than merely present, or whether a keyboard trap exists in custom JavaScript. Both tools also sample different, overlapping sets of pages, so their year-on-year figures are not directly comparable to each other, only within their own series. The Family Resources Survey measures self-reported disability against the Equality Act's definition, not a clinical diagnosis, and its regional and age-band breakdowns are not age-standardised.

## How to cite this page

OptimisedWebsite, "Website Accessibility Statistics," accessed [the date you viewed this page], https://optimisedwebsite.com/learn/website-accessibility-statistics/. Data sourced from WebAIM, the HTTP Archive Web Almanac, the House of Commons Library's summary of the DWP Family Resources Survey, UK legislation.gov.uk, GOV.UK, and the EU's EUR-Lex, each named next to the figures it supports above. Download the [CSV of the figures on this page](/downloads/website-accessibility-statistics.csv).
