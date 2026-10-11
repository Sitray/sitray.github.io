// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://sitray.github.io",
  output: "static",
  // Strip insignificant whitespace from the built HTML (default); the
  // build tests assert against this compact output.
  compressHTML: true,
});
