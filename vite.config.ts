import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import type { UserConfig, ConfigEnv } from 'vite';

// Configuration commune pour les plugins Svelte
const sveltePlugin = svelte({
  compilerOptions: { customElement: true }
});

// Configuration par défaut pour la lib complète
const defaultConfig = defineConfig({
  build: {
    lib: {
      entry: './src/lib/index.js',
      name: 'WebComponentSvelte5',
      formats: ['es', 'umd'],
      fileName: (format) => `webComponentSvelte5.${format}.js`
    }
  },
  plugins: [sveltePlugin]
});

// Configuration pour les composants individuels
const componentsConfig = defineConfig({
  build: {
    outDir: 'dist/components',
    rollupOptions: {
      input: {
        'counter': './src/lib/components/counter/index.js',
        'counterDisplay': './src/lib/components/counterDisplay/index.js'
      },
      output: {
        format: 'es',
        entryFileNames: '[name].js'
      }
    }
  },
  plugins: [sveltePlugin]
});

// Exporter la configuration en fonction du mode
export default ({ mode }: ConfigEnv): UserConfig => {
  if (mode === 'components') {
    return componentsConfig;
  }
  return defaultConfig;
};
