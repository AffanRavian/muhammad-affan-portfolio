# Phase 3 completion report

**Completion date:** October 10, 2026  
**Phase:** 3 — Premium GSAP animation implementation  
**Result:** Source implementation and command-line validation complete; ready for owner manual visual/browser review. Phase 4 has not started.

## A. Animation features completed

### Hero introduction

- Added a coordinated, non-blocking hero timeline in the approved order: introductory label, name, headline, supporting paragraph, CTAs, availability, and desktop support details.
- Used SplitText only where it materially improves the result:
  - Name: character reveal within word-aware masks.
  - Headline: line-by-line masked reveal.
- Waited for `document.fonts.ready` before splitting or measuring text.
- Kept server-rendered text visible by default; no CSS preloader or pre-hidden application state was added.
- Reverted SplitText markup when the sequence completes and defensively during teardown.

### Homepage scroll experience

- Added reusable once-only heading and content reveals to Work, About, Experience, Stack, Education, Contact, and Footer content.
- Added calm, responsive entrance timing rather than applying the same exaggerated effect to every element.
- Cleared temporary transform, opacity, clip, and `will-change` inline properties after entrance animations complete.

### Selected Work

- Added one scoped reveal timeline per project row.
- Coordinated artwork, metadata, heading, summary, stack, and case-study-link entrances.
- Added subtle directional artwork offsets for the alternating desktop layout and vertical-only motion on smaller screens.
- Added fine-pointer-only hover scaling and title movement using context-safe handlers with explicit listener cleanup.
- Preserved semantic linked articles, conceptual-artwork captions, project copy, and mobile natural scrolling.
- Deliberately omitted pinning because the approved project rows already tell the story clearly and pinning would add scroll-restoration, focus, and layout-shift risk.

### Experience, Skills, Education, and Contact

- Added a restrained scrubbed lime progress line over the existing experience timeline track.
- Added once-only entry reveals for both verified experience roles.
- Added group-based stack entrances with a short controlled stagger.
- Added lightweight education-entry sequencing.
- Added a closing Contact sequence for its heading, email/location, social/resume details, and footer.

### Case studies

- Added one shared `ProjectCaseStudyMotion` client wrapper for all three project routes.
- Added a coordinated project hero entrance for category, title, employer, summary, and artwork.
- Added once-only transitions for overview, contributions, context, features, stack, engineering notes, gallery, considerations, private-project note, CTAs, and project navigation.
- Added a restrained gallery scale reveal.
- Added fine-pointer-only navigation nudges to Previous, Next, and contact links.
- Keyed the hook lifecycle to the project slug so client navigation between case studies reverts the previous route’s triggers and styles before rebuilding the next route’s motion.

## Animation implementation map

| Major animation | Component | Trigger | Responsive behavior | Reduced-motion fallback | Cleanup method |
|---|---|---|---|---|---|
| Hero label/name/headline/body/actions/support | `HeroIntro` | Component mount after font readiness | Desktop uses full stagger; mobile uses shorter durations, smaller translations, and tighter stagger | No SplitText or tween; complete server-rendered hero remains visible | Scoped `useGSAP`; `matchMedia.revert()`; timeline kill; SplitText `revert()` after completion and teardown |
| Generic section/heading/group reveal | `AnimatedReveal` | ScrollTrigger at `top 84%`, once | 28px desktop/tablet rise; 16px mobile rise; mobile stagger capped at 0.06s | No tween; natural rendered state | Scoped context and matchMedia reversion; `clearProps` after completion |
| Three Selected Work rows | `WorkScrollSegment` | One ScrollTrigger per row at `top 82%`, once | Directional desktop media offsets; vertical-only smaller mobile entrance | No entrance or hover tween | Scoped context; matchMedia reversion; once-only trigger; cleared inline properties |
| Project preview hover | `WorkScrollSegment` | Pointer enter/leave/blur | Only `(hover: hover) and (pointer: fine)` at 768px+ | No hover tween | `contextSafe` callbacks, explicit listener removal, `killTweensOf` |
| Experience progress track | `TimelineProgress` | Scrubbed ScrollTrigger over timeline container | Same vertical track at all widths; no pin | Animated overlay stays hidden; original static border remains | Scoped context and matchMedia reversion |
| Experience entries | `TimelineProgress` | One once-only trigger per entry | Small x/y desktop motion; vertical-only mobile motion | Entries remain in natural visible state | Scoped context, once-only triggers, `clearProps` |
| Case-study hero | `ProjectCaseStudyMotion` | Route component mount | Shorter, vertical-first mobile sequence | Natural hero state | Scoped hook with slug dependency and `revertOnUpdate` |
| Case-study sections/gallery | `ProjectCaseStudyMotion` | One once-only trigger per major block/item | Reduced mobile distance and scale change | Natural rendered sections/media | Scoped context, matchMedia reversion, `clearProps` |
| Case-study navigation hover | `ProjectCaseStudyMotion` | Pointer enter/leave/blur | Fine-pointer devices only | Existing semantic/CSS behavior only | Context-safe callbacks, listener removal, `killTweensOf`; slug-driven reversion |

