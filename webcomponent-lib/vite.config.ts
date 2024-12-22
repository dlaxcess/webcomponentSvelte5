import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "./src/lib/index.js",
      name: "MyComponent",
      fileName: (format) => `my-component.${format}.js`,
      formats: ["es", "umd"],
    },
    rollupOptions: {
      // Assurez-vous de ne pas embarquer les dépendances externes
      external: [],
    },
  },
  plugins: [svelte({ compilerOptions: { customElement: true } })],
});
