# Phase 4 completion report

**Completion date:** October 10, 2026  
**Phase:** 4 — Production polish, performance, accessibility, and SEO  
**Result:** Source implementation and command-line validation complete. The portfolio is ready for owner browser review, but production indexing must remain disabled until the final HTTPS deployment origin is supplied through `SITE_URL`.

## A. Initial audit findings

The independent initial audit is recorded in `docs/phase-4-audit.md`. It inspected 44 requirements before application code was modified:

| Status | Initial count |
|---|---:|
| COMPLETE | 24 |
| PARTIAL | 7 |
| MISSING | 8 |
| BROKEN | 1 |
| UNVERIFIED | 4 |
| **Total** | **44** |

The principal launch gaps were missing canonical handling, Open Graph/Twitter configuration, social artwork, robots, sitemap, app manifest, production-origin policy, and branded icons. The inherited favicon was still a generic starter asset. Accessibility was strong but the skip targets were not explicitly focusable and the open mobile dialog did not make the page main content inert. GSAP cleanup was sound, but SplitText was registered through the shared motion module despite being used only by the homepage hero.

The repository was already dirty with approved Phase 3 work. Those files were preserved. Nothing was reset, stashed, cleaned, committed, pushed, or deployed.

## B. Work completed

### SEO and social metadata

- Added a strict server-only `SITE_URL` resolver. It accepts an exact HTTPS origin with no credentials, path, query, or hash; local HTTP is accepted only outside production.
- Added homepage application, author, creator, category, Open Graph, Twitter/X, viewport, theme-color, and conditional robots metadata.
- Extended all three case studies with unique Open Graph/Twitter titles and descriptions plus conditional canonical and social-image URLs.
- Added a 1200×630 branded PNG social preview route using Next.js `ImageResponse`.
- Avoided fake domains: when `SITE_URL` is absent or invalid, canonical/absolute image URLs are omitted, page metadata is `noindex, nofollow`, `robots.txt` disallows crawling, and the sitemap contains no URLs.
- Added environment-aware `robots.txt` and `sitemap.xml`. With a valid build-time `SITE_URL`, robots permits crawling and advertises the sitemap, while the sitemap emits `/` and the three case-study routes.
- Added a web app manifest with the approved identity and design colors.
- Replaced the generic starter favicon with a branded `MA.` SVG icon and generated 180×180 Apple icon.

### Accessibility

- Made every `#main` skip destination programmatically focusable with `tabIndex={-1}`.
- Kept the existing mobile-menu focus placement, Tab loop, Escape handling, and focus restoration.
- Made the main landmark inert while the modal mobile navigation is open so background controls cannot receive interaction.
- Preserved any pre-existing `inert` state and body overflow value during cleanup instead of blindly resetting them.
- Preserved semantic HTML, heading order, meaningful alternatives, visible focus styles, touch targets, and reduced-motion behavior.

### Performance and GSAP stability

- Moved SplitText import/registration from the shared GSAP entry to `HeroIntro`, its only consumer.
- Preserved every approved animation, timing, trigger, matchMedia path, reduced-motion branch, and cleanup strategy.
- Kept core GSAP, `@gsap/react`, and ScrollTrigger in the shared motion entry because homepage and case-study animation wrappers all use them.
- Confirmed the final build places SplitText markers only in the homepage-specific client chunk, not the case-study-specific chunk.
- Preserved Server Components for all content/layout components that do not require browser behavior.
- Added no dependency, UI framework, state library, analytics, monitoring, cookie service, or animation framework.

### Production configuration

