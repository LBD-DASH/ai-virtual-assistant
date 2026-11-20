import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const services = defineCollection({
  // One Markdown file per service: src/content/services/<slug>.md
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    name: z.string(),
    order: z.number(),
    title: z.string().min(20).max(70),
    description: z.string().min(70).max(160),
    lastUpdated: z.coerce.date(),
    summary: z.string(),
    examples: z.array(z.string()).min(3),
    youProvide: z.array(z.string()).min(2),
    limits: z.array(z.string()).min(2),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).min(1),
  }),
});
export const collections = { services };
