## Why

The portfolio is moving from `harpeblue.dev` to the broader `harpeblue.com` identity, while its current presentation is constrained by a shared CSS library and a repetitive panel-based composition. This is an opportunity to make the site more distinctive and recruiter-friendly, remove stale domain references, and establish a focused local visual system without sacrificing speed, bilingual parity, accessibility, or maintainability.

## What Changes

- Make `https://harpeblue.com/` and `https://harpeblue.com/es/` the canonical English and Spanish URLs, and align repository metadata, visible project content, public contact details, and the public CV with the new domain.
- Define the deployment expectation that `www.harpeblue.com` redirects to the canonical apex domain while preserving the route path and query string. Treat `harpeblue.dev` as intentionally retired, with no renewal or redirect requirement, and keep external Cloudflare Workers/DNS setup explicit because it cannot be completed by repository code alone.
- Remove `@harpeblue/signal` as a runtime dependency and replace its tokens, themes, utilities, and component classes with a small portfolio-owned CSS foundation. HarpeBlue Signal remains a portfolio project; only this site's dependency on it is removed.
- Redesign the page as an evidence-led, technical editorial experience with stronger hierarchy, asymmetric composition, clear impact metrics, differentiated project treatments, and restrained motion.
- Make every navigation destination and language control usable at desktop and mobile widths, including keyboard operation, visible focus, reduced-motion behavior, and a skip link.
- Preserve aligned English and Spanish content structures while improving the copy hierarchy around verified experience, outcomes, availability, and contact actions.
- Centralize site identity and URL configuration, remove unused duplicate data modules, and keep localized copy in the existing language files.
- Improve discoverability with complete canonical/alternate metadata, social preview metadata and artwork, structured data, robots and sitemap outputs, and consistent brand/favicon assets.
- Preserve a static, JavaScript-free-by-default delivery model and verify the finished site at desktop and mobile widths.

## Capabilities

### New Capabilities

- `portfolio-domain-identity`: Canonical-domain behavior, bilingual URL identity, public contact/CV consistency, and legacy-domain deployment expectations.
- `portfolio-presentation`: Responsive visual hierarchy, evidence-led portfolio content, local design-system ownership, navigation, interaction, and accessibility behavior.
- `site-discoverability`: Search/social metadata, structured data, crawl discovery, and static performance expectations for both locales.

### Modified Capabilities

None. The project has no existing OpenSpec capability specifications.

## Impact

- Affects both Astro routes, the base layout, all portfolio section components, localized content, shared profile/site data, global CSS, public brand/social assets, and the public English CV.
- Removes `@harpeblue/signal` from `package.json` and `package-lock.json`; Astro remains the only runtime dependency unless implementation proves a small build-time integration necessary.
- Updates repository guidance and README references so future work follows the new domain and portfolio-owned styling model.
- Requires post-push deployment and domain configuration in Cloudflare Workers/DNS plus verification of the `hello@harpeblue.com` inbound route before public cutover; those external mutations require separate owner authorization.
- Does not add unsupported technologies, employment claims, project outcomes, analytics, a CMS, or client-side application state.
