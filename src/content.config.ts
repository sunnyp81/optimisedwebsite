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
