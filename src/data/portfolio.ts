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
// The `growth` arrays are real monthly Google Search Console impressions (raw
// counts, web search) for the 12 complete months November 2025 to October 2026,
// one value per month in `growthMonths` order. Pulled 21 November 2026 (GSC API
// for waterhard.uk, deadhangs.com and rentalyield.uk; SEO Gets GSC data for
// shecookssheeats.co.uk and bestvibrationplates.co.uk). Zeros are months before
// the site had any impressions. Some sites fell after an earlier peak; the
// charts show that as it is.
export const growthMonths = [
  '2025-11', '2025-12', '2026-01', '2026-02', '2026-03', '2026-04',
  '2026-05', '2026-06', '2026-07', '2026-08', '2026-09', '2026-10',
];
export const growthSource = 'Google Search Console, monthly impressions, November 2025 to October 2026';

export const portfolio: PortfolioItem[] = [
  {
    name: 'Water Hardness UK',
    url: 'https://waterhard.uk',
    niche: 'Home & Utilities',
    pageCount: 49,
    metric: '1,642 clicks, 28 days',
    description: '49 area and water-company pages ranking for "water hardness" queries across every UK region. Position 10.4 average, 85.0k impressions (28 days to 25 Sep 2026).',
    growth: [0, 0, 0, 0, 136, 46374, 59566, 71143, 96886, 104987, 89754, 90884]
  },
  {
    name: 'She Cooks She Eats',
    url: 'https://shecookssheeats.co.uk',
    niche: 'Food & Diet',
    pageCount: 211,
    metric: '29.6k impressions, 28 days',
    description: '211 Slimming World syns pages and takeaway guides. 192 clicks (28 days to 25 Sep 2026), ranking for hundreds of "how many syns in" long-tail queries. Traffic is down sharply from its earlier peak; see the case study for detail.',
    growth: [110024, 50860, 92059, 76086, 117008, 104962, 58350, 46252, 42278, 41713, 31683, 30054]
  },
  {
    name: 'Dead Hangs',
    url: 'https://deadhangs.com',
    niche: 'Health & Fitness',
    pageCount: 53,
    metric: '3,035 clicks, 28 days',
    description: '53 pages covering dead hang standards, world records, and training programmes. Top query "dead hang time by age" averages position 2.2, with the page it targets pulling 67.5k impressions on its own (28 days to 25 Sep 2026).',
    growth: [0, 57, 66, 79, 32158, 36099, 39532, 69288, 93451, 114737, 113603, 162459]
  },
  {
    name: 'Rental Yield UK',
    url: 'https://rentalyield.uk',
    niche: 'Property & Finance',
    pageCount: 120,
    metric: '17.7k impressions, 28 days',
    description: '120 area-level rental yield pages with postcode data. 103 clicks at position 22.3 (28 days to 25 Sep 2026). Impressions and position have worsened since an earlier spring 2026 peak, not "growing steadily" as previously described.',
    growth: [0, 0, 0, 0, 19058, 26348, 30597, 11739, 13235, 16465, 18111, 21254]
  },
  {
    name: 'Best Vibration Plates',
    url: 'https://bestvibrationplates.co.uk',
    niche: 'Health & Fitness',
    pageCount: 135,
    metric: '14.6k impressions, 28 days',
    description: '135-page affiliate site with BuyBox components, comparison pages, and full schema coverage. Now earning 196 clicks (28 days to 25 Sep 2026); no longer impressions-only.',
    growth: [2917, 4328, 6140, 4993, 6110, 6407, 7020, 6733, 10360, 10420, 17578, 26962]
  },
];