## B. Existing components reused

The approved Phase 2 composition was preserved. Motion was layered around or targeted within these existing components rather than replacing them:

- `SectionShell`, `PageContainer`, `SectionHeading`, and `SiteFooter`.
- `Button`, `TextLink`, `SocialLinks`, `ResumeDownload`, `PlaceholderMedia`, and `StackGroup`.
- `HeroSection`, `WorkSection`, `AboutSection`, `ExperienceSection`, `StackSection`, `EducationSection`, and `ContactSection`.
- `ProjectPreview`, `ProjectCaseStudy`, `ProjectGallery`, and `ProjectNav`.
- The existing content modules, abstract project assets, header navigation/focus trap, dynamic project route, and all verified professional copy.

Server Components remain the default. Only the focused wrappers in `src/components/motion/` execute GSAP in the browser; no content section was converted wholesale into a Client Component.

## C. Created and modified files

### Created by this implementation

- `docs/phase-3-animation-plan.md`
- `docs/phase-3-completion-report.md`
- `src/components/motion/ProjectCaseStudyMotion.tsx`

### Modified by this implementation

- `README.md`
- `src/app/globals.css`
- `src/components/motion/AnimatedReveal.tsx`
- `src/components/motion/HeroIntro.tsx`
- `src/components/motion/TimelineProgress.tsx`
- `src/components/motion/WorkScrollSegment.tsx`
- `src/components/projects/ProjectCaseStudy.tsx`
- `src/components/projects/ProjectGallery.tsx`
- `src/components/projects/ProjectNav.tsx`
- `src/components/projects/ProjectPreview.tsx`
- `src/components/sections/AboutSection.tsx`
- `src/components/sections/ContactSection.tsx`
- `src/components/sections/EducationSection.tsx`
- `src/components/sections/ExperienceSection.tsx`
- `src/components/sections/HeroSection.tsx`
- `src/components/sections/StackSection.tsx`
- `src/components/sections/WorkSection.tsx`
- `src/components/ui/PlaceholderMedia.tsx`
- `src/components/ui/StackGroup.tsx`
- `src/lib/gsap.ts`

### Pre-existing uncommitted Phase 3 setup preserved and used

These changes already existed at the start of this task and were not discarded or reinstalled:

- `package.json` — adds `gsap` and `@gsap/react`.
- `package-lock.json` — resolves the installed animation packages.
- `.agents/skills/` — installed official GSAP skill sources.
- `skills-lock.json` — skill installation lock data.

No file was deleted. No commit, push, branch change, remote change, deployment, or browser automation was performed.

## D. GSAP plugins used and why

| Plugin/API | Why it is used |
|---|---|
| GSAP core | Timelines, transform/opacity/scale animation, stagger, easing, overwrite control, and `matchMedia`. |
| `@gsap/react` `useGSAP` | Isomorphic React lifecycle, local selector scoping, Strict Mode-safe context cleanup, and context-safe event callbacks. |
| ScrollTrigger | Discrete viewport entrances and the scrubbed experience progress line. |
| SplitText | Hero name characters and headline lines only, where the typography reveal materially improves the opening impression. |

