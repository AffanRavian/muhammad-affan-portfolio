# Muhammad Affan portfolio — Cursor workspace instructions

- Always read `docs/portfolio-master-prompt.md` and `docs/cv-source.md` before implementing or revising portfolio sections.
- The CV is the authority for factual biographical information. The master brief is the authority for design, scope, site architecture, and motion direction. Flag contradictions instead of inventing facts.
- Build with Next.js App Router, strict TypeScript, Tailwind CSS, GSAP and @gsap/react. Prefer Server Components; make only necessary interactive sections Client Components.
- Write clean, understandable, reusable components; avoid bloated components, duplicate styling and premature state-management libraries.
- Use the GSAP skills `gsap-core`, `gsap-timeline`, `gsap-scrolltrigger`, `gsap-plugins`, `gsap-react` and `gsap-performance` when relevant. Use scoped useGSAP and cleanup; support reduced motion.
- No invented personal links, metrics, accolades, client logos, testimonials, screenshots, or achievements. Do not expose personal phone number. Keep unknown links disabled/omitted, not dead clickable buttons.
- Implement in phases: plan first; then responsive static content; then motion; then polish/tests. Do not jump to later phases without user approval.
- Do not perform browser visual tests. The human will do manual browser testing. You may run npm lint, type checks, and build commands and report actual outputs.
- At the end of each phase report: changed files, work completed, decisions, automated checks run and results, known limitations, and exact manual verification steps. Never claim unexecuted checks passed.
- Never commit secrets, real client data or proprietary screenshots. All portfolio images from company projects must be explicitly approved and appropriately redacted.
