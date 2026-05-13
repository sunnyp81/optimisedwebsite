export const mainNav = [
  { label: 'Services', href: '/services/' },
  { label: 'Learn', href: '/learn/' },
  { label: 'Compare', href: '/compare/' },
  { label: 'Portfolio', href: '/portfolio/' },
  { label: 'Pricing', href: '/pricing/' },
] as const;

export const footerNav = {
  services: [
    { label: 'SEO Website Build', href: '/services/seo-website-build/' },
    { label: 'Keyword Research', href: '/services/keyword-research/' },
    { label: 'Schema Markup', href: '/services/schema-markup/' },
    { label: 'Technical SEO Setup', href: '/services/technical-seo-setup/' },
    { label: 'Content Architecture', href: '/services/content-architecture/' },
  ],
  learn: [
    { label: 'What Is an SEO Website', href: '/learn/what-is-an-seo-optimised-website/' },
    { label: 'SEO Website Checklist', href: '/learn/seo-website-checklist/' },
    { label: 'SEO Website Cost UK', href: '/learn/seo-website-cost-uk/' },
    { label: 'Topical Authority', href: '/learn/topical-authority-explained/' },
  ],
  company: [
    { label: 'About', href: '/about/' },
    { label: 'Portfolio', href: '/portfolio/' },
    { label: 'Contact', href: '/contact/' },
  ],
} as const;