All plugins are registered once in the client-only `src/lib/gsap.ts` module before use.

Not used: Flip, ScrollSmoother, ScrollToPlugin, DrawSVG, MorphSVG, Observer, GSDevTools, or another animation framework. No implemented interaction requires them.

## E. React lifecycle and cleanup approach

- Every motion wrapper owns a root ref and passes it as the `useGSAP` scope.
- Every selector is resolved inside that scope; there are no page-global class or element selectors.
- `useGSAP` automatically reverts context-owned timelines, tweens, ScrollTriggers, and inline styles on unmount.
- Each local `gsap.matchMedia()` instance is explicitly reverted when its hook tears down or media conditions change.
- SplitText waits for fonts, is protected against async work after teardown, and is explicitly reverted after completion and during cleanup.
- Hover callbacks that create later tweens are wrapped with `contextSafe` and their DOM listeners are removed explicitly.
- Hover targets are killed during cleanup to prevent an in-flight tween from surviving route or media-query changes.
- The case-study hook uses `dependencies: [routeKey]` and `revertOnUpdate: true`, so navigation between dynamic slugs cannot retain the previous page’s triggers or inline styles.
- No manual global `ScrollTrigger.getAll().kill()` is used, avoiding interference with other mounted contexts.

## F. Responsive and reduced-motion strategies

### Desktop — 1024px and 1440px

- Full hero typography sequence.
- Alternating horizontal artwork offsets for Selected Work.
- Fine-pointer project and case-study navigation hover feedback.
- Experience progress line and complete scroll entrances.
- No pinning or scroll-jacking.

### Tablet — 768px

- A dedicated 768–1023px matchMedia condition ensures touch tablets still initialize animation even when hover is unavailable.
- Shorter translations than desktop and no desktop-only horizontal project treatment.
- Existing two-column project layout and natural scrolling remain unchanged.

### Mobile — 320px and 375px

- Shorter durations, 8–16px vertical movement, and minimal stagger.
- No horizontal project travel, pinning, cursor tracking, or required hover behavior.
- Existing stacked layout and native scrolling remain authoritative.

### Reduced motion

- Every motion wrapper checks `(prefers-reduced-motion: reduce)` before creating tweens or ScrollTriggers.
- Hero text is not split.
- Section and case-study entrances are not created.
- The experience overlay progress line remains hidden while the original static border stays visible.
- Hover GSAP effects are not registered.
- Global CSS keeps anchor scrolling immediate and collapses incidental CSS transition/animation durations.
- All content remains in its server-rendered final state and all links, focus handling, navigation, and mobile-menu behavior remain available.

## G. Performance considerations

- Motion is limited to transform, opacity, scale, and three short media clip reveals; no width, height, top, left, margin, or padding animation is used.
- `will-change` is applied only to actively animated targets and removed with `clearProps` after completion.
- Most ScrollTriggers are once-only and release themselves after the entrance completes.
- The only scrubbed animation is a single one-pixel experience progress line.
- No permanent requestAnimationFrame loop, infinite repeat, marquee, cursor follower, canvas, video, or continuous background motion exists.
- No pin, smooth-scroll proxy, fake horizontal scroll, or unconditional `ScrollTrigger.refresh()` is used.
- Project artwork retains fixed aspect-ratio containers, so trigger positions do not depend on late image sizing.
- Hero SplitText is limited to a short name and headline, runs after fonts are ready, and restores the original DOM when finished.
- Pointer animation is event-driven and enabled only on capable fine-pointer devices.
- The implementation does not claim a guaranteed frame rate or Lighthouse score; those require owner measurement in Phase 4.

## H. Validation results

### Final commands

| Command | Result | Actual output summary |
|---|---|---|
| `npm run lint` | PASS | Exit code 0; ESLint reported no errors or warnings. |
| `npx tsc --noEmit` | PASS | Exit code 0; no TypeScript diagnostics. |
| `npm run build` | PASS | Exit code 0; Next.js compiled, typechecked, collected page data, and generated 8 static pages. |

