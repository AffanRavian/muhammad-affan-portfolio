# Muhammad Affan portfolio

A content-driven personal portfolio built with Next.js App Router, strict TypeScript, Tailwind CSS, GSAP, and `@gsap/react`. Motion is implemented as a responsive, reduced-motion-aware progressive enhancement over the server-rendered portfolio.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

`SITE_URL` is intentionally blank for local and preview builds. Before the
production build, set it to the exact verified HTTPS deployment origin (with no
path) so canonical URLs, indexing, and the sitemap are enabled. See
`.env.example`.

## Validation

```bash
npm run lint
npm run typecheck
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
- GSAP animation is scoped through the client wrappers in `src/components/motion/`; preserve reduced-motion fallbacks and route cleanup when extending it.
