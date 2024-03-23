import ssr from "vike/plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { cjsInterop } from "vite-plugin-cjs-interop";

export default defineConfig({
  plugins: [
    react({}),
    ssr({}),
    cjsInterop({
      dependencies: [
        // Add problematic npm package here
        "@mui/material/**",
      ]
    })
  ],
});
