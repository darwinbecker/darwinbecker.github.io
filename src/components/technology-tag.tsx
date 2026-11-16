type TechnologyTagProps = {
  children: string;
};

export function TechnologyTag({ children }: TechnologyTagProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
      {children}
    </span>
  );
}
