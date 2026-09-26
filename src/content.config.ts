import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pageSchema = z.object({
  title: z.string(),
  metaTitle: z.string(),
  metaDescription: z.string(),
  h1: z.string(),
  targetKeyword: z.string(),
  intent: z.enum(['informational', 'commercial', 'transactional']),
  schemaTypes: z.array(z.string()),
  relatedSlugs: z.array(z.string()).default([]),
  hubBacklink: z.object({
    anchor: z.string(),
    href: z.string()
  }),
  faqs: z.array(z.object({
    q: z.string(),
    a: z.string()
  })).default([]),
  datePublished: z.string(),
  dateModified: z.string(),
  // Optional citability additions (playbook step 6). Absent on existing
  // pages, so they stay valid: charts default to an empty array and
  // citation defaults to false, both no-ops in [slug].astro.
  charts: z.array(z.object({
    title: z.string(),
    source: z.string(),
    sourceUrl: z.string(),
    date: z.string(),
    unit: z.string().optional(),
    rows: z.array(z.object({
      label: z.string(),
      value: z.number(),
    })),
  })).default([]),
  citation: z.boolean().default(false),
});

export const collections = {
  learn: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/learn' }),
    schema: pageSchema,
  }),
  compare: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/compare' }),
    schema: pageSchema,
  }),
};
