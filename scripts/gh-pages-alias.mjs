import fs from 'node:fs/promises'
import path from 'node:path'

async function exists(p) {
  try {
    await fs.access(p)
    return true
  } catch {
    return false
  }
}

const distDir = path.resolve('dist')
const indexHtml = path.join(distDir, 'index.html')

if (!(await exists(indexHtml))) {
  console.error('Expected build output at dist/index.html. Run `npm run build` first.')
  process.exit(1)
}

const portfolioDir = path.join(distDir, 'portfolio')
await fs.mkdir(portfolioDir, { recursive: true })

// Make SPA routes work on GitHub Pages
await fs.copyFile(indexHtml, path.join(distDir, '404.html'))

// Serve the same site under `/portfolio/`
await fs.copyFile(indexHtml, path.join(portfolioDir, 'index.html'))
await fs.copyFile(indexHtml, path.join(portfolioDir, '404.html'))

console.log('Created GitHub Pages aliases: /portfolio/ and 404.html fallbacks.')
