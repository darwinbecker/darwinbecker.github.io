"use client"

import Link from "next/link"
import { useState } from "react"
import { Container } from "@/components/container"
import {
  IconAddressBook,
  IconBriefcase,
  IconCode,
  IconDeviceGamepad2,
  IconMenu2,
  IconUser,
  IconX,
} from "@tabler/icons-react"

const navigationItems = [
  { label: "About", href: "#about", icon: IconUser },
  { label: "Experience", href: "#experience", icon: IconBriefcase },
  { label: "Skills", href: "#skills", icon: IconCode },
  { label: "Projects", href: "#projects", icon: IconDeviceGamepad2 },
  { label: "Contact", href: "#contact", icon: IconAddressBook },
]

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header id='site-header' className='border-b border-border/80'>
      <Container className='flex min-h-20 flex-wrap items-center justify-between gap-x-8 gap-y-3 py-4'>
        <Link
          aria-label='Darwin Becker, home'
          className='rounded-sm text-xl font-semibold tracking-[-0.03em]'
          href='/'
        >
          Darwin Becker
        </Link>

        <button
          aria-controls='main-navigation'
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          className='inline-flex size-11 items-center justify-center rounded-md text-foreground transition-colors hover:bg-surface focus-visible:outline-offset-2 md:hidden'
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          type='button'
        >
          {isMenuOpen ? (
            <IconX aria-hidden='true' size={22} stroke={1.7} />
          ) : (
            <IconMenu2 aria-hidden='true' size={22} stroke={1.7} />
          )}
        </button>

        <nav
          aria-label='Main navigation'
          className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id='main-navigation'
        >
          <ul className='flex flex-col gap-1 text-sm text-muted md:flex-row md:flex-wrap md:items-center md:gap-x-6 md:gap-y-2'>
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  className='inline-flex rounded-sm py-2 transition-colors hover:text-foreground'
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className='inline-flex items-center gap-1.5'>
                    <item.icon aria-hidden='true' size={16} stroke={1.7} />
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  )
}
