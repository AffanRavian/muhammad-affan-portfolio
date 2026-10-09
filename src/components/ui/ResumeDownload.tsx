import { site } from "@/content/site";
import { cn } from "@/lib/utils";

type ResumeDownloadProps = {
  className?: string;
};

export function ResumeDownload({ className }: ResumeDownloadProps) {
  if (site.resumeFilename) {
    return (
      <a
        href={`/resume/${site.resumeFilename}`}
        download
        className={cn(
          "inline-flex min-h-11 items-center font-mono text-xs uppercase tracking-[0.15em] text-accent underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring",
          className,
        )}
      >
        Download résumé (PDF)
      </a>
    );
  }

  return (
    <p
      className={cn(
        "max-w-md font-mono text-[11px] uppercase leading-relaxed tracking-[0.12em] text-muted",
        className,
      )}
    >
      Résumé PDF not yet published — available on request via email.
    </p>
  );
}
