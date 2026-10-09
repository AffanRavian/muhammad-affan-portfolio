# Muhammad Affan Portfolio — Implementation Plan (Approved)

**Status:** Phase 1 complete — approved by owner  
**Last updated:** October 10, 2026  
**Scope:** Next.js App Router, TypeScript (strict), Tailwind CSS, GSAP + `@gsap/react` (Phase 3+)  
**Authorities:** `AGENTS.md`, `docs/portfolio-master-prompt.md`, `docs/cv-source.md`

This document is the single source of truth for build phases 2–5. Do not start Phase 2 until explicitly instructed.

---

## 1. Owner decisions (Phase 1 approval)

| # | Decision |
|---|----------|
| 1 | Use **CV-provided GitHub and LinkedIn** only. No invented social or project URLs. Links must be verified before publish. |
| 2 | **Typography:** Space Grotesk (display), Geist (body), Geist Mono (technical labels). Load via `next/font`. |
| 3 | **GSAP scroll pinning** is **optional in Phase 3** only. If implemented, it must not compromise usability, accessibility, or performance; mobile uses natural scroll. |
| 4 | **Do not mention** AI-assisted development tools in About or elsewhere. |
| 5 | **Primary focus:** three CV-backed projects — Enterprise CRM, E-Commerce Management Platform, Advanced Web Editor. |
| 6 | Use **premium abstract placeholder artwork** when screenshots are unavailable. Clearly label conceptual visuals vs real application screenshots. |
| 7 | **No phone number** on site. No testimonials, statistics, or invented professional achievements. |
| 8 | Preserve **modular architecture**, **accessibility standards**, and **clean-code rules** from `AGENTS.md`. |

### 1.1 Verified external links (CV-only)

| Platform | URL | Verification note |
|----------|-----|-------------------|
| GitHub | `https://github.com/AffanRavian` | HTTP 200 at plan time (automated HEAD). |
| LinkedIn | `https://www.linkedin.com/in/muhammad-affan-385b69303` | Normalized from CV (`www.linkedin.com/in/muhammad-affan-385b69303`). Automated fetch returned LinkedIn bot block (999); URL matches CV — confirm in browser before launch. |
| Email | `muhammadaffan3355@gmail.com` | CV-backed; use `mailto:` only. |

**Not in CV — omit UI controls:** project live demos, project GitHub repos, portfolio URL, phone (default hidden forever unless future explicit product change).

**Resume:** Enable download CTA only when `public/resume/*.pdf` exists; otherwise honest disabled/omitted state.

---

## 2. Product intent

Build a **production-ready personal recruiting portfolio** for Muhammad Affan, full-stack developer. Visual language: **Editorial Engineering** — calm, confident, distinctive, fast, readable. Communicate:

1. Sophisticated frontend execution and tasteful GSAP motion (Phase 3+).
2. Credible full-stack work on substantial business applications (CV-backed).
3. Clean, maintainable engineering (Server Components default, minimal client islands).

**Not:** generic SaaS landing, agency site, or animation demo. Inspiration references only — do not duplicate third-party compositions or assets.

---

## 3. Design tokens — Editorial Engineering

### 3.1 Color

Implement as CSS custom properties and Tailwind `@theme inline` in `globals.css`.

| Token | Hex | Usage |
|-------|-----|--------|
| `--color-foundation` | `#101114` | Default base, hero, footer, dark bands |
| `--color-paper` | `#F3F0E8` | Alternating sections (work, experience, education) |
| `--color-muted` | `#B4B7BE` | Eyebrows, meta, hairlines |
| `--color-accent` | `#C5F277` | Primary CTAs, active nav accents, focus ring partner |
| `--color-ink` | `#101114` | Text on paper |
| `--color-ink-inverse` | `#F3F0E8` | Text on foundation |
| `--color-focus-ring` | `#C5F277` | `:focus-visible` with offset |
| `--color-error` | `#E5484D` | Form/validation (future contact enhancements) |
| `--color-success` | `#30A46C` | Optional copy-feedback |

Phase 4: verify WCAG AA contrast for accent-on-foundation and ink-on-paper pairings.

### 3.2 Typography

