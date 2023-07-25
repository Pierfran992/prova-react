import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr({
      svgrOptions: {
        ref: true,
      },
    }),
    react(),
  ],
  server: {
    port: 5173,
    host: true,
  },
  build: {
    outDir: "./build",
  },
});
