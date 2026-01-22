import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "consultation-toe-sql-neighbor.trycloudflare.com",
      "comments-launch-unlimited-measures.trycloudflare.com",
      "sue-namely-structured-thehun.trycloudflare.com",
      "affects-virtue-required-deluxe.trycloudflare.com",
    ],
  },
});