| Role | Font | Notes |
|------|------|--------|
| Display | **Space Grotesk** | Hero name, section titles, contact display type; tight tracking on large sizes |
| Body / UI | **Geist** | Paragraphs, nav, buttons (extend existing layout setup) |
| Labels | **Geist Mono** | Section indices, eyebrows, stack category tags |

**Scale (examples):** display `clamp(3rem, 8vw, 6.5rem)`; H2 `clamp(1.75rem, 4vw, 2.75rem)`; body 16–18px; labels 11–12px uppercase with letter-spacing.

### 3.3 Layout & motif

- **Grid:** 12 columns desktop, 4 mobile; max width ~`72rem`; asymmetric splits (e.g. 7/5).
- **Section rhythm:** vertical padding `clamp(4rem, 12vh, 8rem)`.
- **Motif:** numbered sections (`01`–`07`), hairline rules, optional subtle coordinate/grid decoration.
- **Wordmark:** **MUHAMMAD AFFAN** or **MA.** — no avatar/headshot.
- **Progress indicator:** optional thin scroll progress (desktop rail or mobile top bar); non-essential, must not block content.

### 3.4 Motion tokens (Phase 3)

- Durations: 0.35s (micro), 0.6s (standard), 0.9s (hero).
- Easings: `power2.out` (enter), `power1.inOut` (scroll-linked).
- Stagger: 0.06–0.12 (labels), 0.15–0.25 (blocks).
- **Reduced motion:** `prefers-reduced-motion` + `gsap.matchMedia` → no pin, no transform dependency for reading.

### 3.5 Placeholder media (approved)

When project screenshots are missing:

- Use **premium abstract artwork** (generated/static SVG or WebP in `public/projects/<slug>/placeholder.*`).
- Visible label: e.g. **Conceptual visual — not an application screenshot** (or equivalent).
- Never present abstract art as a product UI capture.
- When real screenshots arrive, replace assets and update `alt` text to describe the UI.

---

## 4. Information architecture & copy

All biographical and professional facts from `docs/cv-source.md` and master brief verified sections. Rephrase for readability; do not inflate scope, ownership, metrics, or tech not in CV.

### 4.1 Header

- Logo: MA. / Muhammad Affan → `#hero`
- Nav anchors: Work, About, Experience, Stack, Contact
- Persistent CTA: **Let's Connect** → `#contact` or mailto
- Responsive accessible mobile menu (focus trap, escape, return focus)

### 4.2 Hero

- Eyebrow: `FULL-STACK DEVELOPER · RAWALPINDI / LAHORE, PAKISTAN`
- Name: **Muhammad Affan**
- Headline: **I build digital systems that make complex work feel simple.**
- Supporting copy per master brief (Next.js, React, Node.js, PostgreSQL)
- **Explore Selected Work** → `#work`; **Get in Touch** → contact
- Optional: **Open to full-time onsite opportunities**
- No fake clocks, counters, or bogus availability widgets

### 4.3 Selected work (exactly three)

| # | Title | Slug | Category |
|---|--------|------|----------|
| 1 | Enterprise CRM System | `enterprise-crm-system` | Enterprise Software / Full-Stack |
| 2 | E-Commerce Management Platform | `e-commerce-management-platform` | Multi-Portal Commerce / Full-Stack |
| 3 | Advanced Web Editor | `advanced-web-editor` | Interactive Tools / Frontend Engineering |

Each item: CV summary, verified stack, link to `/projects/[slug]`. Team-aware wording (contributed, delivered modules). No Live Demo / GitHub unless URLs added later to content config.

### 4.4 About

Master brief editorial paragraph (Creative Connects LLC, CRM/e-commerce/editor). Modest tone — not founder, lead, or award winner. **No AI-tool mentions.**

### 4.5 Experience

1. **Full-Stack Software Developer (Next.js)** — Creative Connects LLC — January 2026–Present  
2. **Software Development Intern** — Creative Connects LLC — September 2025–December 2025  

Bullets from CV.

### 4.6 Stack

Grouped capabilities (Frontend, Backend/API, Data, Engineering, Other languages) — CV lists only. **Do not** list GSAP or TypeScript as professional résumé skills unless owner later approves.

