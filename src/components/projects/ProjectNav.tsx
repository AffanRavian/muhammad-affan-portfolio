import Link from "next/link";
import type { Project } from "@/content/projects";
import { SECTION_IDS } from "@/lib/constants";

type ProjectNavProps = {
  prev: Project | null;
  next: Project | null;
};

export function ProjectNav({ prev, next }: ProjectNavProps) {
  return (
    <nav
      data-case-section
      className="mt-16 grid gap-6 border-t border-ink/10 pt-10 md:grid-cols-2"
      aria-label="Project navigation"
    >
      {prev ? (
        <Link
          href={`/projects/${prev.slug}`}
          data-case-nav-link
          data-case-direction="-1"
          className="group rounded-sm p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/65">
            Previous
          </p>
          <p className="mt-2 font-display text-lg text-ink group-hover:text-ink/70">
            ← {prev.title}
          </p>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={`/projects/${next.slug}`}
          data-case-nav-link
          data-case-direction="1"
          className="group rounded-sm p-2 text-left md:text-right focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/65">
            Next
          </p>
          <p className="mt-2 font-display text-lg text-ink group-hover:text-ink/70">
            {next.title} →
          </p>
        </Link>
      ) : null}
      <div className="md:col-span-2">
        <Link
          href={`/#${SECTION_IDS.contact}`}
          data-case-nav-link
          data-case-direction="1"
          className="font-mono text-xs uppercase tracking-[0.15em] text-ink decoration-2 decoration-accent underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
        >
          Get in touch about this work
        </Link>
      </div>
    </nav>
  );
}
