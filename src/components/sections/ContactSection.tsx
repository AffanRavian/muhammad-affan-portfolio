import { site } from "@/content/site";
import { SECTION_IDS } from "@/lib/constants";
import { SectionShell } from "@/components/layout/SectionShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { ResumeDownload } from "@/components/ui/ResumeDownload";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { TextLink } from "@/components/ui/TextLink";
import { AnimatedReveal } from "@/components/motion/AnimatedReveal";

export function ContactSection() {
  const headingId = "contact-heading";

  return (
    <SectionShell id={SECTION_IDS.contact} theme="foundation" labelledBy={headingId}>
      <AnimatedReveal>
        <SectionHeading
          index="07"
          eyebrow="Contact"
          title="Let's build something useful"
          id={headingId}
          inverse
        />
      </AnimatedReveal>
      <AnimatedReveal className="grid gap-10 lg:grid-cols-12" stagger={0.12}>
        <div data-motion-item className="lg:col-span-7">
          <a
            href={`mailto:${site.email}`}
            className="block font-display text-[clamp(1.75rem,5vw,3.5rem)] leading-none tracking-tight text-accent underline-offset-4 transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring break-all"
          >
            {site.email}
          </a>
          <p className="mt-6 text-base text-ink-inverse/75">{site.location}</p>
        </div>
        <div
          data-motion-item
          className="flex flex-col gap-6 lg:col-span-5 lg:items-start"
        >
          <SocialLinks />
          <ResumeDownload />
          <p className="text-sm text-muted">
            Prefer a direct message?{" "}
            <TextLink href={`mailto:${site.email}`} className="text-accent">
              Email me
            </TextLink>
            .
          </p>
        </div>
      </AnimatedReveal>
      <AnimatedReveal>
        <div data-motion-item>
          <SiteFooter />
        </div>
      </AnimatedReveal>
    </SectionShell>
  );
}