### 4.7 Education

- NUST — BS Software Engineering — October 2023–September 2027 (in progress)
- GCU Lahore — FSc Pre-Engineering — September 2021–August 2023

### 4.8 Contact & footer

- Email, location (Rawalpindi / Lahore, Pakistan)
- GitHub + LinkedIn (verified CV URLs only)
- No phone
- Resume per PDF rule above
- Footer credit **Designed & developed by Muhammad Affan** after final owner sign-off on design

---

## 5. Route map

| Route | Purpose |
|-------|---------|
| `/` | Single-page home (all primary sections) |
| `/projects/enterprise-crm-system` | Case study |
| `/projects/e-commerce-management-platform` | Case study |
| `/projects/advanced-web-editor` | Case study |
| `not-found` | Branded 404 |

**Deferred:** `/about` as separate route unless home length forces split.

**Navigation model:** Primary story on `/`; case studies deep-linked. No blog, services, pricing, testimonials, or fake client logos.

---

## 6. Home page section layouts

Order matches nav: **Work → About → Experience → Stack → Contact** (Education before Contact or as subsection of About — implement as `#education` block without extra nav item initially).

| Section | ID | Surface | Content focus |
|---------|-----|---------|----------------|
| Hero | `#hero` | foundation | Identity, headline, CTAs, availability |
| Selected Work | `#work` | paper | Three editorial project rows → case studies |
| About | `#about` | foundation | Editorial bio |
| Experience | `#experience` | paper | Timeline + CV bullets |
| Stack | `#stack` | foundation | Grouped skills |
| Education | `#education` | paper | Two institutions |
| Contact | `#contact` | foundation | Large type, email, social, footer |

### 6.1 Work section layout

- Large numbered entries (`01`–`03`), alternating text/media columns on desktop
- **Abstract placeholder** or approved screenshot in media column
- Entire preview is a semantic link to case study
- **Desktop Phase 3 (optional):** one short pinned scrollytelling segment only if it improves comprehension and passes reduced-motion + mobile fallback rules
- **&lt;768px:** stacked layout, no pin, no hover-only content

---

## 7. Project case study template

Shared `ProjectCaseStudy` layout driven by `content/projects.ts`:

1. Hero — title, category, employer context (Creative Connects)
2. Overview — CV summary
3. Role & contributions — scoped bullets; `TODO` in content for unknowns
4. Problem / context — CV-supported only
5. Features implemented — module lists from CV
6. Stack — verified technologies only
7. Engineering notes — RBAC, REST, multi-portal, WhatsApp integration (CRM) where CV supports
8. Gallery — real screenshots when provided; else abstract placeholder + explicit non-screenshot label
9. Considerations — confidentiality, team delivery, maintainability
10. Prev / next project navigation + contact CTA
11. **Private project / walkthrough available upon request** when no demo URL

---

## 8. Folder & component architecture

```
src/
  app/
    layout.tsx
    page.tsx
    not-found.tsx
    projects/[slug]/page.tsx
  components/
    layout/
      SiteHeader.tsx          # client: nav, mobile menu, active section
      SiteFooter.tsx
      PageContainer.tsx
      SectionShell.tsx        # theme: foundation | paper
    sections/
      HeroSection.tsx
      WorkSection.tsx
      AboutSection.tsx
      ExperienceSection.tsx
      StackSection.tsx
      EducationSection.tsx
      ContactSection.tsx
    projects/
      ProjectPreview.tsx
      ProjectCaseStudy.tsx
      ProjectGallery.tsx
      ProjectNav.tsx
    motion/                   # Phase 3+
      AnimatedReveal.tsx
      HeroIntro.tsx
      WorkScrollSegment.tsx   # optional pin — client only
      TimelineProgress.tsx
    ui/
      SectionHeading.tsx
      Button.tsx
      TextLink.tsx
      StackGroup.tsx
      PlaceholderMedia.tsx    # abstract art + disclaimer label
      SocialLinks.tsx         # renders only non-null URLs
      ResumeDownload.tsx
  content/
    site.ts
    projects.ts
    experience.ts
    education.ts
    skills.ts
  lib/
    gsap.ts                   # Phase 3: register plugins once
    utils.ts
    constants.ts              # section ids
public/
  projects/<slug>/            # placeholders + future screenshots
  resume/                     # optional PDF
  og/                         # Phase 4 default OG
```

