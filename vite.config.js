import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/save": {
        target: "http://localhost:5050",
        changeOrigin: true,
      },
      "/urls": {
        target: "http://localhost:5050",
        changeOrigin: true,
      },
      "/api": {
        target: "http://localhost:5050",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
