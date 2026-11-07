# Portfolio

My personal portfolio, with a little inspiration from Windows XP. It brings together my projects, the tools I work with, my education, and ways to get in touch.

Built with React, JavaScript, Vite, and CSS. I designed the layout in Figma and adapted it for desktop and mobile.

[Visit the portfolio](https://hrspnd.github.io/ysabelle-portfolio/)

## What's inside

- An introduction and a viewable/downloadable CV.
- An About section with my technologies, tools, and education.
- Five projects: CapsiCAM, StardewFest, HAUlam, Stardew Perfection Tracker, and HAUMonsters.
- Links to my email, LinkedIn, and GitHub.

Project details open in desktop-style windows on larger screens and appear in a list on mobile. The CV opens in a popup on desktop and a new tab on mobile.

## Run locally

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. If PowerShell blocks npm, use `npm.cmd` instead.

Other commands:

```sh
npm run build    # Build the site into dist/
npm run preview  # Preview the production build
npm run lint    # Check the JavaScript and JSX
```

The production preview is served at `http://localhost:4173/ysabelle-portfolio/` by default.

## Editing content

- `src/data/portfolio.js` — technology names, school details, and image lookup.
- `src/data/projects.js` — project descriptions, technologies, and repository links.
- `src/sections/Hero.jsx` — introduction and CV button.
- `src/sections/Contact.jsx` — contact links.
- `public/cv.pdf` — the CV; replace this file to update it.

Shared components live in `src/components/`. Each section has its own CSS, while `src/index.css` holds the shared styles and hover effects. Images are in `src/assets/portfolio/`, and the Outfit font and its license are in `src/assets/fonts/`.

## Deployment

The site deploys to GitHub Pages through `.github/workflows/deploy.yml`. Pushes to `main` run lint, build the site, and publish `dist/`.

In the repository's **Settings → Pages**, the source must be set to **GitHub Actions**. Using branch-based deployment publishes the unbuilt source instead.

The Vite base path is `/ysabelle-portfolio/`. Update `base` in `vite.config.js` if the repository name or hosting path changes.


## Troubleshooting Note 

If the deployed site shows a blank page, go to **Actions → Deploy portfolio to GitHub Pages → Run workflow** and rerun it on `main`. Once it finishes, refresh the site. Also check that **Settings → Pages → Source** is still set to **GitHub Actions**.
