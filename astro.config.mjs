// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { webcore } from "webcoreui/integration";

// https://astro.build/config
export default defineConfig({
  // Custom domain configuration for yfbtc.c-mac.xyz
  site: process.env.ASTRO_SITE_URL || 'https://yfbtc.c-mac.xyz',
  integrations: [tailwind(), webcore()],
});
