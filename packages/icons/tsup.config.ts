import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/index.ts", // Entry utama
    "src/react/default/outline/index.ts",
    "src/react/default/solid/index.ts",
  ],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  external: ["react"],
  minify: true,
  // Penting: Agar struktur folder di dist sama dengan di src
  splitting: false,
  bundle: true,
});
