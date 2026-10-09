import { projects } from "@/content/projects";
import { SECTION_IDS } from "@/lib/constants";
import { SectionShell } from "@/components/layout/SectionShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectPreview } from "@/components/projects/ProjectPreview";

export function WorkSection() {
  const headingId = "work-heading";

  return (
    <SectionShell id={SECTION_IDS.work} theme="paper" labelledBy={headingId}>
      <SectionHeading
        index="02"
        eyebrow="Selected Work"
        title="Systems built for real operations"
        id={headingId}
      />
      <div className="flex flex-col gap-12 md:gap-16">
        {projects.map((project, i) => (
          <ProjectPreview key={project.slug} project={project} reverse={i % 2 === 1} />
        ))}
      </div>
    </SectionShell>
  );
}
