export type EducationEntry = {
  institution: string;
  qualification: string;
  period: string;
  note?: string;
};

export const education: EducationEntry[] = [
  {
    institution: "National University of Sciences and Technology (NUST)",
    qualification: "BS Software Engineering",
    period: "October 2023 – September 2027",
    note: "In progress",
  },
  {
    institution: "Govt. College University Lahore (GCU)",
    qualification: "FSc Pre-Engineering",
    period: "September 2021 – August 2023",
  },
];
