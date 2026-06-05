---
title: "Schema Markup Guide for SEO Websites"
metaTitle: "Schema Markup Guide: JSON-LD for SEO Websites | OptimisedWebsite"
metaDescription: "Practical guide to implementing JSON-LD schema markup on your SEO website. Covers Organization, Article, FAQPage, Service, and BreadcrumbList types."
h1: "Schema Markup Guide: JSON-LD for SEO Websites"
targetKeyword: "schema markup guide"
intent: "informational"
schemaTypes: ["Article", "FAQPage"]
relatedSlugs: ["what-should-an-seo-website-include", "seo-website-checklist", "topical-authority-explained"]
hubBacklink:
  anchor: "SEO website guide"
  href: "/learn/"
faqs:
  - q: "Does schema markup directly improve rankings?"
    a: "Schema markup does not provide a direct ranking boost. However, it enables rich results (star ratings, FAQ dropdowns, breadcrumb trails) that increase click-through rates from search results. Higher CTR sends positive engagement signals to Google, which can indirectly improve rankings."
  - q: "Should I use JSON-LD or Microdata for schema?"
    a: "Google recommends JSON-LD. It is cleaner to implement because it sits in a script tag rather than being embedded in the HTML markup. JSON-LD is also easier to maintain and less prone to errors when the page design changes."
  - q: "How many schema types can I put on one page?"
    a: "As many as are relevant. A service page might carry Organization, ProfessionalService, FAQPage, and BreadcrumbList schema simultaneously. The key is that each schema type accurately represents content that exists on the page. Do not add schema for content that is not visible to users."
  - q: "What happens if my schema markup has errors?"
    a: "Errors in schema markup can prevent rich results from appearing and may confuse search engines about your page content. Use Google's Rich Results Test and Schema Markup Validator to check your markup. Fix errors promptly — invalid schema is worse than no schema."
datePublished: "2026-05-13"
dateModified: "2026-05-13"
---

Schema markup is structured data that tells search engines what your page content means, not just what it says. An SEO-optimised website uses JSON-LD schema on every page to communicate entity types, relationships, and attributes in a format that Google, Bing, and other search engines can parse directly.

This guide covers the schema types most relevant to business and content websites, with practical implementation details for each.

## What Schema Markup Does

HTML tells a browser how to display content. Schema markup tells a search engine what that content represents. A paragraph of text might describe a business, but without schema, Google must interpret the text to extract structured information. Schema removes the guesswork.

Two things happen when Google processes your structured data. First, your pages become eligible for rich results — enhanced search listings with star ratings, FAQ dropdowns, breadcrumb trails, price ranges, and other visual elements that increase click-through rates. Second, Google's Knowledge Graph can incorporate your entity data, strengthening your site's association with specific topics, services, and locations.

## JSON-LD: The Recommended Format

Google explicitly recommends JSON-LD (JavaScript Object Notation for Linked Data) as the preferred schema format. JSON-LD markup sits in a `<script type="application/ld+json">` tag, separate from the visible HTML. This separation has practical advantages.

You can add, modify, or remove schema without touching the page layout. Content management systems and static site generators can inject schema programmatically. Developers working on the front end do not need to coordinate with SEO teams about markup placement.

The alternative formats — Microdata and RDFa — embed structured data directly in the HTML tags. While Google supports these formats, they create maintenance headaches because changes to the page design can inadvertently break the schema markup.

## Organization Schema

Organization schema identifies your business entity across the site. It typically appears on the homepage and is referenced by other pages through an `@id` identifier.

A complete Organization schema includes the company name, URL, logo, contact information, social media profiles, and a description of the business. The `@id` value (commonly `https://yourdomain.com/#organization`) acts as a persistent reference that other schema nodes can point to.

For local businesses, use LocalBusiness or a more specific subtype (Plumber, Restaurant, LegalService) instead of Organization. This activates location-specific rich results and feeds data to Google Business Profile. Our [local SEO website guide](/learn/local-seo-website-guide/) covers these subtypes in more detail.

Key properties to include: `name`, `url`, `logo`, `description`, `email`, `telephone`, `address` (for local businesses), `sameAs` (linking to social profiles and authoritative directories), and `areaServed`.

## Article Schema

