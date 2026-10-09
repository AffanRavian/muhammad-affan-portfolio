import { site } from "@/content/site";
import { SECTION_IDS } from "@/lib/constants";
import { SectionShell } from "@/components/layout/SectionShell";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <SectionShell
      id={SECTION_IDS.hero}
      theme="foundation"
      className="hero-grid relative overflow-hidden"
      ariaLabel="Introduction"
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            <span className="text-accent">01</span>
            <span className="mx-3 inline-block h-px w-6 align-middle bg-muted/60" />
            {site.eyebrow}
          </p>
          <h1 className="mt-6 font-display text-display-name tracking-tight text-ink-inverse">
            {site.name}
          </h1>
          <p className="mt-8 max-w-2xl font-display text-display-h2 leading-tight tracking-tight text-ink-inverse/95">
            {site.headline}
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-inverse/75 md:text-lg">
            {site.supportingCopy}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={`#${SECTION_IDS.work}`} variant="primary">
              Explore Selected Work
            </Button>
            <Button href={`#${SECTION_IDS.contact}`} variant="secondary">
              Get in Touch
            </Button>
          </div>
          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            {site.availability}
          </p>
        </div>
        <div
          className="hidden lg:col-span-4 lg:flex lg:flex-col lg:justify-end lg:pb-4"
          aria-hidden
        >
          <div className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.2em] text-muted/80">
            <p>Interface systems</p>
            <p className="mt-1">API integration</p>
            <p className="mt-6 h-px w-12 bg-accent/40" />
            <p className="mt-6">Role-aware products</p>
            <p className="mt-1">Clear, maintainable delivery</p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
