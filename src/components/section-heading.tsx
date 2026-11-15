type SectionHeadingProps = {
  title: string;
  description?: string;
  eyebrow?: string;
};

export function SectionHeading({
  title,
  description,
  eyebrow,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold tracking-[0.14em] text-accent uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-title font-semibold tracking-[-0.045em]">{title}</h2>
      {description ? (
        <p className="mt-5 text-base leading-7 text-muted sm:text-lg sm:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}
