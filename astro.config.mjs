// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { webcore } from "webcoreui/integration";

// https://astro.build/config
export default defineConfig({
  // Site URL for GitHub Pages (set via ASTRO_SITE_URL env var or update directly)
  // For project pages: https://username.github.io/repository-name
  // For user/organization pages: https://username.github.io
  site: process.env.ASTRO_SITE_URL || 'https://c-mac.github.io/yfbtc',
  base: '/yfbtc',
  integrations: [tailwind(), webcore()],
});
