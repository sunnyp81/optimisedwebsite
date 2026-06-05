// ---------------------------------------------------------------------------
// The State of SEO Websites -- report datasets
// ---------------------------------------------------------------------------
// Every figure here is either:
//   (a) DERIVED directly from the live network data in portfolio.ts and
//       caseStudies.ts (the source of truth, kept in sync below), or
//   (b) a clearly labelled SOURCE/PLACEHOLDER that the owner must replace with
//       a real Google Search Console / WebPageTest / industry export before
//       this report is published or pitched for links.
//
// Nothing here invents precise stats beyond what the existing network supports.
// Comparative platform figures (WordPress, Squarespace, Wix) are marked as
// placeholders because they are NOT measured from our own GSC data.
// ---------------------------------------------------------------------------

import { portfolio } from './portfolio';
import { caseStudies } from './caseStudies';

// --- Network totals, derived from the live portfolio --------------------------
// These are summed from the same arrays the case-study pages render, so the
// report can never drift from the case studies.

const sum = (nums: number[]) => nums.reduce((a, b) => a + b, 0);

export const networkPages = sum(portfolio.map((p) => p.pageCount)); // 568
export const networkSites = portfolio.length; // 5

// Clicks/impressions are parsed from the case-study stat blocks where present.
// Where a site does not report a click figure (newest build, impressions-only
// phase) it contributes 0 to the click total. This is honest: the total is
// "clicks we can evidence", not an estimate.
const statValue = (slug: string, label: string): number => {
  const study = caseStudies.find((s) => s.slug === slug);
  const stat = study?.stats.find((st) => st.label === label);
  return stat ? stat.value : 0;
};

export const networkClicks =
  statValue('water-hardness-uk', 'Clicks / month') +
  statValue('she-cooks-she-eats', 'Clicks / month') +
  statValue('dead-hangs', 'Clicks / month') +
  statValue('rental-yield-uk', 'Clicks / month'); // 2,129 (Best Vibration Plates is impressions-only)

export const networkImpressionsK =
  Math.round(
    (statValue('water-hardness-uk', 'Impressions / month') +
      statValue('she-cooks-she-eats', 'Impressions / month') +
      statValue('dead-hangs', 'Impressions / month') +
      statValue('rental-yield-uk', 'Impressions / month') +
      statValue('best-vibration-plates', 'Impressions / month')) *
      10,
  ) / 10; // 227.4 (thousands/month)

// Ranking keyword distribution, aggregated across every case study's
// RankingBreakdown buckets. Same source the case-study pages render.
const rankTotals = caseStudies.reduce(
  (acc, study) => {
    study.ranks.forEach((bucket, i) => {
      acc[i] += bucket.count;
    });
    return acc;
  },
  [0, 0, 0, 0],
);

export const rankingDistribution = [
  { label: 'Positions 1 to 3', count: rankTotals[0], color: '#10b981' },
  { label: 'Positions 4 to 10', count: rankTotals[1], color: '#7c3aed' },
  { label: 'Positions 11 to 20', count: rankTotals[2], color: '#fbbf24' },
  { label: 'Positions 21 plus', count: rankTotals[3], color: '#9ca3af' },
]; // totals: 134 / 604 / 1074 / 654 = 2,466 keywords

export const totalRankingKeywords = sum(rankTotals); // 2,466
export const top10Keywords = rankTotals[0] + rankTotals[1]; // 738

// Average Lighthouse across the network, from each study's measured score.
export const avgLighthouse =
  Math.round((sum(caseStudies.map((s) => s.lighthouse)) / caseStudies.length) * 10) / 10; // 98.8
export const minLighthouse = Math.min(...caseStudies.map((s) => s.lighthouse)); // 97

// --- Headline counters for the AnimatedCounters strip -------------------------
export const headlineCounters = [
  { value: networkSites, suffix: '', label: 'Live sites studied' },
  { value: networkPages, suffix: '', label: 'Indexed pages analysed' },
  { value: totalRankingKeywords, suffix: '', label: 'Ranking keywords tracked' },
  { value: avgLighthouse, suffix: '', label: 'Average Lighthouse score' },
];

// --- Indexing-timeline benchmark ----------------------------------------------
// Each site's 12-point growth array is a monthly impressions curve (thousands),
// straight from portfolio.ts. We expose them here as named series so the report
// can plot the "time to traction" benchmark without re-typing any numbers.
export const indexingCurves = portfolio.map((p) => ({
  name: p.name,
  niche: p.niche,
  pageCount: p.pageCount,
  // The series is monthly impressions in thousands across the first 12 months.
  series: p.growth,
  startK: p.growth[0],
  endK: p.growth[p.growth.length - 1],
}));

// Indexing-speed claim. The case studies state pages indexed "within weeks"
// (Dead Hangs) and full indexation in year one. We surface the qualitative
// claim and flag the precise median for owner confirmation.
export const indexingBenchmark = {
  // PLACEHOLDER: replace with the real median days-to-first-impression pulled
  // from GSC Coverage + Performance export across all 568 pages.
  medianDaysToFirstImpression: 14, // SOURCE/PLACEHOLDER -- confirm from GSC
  fullIndexationWindow: 'within the first 12 months', // DERIVED from case studies
  pagesIndexedClaim: '100% of submitted pages indexed', // DERIVED -- every study reports n/n indexed
};

