import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "./src/lib/index.js",
      name: "WebComponentLib",
      fileName: (format) => `web-component-lib.${format}.js`,
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: [],
    },
  },
  plugins: [svelte({ compilerOptions: { customElement: true } })],
});
