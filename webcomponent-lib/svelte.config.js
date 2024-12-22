import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
      },
      preprocess: vitePreprocess(),
    }),
  ],
})
