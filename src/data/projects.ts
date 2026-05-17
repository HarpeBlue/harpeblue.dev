export const projects = [
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
] as const;
