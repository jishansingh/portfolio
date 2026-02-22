# Jishan Singh — Portfolio

A modern single-page portfolio built with React, Vite, and Tailwind CSS.

## Tech Stack

- **React 19** with functional components and hooks
- **Vite** for fast dev/build tooling
- **Tailwind CSS v4** for utility-first styling
- **Framer Motion** for scroll animations
- **react-icons** for technology and social icons
- **react-vertical-timeline-component** for the experience timeline

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
  components/     # All UI components (Navbar, Hero, About, etc.)
  data/           # portfolioData.js — central data file for all content
  App.jsx         # Main app component
  main.jsx        # Entry point
  index.css       # Tailwind directives and custom styles
public/
  images/         # Profile photo and project screenshots
```

## Customization

All portfolio content (personal info, experience, skills, projects, education) lives in `src/data/portfolioData.js`. Edit that single file to update any text, links, or details without touching components.

## Images

Place your images in `public/images/`:

- `profile.jpg` — your headshot (square, 400x400px+)
- `background.png` — hero section background
- `projects/` — project screenshots

## Deployment

Build and deploy the `dist/` folder to any static host (GitHub Pages, Netlify, Vercel, etc.).
