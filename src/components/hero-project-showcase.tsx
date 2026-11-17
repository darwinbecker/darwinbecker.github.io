"use client"

import Image from "next/image"
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion"
import { IconArrowUpRight } from "@tabler/icons-react"
import { useRef, useState } from "react"
import type { Project } from "@/data/projects"

type ProjectPreview = Pick<
  Project,
  | "slug"
  | "title"
  | "description"
  | "summary"
  | "logo"
  | "technologies"
  | "liveUrl"
>

type HeroProjectShowcaseProps = {
  wordle: ProjectPreview
  blackjack: ProjectPreview
}

type ProjectWindowProps = {
  project: ProjectPreview
  reducedMotion: boolean
}

const wordleFeedback = [
  "bg-[#659d69]",
  "bg-[#c3b14e]",
  "bg-[#777a7b]",
  "bg-[#659d69]",
  "bg-[#777a7b]",
]

function ProjectWindow({ project, reducedMotion }: ProjectWindowProps) {
  const wordle = project.slug === "wordle"

  return (
    <motion.a
      aria-label={`Open ${project.title} project in a new tab`}
      className='group block overflow-hidden rounded-2xl border border-white/10 bg-[#202327] shadow-[0_24px_70px_rgba(0,0,0,0.42)] transition-colors hover:border-accent/40 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4'
      href={project.liveUrl}
      rel='noreferrer'
      target='_blank'
      whileHover={reducedMotion ? undefined : { y: -7, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      <div className='flex h-9 items-center gap-2 border-b border-white/10 px-3'>
        <div aria-hidden='true' className='flex gap-1'>
          <span className='h-1.5 w-1.5 rounded-full bg-[#dd7772]' />
          <span className='h-1.5 w-1.5 rounded-full bg-[#d2b565]' />
          <span className='h-1.5 w-1.5 rounded-full bg-[#79a979]' />
        </div>
        <span className='min-w-0 flex-1 truncate rounded-md bg-[#151719] px-3 py-1 text-center text-[0.6rem] text-muted'>
          darwinbecker.github.io/{project.slug}
        </span>
        <IconArrowUpRight
          aria-hidden='true'
          className='shrink-0 text-muted transition-colors group-hover:text-accent'
          size={15}
          stroke={1.7}
        />
      </div>

      <div className='p-4 sm:p-5'>
        <div className='flex items-center gap-3'>
          <div className='relative h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-[#151719]'>
            <Image
              alt=''
              className={wordle ? "object-cover" : "object-contain p-1"}
              fill
              sizes='44px'
              src={project.logo}
            />
          </div>
          <div className='min-w-0'>
            <p className='font-semibold tracking-tight text-foreground'>
              {project.title}
            </p>
            <p className='truncate text-xs text-muted'>{project.description}</p>
          </div>
        </div>

        {wordle ? (
          <div
            aria-hidden='true'
            className='mt-4 flex flex-col items-center gap-3 rounded-xl border border-white/[0.06] bg-[#191c1f] px-3 py-3'
          >
            <span className='text-xs font-medium text-foreground'>
              Guess the word in six attempts
              <span className='mt-1 block text-[0.65rem] font-normal text-muted text-center'>
                5 letters <span className='px-1 text-border'>/</span> 6 tries
              </span>
            </span>
            <div className='grid grid-cols-5 gap-1'>
              {Array.from({ length: 30 }, (_, index) => (
                <span
                  className={`h-6 w-6 rounded-[2px] border ${
                    index < wordleFeedback.length
                      ? wordleFeedback[index]
                      : "border-white/10 bg-[#202327]"
                  }`}
                  key={index}
                />
              ))}
            </div>
          </div>
        ) : (
          <div
            aria-hidden='true'
            className='mt-4 flex flex-col items-center gap-2 rounded-xl border border-white/[0.06] bg-[#191c1f] px-4 py-3'
          >
            <span className='text-xs font-medium text-foreground'>
              Play against the dealer
              <span className='mt-1 block text-[0.65rem] font-normal text-muted text-center'>
                Hit <span className='px-1 text-border'>/</span> Stand
              </span>
            </span>
            <Image
              alt=''
              className='h-36 w-full object-contain'
              height={1080}
              src='/projects/blackjack-table.png'
              width={1080}
            />
          </div>
        )}

        <div className='mt-4 flex items-center justify-between gap-2'>
          <div className='flex flex-wrap gap-1.5'>
            {project.technologies.slice(0, 2).map((technology) => (
              <span
                className='rounded-full border border-white/10 px-2 py-1 text-[0.6rem] text-muted'
                key={technology}
              >
                {technology}
              </span>
            ))}
          </div>
          <span className='inline-flex shrink-0 items-center gap-1 text-xs font-medium text-accent'>
            Play
            <IconArrowUpRight aria-hidden='true' size={14} stroke={1.7} />
          </span>
        </div>
      </div>
    </motion.a>
  )
}

export function HeroProjectShowcase({
  wordle,
  blackjack,
}: HeroProjectShowcaseProps) {
  const showcaseRef = useRef<HTMLDivElement>(null)
  const [activeSlug, setActiveSlug] = useState<"wordle" | "blackjack">("wordle")
  const shouldReduceMotion = useReducedMotion() ?? false
  const { scrollYProgress } = useScroll({
    target: showcaseRef,
    offset: ["start end", "end start"],
  })
  const backCardY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -24]), {
    stiffness: 80,
    damping: 22,
  })
  const frontCardY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 24]), {
    stiffness: 80,
    damping: 22,
  })
  const backCardRotation = useSpring(
    useTransform(scrollYProgress, [0, 1], [6, 2]),
    { stiffness: 80, damping: 22 },
  )
  const frontCardRotation = useSpring(
    useTransform(scrollYProgress, [0, 1], [-2, 1]),
    { stiffness: 80, damping: 22 },
  )
  const activeProject = activeSlug === "wordle" ? wordle : blackjack
  const backgroundProject = activeSlug === "wordle" ? blackjack : wordle

  return (
    <motion.div className='mx-auto w-full max-w-[27rem]' ref={showcaseRef}>
      <h2 className='mb-4 text-xl font-semibold tracking-tight text-foreground'>
        Projects ready to play:
      </h2>
      <div
        aria-label='Choose a featured project'
        className='mb-10 inline-flex rounded-full border border-border bg-surface p-1 sm:mb-8'
        role='group'
      >
        {[wordle, blackjack].map((project) => {
          const isActive = project.slug === activeSlug

          return (
            <button
              aria-controls='hero-project-preview'
              aria-pressed={isActive}
              className={`min-h-9 rounded-full px-4 text-sm font-medium transition-colors focus-visible:outline-offset-2 ${
                isActive
                  ? "bg-accent text-[#131915]"
                  : "text-muted hover:text-foreground"
              }`}
              key={project.slug}
              onClick={() =>
                setActiveSlug(
                  project.slug === "wordle" ? "wordle" : "blackjack",
                )
              }
              type='button'
            >
              {project.title}
            </button>
          )
        })}
      </div>

      <div
        className='relative min-h-[27rem] sm:aspect-square sm:min-h-0'
        id='hero-project-preview'
      >
        <AnimatePresence initial={false} mode='sync'>
          <motion.div
            animate={{ opacity: 0.82, scale: 0.88, x: 0 }}
            className='absolute right-0 top-[3%] z-0 w-[74%] scale-95 sm:scale-100'
            exit={{ opacity: 0, scale: 0.84, x: -18 }}
            initial={
              shouldReduceMotion ? false : { opacity: 0, scale: 0.84, x: 18 }
            }
            key={`background-${backgroundProject.slug}`}
            style={
              shouldReduceMotion
                ? undefined
                : { y: backCardY, rotate: backCardRotation }
            }
            transition={{
              duration: shouldReduceMotion ? 0 : 0.3,
              ease: "easeOut",
            }}
          >
            <ProjectWindow
              project={backgroundProject}
              reducedMotion={shouldReduceMotion}
            />
          </motion.div>

          <motion.div
            animate={{ opacity: 1, scale: 1, x: 0 }}
            className='absolute bottom-[3%] left-0 z-10 w-[88%] scale-95 sm:scale-100'
            exit={{ opacity: 0, scale: 0.94, x: 18 }}
            initial={
              shouldReduceMotion ? false : { opacity: 0, scale: 0.94, x: -18 }
            }
            key={`foreground-${activeProject.slug}`}
            style={
              shouldReduceMotion
                ? undefined
                : { y: frontCardY, rotate: frontCardRotation }
            }
            transition={{
              duration: shouldReduceMotion ? 0 : 0.3,
              ease: "easeOut",
            }}
          >
            <ProjectWindow
              project={activeProject}
              reducedMotion={shouldReduceMotion}
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <p className='mt-2 text-center text-xs text-muted'>
        {activeProject.title}
        <span className='px-1 text-border'>/</span>
        click card to play
      </p>
    </motion.div>
  )
}
