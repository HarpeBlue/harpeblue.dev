## 1. Domain and Content Foundation

- [x] 1.1 Add a dependency-free `src/data/site.ts` source of truth for the `.com` base URL, locale routes, repository, email, social image, and verified profile links; set Astro's `site` from it or the same canonical value.
- [x] 1.2 Update `profile.ts`, package metadata, README, and `AGENTS.md` to the `harpeblue.com` identity and portfolio-owned CSS policy without rewriting URLs that belong to the separate HarpeBlue Signal project.
- [x] 1.3 Expand the English and Spanish content files in lockstep with localized proof labels, availability/contact copy, and redesigned section labels; update the portfolio project entry to the `.com` repository/demo and independent local styling claim.
- [x] 1.4 Remove confirmed-unused duplicate `experience.ts`, `projects.ts`, and `skills.ts` data modules and their exports so localized content remains the single presentation source.

## 2. Portfolio-Owned Visual System

- [x] 2.1 Replace `global.css` with the bounded local token set, reset, page shell, typography, reusable actions/tags, focus/skip-link behavior, atmospheric canvas, responsive defaults, and reduced-motion override defined in the design.
- [x] 2.2 Rebuild `SiteNav.astro` as a complete sticky desktop/mobile navigation whose section links and locale switch remain visible and reachable at 320 CSS pixels without horizontal overflow or JavaScript.
- [x] 2.3 Rebuild `Hero.astro` with the open editorial composition, verified proof rail, availability/location, and clear selected-work, contact, and CV actions in both locales.
- [x] 2.4 Rebuild `Experience.astro` as a production case study with a prominent `2h → 30m` outcome, scannable contribution hierarchy, dates/location, and wrapping technology details.
- [x] 2.5 Rebuild `Projects.astro` with a featured portfolio treatment and differentiated supporting treatments for HarpeBlue Signal and Terminal Lab while preserving verified project links and proper nouns.
- [x] 2.6 Rebuild `Skills.astro` as a readable capability matrix and `ContactCta.astro` as a high-contrast close/footer with email, CV, professional profiles, availability, location, and current domain.
- [x] 2.7 Update both Astro page routes and shared wrappers to use the new local classes, semantic main target, and shared component composition with no locale drift.

## 3. Signal Removal

- [x] 3.1 Remove `@harpeblue/signal` from `package.json` and `package-lock.json`, then audit source and generated CSS/HTML to confirm no Signal import, `hb-*` class, or `--hb-*` token remains while its project showcase stays intact.

## 4. Search, Social, and Crawl Discovery

- [x] 4.1 Refactor `BaseLayout.astro` to derive canonical and alternate URLs from site data and emit localized Open Graph, Twitter large-image, theme-color, site-name, and safe inline JSON-LD metadata from verified facts.
- [x] 4.2 Add static `/robots.txt` and `/sitemap.xml` endpoints generated from canonical site/locale data and verify they contain only `.com` canonical URLs.
- [x] 4.3 Create a deterministic HarpeBlue social-card source plus a 1200×630 PNG, replace the starter favicon with a matching HB/signal SVG and ICO, and verify every referenced asset exists with the expected dimensions/type.

## 5. Public CV

- [x] 5.1 Create an auditable, ATS-friendly English CV source under `docs/resume/` using only supported facts, the new domain/email, and no phone number or private data.
- [x] 5.2 Regenerate `public/resume/harold-penaloza-resume-en.pdf` with selectable text and verify via `pdftotext` that it contains `.com`, omits `.dev`, phone data, and local `file://` paths, and preserves the intended two-page-or-shorter recruiter layout.

## 6. Verification and Migration Handoff

- [x] 6.1 Install/update dependencies as needed, run `npm run build`, and inspect generated routes/assets to confirm static English, Spanish, robots, and sitemap output without a core client JavaScript bundle or remote visual dependency.
- [x] 6.2 Run repository and generated-output audits for stale portfolio-domain/email/repository references, unsupported Signal coupling, broken internal anchors, metadata/JSON-LD consistency, proper-noun protection, and accidental private CV content.
- [x] 6.3 Capture and inspect both locales at 1440×1200, 390×844, and 320×800; fix clipping, overflow, weak contrast/focus, hidden navigation, translated-copy breakage, or overly repetitive composition before marking the task complete.
- [x] 6.4 Add an owner-facing cutover checklist that records mailbox verification, apex/www setup, path/query-preserving permanent redirects, post-deploy checks, and rollback; explicitly report external production readiness separately from repository completion.
- [x] 6.5 Run `git diff --check` and inspect `git status --short`, preserving unrelated user changes and leaving the implementation uncommitted for owner review.
- [x] 6.6 Revise `AGENTS.md` and `docs/domain-cutover.md` to document the completed Cloudflare Workers deployment, verified apex/www behavior and inbound mailbox, intentional retirement of `harpeblue.dev`, and Cloudflare-specific rollback guidance without stale Vercel instructions.
