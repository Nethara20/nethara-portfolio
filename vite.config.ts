import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The site is served from https://nethara20.github.io/nethara-portfolio/,
// so every built asset path is prefixed with the repository name.
// Routing uses HashRouter, so page refreshes never hit the server for a sub-path.
export default defineConfig({
  base: '/nethara-portfolio/',
  plugins: [react()],
})
