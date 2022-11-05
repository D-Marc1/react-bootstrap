import { defineConfig } from 'vite'

import { fileURLToPath, URL } from 'url'

import react from '@vitejs/plugin-react'

import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), Pages()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
