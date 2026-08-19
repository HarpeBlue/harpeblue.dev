# Domain Cutover Checklist

This runbook separates repository readiness from the owner-controlled production migration. The site code can be ready while DNS, email, and Vercel are still pending.

## Readiness snapshot

Last checked: 2026-08-18 (America/Bogota).

| Area | Status | Evidence / next gate |
| --- | --- | --- |
| Repository | Ready for owner review | `npm run build` produces `/`, `/es/`, `/robots.txt`, and `/sitemap.xml` as static output with `.com` canonicals. |
| `harpeblue.com` web DNS | Pending | No A/AAAA response; an HTTPS request cannot resolve the host. |
| `www.harpeblue.com` web DNS | Pending | No CNAME response. |
| `harpeblue.com` mail DNS | Partially configured | MX currently answers `1 smtp.google.com.`; this does not prove that `hello@harpeblue.com` can receive mail. |
| Mailbox delivery | Unverified | Send and reply to a real test message before publishing the address. |
| Legacy `.dev` site | Live | `harpeblue.dev` resolves to `216.198.79.1`, returns a Vercel `307` to `www.harpeblue.dev`, and the `www` destination returns `200`. |
| Vercel domains | Unverified / not changed | No production project or domain setting was mutated during repository work. |

## Before deployment

- [ ] Confirm `hello@harpeblue.com` exists, receives an external test message, and can reply with valid SPF/DKIM alignment.
- [ ] Add `harpeblue.com`, `www.harpeblue.com`, `harpeblue.dev`, and `www.harpeblue.dev` to the same Vercel project.
- [ ] Select `harpeblue.com` as the primary production domain.
- [ ] Copy the exact DNS records Vercel provides into the authoritative DNS zone; do not guess an IP or CNAME.
- [ ] Keep the existing MX and other mail records intact while changing web records.
- [ ] Confirm Vercel has issued certificates for the apex, `www`, and both legacy hosts.
- [ ] Review the uncommitted repository diff, approve a gitmoji commit, and push `main` to trigger the production deployment.

## Redirect policy

Configure permanent redirects so every old or secondary host lands on the apex `.com` host while preserving path and query string:

```text
http://harpeblue.com/*      → https://harpeblue.com/*
https://www.harpeblue.com/* → https://harpeblue.com/*
https://harpeblue.dev/*     → https://harpeblue.com/*
https://www.harpeblue.dev/* → https://harpeblue.com/*
```

Use `308` or `301` after the new deployment has been validated. Test a nested path with a query, for example `/es/?source=legacy`, rather than checking only the homepage.

## Post-deploy verification

- [ ] `https://harpeblue.com/` returns `200`; `https://harpeblue.com/es/` returns `200`.
- [ ] `www` and both `.dev` hosts permanently redirect to the matching `.com` path and preserve query strings.
- [ ] The English canonical is `https://harpeblue.com/`; the Spanish canonical is `https://harpeblue.com/es/`.
- [ ] Both pages expose absolute `en`, `es`, and `x-default` alternate links.
- [ ] `/robots.txt`, `/sitemap.xml`, `/social-card.png`, `/favicon.svg`, and the public CV return `200`.
- [ ] Open Graph/Twitter preview tools can fetch the 1200×630 PNG without authentication.
- [ ] The CV contains `hello@harpeblue.com` and `harpeblue.com` and exposes no phone number.
- [ ] Navigation, language switching, email, CV, LinkedIn, GitHub, project source, and project demo links work in both locales.
- [ ] A real message to `hello@harpeblue.com` arrives after DNS propagation.
- [ ] Keep `.dev` ownership and redirects active during the search/user migration period.

Useful read-only checks:

```bash
dig +short harpeblue.com A
dig +short harpeblue.com MX
dig +short www.harpeblue.com CNAME
curl -I https://harpeblue.com/
curl -I 'https://harpeblue.dev/es/?source=legacy'
```

## Rollback

If the new deployment or routing fails, restore the last known-good Vercel production deployment and temporarily return the previous `.dev` primary-domain routing. Do not remove the new repository work or mail DNS; correct the failing deployment/domain configuration, rebuild locally, and repeat the verification list before trying the cutover again.
