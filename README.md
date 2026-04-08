# LociX Website

This repository contains the public website for LociX, the Scala artifact used to communicate a research line on unifying multitier, choreographic, and aggregate programming through capabilities and placement types.

## Site Structure

- `src/content/docs/index.mdx`: homepage and public positioning.
- `src/content/docs/research.mdx`: research framing, terminology bridge, and dissemination kit.
- `src/content/docs/evidence.mdx`: paper-backed and repo-backed public claims.
- `src/content/docs/examples.mdx`: curated entry points into the code artifact.
- `src/assets/locix-thesis-map.svg`: thesis graphic used on the homepage.
- `public/social/`: generated share assets.
- `public/papers/`: downloadable paper artifacts served by the site.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Public Framing Rules

Use `LociX` as the public artifact name.

When the paper name must be mentioned, use the canonical bridge sentence:

> The OOPSLA submission presents the underlying framework as Party; LociX is the public Scala implementation and artifact.

Do not introduce quantitative claims on the site unless they are traceable to the submitted paper or the public repository.
