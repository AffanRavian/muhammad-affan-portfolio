# Phase 3 GSAP animation plan

**Plan date:** October 10, 2026  
**Scope:** Refined motion layered onto the approved Phase 2 portfolio  
**Preservation boundary:** No redesign, content changes, route changes, new UI framework, smooth-scroll system, deployment, commit, or Phase 4 work.

## 1. Current-state findings

- Phase 2 is committed at `acddcb3` and its approved layouts, content, routes, responsive classes, and accessibility structure are intact.
- `gsap@3.15.0` and `@gsap/react@2.1.2` are already installed as uncommitted owner setup; they will be preserved rather than reinstalled.
- The only existing client island is `SiteHeader`; the four files in `src/components/motion/` are inert Phase 2 stubs.
- Existing CSS motion is limited to smooth anchor scrolling and small hover/focus transitions.
- Project media uses fixed aspect-ratio containers, which gives ScrollTrigger stable geometry before images finish loading.
- The homepage sections and case-study template remain Server Components. Motion will be introduced through small client wrappers rather than converting the content components wholesale.

## 2. Animation inventory

| Area | Planned animation | Trigger | Responsive behavior | Reduced-motion fallback |
|---|---|---|---|---|
| Hero label | Short upward fade | Initial page hydration after fonts are ready | Smaller displacement and shorter duration below 768px | No tween; natural rendered state |
| Hero name | SplitText character reveal with restrained stagger | Coordinated hero timeline | Tighter stagger and translation on mobile | No split and no tween |
| Hero headline | SplitText line-mask reveal | Coordinated hero timeline | Lines are measured only after fonts; mobile timing is shorter | No split and no tween |
| Hero body | Supporting copy rises and fades | Coordinated hero timeline | 12px mobile / 18px desktop translation | Natural rendered state |
| Hero actions | CTA pair enters with small stagger | Coordinated hero timeline | Minimal stagger on mobile | Natural rendered state |
| Hero support details | Availability and technical side labels finish the sequence | Coordinated hero timeline | Side labels remain desktop-only per existing layout | Natural rendered state |
| Selected Work heading | Reusable heading reveal | ScrollTrigger at early viewport entry | 16px mobile / 28px desktop translation | Natural rendered state |
| Project previews | Each project media and copy enter as one short timeline | One ScrollTrigger per project, once | Desktop uses subtle directional offset; mobile uses vertical motion only | Natural rendered state |
| Project artwork hover | Media scale and title nudge | Pointer enter/leave | Fine-pointer devices at 768px+ only | No hover tween |
| About | Heading block and editorial paragraph enter in sequence | Section ScrollTrigger | Smaller mobile translation/stagger | Natural rendered state |
| Experience heading | Reusable heading reveal | ScrollTrigger | Simplified mobile timing | Natural rendered state |
| Experience track | Lime progress line grows with document scroll | Scrubbed ScrollTrigger on timeline container | Shorter content still uses natural vertical tracking; no pin | Static existing timeline border only |
| Experience entries | Entries rise in as they approach the viewport | One once-only ScrollTrigger per entry | Smaller mobile displacement | Natural rendered state |
| Stack heading | Reusable heading reveal | ScrollTrigger | Simplified mobile timing | Natural rendered state |
| Stack groups | Capability groups enter with a calm stagger | Shared reusable reveal wrapper | Reduced translation and stagger on mobile | Natural rendered state |
| Education heading | Reusable heading reveal | ScrollTrigger | Simplified mobile timing | Natural rendered state |
| Education entries | Two entries reveal with lightweight stagger | Shared reusable reveal wrapper | Minimal mobile stagger | Natural rendered state |
| Contact heading | Large closing heading reveal | ScrollTrigger | Shorter mobile timing | Natural rendered state |
| Contact details | Email, location, social/resume block, and footer enter in sequence | Shared reusable reveal wrapper | Smaller mobile translation | Natural rendered state |
| Case-study hero | Metadata, title, employer, summary, and artwork form one entrance timeline | Route component mount | Smaller translation and shorter sequence on mobile | Natural rendered state |
| Case-study sections | Content blocks reveal once near viewport entry | One ScrollTrigger per block | Reduced mobile displacement | Natural rendered state |
| Case-study gallery | Gallery visual receives a restrained scale/opacity entrance | Gallery ScrollTrigger | No directional movement on mobile | Natural rendered state |
| Case-study navigation | Navigation block enters with the final content group; existing CSS hover remains | ScrollTrigger | Same semantic links at every width | Natural rendered state |

