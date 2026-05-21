export const mainNav = [
  { label: 'Services', href: '/services/' },
  { label: 'Industries', href: '/industry/' },
  { label: 'Learn', href: '/learn/' },
  { label: 'Compare', href: '/compare/' },
  { label: 'Portfolio', href: '/portfolio/' },
  { label: 'How It Works', href: '/how-it-works/' },
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
    { label: 'How Google Ranks Sites', href: '/learn/how-google-ranks-websites/' },
    { label: 'SEO Website Checklist', href: '/learn/seo-website-checklist/' },
    { label: 'E-E-A-T Guide', href: '/learn/eeat-and-trust-signals/' },
  ],
  company: [
    { label: 'About', href: '/about/' },
    { label: 'Portfolio', href: '/portfolio/' },
    { label: 'Case Studies', href: '/case-studies/' },
    { label: 'Contact', href: '/contact/' },
    { label: 'Privacy Policy', href: '/privacy/' },
    { label: 'Terms of Service', href: '/terms/' },
  ],
} as const;
