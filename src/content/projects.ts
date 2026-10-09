export type MediaKind = "abstract-placeholder" | "screenshot";

export type GalleryItem = {
  src: string;
  alt: string;
  kind: MediaKind;
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  category: string;
  summary: string;
  employer: string;
  stack: string[];
  features: string[];
  roleBullets: string[];
  problemContext: string;
  engineeringNotes: string[];
  considerations: string[];
  gallery: GalleryItem[];
  placeholderPath: string;
  mediaKind: MediaKind;
  liveUrl: null;
  repoUrl: null;
};

export const projects: Project[] = [
  {
    slug: "enterprise-crm-system",
    index: "01",
    title: "Enterprise CRM System",
    category: "Enterprise Software / Full-Stack",
    employer: "Creative Connects LLC",
    summary:
      "Contributed to an enterprise CRM with dashboards, order lifecycle, inventory, vendor, employee and client management, internal chat, notifications, activity logs, monitoring, and role-based access. Integrated WhatsApp Meta API for client communication.",
    stack: ["Next.js", "React", "Node.js", "PostgreSQL"],
    features: [
      "Operational dashboards and order lifecycle workflows",
      "Inventory, vendor, employee, and client management modules",
      "Internal chat, notifications, and activity logging",
      "Monitoring views and role-based access control",
      "WhatsApp Meta API integration for client communication",
    ],
    roleBullets: [
      "Contributed CRM modules spanning dashboards, orders, inventory, people, communication, monitoring, and access-controlled workflows.",
      "Implemented WhatsApp Meta API integration to support client communication within the CRM.",
      "Worked with REST APIs, authentication, and role-based access patterns across the application.",
    ],
    problemContext:
      "The CRM brings dashboards, orders, inventory, people, communication, monitoring, and access control into one multi-module operational system.",
    engineeringNotes: [
      "Next.js and React interfaces for multi-module operational workflows",
      "Node.js and PostgreSQL in the verified project stack",
      "Authentication and role-based access control",
      "WhatsApp Meta API integration for client communication",
    ],
    considerations: [
      "Delivered as part of a team; individual ownership varies by module.",
      "Screenshots and live demos are not published here due to confidentiality.",
      "Abstract visuals on this site are conceptual — not product captures.",
    ],
    placeholderPath: "/projects/enterprise-crm-system/placeholder.svg",
    mediaKind: "abstract-placeholder",
    liveUrl: null,
    repoUrl: null,
    gallery: [
      {
        src: "/projects/enterprise-crm-system/placeholder.svg",
        alt: "Abstract conceptual artwork suggesting CRM module structure — not an application screenshot",
        kind: "abstract-placeholder",
      },
    ],
  },
  {
    slug: "e-commerce-management-platform",
    index: "02",
    title: "E-Commerce Management Platform",
    category: "Multi-Portal Commerce / Full-Stack",
    employer: "Creative Connects LLC",
    summary:
      "Worked on Admin, Freelancer, and Customer portals with product, inventory, category, media, carousel, and role-based pricing management.",
    stack: ["Next.js", "React", "Tailwind CSS"],
    features: [
      "Admin, Freelancer, and Customer portal experiences",
      "Product and inventory management workflows",
      "Category, media, and carousel management",
      "Role-based pricing management across portals",
    ],
    roleBullets: [
      "Developed interfaces and flows for distinct portal roles with shared design language.",
      "Built reusable React components for product and inventory management screens.",
      "Collaborated on responsive layouts and maintainable Tailwind CSS patterns.",
    ],
    problemContext:
      "The platform supports Admin, Freelancer, and Customer portals around shared product, inventory, media, category, carousel, and pricing workflows.",
    engineeringNotes: [
      "Distinct interfaces for Admin, Freelancer, and Customer roles",
      "Reusable React components for product and inventory workflows",
      "Responsive layouts built with Tailwind CSS",
    ],
    considerations: [
      "Team-delivered platform; wording reflects contribution, not sole ownership.",
      "No public demo URL is available at this time.",
      "Gallery items use approved abstract placeholders until redacted screenshots are supplied.",
    ],
    placeholderPath: "/projects/e-commerce-management-platform/placeholder.svg",
    mediaKind: "abstract-placeholder",
    liveUrl: null,
    repoUrl: null,
    gallery: [
      {
        src: "/projects/e-commerce-management-platform/placeholder.svg",
        alt: "Abstract conceptual artwork suggesting multi-portal commerce — not an application screenshot",
        kind: "abstract-placeholder",
      },
    ],
  },
  {
    slug: "advanced-web-editor",
    index: "03",
    title: "Advanced Web Editor",
    category: "Interactive Tools / Frontend Engineering",
    employer: "Creative Connects LLC",
    summary:
      "Contributed to an advanced interactive web editor supporting image and PDF editing, text and font extraction, and custom shapes.",
    stack: ["React", "JavaScript"],
    features: [
      "Image and PDF editing interactions",
      "Text and font extraction tooling",
      "Custom shapes and interactive editing controls",
      "Interactive editing experience focused on usability",
    ],
    roleBullets: [
      "Contributed frontend features for editing flows and interactive controls.",
      "Improved usability and responsiveness of editor interactions.",
      // TODO: Add precise module ownership if owner confirms beyond CV summary.
    ],
    problemContext:
      "The browser-based editor combines image and PDF editing, extraction tools, and custom shapes in one interactive experience.",
    engineeringNotes: [
      "React and JavaScript in the verified project stack",
      "Interactive controls for image, PDF, text, font, and shape workflows",
      "Reusable frontend components supporting responsive editor interfaces",
    ],
    considerations: [
      "Editor capabilities described at a high level per CV; detailed internals remain confidential.",
      "Walkthrough available upon request — no public repository link.",
    ],
    placeholderPath: "/projects/advanced-web-editor/placeholder.svg",
    mediaKind: "abstract-placeholder",
    liveUrl: null,
    repoUrl: null,
    gallery: [
      {
        src: "/projects/advanced-web-editor/placeholder.svg",
        alt: "Abstract conceptual artwork suggesting an interactive editor — not an application screenshot",
        kind: "abstract-placeholder",
      },
    ],
  },
];

export const projectSlugs = projects.map((p) => p.slug);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectIndex(slug: string): number {
  return projects.findIndex((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const index = getProjectIndex(slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? projects[index - 1]! : null,
    next: index < projects.length - 1 ? projects[index + 1]! : null,
  };
}
