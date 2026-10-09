import { experience } from "@/content/experience";
import { SECTION_IDS } from "@/lib/constants";
import { SectionShell } from "@/components/layout/SectionShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedReveal } from "@/components/motion/AnimatedReveal";
import { TimelineProgress } from "@/components/motion/TimelineProgress";

export function ExperienceSection() {
  const headingId = "experience-heading";

  return (
    <SectionShell
      id={SECTION_IDS.experience}
      theme="paper"
      labelledBy={headingId}
    >
      <AnimatedReveal>
        <SectionHeading
          index="04"
          eyebrow="Experience"
          title="Professional timeline"
          id={headingId}
        />
      </AnimatedReveal>
      <TimelineProgress>
        <ol className="relative border-l border-ink/15 pl-6 md:pl-8">
          {experience.map((entry) => (
            <li
              key={entry.period + entry.title}
              data-timeline-entry
              className="relative pb-12 last:pb-0"
            >
              <span
                className="absolute -left-[calc(0.375rem+1px)] top-1.5 h-3 w-3 rounded-full border-2 border-paper bg-accent"
                aria-hidden
              />
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/65">
                {entry.period}
              </p>
              <h3 className="mt-2 font-display text-xl tracking-tight text-ink md:text-2xl">
                {entry.title}
              </h3>
              <p className="mt-1 text-sm text-ink/70">{entry.company}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-ink/80">
                {entry.bullets.map((bullet) => (
                  <li key={bullet.slice(0, 48)}>{bullet}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </TimelineProgress>
    </SectionShell>
  );
}
