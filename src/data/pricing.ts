// Single source for the price ladder. Visible copy and schema both read from here.
export interface PriceLevel {
  id: string;
  level: string;
  name: string;
  low: number;
  high: number;
  price: string;
  fits: string;
  pages: string;
  timescale: string;
  payment: string;
  included: string[];
  movesUp: string;
}

export const priceLevels: PriceLevel[] = [
  {
    id: 'local',
    level: 'Level 1',
    name: 'Local site',
    low: 1500,
    high: 3000,
    price: '£1,500 to £3,000',
    fits: 'One premises or one core service.',
    pages: 'Up to 25 pages',
    timescale: '1 to 2 weeks',
    payment: 'Half to start, half on launch',
    included: [
      'Keyword research and page plan',
      'All copy written for you',
      'Schema and technical SEO setup',
      'Launch on your domain',
      'Source code you own'
    ],
    movesUp: 'More than 25 pages, a second premises, or editing by your team moves a project to Level 2.'
  },
  {
    id: 'growth',
    level: 'Level 2',
    name: 'Growth site',
    low: 3000,
    high: 6000,
    price: '£3,000 to £6,000',
    fits: 'Several services or areas that each need their own pages.',
    pages: '25 to 100 pages',
    timescale: '3 to 5 weeks',
    payment: 'Half to start, half on launch',
    included: [
      'Everything in Level 1',
      'Full topic map across services and areas',
      'Custom page templates',
      'An editing screen for your team'
    ],
    movesUp: 'More than 100 pages of new content, more than 5 premises, a booking or CRM hookup, or an existing site of more than 300 addresses moves a project to Level 3. Moving a site of up to 300 pages with the same content is priced as a migration.'
  },
  {
    id: 'multi-location',
    level: 'Level 3',
    name: 'Multi-location and large site',
    low: 6000,
    high: 15000,
    price: '£6,000 to £15,000',
    fits: 'More than 5 premises, an existing site of more than 300 addresses, or connected systems.',
    pages: '100 pages of new content or more',
    timescale: '6 to 12 weeks',
    payment: 'Staged, usually half at design approval and half on launch',
    included: [
      'Everything in Level 2',
      'Location and service page templates',
      'Every current address kept or redirected and tested',
      'Hookup to your existing booking or CRM tool',
      'Team editing with training',
      'Staged launch and 30 days of redirect monitoring'
    ],
    movesUp: 'Bespoke applications and ecommerce checkouts sit outside the ladder and are quoted separately.'
  }
];

// Full migration of an existing site: every address kept or redirected. addOn 0 means included in Level 3.
export const migrationTiers = [
  { size: 'Up to 25 pages', build: 1500, addOn: 500 },
  { size: '25 to 100 pages', build: 3000, addOn: 950 },
  { size: '100 to 300 pages, same content moved', build: 3500, addOn: 1450 },
  { size: 'More than 300 pages (Level 3)', build: 6000, addOn: 0 }
];
export const gbp = (n: number) => `£${n.toLocaleString('en-GB')}`;
export const migrationFrom = migrationTiers[0].build + migrationTiers[0].addOn;
export const migrationTimescale = '2 to 8 weeks';
export const migrationIncludes = 'The migration price covers every current address kept or redirected and tested, a staged launch and 30 days of redirect monitoring. The first three sizes cover up to 300 addresses. More premises, new content or connected tools can move the build to a higher level.';

export const priceLow = priceLevels[0].low;
export const priceHigh = priceLevels[priceLevels.length - 1].high;
export const priceRangeText = '£1,500 to £15,000';

export const ladderOffers = (pageUrl: string) => ({
  '@type': 'AggregateOffer',
  priceCurrency: 'GBP',
  lowPrice: String(priceLow),
  highPrice: String(priceHigh),
  offerCount: priceLevels.length,
  offers: priceLevels.map((l) => ({
    '@type': 'Offer',
    '@id': `${pageUrl}#offer-${l.id}`,
    name: `${l.level}: ${l.name}`,
    description: `${l.fits} ${l.pages}. ${l.timescale}.`,
    priceCurrency: 'GBP',
    priceSpecification: {
      '@type': 'PriceSpecification',
      minPrice: String(l.low),
      maxPrice: String(l.high),
      priceCurrency: 'GBP'
    }
  }))
});
