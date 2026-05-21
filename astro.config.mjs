import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import AstroPWA from '@vite-pwa/astro';

export default defineConfig({
  site: 'https://ztlemceny.com',
  integrations: [
    tailwind(),
    AstroPWA({
      manifest: {
        name: 'Ztlemceny - Tlemcen Tours',
        short_name: 'Ztlemceny',
        description: 'Tlemcen, as only a local can tell. Guided tours with Hamza.',
        theme_color: '#8B4513',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: '/pwa-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp}'],
      },
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'ar'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  output: 'static',
});
