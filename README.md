# Daniel Samoei — Developer Portfolio

A fast, accessible personal portfolio for Daniel Samoei, built with Next.js and
React and exported as a static site for GitHub Pages. The portfolio highlights
software engineering, data and business intelligence, and applied AI work.

## What is included

- Responsive single-page portfolio with working section navigation.
- Verified links to public project repositories; prototypes and planned work
  are labeled separately.
- Interactive, keyboard-accessible skill groups and a mobile navigation menu.
- SEO, canonical URL, Open Graph and Twitter metadata, a social preview image,
  sitemap, and robots file.
- GitHub Actions workflow to build and deploy the static export to GitHub Pages.
- Direct email, GitHub, and LinkedIn contact links. A contact form is omitted
  until a secure backend or trusted form provider is configured.

The project diagrams are illustrative, not screenshots of deployed products.
No live application demos or production deployments are claimed.

## Run locally

Requirements: Node.js 22 or newer and npm.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validate and build

```bash
npm run lint
npm run build
```

`npm run build` creates the deployable static site in `out/`.

## Publish to GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys on each push
to `main`.

1. Check your GitHub account for an existing repository named
   `cheseny1996.github.io`. Do not replace an existing repository without
   reviewing its contents and confirming that is what you want.
2. If the repository does not exist, create a **new public repository** named
   `cheseny1996.github.io`. Do not initialize it with a README or other files.
3. From this project directory, initialize and push the project:

   ```bash
   git init -b main
   git add .
   git commit -m "Build Daniel Samoei portfolio"
   git remote add origin https://github.com/cheseny1996/cheseny1996.github.io.git
   git push -u origin main
   ```

4. In the repository, open **Settings → Pages** and set the build and
   deployment source to **GitHub Actions**.
5. Check the **Actions** tab for the deployment workflow. After it succeeds,
   the site will be available at
   [https://cheseny1996.github.io](https://cheseny1996.github.io).

The public account currently has no repository with that Pages name. Verify
again before creating or pushing, since the repository may be private or may
have changed.

## Content maintenance

- Edit project descriptions and status labels in `src/app/page.js`. Use
  `Built`, `Prototype`, and `Planned` accurately; add repository or demo links
  only when they exist.
- Add verified education and certification details in the credentials
  section of `src/app/page.js`.
- The contact email is taken from Daniel's public project documentation.
- Update metadata in `src/app/layout.js` and keep `public/og-image.svg` and
  `public/og-image.png` in sync if the portfolio branding changes.

## Technology

Next.js App Router, React, plain CSS, and GitHub Actions. Static export keeps
hosting simple and avoids requiring a runtime server, credentials, or
third-party form service.
