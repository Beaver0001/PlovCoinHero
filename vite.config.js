import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // Vercel использует корень, потому base = '/'
  plugins: [react()]
})
