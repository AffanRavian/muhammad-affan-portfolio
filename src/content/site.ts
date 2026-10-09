import { SECTION_IDS } from "@/lib/constants";

export const site = {
  name: "Muhammad Affan",
  wordmark: "MA.",
  role: "Full-Stack Developer",
  eyebrow: "FULL-STACK DEVELOPER · RAWALPINDI / LAHORE, PAKISTAN",
  headline: "I build digital systems that make complex work feel simple.",
  supportingCopy:
    "Full-stack developer working with Next.js, React, Node.js, and PostgreSQL to create scalable applications, thoughtful interfaces, and practical business tools.",
  availability: "Open to full-time onsite opportunities",
  location: "Rawalpindi / Lahore, Pakistan",
  email: "muhammadaffan3355@gmail.com",
  employer: "Creative Connects LLC",
  social: {
    github: "https://github.com/AffanRavian",
    linkedin: "https://www.linkedin.com/in/muhammad-affan-385b69303",
  },
  /** Set when `public/resume/*.pdf` is added */
  resumeFilename: null as string | null,
  nav: [
    { label: "Work", href: `#${SECTION_IDS.work}` },
    { label: "About", href: `#${SECTION_IDS.about}` },
    { label: "Experience", href: `#${SECTION_IDS.experience}` },
    { label: "Stack", href: `#${SECTION_IDS.stack}` },
    { label: "Contact", href: `#${SECTION_IDS.contact}` },
  ],
  /** Enable only after the owner explicitly signs off on the final design. */
  footerCredit: null as string | null,
} as const;

export type SiteConfig = typeof site;
