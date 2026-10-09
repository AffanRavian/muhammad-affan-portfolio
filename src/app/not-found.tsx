import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main
        id="main"
        tabIndex={-1}
        className="flex min-h-[70vh] flex-1 items-center bg-foundation py-section-rhythm"
      >
        <PageContainer>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            404
          </p>
          <h1 className="mt-4 font-display text-display-h2 tracking-tight text-ink-inverse">
            Page not found
          </h1>
          <p className="mt-4 max-w-md text-ink-inverse/75">
            The route you requested is not part of this portfolio. Return to the
            homepage or explore selected work.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/" variant="primary">
              Back home
            </Button>
            <Link
              href="/#work"
              className="inline-flex min-h-11 items-center font-mono text-xs uppercase tracking-[0.15em] text-accent underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
            >
              View work
            </Link>
          </div>
        </PageContainer>
      </main>
    </>
  );
}
