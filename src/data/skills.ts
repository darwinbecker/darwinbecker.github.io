export type SkillCategory = {
  title: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend & Mobile",
    skills: [
      "Vue.js",
      "React",
      "Next.js",
      "Angular",
      "TypeScript",
      "JavaScript",
      "RxJS",
      "HTML",
      "CSS",
      "Handlebars.js",
      "Vuetify",
      "Pinia",
      "Highcharts",
      "Moment.js",
      "Storybook",
      "Tailwind CSS",
      "Capacitor (iOS / Android)",
    ],
  },
  {
    title: "Backend & Data",
    skills: [
      "Node.js",
      "Express.js",
      "Java",
      "Spring Boot",
      "Python",
      "REST APIs",
      "PostgreSQL",
      "MongoDB",
      "Route Handlers",
    ],
  },
  {
    title: "Testing & Quality",
    skills: ["Vitest", "Jest", "Cypress", "SoapUI", "React Testing Library"],
  },
  {
    title: "Engineering Practices",
    skills: [
      "UI/UX design",
      "Design systems",
      "Component-based architecture",
      "State management",
      "Responsive design",
      "Server-side rendering",
      "API integration",
      "Performance optimization",
      "Internationalization (i18n)",
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      "Git",
      "Vite",
      "Docker",
      "GitHub Actions",
      "VS Code",
      "Jira",
      "Figma",
      "Notion",
      "Microsoft SharePoint",
    ],
  },
  {
    title: "AI",
    skills: [
      "Frontend for AI-powered products",
      "RAG",
      "Tool Calling",
      "GitHub Copilot",
      "Codex",
      "Claude Code",
      "Agentic Coding",
      "LLM",
    ],
  },
]
