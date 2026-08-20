import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().optional(),
    tags: z.array(z.string()).default([]),
    image: z.object({ url: z.string(), alt: z.string() }).optional(),
  }),
});

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/case-studies' }),
  schema: z.object({
    title: z.string(),
    blurb: z.string(),
    pageTitle: z.string().optional(),
    service: z
      .enum(['forecasting', 'modeling', 'instrumentation', 'hydrogeology', 'water-resources'])
      .optional(),
    featured: z.boolean().default(false),
    image: z.string().optional(),
    imageBg: z.string().optional(),
    facts: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
  }),
});

export const collections = { blog, caseStudies };
