import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import type { UserConfig, ConfigEnv } from "vite";
import { readdirSync, Dirent } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Configuration commune pour les plugins Svelte
const sveltePlugin = svelte({
  compilerOptions: { customElement: true },
});

// Fonction pour générer dynamiquement les inputs des composants
function getComponentInputs(): Record<string, string> {
  const componentsDir = join(__dirname, "src/lib/components");
  const components = readdirSync(componentsDir, { withFileTypes: true })
    .filter((dirent: Dirent) => dirent.isDirectory())
    .reduce(
      (acc: Record<string, string>, dirent: Dirent) => ({
        ...acc,
        [dirent.name]: join(componentsDir, dirent.name, "index.js"),
      }),
      {}
    );

  return components;
}

// Configuration par défaut pour la lib complète
const defaultConfig = defineConfig({
  build: {
    lib: {
      entry: "./src/lib/index.js",
      name: "WebComponentSvelte5",
      formats: ["es", "umd"],
      fileName: (format) => `webComponentSvelte5.${format}.js`,
    },
  },
  plugins: [sveltePlugin],
  resolve: {
    alias: {
      $lib: join(__dirname, 'src/lib'),
      '@assets': join(__dirname, 'src/assets'),
      '@components': join(__dirname, 'src/lib/components')
    }
  }
});

// Configuration pour les composants individuels
const componentsConfig = defineConfig({
  build: {
    outDir: "dist/components",
    rollupOptions: {
      input: getComponentInputs(),
      output: {
        format: "es",
        entryFileNames: "[name].js",
      },
    },
  },
  plugins: [sveltePlugin],
  resolve: {
    alias: {
      $lib: join(__dirname, 'src/lib'),
      '@assets': join(__dirname, 'src/assets'),
      '@components': join(__dirname, 'src/lib/components')
    }
  }
});

// Exporter la configuration en fonction du mode
export default ({ mode }: ConfigEnv): UserConfig => {
  if (mode === "components") {
    return componentsConfig;
  }
  return defaultConfig;
};