## 3. Components and files requiring changes

### Motion architecture

- `src/lib/gsap.ts`
  - Register `useGSAP`, `ScrollTrigger`, and `SplitText` once.
  - Export the registered GSAP instance, plugins, and shared timing tokens.
- `src/components/motion/HeroIntro.tsx`
  - Replace the stub with the font-aware, responsive hero timeline.
- `src/components/motion/AnimatedReveal.tsx`
  - Replace the stub with a reusable, scoped, once-only ScrollTrigger reveal.
- `src/components/motion/WorkScrollSegment.tsx`
  - Replace the stub with project entrance timelines and fine-pointer hover motion.
- `src/components/motion/TimelineProgress.tsx`
  - Replace the stub with the experience progress track and entry triggers.
- `src/components/motion/ProjectCaseStudyMotion.tsx`
  - Add a shared client wrapper for all three case-study routes, keyed by project slug for route-safe reinitialization.

### Existing server-rendered content components

- `src/components/sections/HeroSection.tsx`
  - Add `HeroIntro` and scoped data targets; preserve all content/layout.
- `src/components/sections/WorkSection.tsx`
  - Add heading reveal and `WorkScrollSegment` around the existing project list.
- `src/components/sections/AboutSection.tsx`
  - Add reusable reveal targets to the existing two-column composition.
- `src/components/sections/ExperienceSection.tsx`
  - Add heading reveal and wrap the existing timeline in `TimelineProgress`.
- `src/components/sections/StackSection.tsx`
  - Add heading and grouped capability reveals.
- `src/components/sections/EducationSection.tsx`
  - Add heading and entry reveals.
- `src/components/sections/ContactSection.tsx`
  - Add heading and closing-content reveals.
- `src/components/projects/ProjectPreview.tsx`
  - Add data targets only; keep the linked article, copy, and layout unchanged.
- `src/components/projects/ProjectCaseStudy.tsx`
  - Add the shared case-study motion wrapper and semantic data targets.
- `src/components/projects/ProjectGallery.tsx`
  - Add gallery target wrappers without changing media content.
- `src/components/projects/ProjectNav.tsx`
  - Add a data target for the case-study closing reveal.
- `src/components/ui/StackGroup.tsx`
  - Mark existing groups as reveal items.
- `src/app/globals.css`
  - Strengthen the reduced-motion fallback for CSS transitions and keep scrolling natural.

No content module, route map, color token, typography token, project asset, or professional fact will change.

## 4. GSAP plugins required

| Plugin/API | Use | Registration strategy |
|---|---|---|
| GSAP core | Timelines, transforms, opacity, scale, stagger, easing, `matchMedia` | Exported from client-only `src/lib/gsap.ts` |
| `@gsap/react` `useGSAP` | Isomorphic React lifecycle, scoping, Strict Mode-safe cleanup | Registered once in `src/lib/gsap.ts` |
| ScrollTrigger | Section, project, timeline, gallery, and case-study scroll entrances | Registered once in `src/lib/gsap.ts` |
| SplitText | Hero name characters and headline lines only | Registered once; created after `document.fonts.ready`; reverted after completion and on cleanup |

`Flip`, ScrollSmoother, ScrollToPlugin, DrawSVG, MorphSVG, page-transition tooling, and GSDevTools are not required.

## 5. Desktop, tablet, and mobile strategy

### Desktop (1024px+)

- Use the full hero sequence and subtle directional offsets for alternating project compositions.
- Enable project hover scaling only when `(hover: hover) and (pointer: fine)` matches.
- Use the scrubbed experience progress line.
- Do not pin the Work section: the approved alternating rows already provide clear storytelling, while pinning would add layout-shift, focus, and scroll-restoration risk.

### Tablet (768px–1023px)

- Preserve all discrete reveals with shorter distances and durations.
- Keep the existing two-column project layout.
- No pinned sections, horizontal-scrolling simulation, or continuous parallax.

