export type Experience = {
  company: string
  role: string
  period: string
  description: string
}

export const experience: Experience[] = [
  {
    company: "VetVise GmbH",
    role: "Frontend Engineer",
    period: "Sep 2024 – Dec 2026",
    description:
      "Owned frontend architecture and standards, led the JavaScript-to-TypeScript migration and UI redesign, and built reusable components, a drag-and-drop dashboard editor, and the Capacitor app.",
  },
  {
    company: "dev crew berlin UG",
    role: "Frontend / Full-Stack Engineer",
    period: "Dec 2022 – May 2024",
    description:
      "Independently delivered React, Next.js, and TypeScript client projects, and improved internal QR-scanner and seating applications.",
  },
  {
    company: "BearingPoint GmbH",
    role: "Full-Stack Engineer",
    period: "Feb 2020 – Feb 2021",
    description:
      "Developed Angular, Java, and Spring Boot features for a government project, designed and tested a REST API, and implemented Cypress end-to-end tests.",
  },
  {
    company: "WBS TRAINING AG",
    role: "Software Engineer",
    period: "Nov 2018 – Nov 2019",
    description: "Developed an internal e-commerce solution using Odoo.",
  },
  {
    company: "Ricoh Europe PLC",
    role: "Intern Application Support IT",
    period: "Apr 2019 – Sep 2019",
    description:
      "Supported the migration of the company intranet across European subsidiaries.",
  },
]
