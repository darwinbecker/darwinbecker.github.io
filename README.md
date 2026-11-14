# darwinbecker.github.io

Personal portfolio for Darwin Becker, built with Next.js and deployed as a static site to GitHub Pages.

## Requirements

- Node.js 26 LTS
- npm

## Local development

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Check TypeScript without emitting files |
| `npm run build` | Build the statically exported site into `out/` |

## Deployment

The GitHub Actions workflow in `.github/workflows/deploy.yml` runs on pushes to `main` and can also be started manually. It installs dependencies, runs ESLint and TypeScript checks, builds the site, and deploys the `out/` directory using the official GitHub Pages actions.

In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. This repository is served at the user-level domain `darwinbecker.github.io`, so the Next.js configuration intentionally does not use a `basePath`.

## Project structure

```text
src/app/       App Router routes and global styles
docs/          Project plan and design system
.github/       GitHub Actions workflows
```
