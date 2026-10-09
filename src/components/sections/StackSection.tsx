import { skillGroups } from "@/content/skills";
import { SECTION_IDS } from "@/lib/constants";
import { SectionShell } from "@/components/layout/SectionShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StackGroup } from "@/components/ui/StackGroup";
import { AnimatedReveal } from "@/components/motion/AnimatedReveal";

export function StackSection() {
  const headingId = "stack-heading";

  return (
    <SectionShell id={SECTION_IDS.stack} theme="foundation" labelledBy={headingId}>
      <AnimatedReveal>
        <SectionHeading
          index="05"
          eyebrow="Stack"
          title="Capabilities grounded in production work"
          id={headingId}
          inverse
        />
      </AnimatedReveal>
      <AnimatedReveal stagger={0.09}>
        <StackGroup groups={skillGroups} inverse />
      </AnimatedReveal>
    </SectionShell>
  );
}
