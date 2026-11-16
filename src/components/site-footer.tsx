import { Container } from "@/components/container"
import { IconArrowUp } from "@tabler/icons-react"

export function SiteFooter() {
  return (
    <footer className='border-t border-border'>
      <Container className='flex flex-col gap-4 py-7 text-sm text-muted sm:flex-row sm:items-center sm:justify-end'>
        <a
          className='inline-flex w-fit items-center rounded-sm transition-colors hover:text-foreground'
          href='#site-header'
        >
          Back to top
          <IconArrowUp
            className='ml-2'
            aria-hidden='true'
            size={16}
            stroke={1.7}
          />
        </a>
      </Container>
    </footer>
  )
}
