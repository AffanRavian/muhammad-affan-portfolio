import type { Project } from "@/content/projects";
import { PageContainer } from "@/components/layout/PageContainer";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { ProjectNav } from "@/components/projects/ProjectNav";
import { getAdjacentProjects } from "@/content/projects";
import { Button } from "@/components/ui/Button";
import { SECTION_IDS } from "@/lib/constants";

type ProjectCaseStudyProps = {
  project: Project;
};

function CaseBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-ink/10 py-10 first:pt-10">
      <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/65">
        {title}
      </h2>
      <div className="mt-4 text-base leading-relaxed text-ink/85">{children}</div>
    </section>
  );
}

export function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  const { prev, next } = getAdjacentProjects(project.slug);

  return (
    <article className="bg-paper pb-section-rhythm pt-28 text-ink">
      <PageContainer>
        <header className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/65">
              <span className="rounded-sm bg-accent px-1.5 py-0.5 text-ink">
                {project.index}
              </span>
              <span className="mx-3 inline-block h-px w-6 align-middle bg-ink/25" />
              {project.category}
            </p>
            <h1 className="mt-4 font-display text-display-h2 tracking-tight text-ink">
              {project.title}
            </h1>
            <p className="mt-3 text-sm text-ink/65">{project.employer}</p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/80">
              {project.summary}
            </p>
          </div>
          <div className="lg:col-span-5">
            <PlaceholderMedia
              src={project.placeholderPath}
              alt={`Abstract conceptual artwork for ${project.title} — not an application screenshot`}
              kind={project.mediaKind}
              priority
            />
          </div>
        </header>

        <div className="mt-16 max-w-3xl">
          <CaseBlock title="Overview">
            <p>{project.summary}</p>
          </CaseBlock>

          <CaseBlock title="Role & contributions">
            <ul className="list-disc space-y-2 pl-5">
              {project.roleBullets.map((bullet) => (
                <li key={bullet.slice(0, 60)}>{bullet}</li>
              ))}
            </ul>
          </CaseBlock>

          <CaseBlock title="Problem / context">
            <p>{project.problemContext}</p>
          </CaseBlock>

          <CaseBlock title="Features implemented">
            <ul className="list-disc space-y-2 pl-5">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </CaseBlock>

          <CaseBlock title="Stack">
            <ul className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-sm border border-ink/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </CaseBlock>

          <CaseBlock title="Engineering notes">
            <ul className="list-disc space-y-2 pl-5">
              {project.engineeringNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </CaseBlock>

          <section className="border-t border-ink/10 py-10">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/65">
              Gallery
            </h2>
            <div className="mt-6">
              <ProjectGallery items={project.gallery} />
            </div>
          </section>

          <CaseBlock title="Considerations">
            <ul className="list-disc space-y-2 pl-5">
              {project.considerations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CaseBlock>

          {!project.liveUrl && !project.repoUrl && (
            <div className="mt-10 rounded-sm border border-ink/15 bg-foundation/5 px-4 py-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/70">
                Private project — walkthrough available upon request
              </p>
            </div>
          )}

          <div className="mt-12 flex flex-wrap gap-4">
            <Button href={`/#${SECTION_IDS.work}`} variant="primary">
              Back to selected work
            </Button>
            <Button href={`/#${SECTION_IDS.contact}`} variant="outline">
              Contact
            </Button>
          </div>
        </div>

        <ProjectNav prev={prev} next={next} />
      </PageContainer>
    </article>
  );
}
