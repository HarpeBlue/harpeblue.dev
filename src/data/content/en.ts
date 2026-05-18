import { profile } from "../profile";

export const enContent = {
  locale: "en",
  path: "/",
  alternatePath: "/es/",
  alternateLabel: "ES",
  seo: {
    title: `${profile.name} - ${profile.role}`,
    description: profile.summary,
  },
  profile: {
    ...profile,
    headline: "I build fast, expressive interfaces for complex products.",
    summary:
      "Frontend Software Engineer with 5 years of React experience building B2B SaaS interfaces, complex dashboards, design-system components, and frontend testing infrastructure.",
  },
  hero: {
    linksLabel: "Primary links",
    resume: "CV",
    contact: "Contact",
  },
  navigation: {
    label: "Primary navigation",
    items: [
      { label: "Home", href: "#hero" },
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Skills", href: "#skills" },
      { label: "Contact", href: "#contact" },
    ],
  },
  experience: {
    eyebrow: "Experience",
    title: "Production frontend work",
    description:
      "Real product work across React interfaces, dashboards, design-system migrations, testing infrastructure, and code review.",
    technologiesLabel: "technologies",
    items: [
      {
        company: "Ubidots S.A.S.",
        role: "Frontend Developer",
        startDate: "2021-02",
        endDate: "2026-04",
        location: "Colombia / Remote",
        summary: "Built and maintained React-based frontend features across an IoT B2B SaaS platform.",
        highlights: [
          "Reduced frontend test pipeline time from roughly 2 hours to 30 minutes by leading the migration from Jest to Vitest.",
          "Led the frontend migration of the Organizations module to the internal Vulcan UI design system, delivering independently with tests and no critical production bugs.",
          "Created and maintained reusable components for Vulcan UI, helping standardize product interfaces across the platform.",
          "Reviewed code regularly to improve maintainability, prevent production issues, and align implementation with team standards.",
        ],
        technologies: [
          "React",
          "JavaScript",
          "TypeScript",
          "styled-components",
          "Redux",
          "React Query",
          "Jest",
          "Vitest",
          "React Testing Library",
          "Cypress",
          "Webpack",
          "Rspack",
        ],
      },
    ],
  },
  projects: {
    eyebrow: "Selected work",
    title: "Projects with proof",
    description:
      "A small set of projects that show frontend execution, visual systems, documentation, and practical developer workflows.",
    technologiesLabel: "technologies",
    linksLabel: "links",
    repository: "Repository",
    demo: "Demo",
    items: [
      {
        name: "harpeblue.dev",
        description:
          "Professional portfolio built as a fast, static-first site to present frontend experience, projects, and HarpeBlue's visual identity.",
        repositoryUrl: "https://github.com/HarpeBlue/harpeblue.dev",
        demoUrl: "https://harpeblue.dev",
        status: "Active",
        highlights: [
          "Built with Astro to prioritize performance, SEO, maintainability, and static deployment.",
          "Uses HarpeBlue Signal as a real design-system dependency instead of recreating visual patterns locally.",
        ],
        technologies: ["Astro", "TypeScript", "CSS", "HarpeBlue Signal"],
      },
      {
        name: "HarpeBlue Signal",
        description:
          "Framework-agnostic visual identity system built with CSS tokens, themes, utilities, and examples.",
        repositoryUrl: "https://github.com/HarpeBlue/harpeblue-signal",
        demoUrl: "https://harpeblue.github.io/harpeblue-signal/",
        status: "Active",
        highlights: [
          "Creates a reusable visual foundation for HarpeBlue projects without depending on a specific frontend framework.",
          "Includes a public playground and documentation examples using pure CSS and lightweight JavaScript tooling.",
        ],
        technologies: ["CSS", "Design Tokens", "JavaScript", "GitHub Pages"],
      },
      {
        name: "Omarchy / Terminal Lab Cheatsheets",
        description: "Technical cheatsheet concept using HarpeBlue Signal's Terminal Lab visual style.",
        repositoryUrl:
          "https://github.com/HarpeBlue/harpeblue-signal/blob/main/docs/examples/terminal-lab-omarchy.html",
        demoUrl: "https://harpeblue.github.io/harpeblue-signal/examples/terminal-lab-omarchy.html",
        status: "Prototype",
        highlights: [
          "Explores fast lookup and readable command documentation for Linux and developer workflows.",
          "Works as the seed for a future public cheatsheets platform.",
        ],
        technologies: ["HTML", "CSS", "HarpeBlue Signal", "Linux"],
      },
    ],
  },
  skills: {
    eyebrow: "Skills",
    title: "Frontend capabilities",
    description:
      "Technologies and practices grouped by how they show up in real frontend work: product UI, data flows, testing, tooling, and systems.",
    groups: [
      {
        category: "Frontend",
        items: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "styled-components"],
      },
      { category: "State and Data", items: ["Redux", "Context API", "React Query", "Formik"] },
      { category: "Testing", items: ["Jest", "Vitest", "React Testing Library", "Cypress"] },
      { category: "Tooling", items: ["Webpack", "Rspack", "Git", "GitHub", "npm"] },
      {
        category: "UI Systems",
        items: ["Design systems", "Responsive UI", "Dashboards", "Reusable components"],
      },
      {
        category: "Workflow",
        items: ["Code review", "Frontend migrations", "Linux", "AI-assisted development"],
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's build something fast and memorable.",
    description:
      "Open to remote Frontend Software Engineer roles focused on React, product UI, design systems, testing, and AI-assisted engineering workflows.",
    linksLabel: "Contact links",
    resume: "CV",
    email: "Email",
  },
} as const;
