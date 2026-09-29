// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://sitray.github.io",
  output: "static",
  // Preserve HTML-aware spacing between inline elements.
  compressHTML: true,
});
