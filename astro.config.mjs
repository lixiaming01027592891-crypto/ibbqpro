import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://bbqprotw.com',
  integrations: [tailwind()]
});
