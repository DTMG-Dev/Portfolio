# Trinadh Gangadhar Portfolio (Angular + SCSS)

Modern, fully responsive developer portfolio built from resume data with a premium UI, dark/light theme support, and reusable Angular standalone components.

## Stack

- Angular 19 (latest compatible with current Node `20.17` in this environment)
- SCSS (component-scoped styling)
- Flexbox + CSS Grid
- Material Symbols icon font

## Features

- Hero, About, Skills, Projects, Timeline, Contact sections
- Sticky navbar with smooth section scrolling
- Dark/Light mode toggle with localStorage persistence
- Scroll reveal animations (IntersectionObserver directive)
- Loading skeleton state
- SEO meta tags (title, description, Open Graph)
- Resume download CTA (`public/resume.pdf`)

## Resume-Driven Content

Data extracted from the provided resume is centralized in:

- `src/app/data/portfolio.data.ts`

You can update this single file to change profile text, skills, projects, timeline entries, links, and contact pitch.

## Run Locally

1. Install dependencies

```bash
npm install
```

2. Start development server

```bash
npm start
```

3. Open in browser

- `http://localhost:4200`

## Production Build

```bash
npm run build
```

Build output:

- `dist/my-portfolio/browser`

## Deploy To Vercel

This repo is pre-configured for Vercel using `vercel.json`.

1. Push this project to GitHub.
2. In Vercel, click **Add New Project** and import the GitHub repo.
3. Keep defaults (Vercel will use config from `vercel.json`):
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: `dist/my-portfolio/browser`
4. Click **Deploy**.

For every next push to your main branch, Vercel will auto-deploy.

## Project Structure

- `src/app/components/navbar` - sticky nav + theme toggle
- `src/app/components/hero` - hero section + CTA + stat cards
- `src/app/components/about` - intro + strengths chips
- `src/app/components/skills` - categorized skills + progress bars
- `src/app/components/projects` - project cards + stack tags + links
- `src/app/components/timeline` - modern vertical timeline
- `src/app/components/contact` - contact details + form UI (mailto flow)
- `src/app/components/loading-skeleton` - initial loading state
- `src/app/directives/reveal.directive.ts` - scroll animation trigger
- `src/app/services/theme.service.ts` - dark/light state management
- `src/app/data/portfolio.data.ts` - portfolio content source
- `src/styles.scss` - global design tokens and theme variables

## Notes

- Replace placeholder social URLs in `portfolio.data.ts` with your exact LinkedIn/GitHub profile links.
- Resume file is copied to `public/resume.pdf` for direct download from the hero section.
