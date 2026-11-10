# Repository Guidelines

## Project Structure & Module Organization

This is a static portfolio built with Astro 4, Tailwind CSS 3, and TypeScript.

- `src/pages/index.astro` serves English at `/`; `src/pages/es/index.astro` serves Spanish at `/es/`.
- `src/components/` contains portfolio sections and reusable UI; `src/components/icons/` contains Astro SVG components.
- `src/components/Portfolio.astro` composes both routes; `src/layouts/` contains the shared document wrapper.
- `src/i18n/locales/{en,es}.json` holds translated content, checked against `src/types/content.ts`. Shared links and project metadata live in `src/data/profile.ts`.
- `src/styles/global.css` defines the layout and theme tokens. `public/` holds assets; screenshot provenance is documented in `public/projects/README.md`.
- `astro.config.mjs`, `tailwind.config.mjs`, and `tsconfig.json` configure the application. Generated `dist/` and `.astro/` directories are ignored.

## Build, Test, and Development Commands

Run commands from the repository root:

- `npm ci`: install dependencies from `package-lock.json`.
- `npm run dev` (or `npm start`): start the local Astro development server.
- `npm run astro -- check`: run Astro diagnostics and TypeScript checks.
- `npm run build`: run `astro check`, then generate the production site in `dist/`.
- `npm run preview`: serve the production build locally after building.

Both npm and Bun lockfiles exist; keep dependency changes deliberate and avoid unrelated lockfile churn.

## Coding Style & Naming Conventions

Use PascalCase for Astro components, such as `TitleSection.astro`, and camelCase for TypeScript functions and variables. TypeScript uses Astro's strict configuration; type component props explicitly. Prefer Tailwind utilities for styling and scoped `<style>` blocks for component-specific rules.

Most Astro files use two-space indentation, double quotes, and semicolons in frontmatter. Some configuration and i18n files use tabs or single quotes; follow the surrounding file. No formatter or linter is configured.

## Testing Guidelines

There is no automated test framework, test naming convention, or coverage threshold. Run `npm run build` before submitting code changes. Check `/` and `/es/` at 375, 768, and 1440px, language switching, anchors, project links, keyboard navigation, and light/dark theme persistence. Keep translation keys aligned. Light is the default; verify content without JavaScript and the toggle with storage blocked.

## Content & Design Constraints

Read `PRODUCT.md` and `DESIGN.md` before changing claims or the visual system. NoMasOlvidos remains in development with no real users and WhatsApp pending. Do not publish the source CV, phone number, enterprise screenshots, or unverified results.

## Commit & Pull Request Guidelines

History uses short descriptive subjects in Spanish and English, without a consistent Conventional Commits prefix. Write focused, action-oriented messages, such as `Fix project tag icons`.

Pull requests should explain the change, link a related issue when applicable, and record validation performed. Include screenshots for visual changes and identify any localization or dependency updates.
