// ---------------------------------------------------------------------------
// The State of SEO Websites -- report datasets
// ---------------------------------------------------------------------------
// Every figure here is either:
//   (a) DERIVED directly from the live network data in portfolio.ts and
//       caseStudies.ts (the source of truth, kept in sync below), or
//   (b) labelled UNVERIFIED where it has not been re-checked against a dated export.
// Uncited platform comparisons and market cost ranges were removed on 2026-09-27.
//
// 2026-09-26 fact-audit note: the clicks/impressions/position figures in
// caseStudies.ts were re-verified against Google Search Console (via the SEO
// Gets MCP) for a trailing 28-day window (2026-08-29 to 2026-09-25) and
// corrected where they no longer matched. See caseStudies.ts DATA_WINDOW and
// each study's stats for the current source figures. The ranking-distribution
// buckets and Lighthouse/schema-coverage figures were NOT re-verified in this
// pass; treat them as pending confirmation.
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
const statValue = (slug: string, label: string): number => {
  const study = caseStudies.find((s) => s.slug === slug);
  const stat = study?.stats.find((st) => st.label === label);
  return stat ? stat.value : 0;
};

export const networkClicks =
  statValue('water-hardness-uk', 'Clicks / month') +
  statValue('she-cooks-she-eats', 'Clicks / month') +
  statValue('dead-hangs', 'Clicks / month') +
  statValue('rental-yield-uk', 'Clicks / month') +
  statValue('best-vibration-plates', 'Clicks / month');
// Re-verified 2026-09-26 against Google Search Console (SEO Gets MCP), trailing
// 28 days (2026-08-29 to 2026-09-25). Best Vibration Plates now earns measurable
// clicks and is included here; it was previously excluded as "impressions-only",
// which was no longer accurate at the time of this check.

export const networkImpressionsK =
  Math.round(
    (statValue('water-hardness-uk', 'Impressions / month') +
      statValue('she-cooks-she-eats', 'Impressions / month') +
      statValue('dead-hangs', 'Impressions / month') +
      statValue('rental-yield-uk', 'Impressions / month') +
      statValue('best-vibration-plates', 'Impressions / month')) *
      10,
  ) / 10; // re-derived from the corrected 28-day case-study figures

// Ranking keyword distribution, aggregated across every case study's
// RankingBreakdown buckets. Same source the case-study pages render.
// UNVERIFIED as of 2026-09-26: not re-audited against a full keyword-position
// export in this pass. See caseStudies.ts.
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
]; // totals: 134 / 604 / 1074 / 654 = 2,466 keywords -- UNVERIFIED, see note above

export const totalRankingKeywords = sum(rankTotals); // 2,466 -- UNVERIFIED, see note above
export const top10Keywords = rankTotals[0] + rankTotals[1]; // 738 -- UNVERIFIED, see note above

// Average Lighthouse across the network, from each study's measured score.
// NOT re-verified in the 2026-09-26 pass -- no PageSpeed Insights re-check was
// run. Treat as pending confirmation.
export const avgLighthouse =
  Math.round((sum(caseStudies.map((s) => s.lighthouse)) / caseStudies.length) * 10) / 10; // 98.8
export const minLighthouse = Math.min(...caseStudies.map((s) => s.lighthouse)); // 97

// --- Headline counters for the AnimatedCounters strip -------------------------
export const headlineCounters = [
  { value: networkSites, suffix: '', label: 'Live sites studied' },
  { value: networkPages, suffix: '', label: 'Pages built across the network' },
  { value: totalRankingKeywords, suffix: '', label: 'Ranking keywords tracked' },
  { value: avgLighthouse, suffix: '', label: 'Average Lighthouse score' },
];

// --- Indexing-timeline benchmark ----------------------------------------------
// Each site's 12-point growth array is a monthly impressions curve (thousands),
// straight from portfolio.ts. NOT re-verified in the 2026-09-26 pass -- these
// could not be reproduced against a dated GSC export in the time available.
// Treat as unconfirmed until checked against a per-site monthly Performance
// export from each site's launch date.
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
// (Dead Hangs) and full indexation in year one. NOT re-verified in the
// 2026-09-26 pass -- flagged here as still pending a Coverage export.
export const indexingBenchmark = {
  fullIndexationWindow: 'within the first 12 months', // UNVERIFIED -- pending Coverage export
  pagesIndexedClaim: 'full indexation reported by each site, pending a Coverage export re-check', // UNVERIFIED
};

// --- Schema coverage benchmark ------------------------------------------------
// Every case study reports 100% schema coverage (not re-verified in the 2026-09-26 pass).
export const schemaCoverage = {
  ourNetwork: 100,
};

// --- Methodology --------------------------------------------------------------
export const methodology = {
  windowDescription:
    'Clicks, impressions and average position figures reflect a trailing 28-day Google Search Console snapshot (29 August to 25 September 2026) for each of five live sites in the network, re-verified on 2026-09-26. Page counts, growth curves, Lighthouse scores, schema coverage and ranking-position buckets were not re-verified in this pass; see the notes below.',
  derivedSources: [
    'Clicks, impressions and average position are pulled directly from Google Search Console (via the SEO Gets MCP) for each site\'s sc-domain property, trailing 28 days as of 2026-09-25.',
    'Network totals (sites, pages, clicks, impressions) are aggregated directly from the live case-study data in this repository, which mirrors that Google Search Console pull.',
  ],
  placeholderSources: [
    'Growth curves (monthly impression series, first 12 months per site) were not re-verified in the 2026-09-26 pass and are pending a per-site monthly export from each site\'s launch date.',
    'Ranking-position bucket counts (2,466 tracked keywords) were not re-verified in the 2026-09-26 pass and are pending a full keyword-position export.',
    'Lighthouse scores and schema-coverage percentages were not re-verified in the 2026-09-26 pass and are pending a PageSpeed Insights / crawl re-check.',
  ],
  honestyNote:
    'Where a figure could not be re-verified against a dated primary-source pull in this audit pass, it is listed under estimates to confirm rather than presented as confirmed. No figure is rounded up beyond its measured precision.',
  lastReviewed: '2026-09-26',
};
