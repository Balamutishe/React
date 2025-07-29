import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
      routesDirectory: "./src/app/routes",
      generatedRouteTree: "./src/app/routes/routeTree.gen.ts",
    }),
    react(),
    tsconfigPaths(),
    tailwindcss(),
  ],
  server: {
    watch: {
      // Исключаем db.json из наблюдения
      ignored: ["**/db.json"],
    },
  },
});
