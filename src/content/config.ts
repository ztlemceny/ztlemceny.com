import { z, defineCollection } from 'astro:content';

const tours = defineCollection({
  type: 'content',
  schema: z.object({
    lang: z.enum(['fr', 'en', 'ar']),
    title: z.string(),
    tagline: z.string(),
    duration: z.string(),
    difficulty: z.string(),
    images: z.array(z.string()),
    included: z.array(z.string()),
    not_included: z.array(z.string()),
    order: z.number(),
    featured: z.boolean().optional(),
    price: z.string().optional(),
    extra_person_fee: z.number().optional(),
    itinerary: z.array(z.string()).optional(),
  }),
});

const about = defineCollection({
  type: 'content',
  schema: z.object({
    lang: z.enum(['fr', 'en', 'ar']),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    lang: z.enum(['fr', 'en', 'ar']),
    title: z.string(),
    excerpt: z.string(),
    image: z.string(),
    date: z.string(),
    author: z.string().optional(),
  }),
});

export const collections = { tours, about, blog };
