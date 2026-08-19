import { profile } from "../profile";

export const esContent = {
  locale: "es",
  path: "/es/",
  alternatePath: "/",
  alternateLabel: "EN",
  skipLink: "Saltar al contenido principal",
  seo: {
    title: `${profile.name} — ${profile.role}`,
    description:
      "Frontend Software Engineer con 5 años de experiencia construyendo interfaces B2B SaaS con React, dashboards complejos, componentes de design system e infraestructura de pruebas frontend.",
    ogLocale: "es_CO",
    socialImageAlt: "Harold Peñaloza, Frontend Software Engineer — portfolio HarpeBlue",
  },
  profile: {
    ...profile,
    links: {
      ...profile.links,
      resume: "/resume/harold-penaloza-resume-es.pdf",
    },
    headline: "Construyo interfaces rápidas y expresivas para productos complejos.",
    summary:
      "Frontend Software Engineer con 5 años de experiencia construyendo interfaces B2B SaaS con React, dashboards complejos, componentes de design system e infraestructura de pruebas frontend.",
    availability: "Disponible para roles frontend remotos",
  },
  hero: {
    eyebrow: "Frontend Software Engineer",
    intro: "Interfaces de producto, design systems, testing y la ingeniería que hay detrás.",
    linksLabel: "Acciones principales",
    work: "Ver trabajo seleccionado",
    resume: "CV",
    contact: "Iniciar una conversación",
    proofLabel: "Evidencia seleccionada",
    proofs: [
      { value: "5 años", label: "React en producción" },
      { value: "2h → 30m", label: "Pipeline de pruebas frontend" },
      { value: "Remoto", label: "Desde Colombia" },
    ],
  },
  navigation: {
    label: "Navegación principal",
    languageLabel: "Cambiar a inglés",
    items: [
      { label: "Experiencia", href: "#experience" },
      { label: "Proyectos", href: "#projects" },
      { label: "Skills", href: "#skills" },
      { label: "Contacto", href: "#contact" },
    ],
  },
  experience: {
    eyebrow: "Historial en producción",
    title: "Trabajo frontend que cambió el sistema.",
    description:
      "Cinco años dentro de un producto IoT B2B SaaS complejo: entregando interfaces React, migrando fundamentos, mejorando el feedback de pruebas y ayudando al equipo a trabajar con más confianza.",
    outcome: {
      value: "2h → 30m",
      label: "Pipeline de pruebas frontend",
      detail: "Lideré la migración de Jest a Vitest.",
    },
    contributionsLabel: "Contribuciones seleccionadas",
    technologiesLabel: "Toolkit de producción",
    items: [
      {
        company: "Ubidots S.A.S.",
        role: "Desarrollador Frontend",
        startDate: "2021-02",
        endDate: "2026-04",
        period: "Febrero de 2021 — abril de 2026",
        location: "Colombia / Remoto",
        summary: "Construí y mantuve funcionalidades frontend en React dentro de una plataforma IoT B2B SaaS.",
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
    eyebrow: "Sistemas seleccionados",
    title: "Proyectos con una razón para existir.",
    description:
      "Una selección compacta de proyectos que muestran ingeniería de producto local-first, criterio visual, documentación y flujos prácticos para desarrollo.",
    technologiesLabel: "tecnologías",
    linksLabel: "enlaces del proyecto",
    repository: "Código",
    demo: "Proyecto en vivo",
    website: "Sitio del producto",
    app: "Abrir PWA",
    items: [
      {
        name: "Synapse Loom",
        description:
          "Espacio local-first para notas y aprendizaje que convierte Markdown en conocimiento conectado y repasos con repetición espaciada.",
        demoUrl: "https://synapseloom.app",
        appUrl: "https://app.synapseloom.app",
        status: "Activo",
        highlights: [
          "Comparte una superficie de producto en React 19 y TypeScript entre una PWA instalable y el cliente de escritorio con Tauri, respaldada por lógica de dominio reutilizable en Rust.",
          "Ejecuta SQLite en WebAssembly sobre OPFS para conservar datos locales y funcionar offline, con sincronización y Spaces compartidos opcionales en lugar de un muro de registro.",
        ],
        technologies: ["React 19", "TypeScript", "Rust", "WebAssembly", "SQLite", "PWA"],
      },
      {
        name: "harpeblue.com",
        description:
          "Portfolio profesional rápido, bilingüe y static-first para presentar experiencia frontend, evidencia e identidad HarpeBlue en evolución.",
        repositoryUrl: "https://github.com/HarpeBlue/harpeblue.com",
        demoUrl: "https://harpeblue.com",
        status: "Activo",
        highlights: [
          "Construido con Astro para priorizar performance, SEO, mantenibilidad y despliegue estático.",
          "Tiene un sistema visual local compacto y una arquitectura de contenido bilingüe sin runtime de aplicación en el cliente.",
        ],
        technologies: ["Astro", "TypeScript", "CSS", "HTML accesible"],
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
    ],
  },
  skills: {
    eyebrow: "Matriz de capacidades",
    title: "Cómo abordo el trabajo frontend.",
    description:
      "Las herramientas importan, pero la señal útil está en dónde aparecen: UI de producto, datos, testing, tooling y sistemas reutilizables.",
    groups: [
      {
        category: "UI de producto",
        description: "Interfaces responsive y patrones reutilizables de producto.",
        items: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "styled-components"],
      },
      {
        category: "Estado y Datos",
        description: "Estado predecible en cliente y datos asíncronos de producto.",
        items: ["Redux", "Context API", "React Query", "Formik"],
      },
      {
        category: "Testing",
        description: "Feedback rápido desde componentes hasta flujos completos en navegador.",
        items: ["Jest", "Vitest", "React Testing Library", "Cypress"],
      },
      {
        category: "Tooling",
        description: "Sistemas de build y fundamentos cotidianos de ingeniería.",
        items: ["Webpack", "Rspack", "Git", "GitHub", "npm"],
      },
      {
        category: "Sistemas de UI",
        description: "Consistencia en interfaces complejas que siguen evolucionando.",
        items: ["Design systems", "UI responsive", "Dashboards", "Componentes reutilizables"],
      },
      {
        category: "Workflow",
        description: "Cambios comprensibles, revisables y más seguros.",
        items: ["Code review", "Migraciones frontend", "Linux", "Desarrollo asistido por IA"],
      },
    ],
  },
  contact: {
    eyebrow: "Canal abierto",
    title: "Tráeme la interfaz que necesita claridad.",
    description:
      "Estoy abierto a roles remotos como Frontend Software Engineer centrados en React, UI de producto, design systems, testing y flujos cuidadosos asistidos por IA.",
    linksLabel: "Enlaces de contacto",
    resume: "CV",
    email: "Escríbeme",
    availabilityLabel: "Disponibilidad",
    locationLabel: "Ubicación",
    profilesLabel: "Perfiles profesionales",
    footerPrefix: "Diseñado y construido por",
  },
} as const;
