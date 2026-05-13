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
    name: 'Best Vibration Plates',
    url: 'https://bestvibrationplates.co.uk',
    niche: 'Health & Fitness',
    pageCount: 135,
    metric: '100% schema coverage',
    description: '135-page affiliate site with BuyBox components, comparison pages, and full BreadcrumbList + Article + FAQPage schema.'
  },
  {
    name: 'Water Hardness UK',
    url: 'https://waterhard.uk',
    niche: 'Home & Utilities',
    pageCount: 49,
    metric: '1,191 clicks/month',
    description: '49 county-level pages with BreadcrumbList schema, direct affiliate links, and FAQ sections. Position 7.2 average.'
  },
  {
    name: 'Calculator Place',
    url: 'https://calculator.place',
    niche: 'Tools & Utilities',
    pageCount: 60,
    metric: '450 unique H2s',
    description: '60 calculator pages with unique content per page, HowTo schema, and meta rewrites for CTR optimisation.'
  },
  {
    name: 'Tow Rating',
    url: 'https://towrating.net',
    niche: 'Automotive',
    pageCount: 832,
    metric: '14,487 total pages',
    description: '832 indexable vehicle pages with Article schema, trimmed from 14,487 for quality. Full BreadcrumbList navigation.'
  },
  {
    name: 'Fix Error Dev',
    url: 'https://fixerror.dev',
    niche: 'Developer Tools',
    pageCount: 125,
    metric: '33 curated errors',
    description: '125 pages covering error codes across 11 services. TechArticle + HowTo + FAQPage schema. AI crawler rules configured.'
  },
];
