# Muhammad Affan — Premium GSAP Portfolio | Master Build Prompt

## Role and objective
You are a senior creative developer, art director, frontend architect, accessibility specialist, and Next.js engineer. Build a production-ready, highly polished personal portfolio for **Muhammad Affan**, a **full-stack software developer**. This is a personal recruiting/engineering portfolio, **not** a generic SaaS landing page, freelance agency site, or animation demo.

The objective is to communicate three things immediately: (1) sophisticated frontend execution and tasteful GSAP motion, (2) credible full-stack work on substantial business applications, and (3) clean, maintainable engineering. The result should feel like a bespoke, award-quality editorial portfolio: calm and confident, distinctive, responsive, fast, and easy to read.

Use these references for inspiration only; do not duplicate their compositions, text, assets, identities, animations, or code:
- GSAP showcase: https://gsap.com/showcase/
- Reference portfolio: https://portfolio-livid-two-50.vercel.app/
- Own previous portfolio (access may be restricted; inspect if possible, but do not depend on it): https://v0-developer-portfolio-website-dx1wwfzpy.vercel.app/
- Official GSAP React guide: https://gsap.com/resources/React/
- Official GSAP agent skills: https://github.com/greensock/gsap-skills

## 1. Design direction
Create a visual language called **Editorial Engineering**:
- Near-black #101114 foundation, warm paper #F3F0E8 contrasting sections, muted gray #B4B7BE, restrained lime #C5F277 accent; add accessible state colors.
- Oversized display typography, elegant tight headline tracking, strict type scales, dense-but-considered project imagery, plenty of breathing room, asymmetrical composition, hairline rules, subtle grid or technical coordinates.
- Suggested fonts: Space Grotesk for large display, Inter/Geist for UI and body, a restrained monospace for tiny technical labels; load with next/font.
- Wordmark: **MUHAMMAD AFFAN** or **MA.**; no invented avatar or headshot.
- Visual motif: numbered sections, a small responsive progress indicator, refined labels, desktop-sized product mockups featuring real screenshots when provided, purposeful micro-interactions.
- Avoid generic glowing gradient cards, fake terminal hacking effects, floating tech logos, excessive glassmorphism, spinning 3D models, continuous text marquees, and animation that hinders navigation.
- Feel human-designed. Every major section needs its own clear visual intent while retaining consistent spacing and typography.

## 2. Information architecture and verified copy
Use truthful content from the supplied CV. Do not claim more experience, metrics, ownership, awards, or technologies than are evidenced below. Rephrase copy for readability, not facts.

### Header
Logo: Muhammad Affan / MA.
Links: Work, About, Experience, Stack, Contact.
Persistent but unobtrusive contact CTA: **Let's Connect**.
Add a responsive accessible mobile menu.

### Hero
Eyebrow: FULL-STACK DEVELOPER · RAWALPINDI / LAHORE, PAKISTAN
Name: **Muhammad Affan**
Primary headline: **I build digital systems that make complex work feel simple.**
Supporting copy: **Full-stack developer working with Next.js, React, Node.js, and PostgreSQL to create scalable applications, thoughtful interfaces, and practical business tools.**
Buttons: **Explore Selected Work** (scrolls to work), **Get in Touch** (mailto or contact section).
Optional small availability label: **Open to full-time onsite opportunities**.
Do not show fake live clocks, arbitrary numerical counters, or bogus availability indicators.

### Selected Work: exactly 3 featured projects from the CV
1) **Enterprise CRM System** — Category: Enterprise Software / Full-Stack.
   Summary: Developed modules for an enterprise CRM including dashboards, order lifecycle, inventory, vendor, employee and client management, internal chat, notifications, activity logs, monitoring, and role-based access. Integrated WhatsApp Meta API for client communication.
   Verified stack: Next.js, React, Node.js, PostgreSQL.
   Emphasis: multi-module information architecture, complex workflows, role-based UI, communication integration. Do not attribute every part of team work to one person without proof.
2) **E-Commerce Management Platform** — Category: Multi-Portal Commerce / Full-Stack.
   Summary: Worked on Admin, Freelancer, and Customer portals with product, inventory, category, media, carousel, and role-based pricing management.
   Verified stack: Next.js, React, Tailwind CSS.
   Emphasis: multi-role experiences, product management workflow, reusable interfaces.
3) **Advanced Web Editor** — Category: Interactive Tools / Frontend Engineering.
   Summary: Contributed to an advanced interactive web editor supporting image/PDF editing, text and font extraction, and custom shapes.
   Verified stack: React, JavaScript.
   Emphasis: interactive editing experiences, sophisticated frontend interaction, usability.

