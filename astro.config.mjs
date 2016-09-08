import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://rexk.github.io",
  markdown: {
    drafts: true,
  },
  integrations: [
    mdx({
      drafts: true,
    }),
    sitemap(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
});
