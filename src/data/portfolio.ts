export interface PortfolioItem {
  name: string;
  url: string;
  niche: string;
  pageCount: number;
  metric: string;
  description: string;
}

export const portfolio: PortfolioItem[] = [
  {
    name: 'Water Hardness UK',
    url: 'https://waterhard.uk',
    niche: 'Home & Utilities',
    pageCount: 49,
    metric: '1,082 clicks/month',
    description: '49 area and water-company pages ranking for "water hardness" queries across every UK region. Position 8.0 average, 60.8k impressions/month.'
  },
  {
    name: 'She Cooks She Eats',
    url: 'https://shecookssheeats.co.uk',
    niche: 'Food & Diet',
    pageCount: 211,
    metric: '85.8k impressions/mo',
    description: '211 Slimming World syns pages and takeaway guides. 512 clicks/month, ranking for hundreds of "how many syns in" long-tail queries.'
  },
  {
    name: 'Dead Hangs',
    url: 'https://deadhangs.com',
    niche: 'Health & Fitness',
    pageCount: 53,
    metric: '437 clicks/month',
    description: '53 pages covering dead hang standards, world records, and training programmes. Top page ranks position 7.0 for "dead hang time by age" — 22.8k impressions alone.'
  },
  {
    name: 'Rental Yield UK',
    url: 'https://rentalyield.uk',
    niche: 'Property & Finance',
    pageCount: 120,
    metric: '37.9k impressions/mo',
    description: '120 area-level rental yield pages with postcode data. 98 clicks/month at position 9.3 — growing steadily from a standing start.'
  },
  {
    name: 'Best Vibration Plates',
    url: 'https://bestvibrationplates.co.uk',
    niche: 'Health & Fitness',
    pageCount: 135,
    metric: '6.7k impressions/mo',
    description: '135-page affiliate site with BuyBox components, comparison pages, and full schema coverage. Ranking for long-tail health queries.'
  },
];