- Disabled the `X-Powered-By` response header.
- Added conservative, generated-route-compatible headers: `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, and `Permissions-Policy`.
- Added a committed blank `.env.example` and documented that `SITE_URL` must be set only to the verified production origin at build time.
- Added a reusable `npm run typecheck` script.
- Preserved Next.js Cache Components, partial prefetching, the existing Turbopack CSS rule, strict TypeScript, and dependency versions.

## C. Files created, modified, and removed

### Created in Phase 4

- `.env.example`
- `docs/phase-4-audit.md`
- `docs/phase-4-completion-report.md`
- `src/app/apple-icon.tsx`
- `src/app/icon.svg`
- `src/app/manifest.ts`
- `src/app/robots.ts`
- `src/app/sitemap.ts`
- `src/app/social-preview/route.ts`
- `src/lib/metadata.ts`
- `src/lib/social-image.tsx`

### Modified in Phase 4

- `.gitignore`
- `README.md`
- `next.config.ts`
- `package.json`
- `src/app/layout.tsx`
- `src/app/not-found.tsx`
- `src/app/page.tsx`
- `src/app/projects/[slug]/page.tsx`
- `src/components/layout/SiteHeader.tsx`
- `src/components/motion/HeroIntro.tsx`
- `src/lib/gsap.ts`

### Removed in Phase 4

- `src/app/favicon.ico` — obsolete generic starter favicon, replaced by branded App Router icon assets.

`package-lock.json` and the other motion/component changes shown by Git were already uncommitted Phase 3 work at the start of Phase 4 and were preserved rather than attributed to this phase.

## D. Performance improvements and evidence

The changes were targeted; no measured score improvement is claimed.

| Area | Evidence | Result |
|---|---|---|
| SplitText loading | Final client-reference manifests use distinct homepage and case-study route chunks. The SplitText signature appears in the 26,806-byte homepage-specific chunk and not in the 16,042-byte case-study-specific chunk. | Case-study routes no longer inherit the hero-only plugin through the shared motion module. |
| Client boundaries | Source inspection shows content sections and case-study composition remain Server Components; only header and motion wrappers are Client Components. | No new broad hydration boundary was introduced. |
| Images | Project media retains fixed 4:3 containers, `next/image`, responsive `sizes`, and selective priority. | No source-level image layout regression was introduced. |
| Social media | Generated social PNG is 59,138 bytes; generated Apple icon is 3,847 bytes. Both have valid PNG signatures and are statically prerendered. | Meaningful sharing/app artwork is small and local. |
| Animation work | No pin, smooth-scroll proxy, permanent RAF, interval, infinite repeat, or unconditional ScrollTrigger refresh exists. | Existing bounded Phase 3 behavior is preserved. |
| Fonts | Space Grotesk, Geist, and Geist Mono remain managed by `next/font`. | No runtime font stylesheet or new font dependency was added. |

Lighthouse and Core Web Vitals were not measured. Real-device responsiveness, CPU behavior, layout shift, and network loading remain manual/measurement work.

## E. GSAP lifecycle and performance review

- Every animation root still uses scoped `useGSAP`.
- Local `gsap.matchMedia()` contexts are reverted during cleanup.
- ScrollTriggers created in hook contexts are reverted on unmount.
- Project hover listeners are removed and active tweens are killed.
- Case-study motion still uses the project slug dependency with `revertOnUpdate`.
- SplitText still waits for `document.fonts.ready`, uses accessible split markup, kills its timeline, and reverts both split instances.
- React Strict Mode safety remains based on `useGSAP` context cleanup and idempotent plugin registration.
- Reduced-motion users create no decorative GSAP sequences or pointer movement, and all content remains visible in the server HTML.
- No artistic timing or visual behavior was removed. The only motion change was scoping the SplitText module to the hero route.

Browser Back/Forward, restored scroll position, visual timing, and stale-trigger behavior still require owner testing in a real browser.

## F. SEO implementation

| Capability | Implementation | Unconfigured fallback |
|---|---|---|
| Homepage metadata | Factual title, description, application name, author/creator, category, Open Graph, and Twitter card | Titles/descriptions remain; canonical and absolute image URL are omitted |
| Case-study metadata | Unique title/description/social metadata for each typed project | Same factual metadata, without fake absolute URLs |
| Canonical URLs | Derived from validated `SITE_URL` for `/` and each case study | Omitted |
| Social preview | Local 1200×630 PNG at `/social-preview` | Route remains available, but metadata does not advertise a fake absolute URL |
| Robots | Allows `/` and references sitemap when configured | Disallows `/` |
| Sitemap | Homepage plus three project routes | Valid empty sitemap |
| Icons/manifest | Branded SVG, generated Apple PNG, web manifest, design colors | Always available |

The final build with no `SITE_URL` was inspected: it contains `noindex, nofollow`, has no `localhost` canonical or social-image metadata, emits `Disallow: /`, and emits an empty sitemap. This is deliberate launch safety. The positive production-origin branch cannot be populated until the owner supplies the real HTTPS origin.

## G. Accessibility improvements

- Skip-link targets are focusable on homepage, case-study, and 404 routes.
- The mobile modal dialog now isolates the main landmark with `inert` and restores prior document state.
- Existing focus trap, Escape close, close button, focus return, and body scroll locking remain.
- Server-rendered content stays readable if JavaScript fails or motion never initializes.
- Existing reduced-motion CSS and matchMedia branches remain intact.
- Existing meaningful project alternatives and conceptual-art captions remain intact.

Source-level contrast calculations for the primary pairs were:

| Pair | Contrast ratio |
|---|---:|
| Off-white on foundation | 16.58:1 |
| Lime accent on foundation | 14.69:1 |
| Ink on paper | 16.58:1 |
| Muted on foundation | 9.40:1 |
| 65% ink blended on paper | 5.61:1 |
| 75% inverse ink blended on foundation | 9.53:1 |

These calculations support the source palette but do not replace browser, zoom, forced-colors, or assistive-technology testing.

## H. Content and asset integrity

- Identity, role, summary, employer, dates, education, skills, project contributions, location, email, GitHub, and LinkedIn values remain unchanged and CV-backed.
- No phone number is published.
- No testimonial, award, client logo, fake metric, project demo, repository URL, proprietary screenshot, or invented claim was added.
- Project media remains clearly labeled conceptual artwork.
- The résumé remains unavailable rather than linking to a missing or unapproved PDF.
- The conditional footer design credit remains disabled pending explicit owner approval.
- The current LinkedIn profile was discoverable under the intended URL, but direct automated profile fetches were blocked. GitHub could not be independently confirmed by the available public lookup. Both remain owner browser checks.

## I. Production configuration

- App Router prerendering remains compatible with Vercel; no custom server or filesystem runtime dependency was added.
- `SITE_URL` is server-only and cannot enter the client through a `NEXT_PUBLIC_*` prefix.
- The final build produced the homepage, branded 404, all three case studies, icon routes, manifest, robots, sitemap, and social preview.
- Generated `routes-manifest.json` contains all four configured security headers.
- No Content Security Policy was added. A correct Next.js CSP requires a deployment-specific nonce/hash strategy and browser verification; a speculative policy could break framework scripts, fonts, or GSAP.
- No dependency version was changed in Phase 4.
- No secret or confidential file was found in the published source tree.

## J. Actual validation results

| Command/check | Result | Actual outcome |
|---|---|---|
| `npm run lint` | PASS | Exit code 0; ESLint produced no warnings or errors. |
| `npx tsc --noEmit` | PASS | Exit code 0; strict TypeScript produced no diagnostics. |
| `npm run build` | PASS | Exit code 0; Next.js 16.4 compiled, typechecked, and generated 13 static/PPR route outputs. |
| `git diff --check` | PASS | No whitespace errors; Git reported only expected LF-to-CRLF working-copy notices. |
| `npm ls --depth=0` | PASS | All declared top-level dependencies resolved cleanly. |
| SVG parsing | PASS | Branded icon and all three project SVGs parsed successfully as XML. |
| Generated PNG signatures | PASS | Social preview and Apple icon begin with valid PNG signatures. |
| Generated metadata fallback | PASS | Unconfigured build has no fake canonical/OG URL, is noindex, disallows robots, and has an empty sitemap. |
| Automated component/unit tests | NOT AVAILABLE | No test framework or test script exists; none was added solely for static configuration. |
| Browser/Lighthouse/screen-reader tests | NOT RUN | Explicitly reserved for owner testing. |

An intermediate build compiled but warned that file-convention social images would resolve through `http://localhost:3000` without `metadataBase`. The implementation was corrected to use a normal static image route referenced only when `SITE_URL` is valid. The final build passed without that warning.

