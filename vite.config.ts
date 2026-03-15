import { defineConfig } from "vite-plus";

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: "src/index.ts",
        browser: "src/browser.ts",
      },
      name: "DocsjsEditor",
      formats: ["es", "cjs"],
      fileName: (format, entryName) => `${entryName}.${format === "es" ? "js" : "cjs"}`,
    },
    rollupOptions: {
      output: [
        {
          dir: "dist",
          format: "es",
          entryFileNames: "[name].js",
          chunkFileNames: "chunks/[name]-[hash].js",
        },
        {
          dir: "dist",
          format: "cjs",
          entryFileNames: "[name].cjs",
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
