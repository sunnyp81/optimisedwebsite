import { portfolio } from './portfolio';

export interface RankBucket {
  label: string;
  count: number;
  color: string;
}

export interface CaseStat {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

export interface CaseStudy {
  slug: string;
  name: string;
  url: string;
  niche: string;
  pageCount: number;
  metric: string;
  description: string;
  growth: number[];
  growthLabel: string;
  challenge: string;
  approach: string;
  result: string;
  architecture: string;
  schemaTypes: string[];
  lighthouse: number;
  schemaCoverage: string;
  stats: CaseStat[];
  ranks: RankBucket[];
}

// Data snapshot window used for every clicks/impressions/position figure below.
// Source: Google Search Console via the SEO Gets MCP (sc-domain properties),
// pulled 2026-09-26. This replaces the previous undated "first year" framing,
// which could not be reproduced and did not match a live GSC pull.
export const DATA_WINDOW = {
  start: '2026-08-29',
  end: '2026-09-25',
  source: 'Google Search Console (via SEO Gets MCP), trailing 28 days',
};

// Bucket colours map to ranking quality: best (top 3) to worst (21+).
const RANK_COLORS = ['#10b981', '#7c3aed', '#fbbf24', '#9ca3af'];
const rankBuckets = (top3: number, four10: number, eleven20: number, rest: number): RankBucket[] => [
  { label: 'Positions 1 to 3', count: top3, color: RANK_COLORS[0] },
  { label: 'Positions 4 to 10', count: four10, color: RANK_COLORS[1] },
  { label: 'Positions 11 to 20', count: eleven20, color: RANK_COLORS[2] },
  { label: 'Positions 21 plus', count: rest, color: RANK_COLORS[3] },
];

// UNVERIFIED: ranking-position bucket counts below were not re-audited in the
// 2026-09-26 fact pass (a full per-keyword position export was out of scope
// for this pass). Treat as pending confirmation, not as re-verified figures.

// Each study is keyed to its portfolio entry so names, URLs and growth curves
// stay in sync with the source of truth in portfolio.ts.
const p = Object.fromEntries(portfolio.map((item) => [item.name, item]));

export const caseStudies: CaseStudy[] = [
  {
    ...p['Water Hardness UK'],
    slug: 'water-hardness-uk',
    growthLabel: 'Monthly impressions (thousands)',
    challenge:
      'A brand-new domain with zero authority, competing for "water hardness" queries against water utility companies and Wikipedia. The head term is informational and high volume, but every result on page one was a regional supplier or an encyclopedia entry, not a focused resource.',
    approach:
      'We built area and water-company pages on a flat /area/ URL structure, each mapping a UK region to its measured hardness, the supplier that serves it, and a soft-water recommendation. Every page carries Organization, FAQPage and BreadcrumbList schema. The homepage targets the head term; the area pages capture the long tail.',
    result:
      '1,642 organic clicks and 85.0k impressions in the 28 days to 25 September 2026, at a 10.4 average position. No backlinks bought, no ads run. Page count and full indexation status were not re-verified in this pass; see the methodology note below.',
    architecture:
      'Astro 5 static build on Cloudflare Pages. County and supplier pages generated from a single water-hardness dataset, flat URLs, sitemap plus IndexNow submission.',
    schemaTypes: ['Article', 'FAQPage', 'BreadcrumbList', 'Dataset', 'Organization', 'WebSite'],
    lighthouse: 100,
    schemaCoverage: '100%',
    stats: [
      { label: 'Clicks / month', value: 1642 },
      { label: 'Impressions / month', value: 85.0, suffix: 'k', decimals: 1 },
      { label: 'Avg position', value: 10.4, decimals: 1 },
      { label: 'Pages', value: 49 },
    ],
    ranks: rankBuckets(34, 138, 196, 92),
  },
  {
    ...p['She Cooks She Eats'],
    slug: 'she-cooks-she-eats',
    growthLabel: 'Monthly impressions (thousands)',
    challenge:
      'Hundreds of "how many syns in" long-tail queries, each with low individual volume but huge aggregate demand. The existing results were thin, ad-heavy forum threads that buried the answer below the fold.',
    approach:
      'We built Slimming World syns pages and takeaway guides, every one answer-first: the syn value sits in the opening sentence, followed by portion context and a calculation. Recipe and FAQPage schema on every entry, with a hub-and-spoke link map by food category.',
    result:
      '29.6k impressions and 192 clicks in the 28 days to 25 September 2026, at a 12.1 average position, across hundreds of long-tail queries. This is well down on the site\'s earlier performance; traffic has declined sharply since the pages were first built and is flagged for a separate decay review rather than presented as current growth.',
    architecture:
      'Astro 5 static build on Cloudflare Pages. Category hubs link to individual syn-value pages, flat two-level URLs, full sitemap and IndexNow coverage.',
    schemaTypes: ['Recipe', 'Article', 'FAQPage', 'BreadcrumbList', 'Organization', 'WebSite'],
    lighthouse: 99,
    schemaCoverage: '100%',
    stats: [
      { label: 'Impressions / month', value: 29.6, suffix: 'k', decimals: 1 },
      { label: 'Clicks / month', value: 192 },
      { label: 'Pages', value: 211 },
    ],
    ranks: rankBuckets(58, 240, 410, 188),
  },
  {
    ...p['Dead Hangs'],
    slug: 'dead-hangs',
    growthLabel: 'Monthly impressions (thousands)',
    challenge:
      'A fitness micro-niche dominated by YouTube videos and large publishers. Ranking meant out-specifying the competition with data the big sites did not bother to structure.',
    approach:
      'We built pages covering dead hang standards, world records and training programmes, each anchored by a data table broken down by age and sex. HowTo and FAQPage schema throughout, with internal links from every standard to its training plan.',
    result:
      '3,035 clicks from 107.2k impressions in the 28 days to 25 September 2026, the largest impression volume in the network. The query "dead hang time by age" averages position 2.2, and the page it targets pulls 67.5k impressions on its own.',
    architecture:
      'Astro 5 static build on Cloudflare Pages. Standards, records and training pages cross-linked, flat URLs, sitemap plus IndexNow.',
    schemaTypes: ['HowTo', 'Article', 'FAQPage', 'BreadcrumbList', 'Organization', 'WebSite'],
    lighthouse: 100,
    schemaCoverage: '100%',
    stats: [
      { label: 'Clicks / month', value: 3035 },
      { label: 'Impressions / month', value: 107.2, suffix: 'k', decimals: 1 },
      { label: 'Top query position', value: 2.2, decimals: 1 },
      { label: 'Pages', value: 53 },
    ],
    ranks: rankBuckets(22, 96, 148, 64),
  },
  {
    ...p['Rental Yield UK'],
    slug: 'rental-yield-uk',
    growthLabel: 'Monthly impressions (thousands)',
    challenge:
      'A property-data niche built from a standing start, with no domain history and a head term ("rental yield") owned by established letting agents and portals.',
    approach:
      'We built area-level rental yield pages, each driven by postcode-level price and rent data, with a worked yield calculation and a comparison to the regional average. Dataset and FAQPage schema on every page, flat /area/ URLs.',
    result:
      '17.7k impressions and 103 clicks in the 28 days to 25 September 2026, at a 22.3 average position. Impressions and average position have both worsened since an earlier peak in spring 2026; the site is not currently on a month-on-month growth trend and this needs review rather than promotion as a growth example.',
    architecture:
      'Astro 5 static build on Cloudflare Pages. Area pages generated from a postcode yield dataset, flat URLs, sitemap plus IndexNow.',
    schemaTypes: ['Dataset', 'Article', 'FAQPage', 'BreadcrumbList', 'Organization', 'WebSite'],
    lighthouse: 98,
    schemaCoverage: '100%',
    stats: [
      { label: 'Impressions / month', value: 17.7, suffix: 'k', decimals: 1 },
      { label: 'Clicks / month', value: 103 },
      { label: 'Avg position', value: 22.3, decimals: 1 },
      { label: 'Pages', value: 120 },
    ],
    ranks: rankBuckets(14, 88, 196, 142),
  },
  {
    ...p['Best Vibration Plates'],
    slug: 'best-vibration-plates',
    growthLabel: 'Monthly impressions (thousands)',
    challenge:
      'A competitive affiliate niche where ranking depends on product schema, genuine comparison depth and trust signals that thin "best of" lists never earn.',
    approach:
      'We built an affiliate site with reusable BuyBox components, head-to-head comparison pages and full Product and Review schema. Each review leads with specs and a clear verdict; comparison pages cross-link the whole catalogue.',
    result:
      '196 clicks from 14.6k impressions in the 28 days to 25 September 2026, ranking for long-tail health and equipment queries. The site now earns measurable clicks and is no longer impressions-only.',
    architecture:
      'Astro 5 static build on Cloudflare Pages. Review hubs link to individual product pages and comparison guides, flat URLs, sitemap plus IndexNow.',
    schemaTypes: ['Product', 'Review', 'ItemList', 'FAQPage', 'BreadcrumbList', 'Organization', 'WebSite'],
    lighthouse: 97,
    schemaCoverage: '100%',
    stats: [
      { label: 'Clicks / month', value: 196 },
      { label: 'Impressions / month', value: 14.6, suffix: 'k', decimals: 1 },
      { label: 'Schema coverage', value: 100, suffix: '%' },
      { label: 'Pages', value: 135 },
    ],
    ranks: rankBuckets(6, 42, 124, 168),
  },
];
