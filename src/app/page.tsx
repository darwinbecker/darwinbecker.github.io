import { ButtonLink } from "@/components/button-link"
import { Container } from "@/components/container"
import { HeroProjectShowcase } from "@/components/hero-project-showcase"
import { ProjectCard } from "@/components/project-card"
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion-reveal"
import { SectionHeading } from "@/components/section-heading"
import { experience } from "@/data/experience"
import { projects } from "@/data/projects"
import { skillCategories } from "@/data/skills"
import {
  IconAddressBook,
  IconArrowDown,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBriefcase,
  IconCode,
  IconDeviceGamepad2,
  IconUser,
} from "@tabler/icons-react"

export default function HomePage() {
  return (
    <main className='flex-1'>
      <section
        aria-labelledby='intro-title'
        className='py-24 sm:py-36'
        id='about'
      >
        <Container className='grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] lg:gap-12'>
          <Reveal className='max-w-4xl'>
            <div>
              <nav
                aria-label='Social profiles'
                className='mb-2 flex items-center gap-1'
              >
                <a
                  aria-label='GitHub (opens in a new tab)'
                  className='inline-flex size-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface hover:text-foreground'
                  href='https://github.com/darwinbecker'
                  rel='noreferrer'
                  target='_blank'
                >
                  <IconBrandGithub aria-hidden='true' size={18} stroke={1.7} />
                </a>
                <a
                  aria-label='LinkedIn (opens in a new tab)'
                  className='inline-flex size-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface hover:text-foreground'
                  href='https://www.linkedin.com/in/darwin-becker-43515a19a/'
                  rel='noreferrer'
                  target='_blank'
                >
                  <IconBrandLinkedin
                    aria-hidden='true'
                    size={18}
                    stroke={1.7}
                  />
                </a>
              </nav>
              <p className='mb-6 text-sm font-medium tracking-[0.12em] text-accent uppercase'>
                Darwin Becker <span className='px-2 text-border'>/</span>{" "}
                Software developer
              </p>
              <h1
                className='max-w-4xl text-title font-semibold tracking-[-0.055em] text-balance inline-flex items-center gap-2'
                id='intro-title'
              >
                <IconUser aria-hidden='true' size={64} stroke={1.7} />
                About me
              </h1>
              <p className='mt-4 max-w-3xl text-lg leading-8 text-muted sm:text-xl sm:leading-9'>
                Frontend developer with full-stack experience and a Master’s
                degree in Computer Science. Background includes Vue.js, React,
                Next.js and TypeScript, with work across product areas,
                technical decisions and frontend feature development in small
                teams and startups. Areas of focus include interface usability,
                code quality and performance.
              </p>
              <div className='mt-8 flex flex-wrap gap-3'>
                <a
                  className='inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors bg-accent text-[#131915] hover:bg-accent-hover focus-visible:outline-offset-4'
                  href='#experience'
                >
                  <IconBriefcase aria-hidden='true' size={18} stroke={1.7} />
                  View my experience
                  <IconArrowDown
                    aria-hidden='true'
                    className='hero-arrow'
                    size={18}
                    stroke={1.7}
                  />
                </a>
              </div>
            </div>
          </Reveal>
          <HeroProjectShowcase wordle={projects[0]} blackjack={projects[1]} />
        </Container>
      </section>

      <section
        aria-labelledby='experience-title'
        className='border-t border-border bg-[#191c1f] py-20 sm:py-28'
        id='experience'
      >
        <Container>
          <Reveal>
            <SectionHeading
              id='experience-title'
              eyebrow='Career'
              title='Professional experience'
              description='Frontend and full-stack roles across product teams, software agencies, consulting, and internal applications.'
              icon={<IconBriefcase aria-hidden='true' size={64} stroke={1.7} />}
            />
          </Reveal>

          <StaggerGroup className='mt-10 divide-y divide-border border-y border-border'>
            {experience.map((item) => (
              <StaggerItem className='py-6' key={item.company}>
                <article className='grid gap-3 sm:grid-cols-[minmax(12rem,0.8fr)_minmax(0,1.4fr)] sm:gap-8'>
                  <div>
                    <h3 className='font-semibold tracking-tight text-foreground'>
                      {item.company}
                    </h3>
                    <p className='mt-1 text-sm text-muted'>{item.period}</p>
                  </div>
                  <div>
                    <p className='font-medium text-accent'>{item.role}</p>
                    <p className='mt-2 text-sm leading-6 text-muted sm:text-base sm:leading-7'>
                      {item.description}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <section
        aria-labelledby='skills-title'
        className='border-t border-border py-20 sm:py-28'
        id='skills'
      >
        <Container>
          <Reveal>
            <SectionHeading
              id='skills-title'
              eyebrow='My toolkit'
              title='Technical skills'
              description='Technologies and practices drawn from my professional work and projects.'
              icon={<IconCode aria-hidden='true' size={64} stroke={1.7} />}
            />
          </Reveal>

          <StaggerGroup className='mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {skillCategories.map((category) => (
              <StaggerItem className='h-full' key={category.title}>
                <article className='h-full rounded-2xl border border-border bg-surface p-5 sm:p-6'>
                  <h3 className='font-semibold tracking-tight text-foreground'>
                    {category.title}
                  </h3>
                  <ul className='mt-4 flex flex-wrap gap-2'>
                    {category.skills.map((skill) => (
                      <li
                        className='rounded-full border border-border bg-background px-2.5 py-1 text-sm text-muted'
                        key={skill}
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <section
        aria-labelledby='projects-title'
        className='border-t border-border bg-[#191c1f] py-20 sm:py-28'
        id='projects'
      >
        <Container>
          <Reveal>
            <SectionHeading
              id='projects-title'
              eyebrow='Selected work'
              title='Projects'
              description='Browser games, including their key features, development work and technologies.'
              icon={
                <IconDeviceGamepad2 aria-hidden='true' size={64} stroke={1.7} />
              }
            />
          </Reveal>

          <StaggerGroup className='mt-10 grid gap-4 sm:grid-cols-2'>
            {projects.map((project) => (
              <StaggerItem key={project.title}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  summary={project.summary}
                  logo={project.logo}
                  logoAlt={project.logoAlt}
                  logoWidth={project.logoWidth}
                  logoHeight={project.logoHeight}
                  logoClassName={project.logoClassName}
                  repositoryUrl={project.repositoryUrl}
                  liveUrl={project.liveUrl}
                  documentationUrl={project.documentationUrl}
                  technologies={project.technologies}
                  features={project.features}
                  development={project.development}
                  className='border-[#34383c] bg-[#202327] hover:border-accent/50'
                />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>
      <section
        aria-labelledby='contact-title'
        className='scroll-mt-8 border-t border-border py-20 sm:py-28'
        id='contact'
      >
        <Container>
          <Reveal className='flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between'>
            <div>
              <p className='mb-3 text-sm font-medium tracking-[0.12em] text-accent uppercase'>
                Get in touch
              </p>
              <h2
                className='text-title font-semibold tracking-[-0.045em] inline-flex items-center gap-2'
                id='contact-title'
              >
                <IconAddressBook aria-hidden='true' size={64} stroke={1.7} />
                Contact
              </h2>
              <p className='mt-4 max-w-xl leading-7 text-muted'>
                Find me on GitHub or LinkedIn.
              </p>
            </div>
            <div className='flex flex-wrap gap-3'>
              <ButtonLink
                href='https://www.linkedin.com/in/darwin-becker-43515a19a/'
                rel='noreferrer'
                target='_blank'
              >
                <IconBrandLinkedin className='h-4 w-4' />
                LinkedIn
              </ButtonLink>
              <ButtonLink
                href='https://github.com/darwinbecker'
                rel='noreferrer'
                target='_blank'
                variant='secondary'
              >
                <IconBrandGithub className='h-4 w-4' />
                GitHub
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  )
}
