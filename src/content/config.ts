import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.string(),
    author: z.string().optional(),
    category: z.string(),
    tags: z.array(z.string()).optional(),
    image: z.string(),
    image_1_prompt: z.string().optional(),
    image_2_prompt: z.string().optional(),
  }),
});

export const collections = { blog };
