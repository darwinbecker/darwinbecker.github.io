import Link from "next/link"
import { Container } from "@/components/container"
import {
  IconAddressBook,
  IconBriefcase,
  IconCode,
  IconDeviceGamepad2,
  IconUser,
} from "@tabler/icons-react"

const navigationItems = [
  { label: "About", href: "#about", icon: IconUser },
  { label: "Experience", href: "#experience", icon: IconBriefcase },
  { label: "Skills", href: "#skills", icon: IconCode },
  { label: "Projects", href: "#projects", icon: IconDeviceGamepad2 },
  { label: "Contact", href: "#contact", icon: IconAddressBook },
]

export function SiteHeader() {
  return (
    <header id='site-header' className='border-b border-border/80'>
      <Container className='flex min-h-20 flex-wrap items-center justify-between gap-x-8 gap-y-3 py-4'>
        <Link
          aria-label='Darwin Becker, home'
          className='rounded-sm text-base font-semibold tracking-[-0.03em]'
          href='/'
        >
          Darwin Becker
        </Link>
        <nav aria-label='Main navigation'>
          <ul className='flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted'>
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  className='rounded-sm py-2 transition-colors hover:text-foreground'
                  href={item.href}
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
