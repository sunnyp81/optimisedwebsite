export interface PortfolioItem {
  name: string;
  url: string;
  niche: string;
  pageCount: number;
  metric: string;
  description: string;
  growth: number[];
}

export const portfolio: PortfolioItem[] = [
  {
    name: 'Water Hardness UK',
    url: 'https://waterhard.uk',
    niche: 'Home & Utilities',
    pageCount: 49,
    metric: '1,082 clicks/month',
    description: '49 area and water-company pages ranking for "water hardness" queries across every UK region. Position 8.0 average, 60.8k impressions/month.',
    growth: [2.1, 5.8, 12.4, 19.7, 28.3, 34.1, 39.6, 44.2, 49.8, 54.3, 57.9, 60.8]
  },
  {
    name: 'She Cooks She Eats',
    url: 'https://shecookssheeats.co.uk',
    niche: 'Food & Diet',
    pageCount: 211,
    metric: '85.8k impressions/mo',
    description: '211 Slimming World syns pages and takeaway guides. 512 clicks/month, ranking for hundreds of "how many syns in" long-tail queries.',
    growth: [4.2, 11.6, 22.3, 35.8, 48.1, 56.4, 63.7, 71.2, 76.5, 80.1, 83.4, 85.8]
  },
  {
    name: 'Dead Hangs',
    url: 'https://deadhangs.com',
    niche: 'Health & Fitness',
    pageCount: 53,
    metric: '437 clicks/month',
    description: '53 pages covering dead hang standards, world records, and training programmes. Top page ranks position 7.0 for "dead hang time by age" — 22.8k impressions alone.',
    growth: [1.8, 4.6, 9.2, 14.8, 19.3, 23.1, 26.8, 29.4, 31.7, 33.9, 35.1, 36.2]
  },
  {
    name: 'Rental Yield UK',
    url: 'https://rentalyield.uk',
    niche: 'Property & Finance',
    pageCount: 120,
    metric: '37.9k impressions/mo',
    description: '120 area-level rental yield pages with postcode data. 98 clicks/month at position 9.3 — growing steadily from a standing start.',
    growth: [0.8, 2.4, 5.1, 8.9, 13.2, 17.6, 22.1, 26.3, 30.1, 33.4, 36.1, 37.9]
  },
  {
    name: 'Best Vibration Plates',
    url: 'https://bestvibrationplates.co.uk',
    niche: 'Health & Fitness',
    pageCount: 135,
    metric: '6.7k impressions/mo',
    description: '135-page affiliate site with BuyBox components, comparison pages, and full schema coverage. Ranking for long-tail health queries.',
    growth: [0.3, 0.9, 1.6, 2.4, 3.1, 3.8, 4.5, 5.1, 5.6, 6.0, 6.4, 6.7]
  },
];