## K. Remaining issues and limitations

1. The final production HTTPS origin has not been supplied. Until `SITE_URL` is set at build time, the site intentionally remains `noindex` with no canonical URLs or populated sitemap.
2. Required browser testing at 320, 375, 768, 1024, and 1440px has not been performed.
3. Lighthouse, Core Web Vitals, browser performance profiles, screen-reader behavior, forced-colors mode, and cross-browser behavior remain unmeasured.
4. GitHub and LinkedIn must be opened by the owner before launch.
5. Real approved/redacted project screenshots and an approved résumé PDF remain unavailable. The current conceptual visuals and honest résumé state are launch-safe alternatives.
6. The footer credit remains withheld until the owner explicitly approves that wording.
7. The intentional Advanced Web Editor ownership TODO remains in source because the CV does not provide more precise ownership.
8. No automated component test suite exists. Introducing a new test framework in this phase was not justified by the static, build-validated changes.

## L. Exact manual testing instructions

### 1. Production-build setup

1. Copy `.env.example` to `.env.local`.
2. Leave `SITE_URL` blank for the first safety check.
3. Run `npm run build`, then `npm run start`.
4. Open `http://localhost:3000/` and keep the browser console and Network panel open.
5. For the deployment-candidate check, replace the blank value with the exact real HTTPS deployment origin, run a fresh build, and restart. Do not use a placeholder domain for launch approval.

