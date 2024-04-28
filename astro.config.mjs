import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  markdown: {
    syntaxHighlight: "shiki",
  },
  vite: {
    optimizeDeps: { // https://github.com/withastro/astro/issues/9859#issuecomment-1936746803
      exclude: ["@laniakeajs/halley.http"]
    }
  }
});