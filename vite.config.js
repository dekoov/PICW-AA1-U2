import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            // Esto simula el comportamiento de Vercel en local
            '/api/weather': {
                target: 'https://api.openweathermap.org/data/2.5/weather',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api\/weather/, ''),
            },
        },
    },
})