### 2. Metadata and production routes

With `SITE_URL` blank:

1. View source for `/`; confirm `noindex, nofollow` and no canonical, `og:url`, or `og:image` containing localhost.
2. Open `/robots.txt`; confirm `Disallow: /`.
3. Open `/sitemap.xml`; confirm the sitemap has no URL entries.

With the verified production `SITE_URL` configured at build time:

1. View source for `/`; confirm the canonical equals the exact production homepage URL.
2. Confirm `og:title`, `og:description`, `og:url`, `og:image`, Twitter card/title/description/image, author, creator, and application name.
3. Repeat source inspection for each case study and confirm the unique project title/description and route-specific canonical.
4. Open `/social-preview`; confirm the image is a crisp 1200×630 editorial preview with `MA.`, the name, headline, role, and stack line.
5. Open `/robots.txt`; confirm crawling is allowed and the sitemap URL uses the exact production origin.
6. Open `/sitemap.xml`; confirm exactly four URLs: homepage and the three project routes.
7. Open `/manifest.webmanifest`, `/icon.svg`, and `/apple-icon`; confirm correct identity, colors, and artwork.
8. In Network response headers, confirm `x-content-type-options: nosniff`, `referrer-policy: strict-origin-when-cross-origin`, `x-frame-options: DENY`, and the restricted permissions policy. Confirm no `x-powered-by` header.

### 3. Homepage and animation regression

1. At 1440px, hard-reload `/` at the top.
2. Confirm the approved hero sequence, section reveals, experience progress line, and project hover behavior are unchanged.
3. Scroll down and back up repeatedly; completed reveals must stay visible and no duplicate trigger or stale style may appear.
4. Confirm no console errors, hydration warnings, missing assets, or visual jumps.
5. Confirm conceptual artwork captions remain visible and no screenshot is implied.

### 4. Responsive matrix

Repeat the full page at exactly 320, 375, 768, 1024, and 1440px:

1. Confirm no horizontal scrollbar or clipped email/title/skill/date text.
2. Confirm the sticky header does not overlap section anchors.
3. Confirm mobile projects stack naturally and tablet/desktop grids retain the approved composition.
4. Confirm there is no mobile pinning or required hover interaction.
5. Confirm artwork retains its 4:3 geometry without layout jump.

### 5. Keyboard and mobile menu

1. Reload and press Tab once; confirm `Skip to main content` becomes visible.
2. Activate it; confirm focus moves to the main landmark and the header is skipped.
3. Tab through every control; confirm visible focus, logical order, and no focus hidden by animation.
4. At 375px and 320px, open the mobile menu. Confirm focus enters the dialog and the page behind it cannot be clicked, focused, or scrolled.
5. Test Tab and Shift+Tab looping, then Escape. Confirm the menu closes and focus returns to the trigger.
6. Reopen and choose every section link; confirm the menu closes and each target settles below the sticky header.

### 6. Reduced motion and accessibility

1. Enable `prefers-reduced-motion: reduce` in the OS/browser and reload.
2. Confirm hero/section/case-study content is immediately visible with no splitting or displacement.
3. Confirm anchor scrolling is immediate and all navigation remains functional.
4. Test browser zoom at 200% and text-only zoom if available; confirm no content loss or control overlap.
5. Test Windows High Contrast/forced-colors mode and confirm links/focus remain perceivable.
6. With a screen reader, confirm one H1 per page, logical H2/H3 order, named navigation/section landmarks, dialog announcement, and conceptual-image alternatives.

### 7. Case studies and browser history

Test:

- `/projects/enterprise-crm-system`
- `/projects/e-commerce-management-platform`
- `/projects/advanced-web-editor`

For each:

