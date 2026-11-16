import { ButtonLink } from "@/components/button-link"
import { Container } from "@/components/container"
import { ProjectCard } from "@/components/project-card"
import { SectionHeading } from "@/components/section-heading"
import { projects } from "@/data/projects"
import {
  IconAddressBook,
  IconArrowDown,
  IconBrandGithub,
  IconBrandLinkedin,
  IconDeviceGamepad2,
  IconUser,
} from "@tabler/icons-react"

export default function HomePage() {
  return (
    <main className='flex-1'>
      <section
        aria-labelledby='intro-title'
        className='scroll-mt-8 py-24 sm:py-36'
        id='about'
      >
        <Container>
          <div className='max-w-4xl'>
            <p className='mb-6 text-sm font-medium tracking-[0.12em] text-accent uppercase'>
              Darwin Becker <span className='px-2 text-border'>/</span> Software
              developer
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
              Next.js and TypeScript, with work across product areas, technical
              decisions and frontend feature development in small teams and
              startups. Areas of focus include interface usability, code quality
              and performance.
            </p>
            <div className='mt-10 flex flex-wrap gap-3'>
              {/* <ButtonLink href='#projects'>Explore projects</ButtonLink> */}
              <a
                className='inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors bg-accent text-[#131915] hover:bg-accent-hover focus-visible:outline-offset-4'
                href='#projects'
              >
                Explore projects
                <IconArrowDown aria-hidden='true' size={18} stroke={1.7} />
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby='projects-title'
        className='border-t border-border bg-[#191c1f] py-20 sm:py-28'
        id='projects'
      >
        <Container>
          <SectionHeading
            id='projects-title'
            eyebrow='Selected work'
            title='Selected projects'
            description='Browser games, including their key features, development work and technologies.'
            icon={
              <IconDeviceGamepad2 aria-hidden='true' size={64} stroke={1.7} />
            }
          />

          <div className='mt-10 grid gap-4 sm:grid-cols-2'>
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
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
            ))}
          </div>
        </Container>
      </section>
      <section
        aria-labelledby='contact-title'
        className='scroll-mt-8 border-t border-border py-20 sm:py-28'
        id='contact'
      >
        <Container>
          <div className='flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between'>
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
          </div>
        </Container>
      </section>
    </main>
  )
}
