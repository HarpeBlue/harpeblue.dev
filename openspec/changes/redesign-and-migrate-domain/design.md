## Context

See `proposal.md` for motivation and the three delta specs for observable behavior.

The current Astro site renders the same component tree for `/` and `/es/`, with localized data in `src/data/content/`. That separation is worth preserving. Presentation currently depends on one imported Signal stylesheet and many `hb-*` tokens/classes; local component styles only compose those primitives. The result is technically lean but visually repetitive, and the mobile navigation hides destinations in an unmarked horizontal scroller.

Domain values are repeated across routes, layout defaults, content, profile data, package metadata, README/guidance, and a binary PDF. There are also unused duplicate `experience`, `projects`, and `skills` modules exported from `src/data/index.ts`, making future identity/content drift more likely. The current public CV contains the old site/email plus an extractable local `file://` source path. As of exploration on 2026-08-18, `harpeblue.com` and `www.harpeblue.com` did not resolve, while `harpeblue.dev` redirected to `www.harpeblue.dev` on Vercel; repository work therefore cannot be treated as production cutover.

## Goals / Non-Goals

**Goals:**

- Give implementation one visual concept and a bounded local CSS architecture, rather than an unconstrained restyle.
- Make domain, locale, email, repository, and metadata values come from one site configuration where runtime code needs them.
- Use supported outcomes as the page's strongest visual material, with equivalent English and Spanish structure.
- Keep the output static, resilient, accessible, and easy to verify without adding a frontend runtime.
- Make the public CV maintainable enough that domain/contact changes can be verified in both visible and extracted text.
- Separate repository completion from DNS, mailbox, and Vercel cutover so neither is falsely reported complete.

**Non-Goals:**

- Replacing Astro, adding a CMS, analytics, a contact form, application state, or client-side navigation.
- Rebuilding a general-purpose design system or moving reusable patterns back into HarpeBlue Signal.
- Removing HarpeBlue Signal from the projects list or rewriting unsupported career/project claims.
- Adding remote webfonts, large photographic assets, 3D/WebGL effects, or motion that competes with content.
- Performing a commit, push, Vercel production mutation, DNS change, or mailbox provisioning without separate authorization and credentials.

## Decisions

### 1. Use a technical-editorial “proof in motion” visual direction

The visual metaphor is a precise engineering field note: a strong typographic page crossed by thin signal lines, small coordinate/index labels, and a restrained electric gradient. Content sits on an open canvas instead of inside a stack of identical rounded panels.

```text
┌─ sticky identity / route anchors / locale ───────────────────┐
│                                                              │
│  01 / FRONTEND ENGINEER             proof rail               │
│  HAROLD PEÑALOZA                     5 years React            │
│  Fast interfaces for complex UI      2h → 30m tests           │
│  [View work] [CV]                     Colombia / Remote        │
│                                                              │
├─ production record ───────────────────────────────────────────┤
│  outcome callout       Ubidots case-study timeline            │
├─ selected systems ────────────────────────────────────────────┤
│  featured project ─────────────┐  supporting project          │
│                               │  supporting project           │
├─ capability matrix ───────────┴───────────────────────────────┤
│  product UI / data / testing / tooling / systems / workflow   │
├─ large contact statement / email / CV / social / footer ─────┤
```

Palette tokens remain local and intentionally small: near-black navy canvas, slightly lighter blue surfaces, warm white text, blue for primary emphasis, cyan for signal/status detail, and a muted steel-blue for supporting copy. Typography uses performant system sans and monospace stacks; oversized display type, tight tracking, and line length create character without a font request. Background atmosphere comes from bounded CSS gradients and pseudo-elements, not bitmaps.

Alternatives considered:

- **Evolve existing Signal themes:** fastest, but directly contradicts dependency independence and preserves the demo-panel quality being changed.
- **Terminal-only aesthetic:** on-brand but too narrow for recruiter scanning and risks making production product work feel like a hobbyist CLI portfolio.
- **Image-heavy case studies:** could be expressive, but the repository has no supported product screenshots and invented mockups would weaken proof.

### 2. Own only the primitives this portfolio uses

