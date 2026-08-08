export type Experience = {
  id: string;
  role: string;
  company: string;
  duration: string;
  type: string; // e.g., "Internship", "Part-time", "Full-time", "Academic Research"
  description: string[];
};

export const experienceData: Experience[] = [];
