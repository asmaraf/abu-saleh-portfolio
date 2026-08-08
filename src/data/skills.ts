export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "REST API", "JWT Authentication"],
  },
  {
    title: "Programming / AI / ML",
    skills: ["Python", "TensorFlow", "Keras", "Machine Learning", "Computer Vision", "Deep Learning"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Canva", "Google Colab", "Kaggle"],
  }
];