**RSC vs client:** Default Server Components. Client only for header/menu, GSAP wrappers, optional pointer parallax on `(hover: hover)` devices.

**State:** Local `useState` for menu; no Redux/Zustand unless proven need.

---

## 9. Animation map (Phase 3)

Use official GSAP agent skills when installed: `gsap-core`, `gsap-timeline`, `gsap-scrolltrigger`, `gsap-plugins`, `gsap-react`, `gsap-performance`. Reference: [gsap-skills](https://github.com/greensock/gsap-skills), [GSAP React](https://gsap.com/resources/React/).

| Area | Behavior | Notes |
|------|----------|--------|
| Preloader | None or near-zero | Content visible without JS |
| Hero load | Timeline: eyebrow → name → headline (optional SplitText line masks) → body → CTAs | `useGSAP({ scope })` + cleanup |
| Navigation | Underline / active section; mobile drawer animation secondary to a11y | Focus trap priority |
| Scroll sections | ScrollTrigger reveal: opacity + translate / clip; stagger headings | No layout-thrashing props |
| Work | Optional desktop pin (Phase 3 decision gate); abstract/media reveal | **Optional** — skip if CLS or a11y risk |
| Project cards | Subtle scale on pointer devices | Not required to read content |
| Experience | Timeline line growth or stagger entries | Text readable without animation |
| Stack | Stagger category groups | No logo marquee |
| Contact | Large type on enter | |
| Route changes | Native Next.js navigation; restore scroll/focus | No heavy transition framework |
| Reduced motion | Disable pin, splits, long staggers | Deliberate static layout |

**Anti-patterns:** global GSAP selectors, stacked triggers on same element, smooth-scroll hijacking, animating width/top/left, essential info only at opacity 0.

---

## 10. Responsive strategy

| Breakpoint | Requirements |
|------------|----------------|
| 320px | No horizontal overflow; 16px min padding; 44px touch targets |
| 375px | Primary mobile reference |
| 768px | Two-column work rows; desktop nav |
| 1024px | Asymmetric work; optional progress rail |
| 1440px | Max container; fluid display type |

Images: `next/image` with correct `sizes`; lazy below fold. Typography: `clamp()` for display sizes.

---

## 11. Asset requirements

### 11.1 Current repository state (Phase 1 audit)

- Next.js 16.4 starter UI in `src/app/page.tsx` — replace in Phase 2
- Default SVGs in `public/` — replace/remove in Phase 2
- **No** `gsap` / `@gsap/react` in `package.json` (Phase 3)
- **No** project screenshots or resume PDF

### 11.2 Required / optional assets

| Asset | Status | Phase 2 action |
|-------|--------|----------------|
| Abstract placeholders (×3 projects) | To create | Premium SVG/WebP + disclaimer component |
| CRM / e-commerce / editor screenshots | Missing | Swap in when owner supplies redacted approvals |
| Resume PDF | Missing | Omit/disable CTA |
| OG image | Missing | Phase 4 static `public/og/` |
| Headshot | Excluded | Wordmark only |

### 11.3 Missing links (do not invent)

- Project live URLs — omit buttons
- Project repository URLs — omit buttons
- Portfolio URL — omit
- Phone — never publish

---

## 12. Accessibility approach

- Semantic landmarks; `section` + `aria-labelledby`
- Skip link to `#main`
- Visible `:focus-visible` (accent ring + offset)
- Mobile menu: focus trap, Escape, restore focus to trigger
- Project access via real `<a href>` elements
- Placeholder images: descriptive `alt` stating conceptual/non-screenshot nature where appropriate
- `prefers-reduced-motion`: CSS + GSAP matchMedia
- Unique page titles and meta per route (Phase 4)
- No non-functional controls styled as active buttons

**Evaluation target (not pre-claimed):** Lighthouse 90+ Performance, Accessibility, Best Practices, SEO after owner measurement.

---

## 13. Phased delivery & acceptance criteria

### Phase 1 — Audit & plan ✅

- [x] Plan approved with owner decisions recorded
- [x] Saved to `docs/implementation-plan.md`
- **Do not start Phase 2 until explicitly instructed**

### Phase 2 — Static responsive UI

**Deliver:** Design tokens; fonts (Space Grotesk + Geist + Geist Mono); full home sections; three case study pages; content modules; abstract placeholders; remove starter template. **No GSAP dependency required** in Phase 2 (motion wrappers may be inert stubs or CSS-only).

**Acceptance:**

- [ ] Copy CV/master accurate; three projects primary focus
- [ ] GitHub + LinkedIn render with verified URLs only
- [ ] No phone, testimonials, stats, AI mentions, invented achievements
- [ ] Placeholders clearly labeled non-screenshot
- [ ] Nav anchors + keyboard mobile menu
- [ ] Responsive at 320, 375, 768, 1024, 1440 — no horizontal scroll
- [ ] `npm run lint` and `npm run build` run and reported honestly
- [ ] Modular structure matches §8; aligns with `AGENTS.md`

### Phase 3 — GSAP integration

**Deliver:** Install `gsap`, `@gsap/react`; implement §9; optional pin only if approved by quality gate.

**Acceptance:**

- [ ] `useGSAP` scoped cleanup; no trigger leaks on route change
- [ ] Reduced motion: full readability, no pin
- [ ] Mobile: no pin; usable without hover
- [ ] Optional pin rejected if CLS, focus, or performance regressions observed in manual test
- [ ] Lint/build pass

### Phase 4 — Polish

**Deliver:** Metadata/OG, image optimization, 404 polish, contrast fixes, resume/social edge cases.

**Acceptance:**

- [ ] Owner runs Lighthouse; scores reported as measured
- [ ] Confidentiality respected in copy and imagery
- [ ] Footer credit only after design sign-off

### Phase 5 — Quality report

**Deliver:** Lint, typecheck, build; phase report with **owner-executed** manual checklist results.

---

## 14. Content model (Phase 2)

Typed modules in `src/content/`:

- **`site.ts`:** name, role, location, email, `social: { github, linkedin }`, nav items, section IDs
- **`projects.ts`:** slug, title, category, summary, stack[], features[], roleBullets[], gallery[], `liveUrl: null`, `repoUrl: null`, `mediaKind: 'abstract-placeholder' | 'screenshot'`
- **`experience.ts`**, **`education.ts`**, **`skills.ts`:** CV arrays

Unknown case-study details: `// TODO:` in content — never fabricated UI copy.

---

## 15. Manual design review checklist (owner)

Run after Phase 2, again after Phase 3, before launch.

### Global

- [ ] Editorial Engineering: foundation/paper alternation, restrained lime accent
- [ ] No generic AI-portfolio clichés (gradient cards, fake terminal, logo tornado)
- [ ] Wordmark only — no avatar
- [ ] Skip link works on first Tab

### Viewports (320, 375, 768, 1024, 1440)

- [ ] No horizontal overflow; readable type; tappable CTAs

### Content truth

- [ ] Three projects dominate; copy matches CV
- [ ] Abstract art labeled; real screenshots only when provided
- [ ] No phone, testimonials, fake metrics, AI tools copy
- [ ] GitHub + LinkedIn open correct profiles in browser

### Case studies (all slugs)

- [ ] No dead Demo/GitHub buttons
- [ ] Prev/next + contact work

### Motion (Phase 3+)

- [ ] Reduced motion OS setting: stable, readable
- [ ] Optional pin: no jump; disabled on small viewports
- [ ] Keyboard users not blocked

### Launch

- [ ] Resume behavior correct
- [ ] Footer credit approved
- [ ] Employer confidentiality respected in images

---

## 16. Phase 1 completion report

| Item | Result |
|------|--------|
| Owner decisions | Incorporated in §1 |
| Application code | Not modified in Phase 1 save step |
| Dependencies | Not added |
| Phase 2 | **Not started** — await explicit instruction |
| GSAP skills | Consult official repo during Phase 3; install skills if not present locally |

**Next step:** Owner instructs **Begin Phase 2** when ready.
