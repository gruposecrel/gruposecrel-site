import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  server: { port: 5180 },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          animations: ['gsap', 'motion', 'lenis'],
          i18n: ['i18next', 'react-i18next'],
          ui: ['@radix-ui/react-accordion', '@radix-ui/react-dialog', '@radix-ui/react-tabs', 'lucide-react'],
        },
      },
    },
  },
})
