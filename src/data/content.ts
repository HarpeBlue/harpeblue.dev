import { profile } from "./profile";

export const content = {
  en: {
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
      resume: "Resume",
      contact: "Contact",
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
          summary:
            "Built and maintained React-based frontend features across an IoT B2B SaaS platform.",
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
          description:
            "Technical cheatsheet concept using HarpeBlue Signal's Terminal Lab visual style.",
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
      resume: "Resume",
      email: "Email",
    },
  },
  es: {
    locale: "es",
    path: "/es/",
    alternatePath: "/",
    alternateLabel: "EN",
    seo: {
      title: `${profile.name} - ${profile.role}`,
      description:
        "Frontend Software Engineer con 5 años de experiencia construyendo interfaces B2B SaaS con React, dashboards complejos, componentes de design system e infraestructura de pruebas frontend.",
    },
    profile: {
      ...profile,
      headline: "Construyo interfaces rápidas y expresivas para productos complejos.",
      summary:
        "Frontend Software Engineer con 5 años de experiencia construyendo interfaces B2B SaaS con React, dashboards complejos, componentes de design system e infraestructura de pruebas frontend.",
    },
    hero: {
      linksLabel: "Enlaces principales",
      resume: "CV",
      contact: "Contacto",
    },
    experience: {
      eyebrow: "Experiencia",
      title: "Frontend real en producción",
      description:
        "Trabajo real de producto en interfaces React, dashboards, migraciones de design system, infraestructura de testing y code review.",
      technologiesLabel: "tecnologías",
      items: [
        {
          company: "Ubidots S.A.S.",
          role: "Desarrollador Frontend",
          startDate: "2021-02",
          endDate: "2026-04",
          location: "Colombia / Remoto",
          summary:
            "Construí y mantuve funcionalidades frontend en React dentro de una plataforma IoT B2B SaaS.",
          highlights: [
            "Reduje el tiempo del pipeline de pruebas frontend de aproximadamente 2 horas a 30 minutos liderando la migración de Jest a Vitest.",
            "Lideré la migración frontend del módulo de Organizations al design system interno Vulcan UI, entregando de forma independiente, con pruebas y sin bugs críticos en producción.",
            "Creé y mantuve componentes reutilizables para Vulcan UI, ayudando a estandarizar interfaces dentro de la plataforma.",
            "Realicé code reviews constantes para mejorar mantenibilidad, prevenir problemas de producción y alinear el código con estándares del equipo.",
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
      eyebrow: "Trabajo seleccionado",
      title: "Proyectos con prueba real",
      description:
        "Una selección pequeña de proyectos que muestran ejecución frontend, sistemas visuales, documentación y flujos prácticos de desarrollo.",
      technologiesLabel: "tecnologías",
      linksLabel: "enlaces",
      repository: "Repositorio",
      demo: "Demo",
      items: [
        {
          name: "harpeblue.dev",
          description:
            "Portfolio profesional construido como sitio rápido y estático para presentar experiencia frontend, proyectos e identidad visual HarpeBlue.",
          repositoryUrl: "https://github.com/HarpeBlue/harpeblue.dev",
          demoUrl: "https://harpeblue.dev",
          status: "Activo",
          highlights: [
            "Construido con Astro para priorizar performance, SEO, mantenibilidad y despliegue estático.",
            "Usa HarpeBlue Signal como dependencia real de design system en vez de recrear patrones visuales localmente.",
          ],
          technologies: ["Astro", "TypeScript", "CSS", "HarpeBlue Signal"],
        },
        {
          name: "HarpeBlue Signal",
          description:
            "Sistema de identidad visual agnóstico a frameworks, construido con tokens CSS, temas, utilidades y ejemplos.",
          repositoryUrl: "https://github.com/HarpeBlue/harpeblue-signal",
          demoUrl: "https://harpeblue.github.io/harpeblue-signal/",
          status: "Activo",
          highlights: [
            "Crea una base visual reutilizable para proyectos HarpeBlue sin depender de un framework frontend específico.",
            "Incluye playground público y ejemplos de documentación usando CSS puro y tooling ligero con JavaScript.",
          ],
          technologies: ["CSS", "Design Tokens", "JavaScript", "GitHub Pages"],
        },
        {
          name: "Omarchy / Terminal Lab Cheatsheets",
          description:
            "Concepto de cheatsheets técnicas usando el estilo visual Terminal Lab de HarpeBlue Signal.",
          repositoryUrl:
            "https://github.com/HarpeBlue/harpeblue-signal/blob/main/docs/examples/terminal-lab-omarchy.html",
          demoUrl: "https://harpeblue.github.io/harpeblue-signal/examples/terminal-lab-omarchy.html",
          status: "Prototipo",
          highlights: [
            "Explora consulta rápida y documentación legible de comandos para flujos Linux y desarrollo.",
            "Funciona como semilla para una futura plataforma pública de cheatsheets.",
          ],
          technologies: ["HTML", "CSS", "HarpeBlue Signal", "Linux"],
        },
      ],
    },
    skills: {
      eyebrow: "Skills",
      title: "Capacidades frontend",
      description:
        "Tecnologías y prácticas agrupadas por cómo aparecen en trabajo frontend real: UI de producto, flujos de datos, testing, tooling y sistemas.",
      groups: [
        {
          category: "Frontend",
          items: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "styled-components"],
        },
        { category: "Estado y Datos", items: ["Redux", "Context API", "React Query", "Formik"] },
        { category: "Testing", items: ["Jest", "Vitest", "React Testing Library", "Cypress"] },
        { category: "Tooling", items: ["Webpack", "Rspack", "Git", "GitHub", "npm"] },
        {
          category: "UI Systems",
          items: ["Design systems", "Responsive UI", "Dashboards", "Componentes reutilizables"],
        },
        {
          category: "Workflow",
          items: ["Code review", "Migraciones frontend", "Linux", "Desarrollo asistido por IA"],
        },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Construyamos algo rápido y memorable.",
      description:
        "Abierto a roles remotos como Frontend Software Engineer enfocados en React, UI de producto, design systems, testing y flujos de desarrollo asistidos por IA.",
      linksLabel: "Enlaces de contacto",
      resume: "CV",
      email: "Email",
    },
  },
} as const;

export type Locale = keyof typeof content;
export type PageContent = (typeof content)[Locale];
