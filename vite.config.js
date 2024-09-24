import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '192.168.1.208',  // Permet d'accéder à partir d'autres appareils sur le même réseau
    port: 3000,        // Choisissez un port libre (3000 est l'exemple ici)
  },
  plugins: [react()],
})
