import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

const envDir = path.resolve(process.cwd(), "env");
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    server: {
      port: 3000,
      open: "http://localhost:3000/",
    },
    envDir,
    define: {
      APP_VERSION: JSON.stringify(process.env.npm_package_version),
    },
    assetsInclude: ["**/*.zip"],
  };
});
