# CaMiL Website

Public website for **CaMiL**, a Scala framework for multiparty computation exploring how capabilities and placement types can unify multitier, choreographic, and collective programming in one typed distributed model.

Built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build).

## Project Structure

```
src/
├── assets/              # Logos, fonts, and graphics
├── components/
│   ├── BrandName.astro  # Styled CaMiL logotype
│   └── home/            # Homepage section components
│       ├── EvidenceStrip.astro
│       ├── Foundations.astro
│       ├── Publications.astro
│       ├── SafetyFeatures.astro
│       └── ...
├── config/
│   └── site.ts          # Shared brand name and site metadata
├── content/
│   └── docs/
│       └── index.mdx    # Homepage content
└── styles/
    └── global.css       # Theme, fonts, and component styles
```

## Commands

```bash
npm install       # Install dependencies
npm run dev       # Start dev server at localhost:4321
npm run build     # Build for production
npm run preview   # Preview the production build
```

## Configuration

The framework name is defined in `src/config/site.ts`. Update it there to propagate the change across all components and the Starlight config.

## Deployment

The site is deployed to GitHub Pages via the workflow in `.github/workflows/github-pages.yml`. It is served under `https://nicolasfarabegoli.it/locix-website/`.
