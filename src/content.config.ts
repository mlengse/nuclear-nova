import { defineCollection } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";
import { docsLoader } from "@astrojs/starlight/loaders";
import { pageThemeObsidianSchema } from "starlight-theme-obsidian/schema";

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: pageThemeObsidianSchema
    })
  }),
};
