import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      manifest: {
        name: 'Hoy Pinta',
        short_name: 'HoyPinta',
        description: 'Qué comemos hoy',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: './public/icono-HoyPinta.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: './public/icono-HoyPinta.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})