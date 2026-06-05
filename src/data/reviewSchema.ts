// =============================================================================
// AGGREGATE RATING + REVIEW JSON-LD GENERATOR
// =============================================================================
//
// Produces schema.org nodes for AggregateRating and individual Review objects,
// attached to the site Organization (@id "<site.url>/#organization").
//
// GATING (anti-fabrication safeguard):
//   reviewSchemaNodes() returns an EMPTY array unless there is at least one
//   review that is BOTH published AND verified (see src/data/reviews.ts). This
//   guarantees we never emit star ratings to Google that are not backed by
//   genuine, evidenced reviews. The default state is therefore OFF.
//
// HOW TO INCLUDE ON A PAGE:
//   ---
//   import Base from '../layouts/Base.astro';
//   import { reviewSchemaNodes } from '../data/reviewSchema';
//   const schemaNodes = [
//     ...reviewSchemaNodes(),
//     // ...any other page-specific nodes
//   ];
//   ---
//   <Base title="..." description="..." schemaNodes={schemaNodes}>
//
// The Base layout passes schemaNodes into SchemaGraph, which wraps them in the
// site @graph. When there are no verified reviews, reviewSchemaNodes() adds
// nothing, so the page schema is unchanged.
// =============================================================================

import { site } from './site';
import { verifiedReviews, aggregateRating } from './reviews';

export function reviewSchemaNodes(): Record<string, unknown>[] {
  const verified = verifiedReviews();
  const agg = aggregateRating();

  // Hard gate: no verified reviews => no rating schema at all.
  if (verified.length < 1 || !agg) return [];

  const orgId = `${site.url}/#organization`;

  const reviewNodes = verified.map((r) => ({
    '@type': 'Review',
    '@id': `${site.url}/#review-${r.id}`,
    itemReviewed: { '@id': orgId },
    author: { '@type': 'Person', name: r.author },
    datePublished: r.date,
    reviewBody: r.quote,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: String(r.rating),
      bestRating: '5',
      worstRating: '1',
    },
  }));

  const aggregateNode = {
    '@type': 'AggregateRating',
    '@id': `${site.url}/#aggregaterating`,
    itemReviewed: { '@id': orgId },
    ratingValue: agg.ratingValue,
    reviewCount: agg.reviewCount,
    bestRating: '5',
    worstRating: '1',
  };

  return [aggregateNode, ...reviewNodes];
}
