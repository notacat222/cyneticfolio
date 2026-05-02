import { defineCollection } from "astro/content/config";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const works = defineCollection({
    loader:glob({
        pattern: '**/*.md', base: "./src/content/works"
    }),
    schema: z.object({
        type: z.literal(['design', 'art', 'curation', 'about']),
        title: z.string(),
        date: z.date(),
        links: z.url().optional()
    })
    
})

export const collections = {works}