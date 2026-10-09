export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      "Next.js (SSR/SSG)",
      "React",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Design",
      "Reusable Components",
    ],
  },
  {
    category: "Backend / API",
    items: [
      "Node.js",
      "Express.js",
      "Django",
      "REST APIs",
      "Authentication",
      "Role-Based Access Control (RBAC)",
    ],
  },
  {
    category: "Data",
    items: ["PostgreSQL", "MongoDB", "MySQL", "SQL"],
  },
  {
    category: "Engineering",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Agile / Scrum",
      "WhatsApp Meta API Integration",
    ],
  },
  {
    category: "Other Languages",
    items: ["Java", "C++"],
  },
];
