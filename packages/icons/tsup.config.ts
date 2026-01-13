import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/react/index.ts'], // Masuk dari file index yang digenerate script tadi
  format: ['cjs', 'esm'], // Support CommonJS dan ES Modules
  dts: true, // Generate file definisi TypeScript (.d.ts)
  minify: true,
  clean: true,
  external: ['react'], // Jangan bundle React-nya, pakai React dari project user
});