1. Confirm the title, description, employer, contributions, features, stack, engineering notes, gallery label, considerations, and private-project state remain accurate.
2. Confirm hero and section motion runs once without leaving invisible content.
3. Test Previous/Next, Back to selected work, Contact, and sticky-header links.
4. Navigate repeatedly with browser Back/Forward and reload halfway down a page; confirm no stale transforms, duplicate SplitText markup, missing content, or scroll trap.

### 8. External links and content integrity

1. Open GitHub and confirm `github.com/AffanRavian` is the intended profile.
2. Open LinkedIn and confirm it is Muhammad Affan’s intended Creative Connect profile.
3. Test every email link for `muhammadaffan3355@gmail.com`.
4. Confirm no phone number, proprietary screenshot, demo/repository link, client logo, testimonial, award, or metric appears.
5. Confirm the résumé message remains non-clickable until the approved PDF exists.

### 9. Lighthouse measurement

1. Configure the real `SITE_URL`, create a fresh production build, and serve it with `npm run start`.
2. Use an incognito Chrome window with extensions disabled.
3. In DevTools Lighthouse, run Navigation audits for mobile and desktop covering Performance, Accessibility, Best Practices, and SEO.
4. Run each profile three times from a clean reload and record the median result plus any diagnostics; do not report only the best run.
5. Repeat against the deployed production URL because local scores do not include hosting/CDN/network behavior.
6. Record Core Web Vitals separately from field data when enough traffic exists; do not treat a lab Lighthouse run as field data.

## M. Launch readiness checklist

| Criterion | Status | Evidence / next action |
|---|---|---|
| Approved design, layout, typography, and GSAP experience preserved | PASS | No visual redesign or timing removal; source/build review complete. |
| CV-backed content and confidentiality preserved | PASS | Content modules unchanged; prohibited-content scan/source review complete. |
| Server/client boundaries remain disciplined | PASS | Content stays server-rendered; only existing interactive/motion islands hydrate. |
| GSAP lifecycle and reduced motion | PASS | Scoped hooks, cleanup, matchMedia, font-aware SplitText, and static fallbacks retained. |
| Homepage and unique project metadata | PASS | Build/type inspection confirms titles/descriptions and social fields. |
| Canonical origin configured | NEEDS OWNER INPUT | Supply exact HTTPS `SITE_URL` at build time. |
| Open Graph/Twitter artwork | PASS | Static 1200×630 PNG route generated; production absolute reference activates with `SITE_URL`. |
| Robots and sitemap | PASS | Safe fallback verified; production population activates with `SITE_URL`. |
| Branded favicon, Apple icon, and manifest | PASS | Generated routes and assets build successfully. |
| Basic production response headers | PASS | Verified in generated routes manifest. |
| Keyboard/mobile-menu implementation | PASS | Source-level focus/inert/cleanup behavior complete. |
| Keyboard/screen-reader behavior in browser | NEEDS MANUAL VERIFICATION | Complete Section L checks. |
| Responsive behavior at five required widths | NEEDS MANUAL VERIFICATION | Complete viewport matrix. |
| Animation/Back-Forward/restored-scroll behavior | NEEDS MANUAL VERIFICATION | Complete homepage and route-history checks. |
| External profile destinations | NEEDS MANUAL VERIFICATION | Owner opens GitHub and LinkedIn. |
| Lighthouse/Core Web Vitals | NEEDS MANUAL VERIFICATION | Measure only on a production build/deployment. |
| Lint | PASS | Exit code 0. |
| Strict TypeScript | PASS | Exit code 0. |
| Production build | PASS | Exit code 0; all intended routes generated. |
| Whitespace validation | PASS | No diff whitespace errors. |
| Commit/push/deploy | NOT PERFORMED | Explicit Phase 4 boundary preserved. |

## N. Final deployment prerequisites

Before launch approval:

1. Choose and provide the final verified HTTPS production origin.
2. Set `SITE_URL` in the deployment environment before the production build.
3. Rebuild and verify canonical, social image, robots, and sitemap output against that exact origin.
4. Complete the browser, responsive, keyboard, reduced-motion, route-history, external-link, and Lighthouse checks in Section L.
5. Decide whether to approve the optional footer credit.
6. Optionally provide an approved résumé PDF and redacted project screenshots; these are not required for truthful launch because current fallbacks are explicit.

The codebase is ready for final launch review. It is not ready to be indexed or deployed as the final public site until the production origin is configured and the owner completes the required manual verification. Phase 4 stops here; no deployment, commit, push, analytics, or later-phase work was performed.
