# Repository Guidelines

## Project

`harpeblue.com` is the professional portfolio for Harold Peñaloza / HarpeBlue.

The site should remain fast, clear, bilingual, accessible, and visually aligned with the dark HarpeBlue identity.

## Stack

- Astro
- TypeScript
- CSS
- Static deployment through Cloudflare Workers Static Assets

## Commands

Run from the repository root:

```bash
npm run build
npm run dev
npm run preview
```

Use `npm run build` before considering implementation work complete.

Production is connected to the `HarpeBlue/harpeblue.com` repository through Cloudflare Workers Builds:

- Worker project: `harpeblue-com`
- Production branch: `main`
- Root directory: `/`
- Node.js: `22.12.0`
- Build command: `npm run build`
- Deploy command: `npx wrangler@latest deploy --assets ./dist --name harpeblue-com --compatibility-date 2026-08-18`

## Architecture

- `src/pages/` defines routes.
- `src/components/` contains reusable UI sections.
- `src/data/content/en.ts` contains English content.
- `src/data/content/es.ts` contains Spanish content.
- `src/data/content/index.ts` combines localized content.
- `src/data/site.ts` owns canonical site identity, routes, and public links.
- `src/layouts/BaseLayout.astro` owns document structure and metadata.
- `src/styles/global.css` owns portfolio-level global styles.

Keep content separate from presentation. Prefer updating localized data files instead of hardcoding copy inside components.

## Visual Ownership

- Keep this portfolio's tokens, primitives, and composition local to the repository.
- Do not add `@harpeblue/signal` as a runtime dependency; HarpeBlue Signal remains a separate portfolio project.
- Keep the local visual foundation intentionally small: one dark identity, a bounded token set, and only the primitives used by this site.
- Prefer component-scoped CSS for section composition and `src/styles/global.css` for tokens, reset, accessibility helpers, and genuinely shared primitives.
- If a visual pattern later proves reusable across multiple HarpeBlue projects, propose it separately instead of coupling this portfolio to a general library preemptively.

## Bilingual Content

- Keep `/` as English.
- Keep `/es/` as Spanish.
- Preserve proper nouns and brand names exactly:
  - Harold Peñaloza
  - HarpeBlue
  - HarpeBlue Signal
  - Ubidots S.A.S.
  - Omarchy
  - Terminal Lab
- Use `CV` instead of `Resume` in visible CTA labels.
- Use `translate="no"` for proper nouns rendered in components when browser translation could alter them.
- Keep English and Spanish content structures aligned.

## SEO And Deployment

- Keep canonical URLs aligned with `https://harpeblue.com/` and `https://harpeblue.com/es/`.
- Keep alternate language metadata for `en`, `es`, and `x-default`.
- Keep public CV files under `public/resume/`.
- Do not expose private phone-number CV versions in `public/`.
- Cloudflare Workers Builds deploys from `main` after push.
- Keep `harpeblue.com` as the production custom domain and preserve the permanent, path/query-safe redirect from `www.harpeblue.com` to the apex.
- `harpeblue.dev` is intentionally retired and must not be treated as a deployment or redirect requirement.

## Git

- Use gitmoji commit messages in this format:

```txt
<gitmoji> <module>: <description>
```

Examples:

```txt
✨ setup: scaffold Astro portfolio
🎨 styles: improve responsive visual cohesion
🌐 i18n: preserve proper nouns and CV label
```

- Do not commit without explicit approval from the repository owner.
- Before committing, run `npm run build` and inspect `git status --short`.
- Never revert unrelated user changes.

## Quality Bar

- Prioritize clarity for recruiters and hiring managers.
- Keep sections scannable and impact-oriented.
- Avoid adding technologies, skills, or claims that are not supported by the portfolio content.
- Keep UI responsive on desktop, tablet, and mobile.
- Avoid visual changes that make the portfolio feel disconnected from the dark HarpeBlue identity.
- Prefer small, explainable changes over large rewrites.

## When Editing

- Explain the concept behind non-trivial changes.
- For UI changes, verify with `npm run build` and, when useful, screenshots at desktop and mobile widths.
- For i18n changes, update both language files unless the change is intentionally language-specific.
- For SEO changes, update both routes when metadata behavior is shared.
