import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import preact from "@astrojs/preact";

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: "https://zsakkata.netlify.app/",
  integrations: [preact(), mdx()],
  output: 'server',
  adapter: netlify()
});