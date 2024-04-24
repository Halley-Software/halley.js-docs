import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: { // https://github.com/withastro/astro/issues/9859#issuecomment-1936746803
    optimizeDeps: {
      exclude: ["@laniakeajs/halley.http"]
    }
  }
});