### Mobile (below 768px)

- Use smaller vertical translations, shorter durations, and minimal stagger.
- Remove directional/horizontal project offsets and all hover-only motion.
- Keep natural document scrolling and the approved stacked layouts.
- Never create horizontal transform travel that could expose overflow.

## 6. Reduced-motion alternatives

- Every motion component will use `gsap.matchMedia()` with `(prefers-reduced-motion: reduce)`.
- Reduced-motion handlers will avoid creating entrance, scrub, SplitText, displacement, scale, or hover animations.
- Because server-rendered content begins in its final visible state and no CSS pre-hiding class is used, reduced-motion users and no-JavaScript users receive the complete static Phase 2 experience.
- Existing smooth anchor scrolling remains disabled by the current CSS media query; the global fallback will also collapse incidental CSS transition durations.
- No pinning exists in any media mode.

## 7. Lifecycle and cleanup strategy

- All animation components are Client Components and call `useGSAP()` with a local root ref as `scope`.
- Selector text is used only inside that scope; there are no unscoped global selectors.
- `useGSAP` context reversion removes timelines, tweens, ScrollTriggers, and inline styles on unmount.
- Each `gsap.matchMedia()` instance is explicitly reverted in the hook cleanup so breakpoint and preference changes tear down the old branch.
- SplitText instances are explicitly reverted after the hero finishes and again defensively during teardown.
- Fine-pointer event listeners are registered through context-safe callbacks and removed during cleanup.
- The case-study wrapper takes the project slug as a dependency with `revertOnUpdate: true`, preventing stale triggers or inline styles when navigating between dynamic project routes.
- Once-only entrance animations clear temporary transform, opacity, clip, and `will-change` inline properties after completion.
- ScrollTrigger positions rely on fixed media aspect ratios; no unconditional `ScrollTrigger.refresh()` will run on every render or resize.

## 8. Performance risks and mitigations

| Risk | Mitigation |
|---|---|
| Too many ScrollTriggers | Limit triggers to major headings/groups, three project rows, two experience entries, and case-study blocks; use once-only triggers where possible. |
| Layout/paint cost | Animate transform and opacity; use a short clip reveal only for limited media elements; never animate width, height, top, left, margin, or padding. |
| Layer over-promotion | Set `will-change` only immediately before active tweens and clear it on completion. |
| SplitText font/layout mismatch | Await `document.fonts.ready`, split only the hero name/headline, and revert markup when the timeline completes. |
| React Strict Mode duplication | Register plugins once; use scoped `useGSAP` context cleanup and `revertOnUpdate` for slug changes. |
| Mobile overflow/jank | Use vertical-only, shorter mobile motion; no pinning, horizontal scrollytelling, cursor followers, or continuous loops. |
| Stale route triggers | Scope triggers to the route component and revert them on unmount/project change. |
| Image layout shifts | Retain the existing aspect-ratio media boxes and `next/image`; avoid measurement-dependent image animations. |
| Accessibility regression | Do not pre-hide in CSS, preserve semantics/focus order, and skip all nonessential motion for reduced-motion users. |

## 9. Acceptance criteria

- Hero sequence follows label -> name -> headline -> supporting copy -> CTAs -> supporting details with a professional total duration and no preloader.
- SplitText is limited to the hero, waits for fonts, preserves accessible reading, and reverts cleanly.
- Work, About, Experience, Stack, Education, and Contact receive cohesive but non-identical scroll reveals.
- The three project previews have coordinated media/copy entrances and fine-pointer-only hover feedback.
- Experience has a subtle progress line and progressive entry reveals without delaying readability.
- All three case studies use the same route-safe entrance/reveal system.
- Mobile uses natural scroll, shorter motion, no pinning, and no required hover behavior.
- Reduced-motion mode keeps every element visible and functional with no elaborate transforms, parallax, pinning, or splitting.
- No animation changes professional content, semantic structure, focus order, anchor behavior, or approved layout.
- No global selectors, repeated plugin registration, stale ScrollTriggers, or unconditional refresh loops are introduced.
- `npm run lint`, `npx tsc --noEmit`, and `npm run build` complete successfully.
- Browser visual behavior remains explicitly owner-verified; no automated browser testing or unexecuted visual claim will be made.
