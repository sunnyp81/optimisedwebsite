export interface PortfolioItem {
  name: string;
  url: string;
  niche: string;
  pageCount: number;
  metric: string;
  description: string;
  growth: number[];
}

// Headline metric/description figures below were re-verified against Google
// Search Console (via the SEO Gets MCP) on 2026-09-26, trailing 28 days
// (2026-08-29 to 2026-09-25). See src/data/caseStudies.ts for the same figures
// with full context and src/pages/case-studies/[slug].astro for per-site pages.
//
// The `growth` arrays (illustrative first-12-months monthly impression curves,
// in thousands) were NOT re-verified in this pass -- they were not reproducible
// against a dated GSC export in the time available. Treat them as unconfirmed
// until checked against a per-site monthly Performance export from each site's
// launch date.
export const portfolio: PortfolioItem[] = [
  {
    name: 'Water Hardness UK',
    url: 'https://waterhard.uk',
    niche: 'Home & Utilities',
    pageCount: 49,
    metric: '1,642 clicks/month',
    description: '49 area and water-company pages ranking for "water hardness" queries across every UK region. Position 10.4 average, 85.0k impressions/month (28 days to 25 Sep 2026).',
    growth: [2.1, 5.8, 12.4, 19.7, 28.3, 34.1, 39.6, 44.2, 49.8, 54.3, 57.9, 60.8]
  },
  {
    name: 'She Cooks She Eats',
    url: 'https://shecookssheeats.co.uk',
    niche: 'Food & Diet',
    pageCount: 211,
    metric: '29.6k impressions/mo',
    description: '211 Slimming World syns pages and takeaway guides. 192 clicks/month (28 days to 25 Sep 2026), ranking for hundreds of "how many syns in" long-tail queries. Traffic is down sharply from its earlier peak; see the case study for detail.',
    growth: [4.2, 11.6, 22.3, 35.8, 48.1, 56.4, 63.7, 71.2, 76.5, 80.1, 83.4, 85.8]
  },
  {
    name: 'Dead Hangs',
    url: 'https://deadhangs.com',
    niche: 'Health & Fitness',
    pageCount: 53,
    metric: '3,035 clicks/month',
    description: '53 pages covering dead hang standards, world records, and training programmes. Top query "dead hang time by age" averages position 2.2, with the page it targets pulling 67.5k impressions on its own (28 days to 25 Sep 2026).',
    growth: [1.8, 4.6, 9.2, 14.8, 19.3, 23.1, 26.8, 29.4, 31.7, 33.9, 35.1, 36.2]
  },
  {
    name: 'Rental Yield UK',
    url: 'https://rentalyield.uk',
    niche: 'Property & Finance',
    pageCount: 120,
    metric: '17.7k impressions/mo',
    description: '120 area-level rental yield pages with postcode data. 103 clicks/month at position 22.3 (28 days to 25 Sep 2026). Impressions and position have worsened since an earlier spring 2026 peak, not "growing steadily" as previously described.',
    growth: [0.8, 2.4, 5.1, 8.9, 13.2, 17.6, 22.1, 26.3, 30.1, 33.4, 36.1, 37.9]
  },
  {
    name: 'Best Vibration Plates',
    url: 'https://bestvibrationplates.co.uk',
    niche: 'Health & Fitness',
    pageCount: 135,
    metric: '14.6k impressions/mo',
    description: '135-page affiliate site with BuyBox components, comparison pages, and full schema coverage. Now earning 196 clicks/month (28 days to 25 Sep 2026); no longer impressions-only.',
    growth: [0.3, 0.9, 1.6, 2.4, 3.1, 3.8, 4.5, 5.1, 5.6, 6.0, 6.4, 6.7]
  },
];
