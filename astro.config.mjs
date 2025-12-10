// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { webcore } from "webcoreui/integration";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), webcore()],
});
