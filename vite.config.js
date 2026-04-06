import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  // In dev, serve at `/` but also accept `/portfolio/*` as an alias.
  // In build/preview, keep the subpath base for existing deployments.
  base: command === 'serve' ? '/' : '/portfolio/',
  server: {
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url || '/'

        // Allow `/portfolio` and `/portfolio/` to behave like `/`
        if (url === '/portfolio' || url === '/portfolio/') {
          res.statusCode = 302
          res.setHeader('Location', '/')
          res.end()
          return
        }

        // Allow deep links and asset requests under `/portfolio/*` in dev
        if (url.startsWith('/portfolio/')) {
          req.url = url.slice('/portfolio'.length) || '/'
        }

        next()
      })
    },
  },
}))
