import { TechnologyTag } from "@/components/technology-tag";

type ProjectCardProps = {
  title: string;
  description: string;
  href: string;
  technologies: string[];
};

export function ProjectCard({
  title,
  description,
  href,
  technologies,
}: ProjectCardProps) {
  return (
    <article className="group relative rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-foreground/20 sm:p-8">
      <h3 className="text-xl font-semibold tracking-tight">
        <a className="rounded-sm after:absolute after:inset-0" href={href}>
          {title}
        </a>
      </h3>
      <p className="mt-3 max-w-prose leading-7 text-muted">{description}</p>
      <ul aria-label={`${title} technologies`} className="mt-6 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <li key={technology}>
            <TechnologyTag>{technology}</TechnologyTag>
          </li>
        ))}
      </ul>
    </article>
  );
}
