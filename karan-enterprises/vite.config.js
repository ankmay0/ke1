import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Single-page app: one HTML entry (index.html) boots React Router, which
// renders every route client-side. The dev server falls back to index.html
// for unknown paths automatically; production needs the SPA rewrite in
// vercel.json.
export default defineConfig({
  plugins: [react()],
})
