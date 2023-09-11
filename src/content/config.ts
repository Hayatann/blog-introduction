import { defineCollection, z } from "astro:content";
import { SITE } from "../consts";

const docs = defineCollection({
  schema: z.object({
    title: z.string().default(SITE.title),
    description: z.string().default(SITE.description),
    date: z.string().transform((str) => new Date(str)),
    update_at: z
      .string()
      .transform((str) => new Date(str))
      .optional(),
    lang: z.literal("ja").default(SITE.defaultLanguage),
    dir: z.union([z.literal("ltr"), z.literal("rtl")]).default("ltr"),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    ogLocale: z.string().optional(),
  }),
});

export const collections = { docs };
