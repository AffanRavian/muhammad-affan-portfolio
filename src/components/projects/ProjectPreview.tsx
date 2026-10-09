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
  const hasWideEcommerceScreenshot =
    project.slug === "e-commerce-management-platform";

  return (
    <article
      data-project-preview
      data-project-reverse={reverse ? "true" : "false"}
      className={cn(
        "border-t border-ink/10 pt-10 first:border-t-0 first:pt-0 md:pt-14",
        hasWideEcommerceScreenshot &&
          "xl:relative xl:left-1/2 xl:w-[min(102rem,calc(100vw-3rem))] xl:-translate-x-1/2",
      )}
    >
      <Link
        href={href}
        className={cn(
          "group grid gap-8 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring md:grid-cols-12 md:items-center",
          hasWideEcommerceScreenshot
            ? "md:gap-8 lg:gap-10 xl:grid-cols-[minmax(0,0.37fr)_minmax(0,0.63fr)] xl:gap-12"
            : "md:gap-10",
        )}
      >
        <div
          data-project-media
          className={cn(
            hasWideEcommerceScreenshot
              ? "md:order-2 md:col-span-6 md:col-start-7 lg:col-span-7 lg:col-start-6 xl:col-span-1 xl:col-start-2"
              : reverse
                ? "md:order-2 md:col-span-5 md:col-start-8"
                : "md:col-span-5",
          )}
        >
          <PlaceholderMedia
            src={project.mediaPath}
            alt={project.mediaAlt}
            kind={project.mediaKind}
            width={project.mediaWidth}
            height={project.mediaHeight}
            sizes={
              hasWideEcommerceScreenshot
                ? "(min-width: 1648px) 63rem, (min-width: 1280px) 61vw, (min-width: 1024px) 57vw, (min-width: 768px) 48vw, 100vw"
                : "(min-width: 768px) 38vw, 100vw"
            }
          />
        </div>
        <div
          data-project-copy
          className={cn(
            hasWideEcommerceScreenshot
              ? "md:order-1 md:col-span-6 md:col-start-1 lg:col-span-5 xl:col-span-1 xl:col-start-1"
              : reverse
                ? "md:order-1 md:col-span-7 md:col-start-1"
                : "md:col-span-7",
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
      {project.liveUrl && (
        <div
          className={cn(
            "mt-4 grid md:grid-cols-12 md:gap-10",
            hasWideEcommerceScreenshot &&
              "xl:grid-cols-[minmax(0,0.37fr)_minmax(0,0.63fr)] xl:gap-12",
          )}
        >
          <div
            className={cn(
              hasWideEcommerceScreenshot
                ? "md:col-span-6 md:col-start-1 lg:col-span-5 xl:col-span-1 xl:col-start-1"
                : reverse
                  ? "md:col-span-7 md:col-start-1"
                  : "md:col-span-7 md:col-start-6",
            )}
          >
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center rounded-sm font-mono text-xs uppercase tracking-[0.15em] text-ink decoration-2 decoration-accent underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
            >
              Visit Live Website ↗
            </a>
          </div>
        </div>
      )}
    </article>
  );
}
