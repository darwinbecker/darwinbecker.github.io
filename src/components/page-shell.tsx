import { Container } from "@/components/container";

type PageShellProps = {
  title: string;
};

export function PageShell({ title }: PageShellProps) {
  return (
    <main className="flex-1 py-[var(--section-space)]">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium text-accent">Darwin Becker</p>
          <h1 className="text-display font-semibold tracking-[-0.06em]">{title}</h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            This page will be developed in a later portfolio milestone.
          </p>
        </div>
      </Container>
    </main>
  );
}