`src/styles/global.css` will contain the reset, local custom properties, document defaults, accessibility helpers, and a handful of true cross-component primitives such as page shell, section heading, action link, tag, cluster, and visually-hidden text. Scoped component styles will own layout/composition. Existing `hb-*` classes and `--hb-*` properties will be replaced; the Signal import and package dependency will then be removed.

This is not a fork of Signal. The local token set has one dark theme and no public component API. A pattern should move to Signal only if a future project actually needs it; this portfolio is allowed to optimize for its own narrative.

Alternative considered: copy the required Signal CSS into the repository. Rejected because it preserves unused abstractions, ambiguous ownership, and the exact coupling the change is intended to remove.

### 3. Keep the shared component tree and strengthen localized content contracts

Both pages will continue to select `content.en` or `content.es` and render the same Astro components. Localized files will add aligned labels and proof data needed by the redesigned sections. Verified facts already in the site/CV will be reused; notably, the hero can show “5 years React” and “2h → 30m test pipeline” without manufacturing new metrics.

The current portfolio project entry will change from “uses Signal” to describe its independent local visual foundation. The separate HarpeBlue Signal and Terminal Lab project entries remain. Unused top-level `experience.ts`, `projects.ts`, and `skills.ts` modules and their exports will be deleted after confirming there are no imports.

Alternative considered: hardcode section-specific prose in components for speed. Rejected because it breaks bilingual parity and repository guidance.

### 4. Centralize site identity but leave localized prose localized

Add a small `src/data/site.ts` configuration for the base URL, repository URL, email, locale routes, public social-image path, and verified external profile URLs. Components and layouts will derive absolute URLs from it. `profile.ts` will reference those shared identity values while retaining professional facts. Page routes will no longer repeat absolute canonicals/alternates.

`astro.config.mjs` will set Astro's `site` to `https://harpeblue.com`, making static URL intent explicit. Package/lock metadata, README, and `AGENTS.md` will be updated independently because they are repository documentation rather than runtime consumers.

Alternative considered: replace strings globally. Rejected as the only strategy because it would miss the PDF, encourage future drift, and could incorrectly rewrite URLs belonging to the HarpeBlue Signal project.

### 5. Use a complete, script-free responsive navigation

The navigation stays sticky. Desktop uses one horizontal row. Mobile uses a deliberate two-row/wrapping layout: identity and locale remain prominent, and section anchors wrap in a visible grid/cluster rather than an overflow scroller or JavaScript menu. The brand link targets the hero and therefore serves as “Home”; advertised links cover experience, projects, skills, and contact.

This costs some mobile vertical space but keeps every destination discoverable, keyboard-safe, and functional without JavaScript. A skip link precedes navigation, `main` receives a stable target, and scroll padding accounts for the sticky header.

Alternatives considered:

- **Horizontal scroller:** compact but caused the current hidden Contact/language problem.
- **Hamburger with JavaScript:** familiar but unnecessary runtime and extra state for five anchors.
- **`details` menu:** script-free, but it hides the page's small information architecture and complicates sticky/open behavior.

### 6. Make sections structurally distinct

- **Hero:** open 12-column composition with identity/copy on the left and a compact proof rail on the right; primary action emphasizes contact or selected work, with CV secondary.
- **Experience:** one production case study rather than a generic card. A prominent numeric outcome anchors a timeline/list of responsibilities and supported technologies.
- **Projects:** the portfolio itself is featured at a larger span; HarpeBlue Signal and Terminal Lab use supporting treatments. Each keeps repository/demo actions and readable status.
- **Skills:** compact capability matrix organized by work domain, not a wall of equally weighted pills.
- **Contact/footer:** a high-contrast closing statement with email and CV first, followed by professional profiles, availability/location, and a concise brand/domain footer.

Components may be renamed or split where it clarifies ownership, but content remains data-driven. Decorative numbering and symbols are presentation, so they can be generated from array indices or CSS rather than localized copy.

### 7. Build discoverability into `BaseLayout`

`BaseLayout.astro` will derive canonical/alternate URLs and emit locale-aware Open Graph, Twitter large-image, theme-color, and site-name metadata. It will serialize JSON-LD from plain repository-owned data using Astro's inline JSON support, describing a `ProfilePage`/`Person` relationship with only verified facts and profile URLs.

