import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://rexk.github.io",
  markdown: {
    drafts: false,
  },
  integrations: [
    mdx({
      drafts: false,
    }),
    sitemap(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
});
