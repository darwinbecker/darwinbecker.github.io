import Link from "next/link";
import type { ComponentProps } from "react";
import { IconArrowUpRight } from "@tabler/icons-react";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary";
};

const variants = {
  primary:
    "bg-foreground text-background hover:bg-accent-hover focus-visible:outline-offset-4",
  secondary:
    "border border-border bg-surface text-foreground hover:border-foreground/30 hover:bg-white",
};

export function ButtonLink({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${variants[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
      <IconArrowUpRight aria-hidden="true" size={18} stroke={1.7} />
    </Link>
  );
}
