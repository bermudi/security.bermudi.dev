import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    author: z.string(),
    date: z.string().transform(str => new Date(str)),
    tags: z.array(z.string()),
    image: z.string().url(),
  }),
});

export const collections = {
  'blog': blogCollection,
};