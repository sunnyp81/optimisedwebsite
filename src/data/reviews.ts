// =============================================================================
// REVIEWS / TESTIMONIALS DATA SOURCE
// =============================================================================
//
// This is the single source of truth for on-page testimonials AND for the
// AggregateRating / Review JSON-LD schema (see src/data/reviewSchema.ts).
//
// IMPORTANT HONESTY POLICY
// ------------------------
// Google's review snippet guidelines (and basic honesty) forbid publishing
// review/star-rating schema that is not backed by genuine reviews. Every entry
// below ships as a PLACEHOLDER with `published: false` so that:
//   - it does NOT render on the page, and
//   - it is NOT counted toward the AggregateRating schema.
//
// TO GO LIVE WITH A REAL REVIEW:
//   1. Replace the placeholder text with the customer's genuine words.
//   2. Set `published: true`.
//   3. Set `verified: true` ONLY if you can evidence the review (e.g. it exists
//      on Google Business Profile, Trustpilot, an email you can produce, etc.).
//
// The AggregateRating schema renders ONLY when there is at least one review with
// BOTH `published: true` AND `verified: true`. Until then it stays OFF, which is
// the safe and policy-compliant default.
// =============================================================================

export interface Review {
  /** Stable identifier (used for keys and anchors). */
  id: string;
  /** Reviewer's name as it should appear on the page and in schema. */
  author: string;
  /** Reviewer's role / company, e.g. "Owner, Acme Plumbing". Optional. */
  role?: string;
  /** Star rating 1 to 5. Use whole numbers for honesty unless the source allows half-stars. */
  rating: number;
  /** The review body, in the customer's own words. */
  quote: string;
  /** ISO date the review was given, e.g. "2026-05-01". Used for schema datePublished. */
  date: string;
  /** Where the review came from, e.g. "Google", "Email", "Trustpilot". */
  source: string;
  /**
   * Render this review on the page? Defaults OFF for placeholders.
   * Set to true only when the text is a real customer's words.
   */
  published: boolean;
  /**
   * Is this a genuine, evidenced review safe for AggregateRating schema?
   * Set to true only when you can prove the review is real. The schema is
   * gated on this flag so we never emit fabricated ratings to Google.
   */
  verified: boolean;
}

// -----------------------------------------------------------------------------
// PLACEHOLDER ENTRIES
// Replace the quotes with real customer words, then flip published/verified.
// These ship OFF so nothing fake is ever rendered or sent to search engines.
// -----------------------------------------------------------------------------
export const reviews: Review[] = [
  {
    id: 'placeholder-1',
    author: 'PLACEHOLDER: Customer name',
    role: 'PLACEHOLDER: Owner, Example Business',
    rating: 5,
    quote:
      'PLACEHOLDER: Replace with a genuine customer review. Describe the result they got, in their own words. Do not publish until this is real.',
    date: '2026-01-01',
    source: 'PLACEHOLDER: Google',
    published: false,
    verified: false,
  },
  {
    id: 'placeholder-2',
    author: 'PLACEHOLDER: Customer name',
    role: 'PLACEHOLDER: Director, Example Ltd',
    rating: 5,
    quote:
      'PLACEHOLDER: Replace with a genuine customer review. A specific, concrete outcome reads best (e.g. rankings, leads, load times). Do not publish until this is real.',
    date: '2026-01-01',
    source: 'PLACEHOLDER: Email',
    published: false,
    verified: false,
  },
  {
    id: 'placeholder-3',
    author: 'PLACEHOLDER: Customer name',
    role: 'PLACEHOLDER: Founder, Example Co',
    rating: 5,
    quote:
      'PLACEHOLDER: Replace with a genuine customer review. Do not publish until this is real.',
    date: '2026-01-01',
    source: 'PLACEHOLDER: Trustpilot',
    published: false,
    verified: false,
  },
];

// -----------------------------------------------------------------------------
// DERIVED HELPERS
// -----------------------------------------------------------------------------

/** Reviews safe to render on the page (real, published). */
export const publishedReviews = (): Review[] => reviews.filter((r) => r.published);

/**
 * Reviews safe to include in AggregateRating / Review schema.
 * Must be BOTH published and verified, guaranteeing we never emit fake ratings.
 */
export const verifiedReviews = (): Review[] => reviews.filter((r) => r.published && r.verified);

/**
 * Aggregate rating computed from verified reviews only.
 * Returns null when there are no verified reviews, so the schema stays OFF.
 */
export const aggregateRating = (): { ratingValue: string; reviewCount: number } | null => {
  const verified = verifiedReviews();
  if (verified.length < 1) return null;
  const sum = verified.reduce((acc, r) => acc + r.rating, 0);
  const avg = sum / verified.length;
  return {
    ratingValue: avg.toFixed(1),
    reviewCount: verified.length,
  };
};
