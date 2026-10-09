import { site } from "@/content/site";
import { cn } from "@/lib/utils";

type SocialLinksProps = {
  className?: string;
  linkClassName?: string;
};

const entries = [
  { label: "GitHub", url: site.social.github },
  { label: "LinkedIn", url: site.social.linkedin },
] as const;

export function SocialLinks({ className, linkClassName }: SocialLinksProps) {
  const visible = entries.filter((e) => e.url);

  if (visible.length === 0) return null;

  return (
    <ul className={cn("flex flex-wrap gap-x-6 gap-y-2", className)}>
      {visible.map(({ label, url }) => (
        <li key={label}>
          <a
            href={url!}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "font-mono text-xs uppercase tracking-[0.15em] text-accent underline-offset-4 transition-colors hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring",
              linkClassName,
            )}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}
