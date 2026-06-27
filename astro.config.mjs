// @ts-check

import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://www.quinchy.dev",
  output: "server",
  adapter: cloudflare({
    imageService: "compile",
  }),
  integrations: [react(), sitemap()],
  build: {
    inlineStylesheets: "always",
  },
  vite: {
    // Modern target so esbuild stops emitting legacy transforms/polyfills.
    build: { target: "es2022" },
    plugins: [tailwindcss()],
    ssr: {
      external: ["nodemailer"],
    },
  },
});
