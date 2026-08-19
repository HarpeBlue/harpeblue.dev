# Cloudflare Production Runbook

This runbook records the live production configuration for the static Astro portfolio. Repository readiness, Cloudflare deployment, web routing, and inbound email are tracked separately so a failure in one area does not lead to destructive changes in another.

## Readiness snapshot

Last checked: 2026-08-18 (America/Bogota).

| Area | Status | Evidence / operating note |
| --- | --- | --- |
| Repository | Deployed | `main` is connected to Cloudflare Workers Builds; `npm run build` produces the English and Spanish pages plus the discovery endpoints. |
| Cloudflare Worker | Active | Project `harpeblue-com` serves the static `dist/` output. |
| `harpeblue.com` | Live | The Worker custom domain returns `200` over a Cloudflare-managed HTTPS certificate. |
| `www.harpeblue.com` | Live redirect | A proxied CNAME and Redirect Rule return `301` to the apex while preserving path and query string. |
| Email Routing DNS | Active | Cloudflare manages the MX, SPF, and DKIM records used by Email Routing. Do not edit locked routing records manually. |
| Inbound mailbox | Verified | A real external message sent to `hello@harpeblue.com` arrived at the verified destination address. |
| Outbound mailbox | Deferred | Sending as `hello@harpeblue.com` is intentionally not configured; choose an SMTP provider only when a reply is needed. |
| `harpeblue.dev` | Retired | Renewal is disabled. The domain may stop resolving and has no redirect or production-readiness requirement. |

## Cloudflare Workers configuration

Cloudflare Builds is connected to `HarpeBlue/harpeblue.com` with this production configuration:

```text
Project:          harpeblue-com
Production branch: main
Root directory:   /
Node.js:          22.12.0
Build command:    npm run build
Deploy command:   npx wrangler@latest deploy --assets ./dist --name harpeblue-com --compatibility-date 2026-08-18
Output directory: dist/
Custom domain:    harpeblue.com
```

Pushes to `main` trigger a production build. Keep preview builds enabled for non-production branches and keep deployment credentials in Cloudflare rather than committing them to the repository.

## Web DNS and redirect policy

- The apex is attached to `harpeblue-com` as a Worker custom domain.
- `www.harpeblue.com` is a proxied CNAME targeting `harpeblue.com`.
- The active Cloudflare Redirect Rule is named `Redirect www to apex`.
- Requests matching `http*://www.harpeblue.com/*` receive a `301` to the corresponding `https://harpeblue.com/*` path with their query string preserved.
- HTTPS certificates for the apex and `www` are issued and renewed automatically by Cloudflare.
- `harpeblue.dev` and `www.harpeblue.dev` are intentionally outside this routing policy.

## Email Routing configuration

- Routing domain: `harpeblue.com`.
- Public address: `hello@harpeblue.com`.
- Action: forward to the verified destination address in the Cloudflare account.
- Catch-all: disabled with the default drop action.
- DNS: Cloudflare-managed MX, SPF, and DKIM records are active and locked where required.
- Outbound sending: not configured and not a website production gate.

Do not unlock or replace the Email Routing records when changing web DNS. A DMARC policy and outbound provider can be configured separately when sending from the custom address becomes necessary.

## Verified production checks

- [x] `https://harpeblue.com/` returns `200`.
- [x] `https://harpeblue.com/es/` returns `200`.
- [x] `https://www.harpeblue.com/es/?source=runbook` returns `301` to `https://harpeblue.com/es/?source=runbook`.
- [x] The English and Spanish pages publish the expected `.com` canonicals plus absolute `en`, `es`, and `x-default` alternates.
- [x] `/robots.txt`, `/sitemap.xml`, `/social-card.png`, `/favicon.svg`, and the public CV return `200`.
- [x] The social card is a local 1200×630 PNG.
- [x] The public CV contains `hello@harpeblue.com` and `harpeblue.com` without a phone number or local filesystem path.
- [x] Navigation, locale switching, contact, CV, profile, project source, and project demo links were checked in both locales.
- [x] A real external message to `hello@harpeblue.com` arrived through Cloudflare Email Routing.

Useful read-only checks:

```bash
npm run build
dig +short harpeblue.com MX
dig +short www.harpeblue.com CNAME
curl -I https://harpeblue.com/
curl -I https://harpeblue.com/es/
curl -I 'https://www.harpeblue.com/es/?source=runbook'
```

## Deferred follow-ups

- Add a DMARC record when the desired enforcement policy is chosen.
- Configure outbound sending only when a response from `hello@harpeblue.com` is needed.
- Optionally submit `https://harpeblue.com/sitemap.xml` to search-engine webmaster tools.

These follow-ups do not block the current website or inbound mailbox.

## Rollback

If a new build fails, open **Workers & Pages → harpeblue-com → Deployments** and restore the last known-good Worker version. Verify the `workers.dev` deployment URL before changing the custom-domain route.

If the failure is limited to the `www` redirect, disable or restore only the affected Redirect Rule; do not remove the apex Worker custom domain. Leave the locked Email Routing DNS records untouched during any web rollback. After correction, run the local build and the production checks above before promoting another deployment.
