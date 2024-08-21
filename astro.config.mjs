import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://zsakkata.netlify.app/",
  integrations: [preact()],
  output: 'server',
  adapter: netlify()
});