# Sergio Llenderrozos — Portfolio

Bilingual, static portfolio for a C#/.NET software engineer, built with Astro 4, TypeScript, Tailwind CSS 3, and self-hosted Onest fonts.

## Development

```sh
npm ci
npm run dev
npm run build
npm run preview
```

`build` runs Astro/TypeScript diagnostics before producing `dist/`. English lives at `/`, Spanish at `/es/`. The canonical site is configured in `astro.config.mjs`; update `site` if the production domain changes.

## Content and design

- `src/i18n/locales/{en,es}.json`: equivalent translated content, checked against `src/types/content.ts`.
- `src/data/profile.ts`: shared contact details, project URLs, status, technologies, and optional screenshots. A missing image renders a text-only project.
- `src/components/Portfolio.astro`: the shared page composition for both languages.
- `src/styles/global.css`: responsive layout and light/dark design tokens.
- `PRODUCT.md`: confirmed professional facts and publishing constraints.
- `DESIGN.md`: visual system and implementation conventions.
- `public/projects/README.md`: screenshot sources and capture details.

Keep the NoMasOlvidos development status, testing context, lack of real users, and pending WhatsApp Business integration explicit. Do not publish enterprise screenshots, private identifiers, the source CV, a phone number, or unverified results. Project screenshots must come from the actual public websites.

## Verification

Run `npm run build`, then check both languages at 375, 768, and 1440px in both themes. Verify keyboard navigation, the skip link, contrast, local anchors, image loading, language switching, and theme persistence. Light is the default, including on a dark operating system; navigation and content remain available without JavaScript. With storage blocked, the theme toggle still works for the current page.

Local browser captures and reports live in `.impeccable/review/` and `output/playwright/`, both ignored by Git. When Impeccable is installed, run its mechanical detector on the changed components and styles after a UI change. No automated test framework or linting tool is configured.

This update is prepared for local review; it does not publish or change hosting.