The final build generated or supported:

- `/`
- `/_not-found`
- `/projects/[slug]`
- `/projects/enterprise-crm-system`
- `/projects/e-commerce-management-platform`
- `/projects/advanced-web-editor`

### Source-level review

- Confirmed every GSAP component uses scoped `useGSAP`.
- Confirmed every motion component has a reduced-motion branch.
- Confirmed project and case-study pointer handlers are context-safe and explicitly removed.
- Confirmed project slug changes use `revertOnUpdate`.
- Confirmed no `markers: true`, pinning, ScrollSmoother, manual refresh loop, infinite repeat, or interval-driven animation exists.
- `git diff --check` reported no whitespace errors; Git only reported the repository’s existing LF-to-CRLF conversion warnings.

No browser, visual, interaction, Lighthouse, or performance-profile test was performed, as required.

## I. Known issues and limitations

- Visual timing, clipping, hover feel, and breakpoint behavior still require the owner’s real-browser review.
- The progressive-enhancement strategy intentionally avoids CSS pre-hiding. On a very slow device, final-state hero content may be visible briefly before hydration starts the intro; this is preferable to invisible content when JavaScript fails.
- Scroll reveals play once and remain visible. Repeated up/down scrolling should not replay or hide completed content by design.
- The mobile navigation opens immediately with its existing accessible behavior; it was not given a decorative GSAP drawer animation because focus placement and reliable conditional rendering take priority.
- Work-section pinning was deliberately omitted because it was optional and did not justify its accessibility, scroll-restoration, and layout risks.
- No route-wide page transition or artificial loading delay was added.
- Real project screenshots, résumé PDF, project URLs, and LinkedIn browser confirmation remain unchanged Phase 2 limitations.
- Fine-pointer hover animations cannot be evaluated through command-line validation.
- Low-end device smoothness and any browser-specific SplitText rendering differences require manual testing.

## J. Manual visual and browser testing instructions

### Setup

1. From `D:\Affan\Portfolio\muhammad-affan-portfolio`, run `npm run dev`.
2. Open `http://localhost:3000/` in a normal browser window.
3. Open the developer console and keep it visible while testing. Confirm no GSAP, ScrollTrigger, SplitText, hydration, missing-image, or route errors appear.
4. Do not rely only on responsive emulation for the final mobile judgment; if possible, repeat the 375px checks on a touch device.

### Homepage load sequence

1. At 1440px, hard-reload `/` while positioned at the top.
2. Confirm the sequence is label -> Muhammad Affan name -> line-by-line headline -> supporting paragraph -> two CTAs -> availability/support details.
3. Confirm the sequence feels complete in roughly two seconds, has no long blank state, and never blocks scrolling or clicking.
4. Confirm the name/headline return to normal selectable semantic text after the intro completes.
5. Reload several times and confirm characters/lines are not duplicated and no old inline transforms remain.
6. Repeat at 1024px, 768px, 375px, and 320px; motion should become shorter and smaller toward mobile.

### Repeated scrolling up and down

1. Slowly scroll from Hero through Contact.
2. Confirm headings/content begin entering before they are deeply inside the viewport.
3. Confirm Work rows reveal artwork and copy together without delaying reading.
4. Confirm About, Stack, Education, and Contact remain calmer than Hero and Work.
5. Scroll back to the top and down again. Completed once-only reveals should remain visible and should not flicker, reset, or replay.
6. Rapidly reverse scroll direction around trigger boundaries and confirm no element remains transparent or translated.

### Selected Work hover and keyboard behavior

1. At 1024px or 1440px with a mouse/trackpad, hover each project link.
2. Confirm artwork scales only slightly, the title nudges subtly, and leaving returns both cleanly without layout movement.
3. Move the pointer quickly across projects; confirm animations overwrite smoothly rather than queueing.
4. Tab to each project instead of hovering. Confirm the visible focus ring remains correct and all essential content is present without hover.
5. Confirm captions still read `Conceptual visual — not an application screenshot`.

### Experience, skills, education, and contact

