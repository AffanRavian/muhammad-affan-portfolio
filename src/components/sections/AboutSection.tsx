import { aboutCopy } from "@/content/about";
import { SECTION_IDS } from "@/lib/constants";
import { SectionShell } from "@/components/layout/SectionShell";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  const headingId = "about-heading";

  return (
    <SectionShell id={SECTION_IDS.about} theme="foundation" labelledBy={headingId}>
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            index="03"
            eyebrow="About"
            title="Clarity over complexity"
            id={headingId}
            inverse
          />
        </div>
        <div className="lg:col-span-7">
          <p className="text-lg leading-relaxed text-ink-inverse/85 md:text-xl">
            {aboutCopy}
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
