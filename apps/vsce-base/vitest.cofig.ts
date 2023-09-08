import { defineConfig } from "vitest/config";

export default defineConfig({
  define: {
    "import.meta.vitest": "undefined",
  },
  build: {
    rollupOptions: {
      external: ["vscode"],
    },
  },
  test: {
    include: ["src/**/*.{js,ts,tsx,mts,mtsx,cjs,mjs}"],
    includeSource: ["src/**/*.{js,ts,tsx,mts,mtsx,cjs,mjs}"],
  },
});
