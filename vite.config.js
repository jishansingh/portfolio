import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(() => ({
  plugins: [react(), tailwindcss()],
  // Build for root hosting. We duplicate the built output into `/portfolio/`
  // in a post-build step so both paths work on the same Pages site.
  base: '/',
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
