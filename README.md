# Muhammad Affan portfolio

A content-driven personal portfolio built with Next.js App Router, strict TypeScript, and Tailwind CSS. The current implementation covers the static responsive experience (Phase 2); GSAP motion is intentionally deferred to Phase 3.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Project structure

- `src/app/` — routes, layout, and global styles
- `src/components/` — layout, section, project, and UI components
- `src/content/` — typed portfolio content sourced from the approved CV
- `public/projects/` — conceptual project artwork or approved redacted screenshots
- `docs/` — approved implementation plan, source material, and phase reports

## Content and asset rules

- `docs/cv-source.md` is the authority for professional facts.
- `docs/implementation-plan.md` is the authority for approved scope and design decisions.
- Project artwork currently in `public/projects/` is conceptual and is labeled as such in the interface.
- Do not add employer screenshots until they are explicitly approved and appropriately redacted.
- A résumé download is shown only after an approved PDF is placed in `public/resume/` and configured in `src/content/site.ts`.
- GSAP and `@gsap/react` belong to Phase 3 and are not required for the current static implementation.
