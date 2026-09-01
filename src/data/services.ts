export interface Service {
  slug: string;
  href: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  targetKeyword: string;
  shortDescription: string;
}

export const services: Service[] = [
  {
    slug: 'seo-website-build',
    href: '/seo-web-design/',
    title: 'SEO Website Build',
    h1: 'SEO Website Build',
    metaTitle: 'SEO Website Build — Optimised Websites From £1,500',
    metaDescription: 'Order an SEO-optimised website built with keyword research, topical authority architecture, per-page schema, and technical SEO. 15-50 pages from £1,500.',
    targetKeyword: 'buy seo optimised website',
    shortDescription: 'A complete SEO-optimised website built from keyword research through to deployment. 15-50 pages with topical authority architecture.'
  },
  {
    slug: 'keyword-research',
    href: '/services/keyword-research/',
    title: 'Keyword Research',
    h1: 'Keyword Research and Topical Mapping',
    metaTitle: 'Keyword Research and Topical Mapping for New Websites',
    metaDescription: 'Keyword research clustered by intent with hub-and-spoke topical mapping. 50-200 terms organised into a site architecture that builds authority.',
    targetKeyword: 'keyword research for new website',
    shortDescription: '50-200 keywords clustered by intent and mapped into a hub-and-spoke architecture that builds topical authority from day one.'
  },
  {
    slug: 'schema-markup',
    href: '/services/schema-markup/',
    title: 'Schema Markup',
    h1: 'Schema Markup and Structured Data',
    metaTitle: 'Schema Markup Service — Entity-Linked Structured Data',
    metaDescription: 'Per-page JSON-LD schema markup with entity-interconnected @graph. Article, FAQPage, HowTo, Service, BreadcrumbList — all cross-referenced.',
    targetKeyword: 'schema markup service uk',
    shortDescription: 'Per-page JSON-LD with entity-interconnected @graph. Every schema node cross-references via @id for maximum search engine comprehension.'
  },
  {
    slug: 'technical-seo-setup',
    href: '/services/technical-seo-setup/',
    title: 'Technical SEO Setup',
    h1: 'Technical SEO Setup',
    metaTitle: 'Technical SEO Setup for New Websites',
    metaDescription: 'Technical SEO setup: canonical URLs, XML sitemap, robots.txt, Core Web Vitals, heading hierarchy, and search engine submission.',
    targetKeyword: 'technical seo setup for new website',
    shortDescription: 'Canonical URLs, XML sitemaps, robots.txt, heading hierarchy validation, Core Web Vitals optimisation, and search engine submission.'
  },
  {
    slug: 'content-architecture',
    href: '/services/content-architecture/',
    title: 'Content Architecture',
    h1: 'Content Architecture and Internal Linking',
    metaTitle: 'Content Architecture and Internal Linking for SEO',
    metaDescription: 'Content architecture with hub-and-spoke structure and internal linking blueprint. Hub-to-spoke, spoke-to-hub, sibling cross-links.',
    targetKeyword: 'website content architecture',
    shortDescription: 'Hub-and-spoke content structure with a complete internal linking blueprint. Every page connects to its hub, siblings, and cross-hub where relevant.'
  }
];
