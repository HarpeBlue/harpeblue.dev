import type { APIRoute } from "astro";
import { absoluteUrl, languageAlternates, site } from "../data/site";

export const prerender = true;

const alternateLinks = languageAlternates
  .map(
    (alternate) =>
      `<xhtml:link rel="alternate" hreflang="${alternate.hrefLang}" href="${alternate.href}" />`,
  )
  .join("");

const entries = Object.values(site.routes)
  .map((path) => `<url><loc>${absoluteUrl(path)}</loc>${alternateLinks}</url>`)
  .join("");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${entries}</urlset>`;

export const GET: APIRoute = () =>
  new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
