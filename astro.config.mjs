// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { webcore } from "webcoreui/integration";

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project page configuration
  // For default GitHub Pages URL: https://c-mac.github.io/yfbtc
  // For custom domain (e.g., yfbtc.c-mac.xyz): update site URL and remove base
  site: process.env.ASTRO_SITE_URL || 'https://c-mac.github.io/yfbtc',
  base: '/yfbtc', // Remove this line if using a custom domain at root
  integrations: [tailwind(), webcore()],
});
