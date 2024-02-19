import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/test-stuff",
  server: {
    open: true,
    port: 1234,
  },
});
