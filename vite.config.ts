import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import UnoCSS from "unocss/vite";
import transformerDirective from "@unocss/transformer-directives";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS({
      transformers: [transformerDirective()],
      mode: "dist-chunk",
    }),
    react(),
  ],
  resolve: {
    extensions: [".tsx"],
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
      {
        find: "#",
        replacement: path.resolve(__dirname, "types"),
      },
    ],
  },
});
