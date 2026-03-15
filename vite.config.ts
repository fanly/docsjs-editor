import { defineConfig } from "vite-plus";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "DocsjsEditor",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format === "es" ? "js" : "cjs"}`,
    },
    rollupOptions: {
      output: [
        {
          dir: "dist",
          format: "es",
          entryFileNames: "index.js",
          chunkFileNames: "chunks/[name]-[hash].js",
        },
        {
          dir: "dist",
          format: "cjs",
          entryFileNames: "index.cjs",
          chunkFileNames: "chunks/[name]-[hash].cjs",
        },
      ],
      external: ["@coding01/docsjs"],
    },
  },
  test: {
    globals: true,
    environment: "node",
    include: ["tests/**/*.test.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
    },
  },
  lint: {
    plugins: ["oxc", "typescript", "unicorn"],
    ignorePatterns: ["dist/**", "node_modules/**", "coverage/**", "demos/**"],
  },
});
