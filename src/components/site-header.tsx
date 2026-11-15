import Link from "next/link";
import { Container } from "@/components/container";

const navigationItems = [
  { label: "About", href: "/about/" },
  { label: "Projects", href: "/projects/" },
  { label: "Contact", href: "/contact/" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-border/80">
      <Container className="flex min-h-20 flex-wrap items-center justify-between gap-x-8 gap-y-3 py-4">
        <Link
          aria-label="Darwin Becker, home"
          className="rounded-sm text-base font-semibold tracking-[-0.03em]"
          href="/"
        >
          Darwin Becker
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted sm:gap-x-8">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  className="rounded-sm py-2 transition-colors hover:text-foreground"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