Each project card must be a real accessible link to `/projects/[slug]`, with an authentic image if available or a clearly labeled designed placeholder. Never represent conceptual artwork as real application screenshots. No dead “Live Demo” or GitHub buttons. When URLs are absent, show no such button or an honest **Private project / walkthrough available upon request** note.

### About
Suggested editorial copy:
**I'm Muhammad Affan, a software engineering student and full-stack developer who enjoys turning complex workflows into intuitive products. At Creative Connects LLC, I've contributed to enterprise CRM, e-commerce, and browser-based editing tools, moving between interface development, APIs, integrations, and the details that make systems maintainable. I value clarity, reusable components, performance, and collaboration.**
Remain modest and precise; do not say founder, architect, team lead, or award winner.

### Experience timeline
- **Full-Stack Software Developer (Next.js)** — Creative Connects LLC — **January 2026–Present**. Delivered modules for enterprise CRM; WhatsApp Meta API integration; multi-portal e-commerce; and contributions to an advanced web editor.
- **Software Development Intern** — Creative Connects LLC — **September 2025–December 2025**. Built responsive interfaces and reusable React components for CRM/e-commerce/editor work; collaborated in an Agile team and improved frontend maintainability.

### Skills
Group by clear capabilities, not animated clouds:
- Frontend: Next.js (SSR/SSG), React, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Responsive Design, reusable components.
- Backend/API: Node.js, Express.js, Django, REST APIs, authentication, RBAC.
- Data: PostgreSQL, MongoDB, MySQL, SQL.
- Engineering: Git, GitHub, Docker, Agile/Scrum, WhatsApp Meta API integration.
- Other programming languages: Java, C++.
GSAP and TypeScript are technologies used **to build this portfolio**, but do not automatically add them to verified professional-experience claims or describe them as expertise unless approved.

### Education
- **National University of Sciences and Technology (NUST)** — BS Software Engineering — **October 2023–September 2027** (degree in progress).
- **Govt. College University Lahore (GCU)** — FSc Pre-Engineering — **September 2021–August 2023**.

### Contact and footer
Primary email: **muhammadaffan3355@gmail.com**.
Location: Rawalpindi / Lahore, Pakistan.
GitHub and LinkedIn URLs remain in a typed config as null or placeholder values until Muhammad Affan supplies valid links. Never generate fake profile URLs.
CV includes a phone number, but **do not publish the phone by default**; make it an opt-in contact field.
Resume CTA only when a valid PDF file is present; otherwise omit/disable with explanation.
Footer: **Designed & developed by Muhammad Affan** is acceptable once the owner has reviewed and approved the result.

## 3. Pages and storytelling
**Home (`/`)**: Large typographic hero → selected projects → concise engineering philosophy/about → career timeline → grouped technology stack → education → dramatic but readable contact/footer.
**Projects (`/projects/[slug]`)**: A distinctive detailed case-study template for each of the three CV-backed projects, with hero, project overview, precise role/contributions, problem/context, implemented features, verified stack, engineering choices when supported, screenshot gallery (only real images), lessons/considerations, next-project navigation, contact CTA. If a detail is unknown, use an editorial TODO in content data rather than guessing.
Optional `/about` is unnecessary initially unless the homepage becomes too long. Keep primary navigation one-page and case-study links deep-linked.
Do not include services, pricing estimators, fake testimonials, fake client logos, a blog, GitHub activity charts, or recognition badges without real supplied content.

## 4. GSAP motion direction and animation map
Use GSAP as the primary animation system; install `gsap` and `@gsap/react`. Use official agent skills/docs. Keep every animation purposeful and maintainable.
- **Opening**: zero or near-zero blocking preloader. Elegant one-time hero typography reveal with subtle SplitText line masks, progressive entrance of metadata and navigation. Content must remain visible if JS fails or reduced motion is on.
- **Navigation**: understated menu underline, active section indicator, mobile drawer with focus management.
- **Scroll sections**: staggered headings and image reveals through ScrollTrigger. Use restrained transform/opacity rather than animating layout properties.
- **Selected work**: large numbered, alternating editorial project compositions; images reveal via clipping or contained transforms. On desktop, one deliberate, short, pinned/scrollytelling segment can be used if it improves comprehension; on small screens switch to regular natural scrolling. A clean grid fallback is mandatory.
- **Project cards**: subtle pointer-parallax and scale on desktop pointer devices; no hijacked cursor and no interaction required to access content.
- **Timeline**: a thin progress track that grows as entries enter view, with legible text visible without animation.
- **Tech stack**: tasteful staggered labels and category transitions; no endless logo carousel.
- **Transitions**: refined navigation between project pages; prioritize instant usability, scrolling restoration, focus, and deep-link accessibility. Do not force an elaborate client-side route transition framework if it risks stability.
- **Contact**: strong large-scale type reveal and graceful email interaction.
Use `useGSAP()` with a scoped ref and cleanup; `gsap.matchMedia()` for responsive and `prefers-reduced-motion`. Avoid global selectors, stacked ScrollTriggers, unnecessary listeners, forced smooth-scroll, and pin-related layout jump. Initialize text splitting responsibly around font loading; `SplitText` can re-split with `autoSplit`/`onSplit`. Mobile reduced motion should feel deliberate, not broken.

