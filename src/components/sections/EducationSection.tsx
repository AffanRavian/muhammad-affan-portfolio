import { education } from "@/content/education";
import { SECTION_IDS } from "@/lib/constants";
import { SectionShell } from "@/components/layout/SectionShell";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function EducationSection() {
  const headingId = "education-heading";

  return (
    <SectionShell
      id={SECTION_IDS.education}
      theme="paper"
      labelledBy={headingId}
    >
      <SectionHeading
        index="06"
        eyebrow="Education"
        title="Formal training"
        id={headingId}
      />
      <ul className="grid gap-8 md:grid-cols-2">
        {education.map((entry) => (
          <li
            key={entry.institution}
            className="border-t border-ink/10 pt-6"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/65">
              {entry.period}
              {entry.note ? ` · ${entry.note}` : ""}
            </p>
            <h3 className="mt-3 font-display text-xl tracking-tight text-ink">
              {entry.institution}
            </h3>
            <p className="mt-2 text-ink/75">{entry.qualification}</p>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