Static endpoints under `src/pages/` will produce `/robots.txt` and `/sitemap.xml` from the same site configuration. This avoids a new sitemap dependency for two known routes. A deterministic 1200×630 social card will be authored as a simple brand SVG and rendered to PNG for broad crawler compatibility; both are local assets. The favicon will use a compact HB/signal mark rather than the current Astro starter icon, with SVG as the primary format and ICO retained for compatibility.

Alternative considered: `@astrojs/sitemap`. Rejected because two fixed URLs do not justify another integration/dependency.

### 8. Regenerate the public CV from an auditable source

Because the checked-in PDF is the only CV artifact and contains stale/extraneous extractable text, implementation will create a maintainable HTML source under `docs/resume/` and render the public PDF from it with available local tooling. The design will remain conservative and recruiter/ATS friendly: selectable text, conventional headings, no phone number, no private version, no local source footer, and the same verified facts. `pdftotext` will verify the output.

Alternative considered: binary-level replacement. Rejected because PDF font encoding and metadata make it unreliable and non-maintainable.

### 9. Treat deployment as a staged migration

Repository implementation can change canonical intent and prepare assets, but production migration has separate gates:

1. Complete code/content/CV changes, build, and inspect local English/Spanish desktop/mobile captures.
2. Verify `hello@harpeblue.com` can receive mail.
3. Configure `harpeblue.com`, `www.harpeblue.com`, `harpeblue.dev`, and `www.harpeblue.dev` on the Vercel project; choose apex `.com` as primary and permanent redirects preserving path/query.
4. Point DNS, deploy from `main` only after owner-approved commit/push, then verify status codes, canonicals, discovery files, links, and both locale routes.
5. Keep legacy-domain ownership/redirects active long enough for users and crawlers to migrate.

Rollback is to restore the previous Vercel production deployment and old primary-domain routing while keeping the repository change available for correction. Domain/email readiness must be reported separately from code readiness.

## Risks / Trade-offs

- **[The `.com` domain or mailbox is not ready at implementation time]** → Complete and verify repository work, but mark production cutover as pending; do not claim the live migration is complete.
- **[Removing Signal produces broad visual regressions]** → Replace primitives component by component, then audit for `@harpeblue/signal`, `hb-*`, and `--hb-*` before uninstalling and building.
- **[A bold composition becomes less scannable]** → Keep semantic source order conventional, cap body line length, lead each section with an outcome, and verify at recruiter-like scan widths.
- **[Spanish strings break asymmetric layouts]** → Use intrinsic grids, `minmax(0, 1fr)`, wrapping actions/tags, and capture both locales at every verification width.
- **[Decorative CSS harms performance or accessibility]** → Limit effects to gradients/pseudo-elements, avoid filters on large scrolling regions, and neutralize motion under reduced-motion preference.
- **[Social-image or CV rendering differs across local tools]** → Keep deterministic vector/HTML sources, verify PNG dimensions/file type and PDF extracted text, and commit generated public artifacts with their sources.
- **[Central configuration creates circular imports]** → Keep `site.ts` dependency-free; `profile.ts` may import site identity, while localized content imports profile only.
- **[Legacy references hide in binary or generated files]** → Combine text search with `pdftotext` and generated-output inspection; exclude only OpenSpec migration history where the old domain is intentionally documented.

## Migration Plan

1. Add centralized site identity and update repository guidance/content metadata without touching deployment.
2. Expand aligned locale data and replace component markup/styles with the new composition.
3. Remove Signal imports/classes/dependency and delete confirmed-unused duplicate data modules.
4. Add metadata, JSON-LD, discovery endpoints, favicon/social assets, and the auditable CV source/PDF.
5. Run formatting/static audits, the Astro build, link/domain checks, PDF text checks, and desktop/mobile screenshots for both locales.
6. Hand off the owner-controlled commit/push and the external mailbox/DNS/Vercel cutover checklist.

No unresolved design question is intentionally deferred; production credentials and DNS/mail readiness are execution prerequisites, not design choices.
