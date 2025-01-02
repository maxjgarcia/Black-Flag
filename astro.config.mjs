// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind(), react(), icon()],

  adapter: node({
    mode: 'standalone'
  })
});