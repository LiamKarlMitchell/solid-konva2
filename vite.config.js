import { defineConfig } from "vite";
import unocssPlugin from "unocss/vite";
import solid from "vite-plugin-solid";

export default defineConfig({
  plugins: [unocssPlugin(), solid()],
  build: {
    target: "esnext",
    lib: {
      name: "solid-konva",
      entry: ["lib/index.tsx"],
      fileName: (format) => `solid-konva2.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["solid-js", "konva"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          "solid-js": "Solid$$",
          konva: "Konva",
        },
      },
    },
  },
});
