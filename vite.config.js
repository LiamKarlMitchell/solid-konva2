import { defineConfig } from 'vite'
import unocssPlugin from "unocss/vite";
import solid from 'vite-plugin-solid'

export default defineConfig({
  plugins: [unocssPlugin(), solid()],
  build: {
    target: "esnext",
  
    lib: {
      name: 'solid-konva',
      entry: ['lib/index.tsx'],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
      cssFileName: 'solid-konva',
    },
  }
});
