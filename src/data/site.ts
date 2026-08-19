export const site = {
  name: "HarpeBlue",
  owner: "Harold Peñaloza",
  url: "https://harpeblue.com",
  repositoryUrl: "https://github.com/HarpeBlue/harpeblue.com",
  email: "hello@harpeblue.com",
  socialImagePath: "/social-card.png",
  themeColor: "#050816",
  routes: {
    en: "/",
    es: "/es/",
  },
  profiles: {
    github: "https://github.com/HarpeBlue",
    linkedin: "https://www.linkedin.com/in/harpeblue/",
    x: "https://x.com/HarpeBlue",
  },
} as const;

export type SiteLocale = keyof typeof site.routes;

export const emailHref = `mailto:${site.email}`;

export const absoluteUrl = (path: string) => new URL(path, `${site.url}/`).toString();

export const languageAlternates = [
  { hrefLang: "en", href: absoluteUrl(site.routes.en) },
  { hrefLang: "es", href: absoluteUrl(site.routes.es) },
  { hrefLang: "x-default", href: absoluteUrl(site.routes.en) },
] as const;
