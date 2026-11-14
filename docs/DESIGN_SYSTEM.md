
# Design System

## 1. Design Philosophy

Create a minimalist, premium developer portfolio inspired by Apple's website design language.

The website should feel:
- Elegant.
- Modern.
- Clean.
- Professional.
- Calm.
- Carefully crafted.

Prioritize typography, whitespace, alignment, and visual hierarchy.

Avoid generic portfolio designs.

## 2. Color Palette

Use a light theme as the default.

Suggested foundation:

- Background: warm off-white.
- Primary text: near-black.
- Secondary text: neutral gray.
- Borders: subtle light gray.
- Surface: white.
- Accent: restrained blue or another carefully selected accent.

Use CSS variables for all design tokens.

Avoid introducing too many colors.

Ensure sufficient contrast.

## 3. Typography

Typography is one of the most important elements.

Guidelines:

- Use a modern sans-serif typeface.
- Prefer clean, readable typography.
- Use strong but restrained headings.
- Use generous line heights.
- Avoid excessively small text.
- Establish a consistent typographic scale.

Use responsive typography with fluid sizing where appropriate.

## 4. Layout

- Center the main content.
- Use a consistent maximum content width.
- Use generous horizontal and vertical spacing.
- Keep layouts balanced.
- Avoid unnecessary containers.
- Use whitespace to separate sections.

## 5. Components

Create reusable components for:

- Navigation.
- Footer.
- Buttons.
- Links.
- Project cards.
- Technology tags.
- Section headings.
- Social links.
- Project metadata.

Components should have consistent spacing, sizing, and interaction states.

## 6. Project Presentation

Projects are the centerpiece of the portfolio.

Project cards should:
- Have clear titles.
- Include short descriptions.
- Show relevant technologies.
- Include attractive visual previews.
- Link to individual project pages.
- Provide source code and demo links where available.

Project detail pages should feel like concise product case studies.

Use large screenshots and clear content hierarchy.

## 7. Animations

Use Framer Motion sparingly.

Good examples:
- Subtle entrance animations.
- Smooth hover interactions.
- Gentle transitions.
- Small navigation transitions.

Avoid:
- Excessive parallax.
- Large movement effects.
- Distracting animations.
- Animations that interfere with usability.

Respect reduced-motion preferences.

## 8. Icons

Use Tabler Icons exclusively.

Package:
`@tabler/icons-react`

Default:
- Outline icons.
- Stroke width: 1.7.
- Consistent icon sizes.

Do not use emoji as UI icons.

## 9. Responsive Design

Use a mobile-first approach.

Ensure:
- Navigation works on mobile.
- Text remains readable.
- Project previews scale correctly.
- Layouts do not overflow.
- Interactive elements have appropriate touch targets.

## 10. Design Quality

Every page should feel like part of the same product.

Before completing a UI implementation, evaluate:

- Alignment.
- Spacing.
- Typography.
- Contrast.
- Consistency.
- Responsiveness.
- Accessibility.
- Interaction quality.

Do not add visual elements without a clear purpose.
