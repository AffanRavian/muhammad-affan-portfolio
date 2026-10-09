export type ExperienceEntry = {
  title: string;
  company: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    title: "Full-Stack Software Developer (Next.js)",
    company: "Creative Connects LLC",
    period: "January 2026 – Present",
    bullets: [
      "Delivered modules for an enterprise CRM including dashboards, order lifecycle, inventory, vendor, employee and client management, internal chat, notifications, activity logs, monitoring, and role-based access.",
      "Implemented WhatsApp Meta API integration for client communication within the CRM.",
      "Built Admin, Freelancer, and Customer portals for a multi-portal e-commerce platform with product, inventory, category, media, carousel, and role-based pricing management.",
      "Contributed to an advanced web editor supporting image and PDF editing and text and font extraction.",
    ],
  },
  {
    title: "Software Development Intern",
    company: "Creative Connects LLC",
    period: "September 2025 – December 2025",
    bullets: [
      "Developed responsive interfaces for CRM, e-commerce, and web editor projects.",
      "Built reusable React components and collaborated with an Agile team on client deliverables.",
      "Improved UI responsiveness, code quality, and maintainability using modern frontend practices.",
    ],
  },
];
