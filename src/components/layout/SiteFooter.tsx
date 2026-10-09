import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-ink-inverse/10 pt-8">
      {site.footerCredit && (
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          {site.footerCredit}
        </p>
      )}
      <p
        className={
          site.footerCredit ? "mt-2 text-sm text-muted" : "text-sm text-muted"
        }
      >
        © {site.name}
      </p>
    </footer>
  );
}
