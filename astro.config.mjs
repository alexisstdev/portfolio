import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  plugins: [preact()],
  integrations: [preact()],
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    imageService: true,
  }),
});
