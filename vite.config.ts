import { defineConfig } from "vite";
import { resolve } from "path";
import tsconfigPaths from "vite-tsconfig-paths";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { sveltePreprocess } from "svelte-preprocess";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    svelte({
      // sveltePreprocess erlaubt dir SASS und TS innerhalb von .svelte-Dateien
      preprocess: sveltePreprocess({
        scss: {
          // falls du globale SASS-Variablen bzw. Mixins nutzen möchtest
          // kannst du hier ein global file referenzieren
          prependData: `@import "./src/sass/_mixin.sass";`
        },
        sourceMap: true,
      })
    })
  ],
  build: {
    rollupOptions: {
      input: {
        app: resolve(__dirname, "src/app.ts"),
        settings: resolve(__dirname, "src/settings.ts"),
        background: resolve(__dirname, "src/background.ts"),
      },
      output: {
        entryFileNames: "[name].js",
        dir: resolve(__dirname, "dist"),
      },
    },
    sourcemap: true,
  },
  resolve: {
    // Neben .ts/.js solltest du nun auch .svelte in der Auflösung haben
    extensions: [".tsx", ".ts", ".js", ".svelte", ".scss", ".sass"],
  },
  esbuild: {
    include: /.*\.tsx?$/,
    exclude: [/node_modules/, /dist/],
  },
});