1. Scroll through Experience and confirm the lime overlay line grows down the existing track without covering text.
2. Confirm both role entries appear near viewport entry and remain visible afterward.
3. Confirm skill groups stagger gently with no floating, looping, or logo-carousel behavior.
4. Confirm education entries enter together without overlap.
5. Confirm the Contact headline, email/location, social/resume information, and footer finish the page coherently.

### Case-study routes and route cleanup

Test all three URLs:

- `http://localhost:3000/projects/enterprise-crm-system`
- `http://localhost:3000/projects/e-commerce-management-platform`
- `http://localhost:3000/projects/advanced-web-editor`

For each route:

1. Reload at the top and confirm metadata/title/summary and artwork form one short entrance sequence.
2. Scroll through every case-study block and confirm each appears once without overlap or a large blank delay.
3. Confirm the gallery artwork scales into place subtly and the conceptual-art caption stays readable.
4. Hover Previous, Next, and contact navigation on a fine-pointer device; confirm the nudge is restrained and returns cleanly.
5. Use Next/Previous repeatedly between all projects. Watch the console and confirm no duplicate-trigger, detached-node, or stale-style behavior.
6. Use `Back to selected work` and Contact; confirm homepage anchors still land correctly and homepage ScrollTriggers initialize normally.

### Browser Back/Forward and reload at scroll positions

1. Open a project from Selected Work, then use browser Back. Confirm the homepage restores or resolves scroll position normally and has no stale case-study transforms.
2. Use Forward to return to the project and confirm its hero initializes once.
3. Repeat Back/Forward several times across different project slugs.
4. On the homepage, scroll to Stack or Contact and reload. Confirm content at and above the restored position is visible rather than stuck at opacity zero.
5. Reload a case study halfway down and confirm nearby sections resolve visibly as ScrollTrigger initializes.

### Mobile scrolling — 375px and 320px

1. Confirm all motion is vertical, short, and free of horizontal scrollbar creation.
2. Flick-scroll quickly through the full page; confirm there is no pinning, scroll capture, bounce trap, or delayed access to content.
3. Confirm project rows remain stacked and no hover is required.
4. Open and use the accessible mobile menu. Confirm focus trapping, Escape, focus restoration, body scroll lock, and anchor navigation still work exactly as in Phase 2.
5. Confirm the sticky header does not jump or become obscured while sections animate beneath it.

### Sticky header and anchors

1. At every required width, use Work, About, Experience, Stack, and Contact in the sticky header.
2. Confirm headings settle below the header because existing scroll margins remain effective.
3. Confirm animation does not move the anchor destination after landing.
4. Repeat the header links from each case-study route and from the 404 page.

### Reduced-motion mode

1. Enable `prefers-reduced-motion: reduce` through the operating system or browser developer tools.
2. Reload `/` at the top.
3. Confirm the hero is immediately complete: no splitting, stagger, displacement, or fade.
4. Scroll the entire homepage and confirm all sections remain visible with no entrance motion and no animated experience overlay line.
5. Confirm anchor navigation is immediate rather than smooth.
6. Hover project and case-study links; confirm GSAP hover movement is absent.
7. Repeat on all three case-study routes.
8. Disable reduced motion, reload, and confirm normal motion returns without duplicated elements or triggers.

### Keyboard and focus testing

1. Press Tab immediately during and after the hero intro. Confirm focusable controls remain reachable and their focus rings are not clipped by text masks.
2. Activate the skip link and confirm it still targets `#main`.
3. Tab through the header, Hero CTAs, every project, Contact links, case-study CTAs, and project navigation.
4. Confirm focus never lands on a visually absent element and animation never changes tab order.
5. Test the mobile-menu Tab loop, Shift+Tab loop, Escape close, and focus return.

### Viewport matrix and visual stability

Repeat the core load/scroll/navigation checks at exactly:

- 320px
- 375px
- 768px
- 1024px
- 1440px

At each width, verify:

1. No horizontal overflow.
2. No clipped SplitText characters or headline lines.
3. No overlapping text, artwork, timeline dots, or progress track.
4. No image jump when project artwork loads.
5. No empty section left at opacity zero.
6. No sticky-header jump.
7. No mobile/tablet pinning.
8. No missing image request or conceptual-label displacement.

