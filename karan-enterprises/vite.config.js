import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Multi-page app: list every HTML entry explicitly. Once `input` is an
      // object the default entry is no longer implicit, so `index.html` (the
      // home page) must be named here alongside `services.html`.
      input: {
        main: resolve(__dirname, 'index.html'),
        services: resolve(__dirname, 'services.html'),
        projects: resolve(__dirname, 'projects.html'),
      },
    },
  },
})
