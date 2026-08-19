import { emailHref, site } from "./site";

export const profile = {
  name: "Harold Peñaloza",
  alias: "HarpeBlue",
  role: "Frontend Software Engineer",
  location: "Granada, Meta, Colombia",
  availability: "Remote-first",
  headline: "I build fast, expressive interfaces for complex products.",
  summary:
    "Frontend Software Engineer with 5 years of React experience building B2B SaaS interfaces, complex dashboards, design-system components, and frontend testing infrastructure.",
  email: site.email,
  website: site.url,
  links: {
    email: emailHref,
    github: site.profiles.github,
    linkedin: site.profiles.linkedin,
    resume: "/resume/harold-penaloza-resume-en.pdf",
    x: site.profiles.x,
  },
} as const;
