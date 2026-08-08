export type Education = {
  id: string;
  degree: string;
  institution: string;
  department?: string;
  duration?: string;
  status?: string;
  relevantCoursework?: string[];
  achievements?: string[];
};

export const educationData: Education[] = [
  {
    id: "ulab-cse",
    degree: "Bachelor of Science in Computer Science and Engineering",
    institution: "University of Liberal Arts Bangladesh (ULAB)",
    department: "Computer Science and Engineering",
    duration: "2023 - Present",
    status: "Ongoing",
    relevantCoursework: [],
    achievements: []
  }
];
