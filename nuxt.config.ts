import { defineNuxtConfig } from 'nuxt';
import eslintPlugin from 'vite-plugin-eslint';

export default defineNuxtConfig({
  buildModules: ['@pinia/nuxt'],
  vite: {
    plugins: [eslintPlugin()],
  },
  router: {
    options: {}
  }
});
