import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
   esbuild: {
      target: "es2020"
   },
   optimizeDeps: {
      esbuildOptions : {
          target: "es2020"
      }
   },
   plugins: [react(), nodePolyfills()],
   define: {
      "process.env": {},
   },
});
