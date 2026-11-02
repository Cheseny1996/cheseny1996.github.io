# Daniel Samoei — Developer Portfolio

A fast, accessible personal portfolio built with Next.js and React and exported
as a static site for GitHub Pages. It highlights software engineering, data and
business intelligence, and applied AI work.

## What is included

- Responsive single-page portfolio with working section navigation.
- Verified links to public project repositories and live previews; prototypes
  and planned work are labeled separately.
- Interactive, keyboard-accessible skill groups and a mobile navigation menu.
- SEO, canonical URL, Open Graph and Twitter metadata, a social preview image,
  sitemap, and robots file.
- GitHub Actions workflow to build and deploy the static export to GitHub Pages.
- Direct email, GitHub, and LinkedIn contact links. A contact form is omitted
  until a secure backend or trusted form provider is configured.

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

The existing public repository is
[cheseny1996/cheseny1996.github.io](https://github.com/Cheseny1996/cheseny1996.github.io).
The workflow in `.github/workflows/deploy.yml` builds and deploys on each push
to `main`; do not recreate or force-push over this repository. In repository
settings, set **Pages → Build and deployment → Source** to **GitHub Actions**,
then verify the workflow in the **Actions** tab. The site is served at
[https://cheseny1996.github.io](https://cheseny1996.github.io).

## Featured marketplace

Elliot's Global Marketplace is available at
[elliotsglobal-marketplace.vercel.app](https://elliotsglobal-marketplace.vercel.app/)
and its source is in the public
[elliotsglobal-marketplace repository](https://github.com/Cheseny1996/elliotsglobal-marketplace).
The storefront and sample catalog are public. MongoDB-backed accounts and
Stripe payments need service configuration before they can be used live.

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
