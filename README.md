# Portfolio

Personal portfolio built with React, Vite, JavaScript, and regular CSS, based on the supplied Figma portfolio.

## Run locally

- `npm install` if dependencies are missing.
- `npm run dev` starts the local development server.
- `npm run build` creates production files in `dist/`.
- `npm run preview` previews the production build.
- `npm run lint` runs ESLint.

On Windows, use `npm.cmd` if PowerShell blocks the npm script wrapper.

## Organization

- `src/components/`: reusable desktop window and icon shortcuts.
- `src/sections/`: Home, About, and Projects with desktop popups and a mobile detail list. Contact links and layout are in src/sections/Contact.jsx and Contact.css.
- `src/data/portfolio.js`: technology groups, education records, and local image lookup.
- `src/assets/portfolio/`: original assets exported through Figma MCP.
- `src/assets/fonts/`: self-hosted Outfit variable font and its license.
- `src/index.css`: shared typography, colors, background, and accessibility styles.
- Section and component CSS files own their responsive layouts.

One scrollable page contains Hero, About, Projects, and Contact. Native anchors (`#home`, `#about`, `#projects`, `#contact`) scroll between sections without a routing library. Globe icons return to the top. Smooth scrolling respects reduced-motion preferences. About uses natural document flow, wrapping logo rows, and a content-sized school timeline instead of the design canvas's fixed positions. Layouts stack on small screens.

## Content still needed

- Project descriptions, technologies, logos, and GitHub links are defined in src/data/projects.js. Desktop uses native dialogs; screens up to 600px show all details inline. Dialogs support Escape, backdrop clicks, focus restoration, and background scroll locking.
- Contact includes email (mailto), LinkedIn, and GitHub links using the supplied destinations and Figma assets.
- Robotics Competition date corrected to S.Y. 2018-2019 as requested.
- Confirm the name of the third Productivity asset before replacing its generic accessible label.

The portrait export is the original high-resolution Figma asset (approximately 12.7 MB). A smaller web export would improve first-load performance while preserving its crop.

No additional runtime dependencies were added.


The supplied desktop icons are 48 x 48 pixel-art assets. CSS uses crisp pixel rendering; all three hero shortcuts share the same responsive icon dimensions. A higher-detail source is needed for more detail.





## GitHub Pages

The production base path is configured for https://hrspnd.github.io/ysabelle-portfolio/.

1. Open repository Settings → Pages.
2. Under Build and deployment, set Source to GitHub Actions.
3. Commit and push the deployment files to main. The Deploy portfolio to GitHub Pages workflow installs dependencies, lints, builds, and deploys dist.
4. You can also run the workflow manually from the Actions tab.

To preview the production build locally, run npm run build and npm run preview, then open http://localhost:4173/ysabelle-portfolio/.

If the repository name or hosting path changes, update base in vite.config.js.