## K. Phase 3 acceptance checklist

`PASS` reflects source inspection and executed command-line validation. Visual behavior remains `NEEDS MANUAL VERIFICATION` until owner testing.

| Phase 3 criterion | Status | Evidence / note |
|---|---|---|
| GSAP and `@gsap/react` installed | PASS | Existing owner setup contains `gsap@3.15.0` and `@gsap/react@2.1.2`. |
| Plugins registered once | PASS | Central client-only `src/lib/gsap.ts`. |
| Hero coordinated timeline | PASS | Implemented with timeline position parameters and font-aware SplitText. |
| Hero premium visual timing | NEEDS MANUAL VERIFICATION | Source timings are implemented; browser judgment is owner-only. |
| Scroll reveals for all required homepage sections | PASS | Work, About, Experience, Stack, Education, and Contact wrappers implemented. |
| Selected Work entrances and fine-pointer hover | PASS | Three scoped row timelines and context-safe hover handlers. |
| Optional pin rejected when not clearly beneficial | PASS | No pin exists; rationale documented. |
| Experience progress and entry animation | PASS | One scrubbed overlay line plus two once-only entry triggers. |
| Calm Skills and Education motion | PASS | Grouped once-only reveal wrappers; no continuous motion. |
| Contact closing motion | PASS | Heading, contact details, and footer sequencing implemented. |
| Shared case-study animation system | PASS | One slug-aware wrapper serves all three project routes. |
| Route cleanup and no stale project triggers | PASS | Scoped `useGSAP`, matchMedia cleanup, and `revertOnUpdate`; browser navigation remains to verify manually. |
| Responsive `gsap.matchMedia` strategy | PASS | Explicit desktop, tablet, mobile, fine-pointer, and reduced-motion conditions. |
| Mobile has no pin or required hover | PASS | Source review confirms vertical-only mobile motion and no pin config. |
| Reduced-motion content remains fully visible | PASS | No motion branch creates no tweens/splits/triggers; static DOM is authoritative. |
| No CSS/GSAP transform conflict introduced | PASS | GSAP targets dedicated wrappers/media; temporary inline props clear after entrances. |
| No unscoped global selectors | PASS | Every query originates from a scoped root ref. |
| No duplicate Strict Mode instances by design | PASS | `useGSAP` context cleanup and one-time registration used throughout. |
| No unnecessary refresh/RAF/loop overhead | PASS | No manual refresh, RAF loop, interval, or infinite repeat exists. |
| Keyboard/mobile-menu behavior preserved | PASS | Navigation code and semantics were not altered; browser behavior remains to verify manually. |
| `npm run lint` | PASS | Final exit code 0. |
| `npx tsc --noEmit` | PASS | Final exit code 0. |
| `npm run build` | PASS | Final exit code 0; all approved routes generated. |
| Required viewport visual quality | NEEDS MANUAL VERIFICATION | Owner must complete the 320/375/768/1024/1440 matrix. |
| Reduced-motion visual behavior | NEEDS MANUAL VERIFICATION | Source handling is complete; owner must emulate and inspect it. |
| Browser Back/Forward and scroll restoration | NEEDS MANUAL VERIFICATION | Lifecycle is route-safe by source; real navigation must be tested manually. |

## L. Readiness for Phase 4

Phase 3 is ready for owner review. The motion system is implemented, responsive by source, reduced-motion-aware, lifecycle-scoped, and passes lint, strict TypeScript, and production build validation.

Before approving Phase 4:

1. Complete the full manual checklist in Section J.
2. Record any timing, easing, clipping, or device-specific issues as Phase 3 corrections.
3. Verify Back/Forward behavior and reduced-motion mode in a real browser.
4. Confirm the experience progress line and project/case-study hover treatments feel appropriately restrained.
5. Explicitly approve Phase 3.

Phase 4 work—metadata/OG polish, Lighthouse measurement, cross-browser polish, asset upgrades, or footer-credit changes—has not been started.
