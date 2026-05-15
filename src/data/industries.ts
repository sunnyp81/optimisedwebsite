export interface Industry {
  slug: string;
  name: string;
  h1: string;
  keyword: string;
  description: string;
  metaDescription: string;
  portfolioSite?: string;
  intro: string;
  challenges: string[];
  solutions: string[];
  faqs: { q: string; a: string }[];
}

export const industries: Industry[] = [
  {
    slug: 'health-and-fitness',
    name: 'Health & Fitness',
    h1: 'SEO Websites for Health and Fitness Brands',
    keyword: 'health and fitness website seo',
    description: 'SEO-optimised websites for health and fitness brands. Product reviews, comparison hubs, and topical authority structures that rank for competitive supplement and equipment keywords.',
    metaDescription: 'SEO websites for health and fitness brands. Hub-and-spoke architecture, BuyBox components, comparison pages, and full schema markup. Built to rank from day one.',
    portfolioSite: 'bestvibrationplates.co.uk',
    intro: 'Health and fitness brands compete in one of the most saturated verticals in search. Generic product pages do not rank. Topical authority does. Every site we build for this vertical uses comparison hubs, BuyBox components, and review structures that search engines treat as genuinely useful content.',
    challenges: [
      'High keyword difficulty across supplement and equipment terms',
      'Affiliate sites with thin content dominate page one',
      'YMYL signals mean Google scrutinises health content more aggressively',
      'Product pages without comparison context rank below aggregators',
    ],
    solutions: [
      'Hub-and-spoke structure with product category hubs and individual review spokes',
      'BuyBox components with structured Product schema for rich results',
      'Comparison tables with genuine editorial analysis, not auto-generated specs',
      'FAQ sections with FAQPage schema on every product and category page',
      'BreadcrumbList schema for clear site hierarchy signals',
    ],
    faqs: [
      { q: 'Do you write the product reviews?', a: 'Yes. Every review is written from research — feature analysis, price comparison, and genuine editorial recommendations. No scraped specs or manufacturer copy.' },
      { q: 'How do you handle YMYL requirements?', a: 'Health content gets stricter quality signals: clear authorship, evidence-based claims, proper schema, and no exaggerated promises. We structure pages to meet Google\'s quality rater guidelines.' },
      { q: 'Can you add affiliate links?', a: 'Yes. Affiliate links are included with proper rel attributes (nofollow sponsored) and structured in BuyBox components that enhance rather than harm SEO.' },
    ],
  },
  {
    slug: 'home-services',
    name: 'Home Services',
    h1: 'SEO Websites for Home Service Companies',
    keyword: 'home services website seo',
    description: 'SEO-optimised websites for home service companies. Location pages, service hubs, and local SEO architecture that captures "near me" and area-specific search traffic.',
    metaDescription: 'SEO websites for home service companies. Location-based pages, service hubs, local schema markup, and topical authority architecture. Rank in your service area.',
    portfolioSite: 'waterhard.uk',
    intro: 'Home service companies depend on local search visibility. A five-page brochure site cannot compete with businesses that have dedicated pages for each service area. We build location-specific page structures with proper LocalBusiness schema that capture search traffic across every area you serve.',
    challenges: [
      'Local pack dominated by businesses with strong Google Business Profiles',
      'Need to rank in multiple locations without creating thin doorway pages',
      'Service-area businesses compete against location-bound competitors',
      'Google penalises low-quality location page templates',
    ],
    solutions: [
      'Unique county or city-level pages with genuinely localised content',
      'Service hub pages linking to location-specific spokes',
      'LocalBusiness and Service schema with areaServed properties',
      'FAQ sections addressing location-specific customer concerns',
      'BreadcrumbList schema connecting service area hierarchy',
    ],
    faqs: [
      { q: 'How many location pages do you create?', a: 'As many as your service area requires. Each page has unique content — not template copy with the town name swapped.' },
      { q: 'Do location pages work for SEO?', a: 'Unique location pages with genuine content rank well. Template pages with identical copy and a swapped location name get filtered or penalised.' },
      { q: 'Do you set up Google Business Profile?', a: 'We build the website. GBP setup is a separate service. The site structure supports GBP linking through proper NAP consistency and LocalBusiness schema.' },
    ],
  },
  {
    slug: 'automotive',
    name: 'Automotive',
    h1: 'SEO Websites for Automotive Businesses',
    keyword: 'automotive website seo',
    description: 'SEO-optimised websites for automotive businesses. Vehicle specification pages, make-model-year structures, and technical comparison content that ranks for high-intent car queries.',
    metaDescription: 'SEO websites for automotive businesses. Vehicle spec pages, make-model hierarchy, comparison content, and full schema markup. Built to rank for automotive search queries.',
    portfolioSite: 'towrating.net',
    intro: 'Automotive search is data-heavy. Buyers search for specific makes, models, and specifications. Sites that organise this data into a crawlable hierarchy with proper schema outrank generic dealership brochures. We build page structures that scale to thousands of vehicle entries while keeping each page indexable and useful.',
    challenges: [
      'Thousands of potential make-model-year combinations to cover',
      'Data-heavy pages that need structure to avoid thin content flags',
      'Competing against manufacturer sites and large aggregators',
      'Technical specs need human-readable context to rank',
    ],
    solutions: [
      'Make → Model → Year hierarchy with clean URL structure',
      'Specification tables with structured data markup',
      'Editorial comparison content alongside raw data',
      'Quality gates that filter out pages below a content threshold',
      'BreadcrumbList and Vehicle schema for rich results',
    ],
    faqs: [
      { q: 'How do you handle thousands of vehicle pages?', a: 'Programmatic generation with quality gates. Pages below a content or data threshold are set to noindex until they earn enough content to be worth crawling.' },
      { q: 'Do you pull data from vehicle APIs?', a: 'We can integrate with vehicle data sources. The site architecture handles data at any scale — the content quality gates ensure only substantive pages get indexed.' },
    ],
  },
  {
    slug: 'saas-and-tools',
    name: 'SaaS & Tools',
    h1: 'SEO Websites for SaaS and Online Tools',
    keyword: 'saas website seo',
    description: 'SEO-optimised websites for SaaS products and online tools. Interactive tool pages, educational content hubs, and product-led SEO architecture that drives organic signups.',
    metaDescription: 'SEO websites for SaaS and online tools. Interactive tool pages, educational hubs, product-led SEO, and full schema markup. Organic traffic that converts to signups.',
    portfolioSite: 'calculator.place',
    intro: 'SaaS products need organic traffic that converts. A marketing site with five feature pages does not build enough topical depth to rank. We build content architectures around the problems your tool solves — educational guides, interactive calculators, comparison pages — creating the search presence that drives signups.',
    challenges: [
      'Feature pages alone do not rank — Google rewards educational depth',
      'Competing against established SaaS brands with massive domain authority',
      'Product-led content needs to demonstrate value without friction',
      'Tool pages need unique per-page content, not just an embedded widget',
    ],
    solutions: [
      'Problem-solution content hubs that surround the product',
      'Interactive tool pages with unique editorial content per tool',
      'HowTo schema on guide pages, SoftwareApplication schema on product pages',
      'Comparison content targeting "best [category] tool" queries',
      'Educational blog cluster building topical authority in your niche',
    ],
    faqs: [
      { q: 'Can you build interactive tool pages?', a: 'Yes. Calculators, generators, and interactive tools built as static pages with client-side JavaScript. Each page gets unique editorial content and schema markup.' },
      { q: 'Do you handle SaaS pricing pages?', a: 'Yes. Pricing pages are built with Offer and PriceSpecification schema. We structure them to appear in search results for pricing comparison queries.' },
    ],
  },
  {
    slug: 'developers',
    name: 'Developer Tools',
    h1: 'SEO Websites for Developer Tools',
    keyword: 'developer tools website seo',
    description: 'SEO-optimised websites for developer tools and documentation sites. Error code guides, API references, and technical content architectures that rank for developer search queries.',
    metaDescription: 'SEO websites for developer tools. Error code guides, documentation structure, TechArticle schema, and topical authority architecture. Rank for developer search queries.',
    portfolioSite: 'fixerror.dev',
    intro: 'Developer documentation and error reference sites need precise technical structure. Developers search for specific error codes, API methods, and troubleshooting steps. We build sites that organise technical content into a hierarchy search engines can parse — with TechArticle schema and cross-referenced error guides.',
    challenges: [
      'Competing against Stack Overflow and official documentation',
      'Technical content needs accuracy — developers leave immediately if wrong',
      'Error codes span multiple services and versions',
      'Content must be scannable — developers want answers in seconds',
    ],
    solutions: [
      'Service → Error Code hierarchy with clean URL patterns',
      'TechArticle schema with codeExample markup',
      'HowTo schema on troubleshooting guides',
      'Cross-referenced related errors and solutions',
      'AI crawler rules configured for citation in AI assistants',
    ],
    faqs: [
      { q: 'Do you write the technical content?', a: 'Yes. We research error codes, document causes, and write step-by-step fixes. Each page is editorially reviewed for technical accuracy.' },
      { q: 'Can you cover multiple programming languages?', a: 'Yes. The site architecture supports any number of service categories — each with its own error code hierarchy.' },
    ],
  },
  {
    slug: 'ecommerce',
    name: 'Ecommerce',
    h1: 'SEO Websites for Ecommerce Stores',
    keyword: 'ecommerce seo website',
    description: 'SEO-optimised websites for ecommerce stores. Product category hubs, buying guides, and content commerce architecture that ranks for product and comparison search queries.',
    metaDescription: 'SEO websites for ecommerce stores. Category hubs, buying guides, Product schema, and topical authority architecture. Rank for product search queries in the UK.',
    intro: 'Ecommerce SEO is category architecture. Product pages alone compete against Amazon, eBay, and every marketplace aggregator. Stores that rank build editorial content around their categories — buying guides, comparison pages, and expert recommendations that earn the topical authority product pages cannot build on their own.',
    challenges: [
      'Competing against Amazon and marketplace giants for product terms',
      'Product pages alone lack the content depth to build authority',
      'Category pages need editorial content, not just product grids',
      'Duplicate product descriptions from manufacturers harm rankings',
    ],
    solutions: [
      'Category hub pages with editorial buying guides',
      'Product spoke pages with unique descriptions and comparison context',
      'Product, Offer, and AggregateRating schema for rich results',
      'Buying guide content targeting "best [product] UK" queries',
      'Internal linking from editorial content to product pages',
    ],
    faqs: [
      { q: 'Do you build the full ecommerce store?', a: 'We build the SEO content layer — category architecture, buying guides, product pages. For checkout and payment processing, we integrate with your existing platform or recommend Shopify.' },
      { q: 'How do you handle product schema?', a: 'Every product page gets Product, Offer, and PriceSpecification schema. Category pages get ItemList schema linking to individual products.' },
    ],
  },
  {
    slug: 'trades-and-contractors',
    name: 'Trades & Contractors',
    h1: 'SEO Websites for Tradespeople and Contractors',
    keyword: 'tradesman website seo',
    description: 'SEO-optimised websites for tradespeople, plumbers, electricians, and contractors. Service pages, location coverage, and local SEO architecture that captures trade search queries.',
    metaDescription: 'SEO websites for tradespeople and contractors. Service pages, location coverage, LocalBusiness schema, and topical authority architecture. Rank in your service area.',
    intro: 'Tradespeople lose work to directory sites and competitors with better search presence. A single-page website with a phone number does not rank. We build multi-page sites with service-specific content, location coverage, and proper LocalBusiness schema — the structure that captures "plumber near me" and "electrician in [town]" queries.',
    challenges: [
      'Directory sites (Checkatrade, MyBuilder) dominate the local pack',
      'Most trade websites are single-page brochures with no SEO depth',
      'Multiple service types need distinct landing pages',
      'Local search requires location-specific content, not just a postcode',
    ],
    solutions: [
      'Dedicated service pages for each trade offering',
      'Location pages covering every town and city in the service area',
      'LocalBusiness and Service schema with areaServed',
      'Before-and-after project galleries with structured data',
      'FAQ sections addressing common customer questions per service',
    ],
    faqs: [
      { q: 'I only serve a small area. Do I need location pages?', a: 'Yes. Even covering 5-10 nearby towns gives you pages that rank for "[trade] in [town]" — queries your competitors with one-page sites cannot target.' },
      { q: 'Can I update the site myself after delivery?', a: 'You receive full source code. The Astro framework uses Markdown files that are straightforward to edit. We include documentation on how to add pages.' },
    ],
  },
  {
    slug: 'hospitality',
    name: 'Hospitality',
    h1: 'SEO Websites for Hotels, Restaurants and Pubs',
    keyword: 'hospitality website seo',
    description: 'SEO-optimised websites for hotels, restaurants, pubs, and hospitality businesses. Menu pages, event hubs, and local SEO architecture that captures booking and visit-intent queries.',
    metaDescription: 'SEO websites for hospitality businesses. Menu pages, event hubs, LocalBusiness schema, and SEO architecture. Rank for hotel, restaurant, and pub search queries.',
    intro: 'Hospitality businesses compete against booking platforms and review aggregators for their own brand searches. A website that ranks for your venue name plus relevant service queries — "rooftop bar Manchester", "Sunday lunch near Reading" — reduces dependency on commission-heavy platforms. We build the page structures and schema that make your venue findable.',
    challenges: [
      'Booking platforms (Booking.com, OpenTable) dominate hospitality SERPs',
      'Menus and events change frequently but need stable URL structures',
      'Local SEO requires consistent NAP data and proper LocalBusiness schema',
      'Photo-heavy pages need performance optimisation for Core Web Vitals',
    ],
    solutions: [
      'Menu pages with MenuItem schema and clean URL structure',
      'Event pages with Event schema for rich calendar results',
      'LocalBusiness, Restaurant, or LodgingBusiness schema per venue type',
      'Image optimisation pipeline — WebP/AVIF, lazy loading, explicit dimensions',
      'Location-specific content targeting "[venue type] in [area]" queries',
    ],
    faqs: [
      { q: 'Can I update menus myself?', a: 'Yes. Menu content lives in Markdown files with clear formatting. Adding a dish or changing a price is a text edit.' },
      { q: 'Do you integrate with booking systems?', a: 'We link to your existing booking system. The site drives organic traffic; your booking platform handles reservations.' },
    ],
  },
  {
    slug: 'professional-services',
    name: 'Professional Services',
    h1: 'SEO Websites for Accountants, Solicitors and Consultants',
    keyword: 'professional services website seo',
    description: 'SEO-optimised websites for accountants, solicitors, consultants, and professional service firms. Service pages, expertise content, and E-E-A-T architecture that ranks for professional search queries.',
    metaDescription: 'SEO websites for professional service firms. Service pages, expertise content, ProfessionalService schema, and E-E-A-T architecture. Rank for professional search queries.',
    intro: 'Professional service firms need search visibility that demonstrates expertise. A brochure site with an "About" page and a contact form does not rank for "accountant in Reading" or "employment solicitor UK." We build page structures with service-specific depth, location targeting, and the E-E-A-T signals Google uses to evaluate professional content.',
    challenges: [
      'Professional directories (Law Society, ICAEW) dominate top positions',
      'E-E-A-T requirements are higher for YMYL professional services',
      'Multiple service areas need distinct, substantive landing pages',
      'Client testimonials and case studies need structured data',
    ],
    solutions: [
      'Service pages with genuine expertise content, not generic descriptions',
      'ProfessionalService schema with practitioner credentials',
      'Location pages for each office or service area',
      'Case study and testimonial sections with Review schema',
      'FAQ sections addressing common client questions per service type',
    ],
    faqs: [
      { q: 'How do you handle regulatory compliance in content?', a: 'We do not provide legal or financial advice in content. Service pages describe what you do and how clients benefit. Compliance review is your responsibility before launch.' },
      { q: 'Can you include team member profiles?', a: 'Yes. Team pages with Person schema and credentials strengthen E-E-A-T signals. Each profile links to relevant service pages.' },
    ],
  },
  {
    slug: 'food-and-nutrition',
    name: 'Food & Nutrition',
    h1: 'SEO Websites for Food and Nutrition Brands',
    keyword: 'food website seo',
    description: 'SEO-optimised websites for food brands, nutrition companies, and recipe sites. Guide hubs, calculator tools, and YMYL-compliant content architecture that ranks for food and nutrition queries.',
    metaDescription: 'SEO websites for food and nutrition brands. Guide hubs, recipe schema, nutrition calculators, and E-E-A-T compliant architecture. Rank for food and nutrition search queries.',
    portfolioSite: 'plentii.food',
    intro: 'Food and nutrition content falls under Google\'s YMYL (Your Money or Your Life) guidelines. Rankings require demonstrable expertise, proper citations, and content structures that search engines recognise as trustworthy. We build sites with guide hubs, nutrition calculators, and the E-E-A-T signals that YMYL content demands.',
    challenges: [
      'YMYL content requires demonstrable expertise and proper citations',
      'Recipe sites compete against established platforms (BBC Good Food, Allrecipes)',
      'Nutrition claims need evidence-based sourcing',
      'Calculator and tool pages need unique editorial context',
    ],
    solutions: [
      'Guide hubs with properly cited nutrition information',
      'Recipe pages with full Recipe schema for rich results',
      'Interactive nutrition calculators with unique editorial content',
      'E-E-A-T author signals with dietitian or nutritionist credentials',
      'FAQ sections addressing common nutrition questions with citations',
    ],
    faqs: [
      { q: 'Do I need a qualified nutritionist to review the content?', a: 'For YMYL nutrition content, we recommend professional review. We build the site structure and write the content. Clinical review is an additional step we can arrange.' },
      { q: 'Can you build recipe pages with proper schema?', a: 'Yes. Recipe pages include full Recipe schema — prep time, cook time, ingredients, instructions, nutrition info — structured for rich results in Google Search.' },
    ],
  },
];
