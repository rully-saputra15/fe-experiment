import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import MillionLint from "@million/lint";
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite({}), react(), MillionLint.vite()],
})
