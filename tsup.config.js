import { defineConfig } from "tsup";

const commonConfig = {
  minify: true,
  format: ["esm", "cjs"],
  sourcemap: true,
  splitting: true,
  clean: true,
  dts: true,
  external: ["react", "react-dom"],
};
export default defineConfig([
  {
    ...commonConfig,
    esbuildOptions: (options) => {
      // Append "use client" to the top of the react entry point
      options.banner = {
        js: '"use client";',
      };
    },
    entry: ["src/index.ts"],
    outDir: "dist",
  },
]);
