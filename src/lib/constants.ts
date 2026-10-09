export const SECTION_IDS = {
  hero: "hero",
  work: "work",
  about: "about",
  experience: "experience",
  stack: "stack",
  education: "education",
  contact: "contact",
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];

export const NAV_SECTION_IDS: SectionId[] = [
  SECTION_IDS.work,
  SECTION_IDS.about,
  SECTION_IDS.experience,
  SECTION_IDS.stack,
  SECTION_IDS.contact,
];

export const CONTAINER_MAX = "max-w-[72rem]";
