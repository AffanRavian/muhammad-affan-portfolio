import { skillGroups } from "@/content/skills";
import { SECTION_IDS } from "@/lib/constants";
import { SectionShell } from "@/components/layout/SectionShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StackGroup } from "@/components/ui/StackGroup";

export function StackSection() {
  const headingId = "stack-heading";

  return (
    <SectionShell id={SECTION_IDS.stack} theme="foundation" labelledBy={headingId}>
      <SectionHeading
        index="05"
        eyebrow="Stack"
        title="Capabilities grounded in production work"
        id={headingId}
        inverse
      />
      <StackGroup groups={skillGroups} inverse />
    </SectionShell>
  );
}
