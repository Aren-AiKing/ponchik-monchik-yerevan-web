import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/ponchik-monchik-yerevan-web/",
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  build: {
    outDir: "dist",
  },
  // Treat ?url imports as normal asset URLs (used in __root.tsx for SSR CSS)
  assetsInclude: ["**/*.css"],
});
