
# AGENTS.md

## 1. Project Overview

Build and maintain a personal developer portfolio for Darwin Becker.

The website will showcase:
- Professional experience
- Technical skills
- Personal and professional projects
- Project case studies
- Contact information
- GitHub and other professional profiles

The portfolio should communicate strong frontend engineering skills, attention to detail, product thinking, and good UI/UX principles.

The website will be publicly hosted at:

https://darwinbecker.github.io

## 2. Technology Stack

- Next.js (App Router)
- React
- TypeScript (strict mode)
- Tailwind CSS
- Framer Motion for animations
- Tabler Icons (`@tabler/icons-react`)
- GitHub Pages for hosting
- GitHub Actions for CI/CD

Do not use:
- Lucide React
- A backend or database
- Paid hosting services
- Unnecessary dependencies

## 3. Architecture

- Use Next.js App Router.
- Use static export (`output: 'export'`).
- Prefer React Server Components by default.
- Use Client Components only when interactivity requires them.
- Use TypeScript throughout the application.
- Keep components small, reusable, and focused.
- Separate content/data from presentation.
- Store project information in `src/data/projects.ts`.
- Store experience in `src/data/experience.ts`.
- Store skills in `src/data/skills.ts`.
- Avoid unnecessary abstractions.
- Use semantic HTML.

## 4. GitHub Pages Constraints

The website must work as a fully static website.

- No runtime server-side rendering.
- No API routes.
- No server actions.
- No database.
- No server-dependent authentication.
- All pages must be statically exportable.
- Use `output: 'export'`.
- Use `trailingSlash: true`.
- Configure images for static export.
- Ensure the production build generates the `out/` directory.
- Do not configure a `basePath`, because this is a user-level GitHub Pages repository.

The production deployment must be handled through GitHub Actions.

## 5. Design Direction

Visual direction: minimalist, Apple-inspired, light.

Design principles:

- Clean and premium appearance.
- Strong typography and visual hierarchy.
- Generous whitespace.
- Carefully considered spacing.
- Subtle borders and shadows.
- Restrained use of color.
- Smooth and subtle animations.
- Consistent design tokens.
- Excellent responsive behavior.
- Accessible interactions.
- Attention to small UI details.

Avoid:

- Generic developer portfolio templates.
- Excessive gradients.
- Excessive glassmorphism.
- Unnecessary animations.
- Too many colors.
- Excessive rounded cards.
- Unnecessary visual clutter.
- Emoji used as interface icons.

The website should feel like a carefully designed digital product.

## 6. Icons

Use Tabler Icons exclusively.

Package:
`@tabler/icons-react`

Guidelines:

- Prefer outline icons.
- Use `stroke={1.7}` as the default.
- Keep icon sizes consistent.
- Use semantic icons.
- Do not use Lucide React.
- Do not mix icon libraries.

## 7. Pages and Routing

The planned website structure:

- `/` – Homepage
- `/about/` – About and professional background
- `/projects/` – Project overview
- `/projects/wordle/` – Wordle case study
- `/projects/blackjack/` – Blackjack case study
- `/projects/knowledgehub/` – KnowledgeHub case study
- `/contact/` – Contact information

Use reusable layouts and components.

Project pages should share a consistent structure but allow project-specific content.

## 8. Content Accuracy

Never invent:

- Work experience.
- Achievements or metrics.
- Technologies used in projects.
- Project features.
- Qualifications.
- Client names.
- Employment dates.

Use only verified information supplied by the user or available in the project.

Keep all project descriptions technically accurate.

Ask the user when important information is missing.

Do not publish personal contact information without confirmation.

## 9. Code Quality

- Use strict TypeScript.
- Avoid `any`.
- Avoid duplicated code.
- Prefer reusable components where appropriate.
- Follow consistent naming conventions.
- Use meaningful component and variable names.
- Ensure keyboard accessibility.
- Add meaningful alt text.
- Keep dependencies minimal.
- Avoid unnecessary client-side JavaScript.
- Follow Next.js and React best practices.

## 10. Responsive Design

Support:

- Mobile phones.
- Tablets.
- Laptops.
- Large desktop screens.

Use a mobile-first approach.

Pay particular attention to typography, navigation, project previews, and spacing on smaller screens.

## 11. Development Workflow

Before implementing larger features:

1. Inspect the existing project structure.
2. Read relevant project documentation.
3. Understand the existing implementation.
4. Create a concise implementation plan.
5. Identify potential technical limitations.

After implementation:

1. Run ESLint.
2. Run TypeScript checks.
3. Run the production build.
4. Verify static export.
5. Fix errors before considering the task complete.
6. Summarize changes and relevant files.

Do not silently remove existing functionality.

Do not commit or push changes unless explicitly requested.

## 12. Communication

Act as a senior frontend engineering partner.

- Explain important architectural decisions.
- Highlight potential problems early.
- Prefer simple and maintainable solutions.
- Challenge unnecessary complexity.
- Ask questions when requirements are unclear.
- Do not implement major design decisions without discussing them first.
- Explain trade-offs when multiple approaches are viable.

The goal is to build a polished, production-quality developer portfolio, not just a quick demo.
