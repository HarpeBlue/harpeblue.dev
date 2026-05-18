# Repository Guidelines

## Project

`harpeblue.dev` is the professional portfolio for Harold Peñaloza / HarpeBlue.

The site should remain fast, clear, bilingual, accessible, and visually aligned with HarpeBlue Signal.

## Stack

- Astro
- TypeScript
- CSS
- `@harpeblue/signal`
- Static deployment through Vercel

## Commands

Run from the repository root:

```bash
npm run build
npm run dev
npm run preview
```

Use `npm run build` before considering implementation work complete.

## Architecture

- `src/pages/` defines routes.
- `src/components/` contains reusable UI sections.
- `src/data/content/en.ts` contains English content.
- `src/data/content/es.ts` contains Spanish content.
- `src/data/content/index.ts` combines localized content.
- `src/layouts/BaseLayout.astro` owns document structure and metadata.
- `src/styles/global.css` owns portfolio-level global styles.

Keep content separate from presentation. Prefer updating localized data files instead of hardcoding copy inside components.

## HarpeBlue Signal

- Use `@harpeblue/signal` classes first for recurring visual patterns.
- Use local CSS only for portfolio-specific layout or composition.
- Do not recreate buttons, badges, cards, shell/page containers, or theme behavior locally if Signal already provides them.
- If a visual pattern will be reused across HarpeBlue projects, propose adding it to `@harpeblue/signal` instead of duplicating it here.

Preferred ownership model:

```txt
HarpeBlue Signal -> identity, tokens, reusable components.
Portfolio CSS    -> section composition and project-specific layout.
```

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

- Keep canonical URLs aligned with `https://harpeblue.dev/` and `https://harpeblue.dev/es/`.
- Keep alternate language metadata for `en`, `es`, and `x-default`.
- Keep public CV files under `public/resume/`.
- Do not expose private phone-number CV versions in `public/`.
- Vercel deploys from `main` after push.

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
