import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // If you host this as a project page (https://<user>.github.io/<repo>/)
  // the `base` should point to the repo name. Allow override via VITE_BASE env.
  base: process.env.VITE_BASE || '/github-mcp-auto-create/',
  plugins: [react()],
})
