export type Project = {
  slug: string
  title: string
  description: string
  summary: string
  logo: string
  logoAlt: string
  logoWidth: number
  logoHeight: number
  logoClassName: string
  technologies: string[]
  repositoryUrl: string
  liveUrl: string
  documentationUrl?: string
  features: string[]
  development: string[]
}

export const projects: Project[] = [
  {
    slug: 'wordle',
    title: 'Wordle',
    description: 'A German-language version of the Wordle browser game.',
    summary:
      'Guess a five-letter word in six attempts, using the feedback from each guess to narrow down the answer.',
    logo: '/projects/wordle-logo-small.png',
    logoAlt: 'Wordle logo tile with the letter W',
    logoWidth: 2700,
    logoHeight: 420,
    logoClassName: 'h-14 w-14 shrink-0 object-cover object-left',
    technologies: ['React', 'TypeScript', 'RxJS', 'Testing Library React'],
    repositoryUrl: 'https://github.com/darwinbecker/wordle',
    liveUrl: 'https://darwinbecker.github.io/wordle/',
    documentationUrl: '/projects/wordle-project-documentation-de.pdf',
    features: [
      'Guess a five-letter word in six attempts',
      'Use a physical or on-screen keyboard',
      'Color-coded feedback and word definitions',
    ],
    development: [
      'Built a component-based interface with React and TypeScript.',
      'Used RxJS Observables to handle event-driven interactions and manage asynchronous event streams.',
      'Built and cleaned a German word database, filtering entries and normalizing special characters.',
      'Added unit and component tests with React Testing Library to verify word-matching logic, letter feedback and grid component rendering.',
    ],
  },
  {
    slug: 'blackjack',
    title: 'Blackjack',
    description: 'A browser-based Blackjack game.',
    summary:
      'Play against the dealer with the two basic actions, Hit and Stand. The project uses custom playing cards and Pinia for centralized game state.',
    logo: '/projects/blackjack-logo.png',
    logoAlt: 'Blackjack logo with playing cards and a 21 chip',
    logoWidth: 281,
    logoHeight: 285,
    logoClassName: 'h-14 w-14 shrink-0 object-contain',
    technologies: ['Vue 3', 'TypeScript', 'Pinia', 'Jest', 'Vite'],
    repositoryUrl: 'https://github.com/darwinbecker/blackjack',
    liveUrl: 'https://darwinbecker.github.io/blackjack/',
    features: [
      'Play against the dealer with Hit and Stand actions',
      'Custom-designed playing cards',
      'Centralized game state with Pinia',
    ],
    development: [
      'Built a component-based interface with Vue 3 and TypeScript.',
      'Designed custom playing cards for the game.',
      'Centralized reactive game state using Pinia.',
      'Applied functional programming principles to keep game logic modular and predictable.',
      'Implemented unit tests with Jest for hand calculations, Ace valuation and bust detection, including edge cases.',
    ],
  },
]
