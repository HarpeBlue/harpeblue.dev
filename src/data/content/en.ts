import { profile } from "../profile";

export const enContent = {
  locale: "en",
  path: "/",
  alternatePath: "/es/",
  alternateLabel: "ES",
  skipLink: "Skip to main content",
  seo: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.summary,
    ogLocale: "en_US",
    socialImageAlt: "Harold Peñaloza, Frontend Software Engineer — HarpeBlue portfolio",
  },
  profile: {
    ...profile,
    headline: "I build fast, expressive interfaces for complex products.",
    summary:
      "Frontend Software Engineer with 5 years of React experience building B2B SaaS interfaces, complex dashboards, design-system components, and frontend testing infrastructure.",
    availability: "Open to remote frontend roles",
  },
  hero: {
    eyebrow: "Frontend Software Engineer",
    intro: "Product interfaces, design systems, testing, and the engineering behind them.",
    linksLabel: "Primary actions",
    work: "View selected work",
    resume: "CV",
    contact: "Start a conversation",
    proofLabel: "Selected proof",
    proofs: [
      { value: "5 years", label: "React in production" },
      { value: "2h → 30m", label: "Frontend test pipeline" },
      { value: "Remote", label: "Colombia-based" },
    ],
  },
  navigation: {
    label: "Primary navigation",
    languageLabel: "Switch to Spanish",
    items: [
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Skills", href: "#skills" },
      { label: "Contact", href: "#contact" },
    ],
  },
  experience: {
    eyebrow: "Production record",
    title: "Frontend work that changed the system.",
    description:
      "Five years inside a complex IoT B2B SaaS product—shipping React interfaces, migrating foundations, improving test feedback, and helping teams work with more confidence.",
    outcome: {
      value: "2h → 30m",
      label: "Frontend test pipeline",
      detail: "Led the migration from Jest to Vitest.",
    },
    contributionsLabel: "Selected contributions",
    technologiesLabel: "Production toolkit",
    items: [
      {
        company: "Ubidots S.A.S.",
        role: "Frontend Developer",
        startDate: "2021-02",
        endDate: "2026-04",
        period: "February 2021 — April 2026",
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
    eyebrow: "Selected systems",
    title: "Projects with a reason to exist.",
    description:
      "A compact set of projects showing local-first product engineering, visual judgment, documentation, and practical developer workflows.",
    technologiesLabel: "technologies",
    linksLabel: "project links",
    repository: "Source",
    demo: "Live project",
    website: "Product site",
    app: "Open PWA",
    items: [
      {
        name: "Synapse Loom",
        description:
          "Local-first notes and learning workspace that turns Markdown notes into connected knowledge and spaced-repetition review.",
        demoUrl: "https://synapseloom.app",
        appUrl: "https://app.synapseloom.app",
        status: "Active",
        highlights: [
          "Shares a React 19 and TypeScript product surface across an installable PWA and Tauri desktop client, backed by reusable Rust domain logic.",
          "Runs SQLite in WebAssembly over OPFS for durable local data and offline access, with optional sync and shared Spaces instead of a registration wall.",
        ],
        technologies: ["React 19", "TypeScript", "Rust", "WebAssembly", "SQLite", "PWA"],
      },
      {
        name: "harpeblue.com",
        description:
          "Professional portfolio built as a fast, bilingual, static-first site for frontend experience, proof, and the evolving HarpeBlue identity.",
        repositoryUrl: "https://github.com/HarpeBlue/harpeblue.com",
        demoUrl: "https://harpeblue.com",
        status: "Active",
        highlights: [
          "Built with Astro to prioritize performance, SEO, maintainability, and static deployment.",
          "Owns a compact local visual system and bilingual content architecture without a client-side application runtime.",
        ],
        technologies: ["Astro", "TypeScript", "CSS", "Accessible HTML"],
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
    ],
  },
  skills: {
    eyebrow: "Capability matrix",
    title: "How I approach frontend work.",
    description:
      "Tools matter, but the useful signal is where they appear: product UI, data flows, testing, tooling, and reusable systems.",
    groups: [
      {
        category: "Product UI",
        description: "Responsive interfaces and reusable product patterns.",
        items: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "styled-components"],
      },
      {
        category: "State and Data",
        description: "Predictable client state and asynchronous product data.",
        items: ["Redux", "Context API", "React Query", "Formik"],
      },
      {
        category: "Testing",
        description: "Fast feedback from components to complete browser flows.",
        items: ["Jest", "Vitest", "React Testing Library", "Cypress"],
      },
      {
        category: "Tooling",
        description: "Build systems and everyday engineering foundations.",
        items: ["Webpack", "Rspack", "Git", "GitHub", "npm"],
      },
      {
        category: "UI Systems",
        description: "Consistency across complex, evolving interfaces.",
        items: ["Design systems", "Responsive UI", "Dashboards", "Reusable components"],
      },
      {
        category: "Workflow",
        description: "Making changes understandable, reviewable, and safer.",
        items: ["Code review", "Frontend migrations", "Linux", "AI-assisted development"],
      },
    ],
  },
  contact: {
    eyebrow: "Open channel",
    title: "Bring me the interface that needs clarity.",
    description:
      "I'm open to remote Frontend Software Engineer roles centered on React, product UI, design systems, testing, and thoughtful AI-assisted workflows.",
    linksLabel: "Contact links",
    resume: "CV",
    email: "Email me",
    availabilityLabel: "Availability",
    locationLabel: "Based in",
    profilesLabel: "Professional profiles",
    footerPrefix: "Designed and built by",
  },
} as const;
