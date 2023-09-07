import { defineConfig } from "vite";

export default defineConfig({
  define: {
    "import.meta.vitest": "undefined",
  },
  build: {
    sourcemap: true,
    lib: {
      formats: ["es", "cjs"],
      fileName: (format) => (format === "es" ? "index.mjs" : "index.cjs"),
      entry: "src/index.ts",
    },
  },
  test: {
    includeSource: ["src/**/*.{js,ts,tsx,mts,mtsx,cjs,mjs}"],
  },
});
