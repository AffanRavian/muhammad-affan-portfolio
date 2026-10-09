# Phase 4 production audit

**Audit date:** October 10, 2026  
**Scope:** Production polish, performance, accessibility, SEO, and launch configuration  
**Method:** Independent source/configuration inspection, repository-state review, installed dependency inspection, existing build-artifact inspection, CV/document comparison, and limited public-link lookup. No browser visual, interaction, screen-reader, Lighthouse, or automated browser testing was performed.

## Repository state at audit

- Project root: `D:/Affan/Portfolio/muhammad-affan-portfolio`
- Branch: `main` at `acddcb3` (`origin/main` is currently marked gone).
- Remote was inspected and left unchanged.
- Phase 3 application and documentation changes are present as uncommitted work and are being preserved.
- No files were reset, cleaned, stashed, committed, pushed, or deployed.
- Installed production stack: Next.js 16.4.0, React 19.3.0, GSAP 3.15.0, and `@gsap/react` 2.1.2.

## Audit table

| # | Feature / requirement | Status | Existing file(s) | Problem or gap | Required action |
|---:|---|---|---|---|---|
| 1 | App Router and Server Components by default | COMPLETE | `src/app/`, `src/components/sections/`, `src/components/projects/` | Content and route composition remain server-rendered; only interactive/motion islands opt into the client. | Preserve the current boundary model. |
| 2 | Minimal client hydration | PARTIAL | `src/components/layout/SiteHeader.tsx`, `src/components/motion/*` | Client islands are justified, but shared GSAP plumbing imports SplitText for every motion consumer even though only the homepage hero uses it. | Move SplitText registration/import to the hero-only module so case-study motion does not request it through the shared entry. |
| 3 | GSAP plugin loading | PARTIAL | `src/lib/gsap.ts`, `src/components/motion/HeroIntro.tsx` | Core, React, ScrollTrigger, and SplitText are registered correctly, but SplitText is not route-scoped. | Keep core/ScrollTrigger registration shared and register SplitText only where used. |
| 4 | GSAP lifecycle, scoping, and cleanup | COMPLETE | `src/components/motion/*` | `useGSAP`, scoped roots, matchMedia reversion, route-key updates, listener removal, tween cleanup, and SplitText reversion are present. | Preserve; re-check after optimization. |
| 5 | GPU-friendly animation properties and bounded work | COMPLETE | `src/components/motion/*` | Motion uses transform/opacity/scale with controlled `will-change`; no pinning, smooth-scroll hijack, infinite loop, interval, or global refresh loop was found. | Preserve artistic timing and behavior. |
| 6 | Responsive and reduced-motion GSAP behavior | COMPLETE | `src/lib/gsap.ts`, `src/components/motion/*`, `src/app/globals.css` | Explicit desktop/tablet/mobile/reduced-motion paths exist; reduced-motion branches leave server-rendered content visible. | Preserve and document manual verification. |
| 7 | Image optimization and intrinsic layout | COMPLETE | `src/components/ui/PlaceholderMedia.tsx`, `public/projects/*/placeholder.svg` | Local artwork uses `next/image`, fixed aspect-ratio containers, descriptive alternatives, responsive `sizes`, and priority only for case-study hero media. | Preserve; real screenshots remain an owner-supplied future replacement. |
| 8 | Font loading | COMPLETE | `src/app/layout.tsx` | Required fonts use `next/font`, latin subsets, CSS variables, and no external runtime stylesheet. | Preserve approved type system. |
| 9 | Runtime layout stability and loading behavior | UNVERIFIED | `src/app/layout.tsx`, `src/components/ui/PlaceholderMedia.tsx`, motion components | Source provides fixed media geometry and non-blocking progressive enhancement, but CLS, font swap, restored-scroll, and slow-device behavior require a real browser/performance profile. | Owner measures on the production build; do not claim a score. |
| 10 | Global title and title template | COMPLETE | `src/app/layout.tsx` | Homepage default title and project title template are already supported. | Retain and enrich related metadata. |
| 11 | Homepage meta description | COMPLETE | `src/app/layout.tsx`, `src/content/site.ts` | Description is factual and CV-aligned. | Reuse it across supported social metadata. |
| 12 | Unique case-study titles and descriptions | COMPLETE | `src/app/projects/[slug]/page.tsx` | All three projects derive unique title/description data from typed content. | Extend each route with canonical and social metadata without changing copy. |
| 13 | Canonical URL handling | MISSING | `src/app/layout.tsx`, `src/app/projects/[slug]/page.tsx` | No canonical URLs or origin policy exist; no production domain has been supplied. | Add a validated server-only `SITE_URL` policy and emit canonicals only when a verified origin is configured. |
| 14 | Open Graph metadata | MISSING | `src/app/layout.tsx` | No Open Graph title, description, site name, URL, or image exists. | Add factual OG metadata and branded file-based preview artwork. |
| 15 | Twitter/X card metadata | MISSING | `src/app/layout.tsx` | No card metadata or Twitter image exists. | Add `summary_large_image` metadata and a matching file-based image. |
| 16 | Favicon / branded icon | BROKEN | `src/app/favicon.ico` | The checked-in icon is a generic monochrome starter asset and does not reflect the approved `MA.` identity. | Replace it with a code-native branded icon and remove the obsolete starter favicon. |
| 17 | Web app manifest | MISSING | `src/app/` | No App Router manifest or app metadata is present. | Add `manifest.ts` with verified identity, colors, start URL, and icon references. |
| 18 | Robots configuration | MISSING | `src/app/` | No robots route exists, and unconfigured preview builds have no explicit indexing policy. | Add environment-aware robots output: disallow unconfigured builds; allow and advertise sitemap only when `SITE_URL` is valid. |
| 19 | Sitemap | MISSING | `src/app/`, `src/content/projects.ts` | No sitemap route exists. | Generate homepage and all three project URLs only when the verified production origin is configured. |
| 20 | Semantic landmarks and headings | COMPLETE | `src/app/page.tsx`, `src/components/layout/*`, `src/components/sections/*`, `src/components/projects/*` | Header/nav/main/section/article/footer semantics and one-H1 page outlines are coherent by source inspection. | Preserve; owner should inspect the computed outline manually. |
| 21 | Skip navigation | PARTIAL | `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/not-found.tsx`, `src/app/projects/[slug]/page.tsx` | A visible-on-focus skip link exists, but its main targets are not explicitly programmatically focusable. | Add `tabIndex={-1}` to every `#main` target. |
| 22 | Visible focus styles | COMPLETE | `src/app/globals.css`, shared link/button components | Interactive elements consistently define visible accent focus outlines. | Preserve and manually verify contrast/clipping during animation. |
| 23 | Mobile menu accessibility | PARTIAL | `src/components/layout/SiteHeader.tsx` | Focus entry, looping, Escape, and trigger restoration exist. The background main landmark is not inert while the modal menu is open, and body overflow cleanup resets rather than restores a prior value. | Inert the page main while open and restore its prior state and prior body overflow during cleanup. |
| 24 | Touch target sizing | COMPLETE | `src/components/layout/SiteHeader.tsx`, `src/components/ui/Button.tsx`, links | Primary controls use at least 44px minimum height; no tiny icon-only controls exist. | Preserve; manual mobile verification remains required. |
| 25 | Meaningful image alternatives | COMPLETE | `src/content/projects.ts`, `src/components/ui/PlaceholderMedia.tsx` | Alternatives and visible captions explicitly identify conceptual artwork as non-screenshot material. | Preserve when assets change. |
| 26 | Content available without JavaScript | COMPLETE | Server-rendered sections and case studies; motion wrappers | Content is emitted in its readable final state and GSAP enhances after hydration. | Preserve progressive enhancement. |
| 27 | Accessibility reduced-motion fallback | COMPLETE | `src/app/globals.css`, motion components | Scroll behavior and GSAP displacement/reveals are disabled while content stays visible. | Preserve and manually test OS/browser preference changes. |
| 28 | Responsive source behavior | COMPLETE | Tailwind breakpoints across sections/components | Stacked mobile layouts, desktop grids, wrapping text, and bounded containers are present with no code-level forced horizontal scroller. | Preserve; only animation-related fixes are in scope. |
| 29 | Required viewport behavior | UNVERIFIED | All layout and motion files | 320, 375, 768, 1024, and 1440px visual behavior cannot be certified from source. | Owner performs the required viewport matrix; no automated browser test will be run. |
| 30 | CV-backed identity and professional content | COMPLETE | `src/content/*`, `docs/cv-source.md` | Name, role, summary, employment, dates, education, skills, projects, location, and email match the approved sources. | Do not alter facts. |
| 31 | Confidentiality and prohibited content | COMPLETE | `src/content/*`, project SVGs | No phone, client data, proprietary screenshot, testimonial, award, invented metric, demo, or repository URL is published. | Preserve; approve/redact any future employer media. |
| 32 | GitHub and LinkedIn destination validity | UNVERIFIED | `src/content/site.ts` | URLs match the CV. Current lookup surfaced the intended LinkedIn profile, but direct automated fetches were blocked; the GitHub profile could not be independently confirmed in the available lookup. | Owner opens both destinations in a normal browser before launch. |
| 33 | Resume and unavailable project links | COMPLETE | `src/content/site.ts`, `src/components/ui/ResumeDownload.tsx`, `src/content/projects.ts` | Resume remains unavailable honestly; null demo/repository URLs render no dead controls. | Keep until approved assets/URLs are supplied. |
| 34 | Launch media/assets | PARTIAL | `public/projects/*`, no `public/resume/` or approved screenshots | Conceptual project visuals are complete and honest, but real redacted screenshots and approved résumé PDF remain unavailable. | Treat as optional owner-supplied launch inputs; do not invent substitutes. |
| 35 | Next.js production configuration | PARTIAL | `next.config.ts` | Cache Components and Turbopack configuration build successfully, but framework branding and basic response-hardening headers are not configured. | Disable `X-Powered-By` and add conservative security headers that do not conflict with Next.js/GSAP. |
| 36 | Environment configuration for deployment origin | MISSING | `.gitignore`, no `.env.example` | No documented production-origin variable exists; `.env*` currently also blocks a safe example file. | Add a blank `.env.example`, allow it in Git, validate `SITE_URL`, and document its deployment use. |
| 37 | Secret/client-bundle exposure | COMPLETE | Repository scan, content/config | No secret, API key, phone number, or confidential asset was found in published source; planned origin variable can remain server-only. | Keep `SITE_URL` unprefixed and never place secrets in `NEXT_PUBLIC_*`. |
| 38 | Branded 404 | COMPLETE | `src/app/not-found.tsx` | Existing 404 matches the approved design and offers useful internal navigation. | Add focusable main target only. |
| 39 | Static/dynamic route coverage | COMPLETE | `src/app/page.tsx`, `src/app/projects/[slug]/page.tsx`, `src/app/not-found.tsx` | Homepage, branded 404, dynamic case-study route, and all three static params are implemented. | Preserve and verify in final build output. |
| 40 | Vercel/App Router compatibility | COMPLETE | `next.config.ts`, route source | No custom server, filesystem runtime dependency, external API, analytics, or incompatible state service exists. | Keep metadata routes prerender-safe. |
| 41 | Validation scripts | PARTIAL | `package.json` | `dev`, `build`, `start`, and lint exist; lint is the valid ESLint 9 CLI form. A reusable typecheck script is absent. | Add `typecheck` without changing dependency versions. |
| 42 | Existing automated tests | MISSING | `package.json`, repository scan | No unit/integration test runner or test files exist. Adding a framework solely for static metadata helpers would be disproportionate. | Do not add a dependency-heavy test stack; validate through lint, strict TypeScript, build, and targeted source checks. |
| 43 | Dependency hygiene | COMPLETE | `package.json`, `package-lock.json`, `npm ls --depth=0` | Installed top-level packages resolve cleanly and match the approved stack; no unrelated UI, state, analytics, or animation package is present. | Avoid upgrades unless a verified issue requires one. |
| 44 | Current Phase 4 validation state | UNVERIFIED | Working tree | Phase 3 reported passing checks, but the current Phase 4 result must be established after the fixes. | Run lint, `tsc --noEmit`, build, `git diff --check`, and any lightweight source validation after implementation. |

## Status summary

The audit counts 44 consistently scoped requirements. A component or route was marked complete only when its implementation and the relevant source-level behavior were present; browser-dependent behavior remains unverified.

| Status | Count |
|---|---:|
| COMPLETE | 24 |
| PARTIAL | 7 |
| MISSING | 8 |
| BROKEN | 1 |
| UNVERIFIED | 4 |
| **Total** | **44** |

## Corrective implementation scope

Phase 4 will make targeted changes only:

1. Add environment-aware metadata helpers, canonical handling, Open Graph/Twitter data, branded social images, robots, sitemap, manifest, and icon assets.
2. Improve skip-target focusability and mobile-menu modal isolation without changing layout or navigation design.
3. Route-scope SplitText while preserving all Phase 3 animation timing and cleanup behavior.
4. Add conservative production headers, document `SITE_URL`, and add a typecheck script.
5. Re-run all required command-line validation and record only actual results.

No redesign, content rewrite, dependency upgrade, browser automation, Lighthouse claim, commit, push, or deployment is included.
