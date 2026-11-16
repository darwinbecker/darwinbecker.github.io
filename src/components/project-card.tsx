import Image from "next/image"
import Link from "next/link"
import {
  IconArrowUpRight,
  IconCode,
  IconDeviceGamepad2,
  IconFileText,
} from "@tabler/icons-react"
import { TechnologyTag } from "@/components/technology-tag"

type ProjectCardProps = {
  title: string
  description: string
  summary?: string
  logo: string
  logoAlt: string
  logoWidth: number
  logoHeight: number
  logoClassName: string
  repositoryUrl: string
  liveUrl: string
  documentationUrl?: string
  technologies: string[]
  features: string[]
  development: string[]
  className?: string
}

export function ProjectCard({
  title,
  description,
  summary,
  logo,
  logoAlt,
  logoWidth,
  logoHeight,
  logoClassName,
  repositoryUrl,
  liveUrl,
  documentationUrl,
  technologies,
  features,
  development,
  className = "",
}: ProjectCardProps) {
  return (
    <article
      className={`rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/40 sm:p-8 ${className}`.trim()}
    >
      <div className='flex items-center gap-4'>
        <Image
          src={logo}
          alt={logoAlt}
          width={logoWidth}
          height={logoHeight}
          className={logoClassName}
        />
        <h3 className='text-xl font-semibold tracking-tight'>{title}</h3>
      </div>
      <p className='mt-3 max-w-prose leading-7 text-muted'>{description}</p>
      {summary ? (
        <p className='mt-4 max-w-prose text-sm leading-7 text-muted'>
          {summary}
        </p>
      ) : null}
      <div className='mt-5'>
        <h4 className='text-sm font-semibold text-foreground'>Key features</h4>
        <ul className='mt-3 space-y-2 text-sm leading-6 text-muted'>
          {features.map((feature) => (
            <li className='flex gap-3' key={feature}>
              <span
                aria-hidden='true'
                className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent'
              />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <ul
        aria-label={`${title} technologies`}
        className='mt-6 flex flex-wrap gap-2'
      >
        {technologies.map((technology) => (
          <li key={technology}>
            <TechnologyTag>{technology}</TechnologyTag>
          </li>
        ))}
      </ul>
      {development.length ? (
        <div className='mt-6 border-t border-border pt-5'>
          <h4 className='text-sm font-semibold text-foreground'>
            Development work
          </h4>
          <ul className='mt-3 space-y-2 text-sm leading-6 text-muted'>
            {development.map((item) => (
              <li className='flex gap-3' key={item}>
                <span
                  aria-hidden='true'
                  className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent'
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <div className='mt-7 flex flex-wrap gap-x-3 gap-y-3 border-t border-border pt-5 text-sm font-medium'>
        <Link
          className='inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 transition-colors bg-accent text-[#131915] hover:bg-accent-hover focus-visible:outline-offset-4'
          href={liveUrl}
          rel='noreferrer'
          target='_blank'
        >
          <IconDeviceGamepad2 aria-hidden='true' size={16} stroke={1.7} />
          Play
          <IconArrowUpRight aria-hidden='true' size={16} stroke={1.7} />
        </Link>
        <Link
          className='inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 border text-muted transition-colors hover:text-foreground'
          href={repositoryUrl}
          rel='noreferrer'
          target='_blank'
        >
          <IconCode aria-hidden='true' size={16} stroke={1.7} />
           Code
          <IconArrowUpRight aria-hidden='true' size={16} stroke={1.7} />
        </Link>
        {documentationUrl ? (
          <Link
            className='inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 border text-muted transition-colors hover:text-foreground'
            href={documentationUrl}
            rel='noreferrer'
            target='_blank'
          >
            <IconFileText aria-hidden='true' size={16} stroke={1.7} />
            Docs (PDF)
            <IconArrowUpRight aria-hidden='true' size={16} stroke={1.7} />
          </Link>
        ) : null}
      </div>
    </article>
  )
}
