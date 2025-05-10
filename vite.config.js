import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/News-Explorer/",
  server: {
    port: 3000,
    proxy: {
      "/news": {
        target: "https://newsapi.org/v2",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/news/, "/everything"),
      },
    },
  },
  build: {
    outDir: "dist",
  },
});
