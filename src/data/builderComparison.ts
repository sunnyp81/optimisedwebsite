// First-screen card for /compare/best-website-builder-for-seo/. Full claim-to-source map: harness site-directives/optimisedwebsite.com/builder-compare-brief-2026-11-19.md.
export interface BuilderRow {
  id: string;
  name: string;
  note: string;
  titles: string;
  urls: string;
  schema: string;
  hosting: string;
  cost: string;
  suits: string;
}

export interface BuilderSource {
  label: string;
  url: string;
}

export const builderCheckedDate = '19 November 2026';

export const builderColumns = [
  { key: 'titles', label: 'Titles and meta' },
  { key: 'urls', label: 'URLs and redirects' },
  { key: 'schema', label: 'Custom schema (JSON-LD)' },
  { key: 'hosting', label: 'Code and hosting' },
  { key: 'cost', label: 'What you pay for' },
  { key: 'suits', label: 'Best for' },
] as const;

export const builderRows: BuilderRow[] = [
  {
    id: 'wordpress',
    name: 'WordPress',
    note: 'Self-hosted, with Rank Math',
    titles: 'Per page with an SEO plugin such as Rank Math.',
    urls: '301 redirects with the Rank Math Redirections module.',
    schema: 'Rank Math Schema Generator per post. A fully custom schema builder needs Rank Math PRO.',
    hosting: 'Open source. You choose the theme, plugins and host.',
    cost: 'Software is free (GPL). You pay for hosting.',
    suits: 'Teams that publish often and want plugins.',
  },
  {
    id: 'wix',
    name: 'Wix',
    note: 'Hosted builder',
    titles: 'Per page in the SEO settings.',
    urls: 'Editable slugs. 301 redirects in the URL Redirect Manager on a custom domain.',
    schema: 'Custom JSON-LD: up to 5 markups per page and under 7,000 characters each.',
    hosting: 'Wix hosts the site. robots.txt editor in the SEO & GEO dashboard.',
    cost: 'Free on a wixsite.com address. A Premium plan connects your own domain.',
    suits: 'Owner-run local sites on low-competition terms.',
  },
  {
    id: 'squarespace',
    name: 'Squarespace',
    note: 'Hosted builder',
    titles: 'SEO title and description per page. No SEO title field on the homepage.',
    urls: 'Slugs of 3 to 250 characters, or 3 to 200 for blog posts, events and products. Items sit under their collection URL. 301s via URL mappings.',
    schema: 'Automatic for 6 types. Extra JSON-LD needs Code Injection on Core, Plus or Advanced.',
    hosting: 'One shared robots.txt that users cannot edit.',
    cost: 'Trial sites stay private. A paid plan is needed to publish.',
    suits: 'Design-led portfolio and service sites.',
  },
  {
    id: 'shopify',
    name: 'Shopify',
    note: 'Hosted ecommerce',
    titles: 'Per page with Edit website SEO.',
    urls: 'Editable handles. /products/ and /collections/ cannot change. Redirects in the admin.',
    schema: 'The structured_data filter outputs Product, ProductGroup for products with variants and Article. Other types mean editing Liquid.',
    hosting: 'Shopify hosts the store. robots.txt.liquid edits crawl rules.',
    cost: 'A paid plan. The store freezes after the trial without one.',
    suits: 'Online shops.',
  },
  {
    id: 'webflow',
    name: 'Webflow',
    note: 'Hosted visual builder',
    titles: 'Per page in Page settings on a paid Site or Workspace plan.',
    urls: 'Slug per page. 301 redirects on a paid Site or Workspace plan.',
    schema: 'JSON-LD in page custom code on a paid Site or Workspace plan.',
    hosting: 'Webflow hosts the site. robots.txt rules in Site settings.',
    cost: 'Free Starter plan on webflow.io. Each site needs its own Site plan for your domain.',
    suits: 'Design teams that want visual control.',
  },
  {
    id: 'astro',
    name: 'Custom-coded static site',
    note: 'Built with Astro',
    titles: 'Any tag on any page, set in code.',
    urls: 'File-based routes. Redirects in the config or at the host.',
    schema: 'Any JSON-LD on any page, with no platform cap.',
    hosting: 'Server-first with little client JavaScript by default. Hosts on any static host.',
    cost: 'Framework is free (MIT). Static hosting can be free. You pay for the build.',
    suits: 'Businesses that want full control and edit rarely.',
  },
];

export const builderSources: { builder: string; links: BuilderSource[] }[] = [
  {
    builder: 'WordPress',
    links: [
      { label: 'Rank Math: schema', url: 'https://rankmath.com/kb/rich-snippets/' },
      { label: 'W3Techs: WordPress usage', url: 'https://w3techs.com/technologies/details/cm-wordpress' },
    ],
  },
  {
    builder: 'Wix',
    links: [
      { label: 'Wix: 301 redirects', url: 'https://support.wix.com/en/article/setting-up-a-301-redirect-for-a-page-on-your-site' },
      { label: 'Wix: structured data', url: 'https://support.wix.com/en/article/adding-structured-data-markup-to-your-sites-pages-2546962' },
    ],
  },
  {
    builder: 'Squarespace',
    links: [
      { label: 'Squarespace: Code Injection', url: 'https://support.squarespace.com/hc/en-us/articles/205815908-Using-Code-Injection' },
      { label: 'Squarespace: robots.txt', url: 'https://support.squarespace.com/hc/en-us/articles/206543207-Understanding-Google-SEO-emails-and-console-errors' },
    ],
  },
  {
    builder: 'Shopify',
    links: [
      { label: 'Shopify: URL subdirectories', url: 'https://help.shopify.com/en/manual/domains/domains-terminology' },
      { label: 'Shopify: structured_data filter', url: 'https://shopify.dev/docs/api/liquid/filters/structured_data' },
    ],
  },
  {
    builder: 'Webflow',
    links: [
      { label: 'Webflow: SEO title and meta', url: 'https://help.webflow.com/hc/en-us/articles/33961237278611' },
      { label: 'Webflow: custom code', url: 'https://help.webflow.com/hc/en-us/articles/33961357265299' },
      { label: 'Webflow: Site plans', url: 'https://help.webflow.com/hc/en-us/articles/33961232582419-Choose-a-Site-plan' },
    ],
  },
  {
    builder: 'Astro',
    links: [
      { label: 'Astro: why Astro', url: 'https://docs.astro.build/en/concepts/why-astro/' },
      { label: 'Astro: MIT licence', url: 'https://github.com/withastro/astro/blob/main/LICENSE' },
    ],
  },
];

// Slug-keyed so [slug].astro only renders these blocks on the builder page.
export const builderComparisonSlug = 'best-website-builder-for-seo';
