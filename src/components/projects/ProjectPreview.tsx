import Link from "next/link";
import type { Project } from "@/content/projects";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { cn } from "@/lib/utils";

type ProjectPreviewProps = {
  project: Project;
  reverse?: boolean;
};

export function ProjectPreview({ project, reverse }: ProjectPreviewProps) {
  const href = `/projects/${project.slug}`;

  return (
    <article className="border-t border-ink/10 pt-10 first:border-t-0 first:pt-0 md:pt-14">
      <Link
        href={href}
        className="group grid gap-8 md:grid-cols-12 md:items-center md:gap-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring rounded-sm"
      >
        <div
          className={cn(
            "md:col-span-5",
            reverse ? "md:order-2 md:col-start-8" : "md:col-span-5",
          )}
        >
          <PlaceholderMedia
            src={project.placeholderPath}
            alt={`Abstract conceptual artwork for ${project.title} — not an application screenshot`}
            kind={project.mediaKind}
            sizes="(min-width: 768px) 38vw, 100vw"
          />
        </div>
        <div
          className={cn(
            "md:col-span-7",
            reverse ? "md:order-1 md:col-start-1" : "",
          )}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/65">
            <span className="rounded-sm bg-accent px-1.5 py-0.5 text-ink">
              {project.index}
            </span>
            <span className="mx-3 inline-block h-px w-6 align-middle bg-ink/25" />
            {project.category}
          </p>
          <h3 className="mt-4 font-display text-2xl tracking-tight text-ink transition-colors group-hover:text-ink/80 md:text-3xl">
            {project.title}
          </h3>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/75">
            {project.summary}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-sm border border-ink/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-ink/80"
              >
                {tech}
              </li>
            ))}
          </ul>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.15em] text-ink decoration-2 decoration-accent underline-offset-4 group-hover:underline">
            View case study →
          </p>
        </div>
      </Link>
    </article>
  );
}
