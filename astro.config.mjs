import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // TODO: Change to 'https://cjhperez.com' and remove base once custom domain is configured
  site: 'https://fr4nzz.github.io',
  base: '/abogadoPerez',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