// --- Lighthouse-by-platform benchmark -----------------------------------------
// "us" column is DERIVED (our measured network average, rounded).
// wordpress / squarespace columns are SOURCE/PLACEHOLDER industry figures.
// They are NOT from our GSC data and MUST be replaced with a cited source
// (e.g. HTTPArchive Web Almanac, or owner's own lab tests) before publishing.
export const lighthouseByPlatform = [
  { label: 'Performance', us: Math.round(avgLighthouse), wordpress: 52, squarespace: 61 }, // wordpress/squarespace = PLACEHOLDER
  { label: 'Accessibility', us: 98, wordpress: 80, squarespace: 84 }, // us = PLACEHOLDER (not yet aggregated), comparators = PLACEHOLDER
  { label: 'Best Practices', us: 100, wordpress: 79, squarespace: 88 }, // comparators = PLACEHOLDER
  { label: 'SEO', us: 100, wordpress: 83, squarespace: 90 }, // comparators = PLACEHOLDER
];

// --- Page-load speed race ------------------------------------------------------
// SOURCE/PLACEHOLDER comparative figures. The Astro figure reflects our own
// edge-cached static builds; the rest are illustrative platform medians and
// must be replaced with cited WebPageTest runs before the report ships.
export const speedRacers = [
  { name: 'Astro static (our stack)', loadTime: 0.4, color: '#10b981', icon: '⟡' }, // DERIVED from our stack; confirm exact FCP
  { name: 'Next.js', loadTime: 1.2, color: '#3b82f6', icon: '▲' }, // PLACEHOLDER
  { name: 'WordPress', loadTime: 3.8, color: '#7c3aed', icon: 'W' }, // PLACEHOLDER
  { name: 'Squarespace', loadTime: 4.2, color: '#f59e0b', icon: '■' }, // PLACEHOLDER
  { name: 'Wix', loadTime: 5.1, color: '#ef4444', icon: '✦' }, // PLACEHOLDER
];

// --- Cost benchmark ------------------------------------------------------------
// Our own pricing is DERIVED from site.ts / pricing.astro (£1,500 to £3,000,
// one-time, no ongoing fees). Comparator costs are SOURCE/PLACEHOLDER typical
// market ranges and must carry a citation before publishing.
export interface CostBenchmark {
  model: string;
  upfront: string;
  ongoing: string;
  note: string;
  source: 'derived' | 'placeholder';
}

export const costBenchmarks: CostBenchmark[] = [
  {
    model: 'SEO website build (our model)',
    upfront: '£1,500 to £3,000',
    ongoing: '£0 / month',
    note: 'One-time build, owned outright, no CMS licence or mandatory retainer.',
    source: 'derived', // from site.ts priceRange + pricing.astro
  },
  {
    model: 'Agency retainer',
    upfront: '£0 to £1,000 setup',
    ongoing: '£1,000 to £3,000 / month',
    note: 'Typical UK SEO agency retainer. PLACEHOLDER market range -- cite a source.',
    source: 'placeholder',
  },
  {
    model: 'DIY site builder',
    upfront: '£0 to £300',
    ongoing: '£18 to £50 / month',
    note: 'Subscription platform plus templates. PLACEHOLDER market range -- cite a source.',
    source: 'placeholder',
  },
  {
    model: 'Freelance one-off site',
    upfront: '£800 to £5,000',
    ongoing: '£0 to variable',
    note: 'Wide spread by scope and SEO depth. PLACEHOLDER market range -- cite a source.',
    source: 'placeholder',
  },
];

// --- Schema coverage benchmark ------------------------------------------------
// DERIVED: every case study reports 100% schema coverage. Comparator is a
// qualitative claim, flagged as placeholder.
export const schemaCoverage = {
  ourNetwork: 100, // DERIVED -- every study reports 100%
  // PLACEHOLDER: typical share of pages on a generic CMS build carrying valid
  // structured data. Replace with a cited crawl figure.
  typicalCmsBuild: 38, // SOURCE/PLACEHOLDER
};

// --- Methodology --------------------------------------------------------------
export const methodology = {
  windowDescription:
    'Figures cover a five-site live network built and operated by OptimisedWebsite, measured over the first twelve months from launch of each domain.',
  derivedSources: [
    'Network totals (sites, pages, clicks, impressions, ranking keywords, Lighthouse) are aggregated directly from the live case-study data in this repository, which mirrors Google Search Console performance and Coverage reports.',
    'Growth curves are monthly impression series (in thousands) for each site across its first twelve months.',
    'Ranking distribution is the count of tracked keywords by average position bucket, summed across all five sites.',
    'Pricing is taken from the published one-time build range with no ongoing fees.',
  ],
  placeholderSources: [
    'Median days-to-first-impression is a working estimate pending a full GSC Coverage export.',
    'WordPress, Squarespace, Wix and Next.js performance and load-time figures are illustrative platform comparisons, not measured from our network, and require a cited source (for example the HTTPArchive Web Almanac or owner lab tests) before publication.',
    'Comparator cost ranges and the typical-CMS schema-coverage figure are market estimates pending a cited source.',
  ],
  honestyNote:
    'Where a site reports impressions but not yet a stable click figure, it contributes zero clicks to network totals rather than an estimate. No figure is rounded up beyond its measured precision.',
  lastReviewed: '2026-06-05',
};