Article schema goes on blog posts, guides, news items, and any editorial content. It communicates the headline, publication date, modification date, author, and publisher.

The `isPartOf` property should reference the parent CollectionPage (if the article belongs to a hub) or the WebPage. The `publisher` property should reference your Organization schema using its `@id`. The `about` property can reference the primary entity or topic the article covers.

Article schema makes your content eligible for article-specific search features and helps Google understand the freshness and authorship of your content. Always keep `dateModified` updated when you revise an article — Google uses this signal to assess content freshness.

## FAQPage Schema

FAQPage schema marks up question-and-answer sections on a page. When implemented correctly, it can trigger FAQ rich results — expandable question-and-answer pairs that appear directly in search results beneath your listing.

Each FAQ entry requires a Question with a `name` property (the question text) and an AcceptedAnswer with a `text` property (the answer text). The questions and answers in the schema must match the visible content on the page exactly. Adding FAQ schema for content that does not appear on the page violates Google's structured data guidelines and can result in a manual action.

FAQPage schema works particularly well on service pages and informational articles where users commonly have follow-up questions. The expanded FAQ results increase the visual footprint of your search listing, which typically improves click-through rates.

## ProfessionalService and Service Schema

Service-related schema types describe what your business offers. ProfessionalService is appropriate for consultancies, agencies, and firms that deliver expertise-based services. The generic Service type works for broader service descriptions.

Include the service name, description, provider (referencing your Organization `@id`), area served, and pricing information. The `offers` property can include price ranges using PriceSpecification with `minPrice` and `maxPrice` values and currency codes.

For UK businesses, set `areaServed` to a Country entity with the name "United Kingdom" or use more specific geographic entities (City, AdministrativeArea) for local services.

## BreadcrumbList Schema

BreadcrumbList schema generates breadcrumb trails in search results, showing users the page's position in your site hierarchy. This is one of the most reliably triggered rich results and provides clear navigational context in search listings.

Each item in the breadcrumb list has a position number, name, and URL. The list starts with the homepage (position 1) and ends with the current page. Every intermediary page in the hierarchy should appear in order.

Most static site generators can generate BreadcrumbList schema automatically based on the URL structure and page titles. Implement it on every page of the site.

## Building a Connected Schema Graph

Individual schema types become more powerful when they reference each other through `@id` values. This creates a connected schema graph that search engines can traverse.

The pattern works like this: Organization schema on the homepage has `@id: "https://yourdomain.com/#organization"`. Every Service schema references this `@id` in its `provider` property. Every Article schema references it in its `publisher` property. CollectionPage schemas reference the parent WebSite schema. Articles reference their parent CollectionPage.

This graph structure mirrors the conceptual relationships between your business, your services, and your content. It gives search engines a complete picture of your site's entity coverage rather than disconnected fragments of structured data.

## Validation and Testing

After implementing schema markup, validate it using two tools.

**Google's Rich Results Test** (search.google.com/test/rich-results) checks whether your schema is eligible for specific rich result types and flags any errors or warnings.

**Schema Markup Validator** (validator.schema.org) checks your markup against the full schema.org vocabulary, catching issues that Google's tool might not flag.

Run both tools on a representative sample of pages: the homepage, a service page, an article page, and a page with FAQ schema. Fix all errors before launch. Warnings are worth reviewing but do not necessarily need immediate action.

## Common Schema Mistakes

**Marking up content that does not exist on the page** violates Google's guidelines. If you add FAQPage schema, the questions and answers must be visible to users on that page.

**Using the wrong schema type** confuses search engines. A blog post should use Article, not WebPage. A service offering should use ProfessionalService or Service, not Product. Choose the most specific type that accurately describes your content.

**Forgetting to update dateModified** when revising content makes your articles appear stale. Google uses this date to assess freshness, and an article last modified two years ago will be treated differently from one updated last week.

**Omitting the @id on Organization schema** breaks the reference chain. Without a consistent `@id`, other pages cannot link their schema back to the central business entity, and the schema graph falls apart.

Implementing a connected schema graph correctly is detailed work. Our [schema markup service](/services/schema-markup/) builds validated JSON-LD into every page, and it is included as standard in our [SEO website build](/services/seo-website-build/).
