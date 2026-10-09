import { cn } from "@/lib/utils";
import { PageContainer } from "./PageContainer";

type SectionTheme = "foundation" | "paper";

type SectionShellProps = {
  id: string;
  theme: SectionTheme;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  labelledBy?: string;
  ariaLabel?: string;
};

const themeClasses: Record<SectionTheme, string> = {
  foundation: "bg-foundation text-ink-inverse",
  paper: "bg-paper text-ink",
};

export function SectionShell({
  id,
  theme,
  children,
  className,
  containerClassName,
  labelledBy,
  ariaLabel,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "section-rhythm scroll-mt-24",
        themeClasses[theme],
        className,
      )}
      aria-labelledby={labelledBy}
      aria-label={ariaLabel}
    >
      <PageContainer className={containerClassName}>{children}</PageContainer>
    </section>
  );
}
