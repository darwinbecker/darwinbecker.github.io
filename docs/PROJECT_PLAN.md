
# Portfolio Project Plan

## 1. Objective

Build a professional personal developer portfolio for Darwin Becker.

The portfolio should be suitable for:
- Linking in job applications and CVs.
- Sharing with recruiters.
- Sharing with engineering managers.
- Demonstrating frontend engineering capabilities.
- Showcasing selected projects and technical decisions.

The website must be free to host through GitHub Pages.

## 2. Technology

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Tabler Icons
- GitHub Actions
- GitHub Pages

## 3. Website Structure

The portfolio is a single-page site at `/`, with header links that scroll to
sections on the homepage.

Sections:
- Profile and professional introduction (`#about`).
- Selected projects with logos, summaries, key features, development work,
  technologies, live demos, and source links (`#projects`).
- Contact information with the confirmed GitHub profile (`#contact`).

Keep project information in `src/data/projects.ts`. Add project content only
when its features and implementation details are verified. Do not invent
missing information.

## 4. Content Management

Keep content separate from presentation.

Initial data files:

- `src/data/projects.ts`
- `src/data/experience.ts`
- `src/data/skills.ts`
- `src/data/socials.ts`

Adding a project should primarily require adding a new data entry.

Individual project pages can use reusable components and project-specific content.

## 5. Development Milestones

### Milestone 1: Foundation
- Initialize Next.js.
- Configure TypeScript.
- Configure Tailwind CSS.
- Configure static export.
- Install Tabler Icons.
- Set up folder structure.
- Configure ESLint.
- Configure GitHub Actions.
- Verify production build.

### Milestone 2: Design System
- Establish typography.
- Define colors and design tokens.
- Define spacing and layout.
- Create reusable UI components.
- Create navigation and footer.

### Milestone 3: Homepage
- Hero section.
- Introduction.
- Featured projects.
- Skills overview.
- Experience overview.
- Contact section.

### Milestone 4: Projects
- Projects overview page.
- Reusable project cards.
- Wordle detail page.
- Blackjack detail page.
- KnowledgeHub detail page.

### Milestone 5: Additional Pages
- About page.
- Contact page.
- CV download.

### Milestone 6: Polish
- Responsive design.
- Animations.
- SEO metadata.
- Open Graph metadata.
- Accessibility.
- Performance optimization.

### Milestone 7: Deployment
- GitHub Pages configuration.
- GitHub Actions deployment.
- Production verification.
- Final content review.

## 6. Definition of Done

The portfolio is ready when:

- All pages work.
- All pages are statically exported.
- The site works on mobile and desktop.
- Navigation works correctly.
- Project links work.
- No broken images or assets exist.
- No TypeScript errors exist.
- No ESLint errors exist.
- Production build succeeds.
- GitHub Pages deployment succeeds.
- No paid services are required.
