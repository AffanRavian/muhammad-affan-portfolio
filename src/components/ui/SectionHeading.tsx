import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  index?: string;
  eyebrow?: string;
  title: string;
  id: string;
  inverse?: boolean;
  className?: string;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  id,
  inverse = false,
  className,
}: SectionHeadingProps) {
  return (
    <header className={cn("mb-10 md:mb-14", className)}>
      {(index || eyebrow) && (
        <p
          className={cn(
            "font-mono text-[11px] uppercase tracking-[0.2em]",
            inverse ? "text-muted" : "text-ink/65",
          )}
        >
          {index && (
            <span
              className={cn(
                inverse
                  ? "text-accent"
                  : "rounded-sm bg-accent px-1.5 py-0.5 text-ink",
              )}
            >
              {index}
            </span>
          )}
          {index && eyebrow && (
            <span
              className={cn(
                "mx-3 inline-block h-px w-6 align-middle",
                inverse ? "bg-muted/60" : "bg-ink/25",
              )}
            />
          )}
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={cn(
          "mt-3 font-display text-display-h2 tracking-tight",
          inverse ? "text-ink-inverse" : "text-ink",
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          "mt-6 h-px w-full max-w-[12rem]",
          inverse ? "bg-ink-inverse/15" : "bg-ink/10",
        )}
        aria-hidden
      />
    </header>
  );
}
