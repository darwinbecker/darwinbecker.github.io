import Link from "next/link";
import { IconBrandGithub } from "@tabler/icons-react";
import { Container } from "@/components/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-4 py-7 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>Darwin Becker</p>
        <Link
          className="inline-flex w-fit items-center gap-2 rounded-sm transition-colors hover:text-foreground"
          href="https://github.com/darwinbecker"
        >
          <IconBrandGithub aria-hidden="true" size={18} stroke={1.7} />
          GitHub
        </Link>
      </Container>
    </footer>
  );
}