## 5. Technical approach
- Next.js App Router + TypeScript strict mode + Tailwind CSS and maintainable CSS tokens.
- GSAP/ScrollTrigger/SplitText/Flip only as required; avoid unnecessary dependency layers.
- Server Components by default; Client Components only for interactive segments. Load heavyweight animation modules selectively.
- Content-driven architecture (typed constants/objects) for personal info, projects, experience, education, and social links. No CMS or backend for this portfolio.
- Keep state local (`useState`) for mobile menu/filters and interaction; avoid Zustand/Redux unless a demonstrated shared-state need emerges.
- Folder example:
  `src/app/{page.tsx,layout.tsx,projects/[slug]/page.tsx}`
  `src/components/{layout,sections,projects,motion,ui}`
  `src/content/{site.ts,projects.ts,experience.ts,skills.ts}`
  `src/lib/{gsap.ts,utils.ts}`
  `public/projects/` and `public/resume/`.
- Define reusable `SectionHeading`, `ProjectPreview`, `ProjectCaseStudy`, `AnimatedReveal`, `MagneticLink` (only if useful), `PageContainer`, `MobileNav`.
- Use semantic HTML, proper link/button roles, image alt text, keyboard focus styles, mobile touch targets, font optimization with `next/font`, image optimization with `next/image`, and Next.js metadata + OG images.
- No horizontal overflow on 320px screens. No broken sections at 375px, 768px, 1024px, 1440px.
- Maintain readable fallback if GSAP fails, JS disabled, reduced motion requested, screenshot assets missing, or content links null.
- Respect confidential enterprise information: use redacted screenshots; never expose credentials, private data, or proprietary internals.

## 6. Performance, accessibility, and acceptance
- Aim for Lighthouse 90+ in Performance, Accessibility, Best Practices, SEO **as an evaluation target**, not a pre-claimed result; report actual scores only after measurement.
- Honor `prefers-reduced-motion`; no essential information hidden behind animation.
- Ensure legible contrast; accessible headings, skip-link, tab order, focus trapping for mobile nav, visible focus indication, proper route title and metadata.
- Optimize Core Web Vitals: LCP and CLS; prevent font-layout shifts, lazy-load images below fold, avoid animating width/top/left repeatedly, avoid excessive video/canvas.
- Accessible/responsive interactions in Chrome, Firefox, Safari, Android and iOS when manually tested; do not claim verification without actual testing.
- Provide real link behavior; never make nonfunctional controls look interactive.
- Use typed content, clean file naming, reusable components, minimal duplication, readable implementation comments explaining non-obvious motion decisions, no `any`, no lint/build errors.

## 7. Delivery workflow and reporting
Do the work in clear phases **without overengineering**:
1) **Audit and plan**: inspect repository/current portfolio where available, list verified content/assets and missing links, propose page outline + design tokens + animation map. Preserve existing work where worth keeping.
2) **Design-first implementation**: build responsive, polished static sections and project case-study pages with accurate copy and placeholders where necessary. Show the first coherent visual experience before layering complex motion.
3) **GSAP integration**: add reveal sequences, scroll behavior, responsive animations, and cleanup.
4) **Polish**: accessibility, responsive edge cases, metadata, graceful fallbacks, errors, image optimization.
5) **Quality checks**: run `npm run lint`, TypeScript checks and production build if available. Do not fabricate results. Do **not** perform automated browser visual testing; instead provide me a precise manual verification checklist for each page and viewport.

**At the end of each phase report:** work completed, files added/changed, implementation decisions, exact commands/checks run with outcomes, known limitations, missing assets or real links, and **manual browser verification steps for me to execute**.

**The final result must be a fully working portfolio, not only a concept or screenshot. Prioritize quality and truthfulness over animation quantity.**
