import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// SPA fallback: serve index.html for routes like /bratislava/kurzy so direct URLs and refresh work
function spaFallback() {
  return {
    name: 'spa-fallback',
    configurePreviewServer(server: {
      middlewares: {
        stack: Array<{ route: string; handle: (req: unknown, res: unknown, next: () => void) => void }>
        use: (fn: (req: { url?: string; method?: string }, res: unknown, next: () => void) => void) => void
      }
    }) {
      const handler = (req: { url?: string; method?: string }, _res: unknown, next: () => void) => {
        if (req.url && req.method === 'GET') {
          const path = req.url.split('?')[0]
          if (path.indexOf('.') === -1 && path !== '/') {
            req.url = '/index.html'
          }
        }
        next()
      }
      // Prepend so we rewrite before static server tries to serve files
      server.middlewares.stack.unshift({ route: '', handle: handler as (req: unknown, res: unknown, next: () => void) => void })
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), spaFallback()],
  server: {
    proxy: {
      // Forward /api calls to the Vercel dev server (vercel dev runs on port 3000)
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
})



