"use client";

import * as React from "react";
import { skillsData } from "@/data/skills";
import { SectionHeading } from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { LayoutTemplate, Server, BrainCircuit, Wrench } from "lucide-react";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPython,
  SiTensorflow,
  SiKeras,
  SiGit,
  SiGithub,
  SiFigma,
  SiGooglecolab,
  SiKaggle,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { IconType } from "react-icons";

const CanvaIcon: IconType = (props) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M14.5 9.5c-.6-.7-1.5-1.1-2.5-1.1-2.2 0-3.8 1.6-3.8 3.6s1.6 3.6 3.8 3.6c1 0 1.9-.4 2.5-1.1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

type SkillIconConfig = {
  icon: IconType;
  color?: string;
  className?: string;
};

const skillIcons: Record<string, SkillIconConfig> = {
  // Frontend
  "HTML": { icon: SiHtml5, color: "#E34F26" },
  "CSS": { icon: SiCss, color: "#1572B6" },
  "JavaScript": { icon: SiJavascript, color: "#F7DF1E" },
  "React": { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, className: "text-foreground" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },

  // Backend
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  "Express.js": { icon: SiExpress, className: "text-foreground" },
  "MongoDB": { icon: SiMongodb, color: "#47A248" },

  // Programming / AI / ML
  "Python": { icon: SiPython, color: "#3776AB" },
  "TensorFlow": { icon: SiTensorflow, color: "#FF6F00" },
  "Keras": { icon: SiKeras, color: "#D00000" },

  // Tools
  "Git": { icon: SiGit, color: "#F05032" },
  "GitHub": { icon: SiGithub, className: "text-foreground" },
  "VS Code": { icon: VscVscode, color: "#007ACC" },
  "Figma": { icon: SiFigma, color: "#F24E1E" },
  "Canva": { icon: CanvaIcon, color: "#00C4CC" },
  "Google Colab": { icon: SiGooglecolab, color: "#F9AB00" },
  "Kaggle": { icon: SiKaggle, color: "#20BEFF" },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5,
      staggerChildren: 0.05 
    } 
  }
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
};

const getCategoryIcon = (title: string) => {
  switch (title) {
    case "Frontend":
      return <LayoutTemplate className="w-6 h-6 text-primary" />;
    case "Backend":
      return <Server className="w-6 h-6 text-primary" />;
    case "Programming / AI / ML":
      return <BrainCircuit className="w-6 h-6 text-primary" />;
    case "Tools":
      return <Wrench className="w-6 h-6 text-primary" />;
    default:
      return <Wrench className="w-6 h-6 text-primary" />;
  }
};

export function Skills() {
  return (
    <section id="skills" className="py-24 px-5 md:px-6 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <SectionHeading 
          title="Technical Skills" 
          subtitle="Technologies and tools I work with" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-16">
          {skillsData.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="group bg-card border border-card-border hover:border-primary/30 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden"
            >
              {/* Card Highlight Gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="bg-primary/10 p-3 rounded-xl border border-primary/20">
                  {getCategoryIcon(category.title)}
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2.5 relative z-10">
                {category.skills.map((skill) => {
                  const iconConfig = skillIcons[skill];
                  const IconComponent = iconConfig?.icon;

                  return (
                    <motion.span
                      variants={badgeVariants}
                      key={skill}
                      className="inline-flex items-center gap-2 bg-background text-foreground border border-card-border px-4 py-2 rounded-lg text-sm font-medium hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all duration-300 cursor-default shadow-sm hover:shadow-md hover:-translate-y-1"
                    >
                      {IconComponent && (
                        <IconComponent
                          className={`w-4 h-4 shrink-0 ${iconConfig.className || ""}`}
                          style={iconConfig.color ? { color: iconConfig.color } : undefined}
                        />
                      )}
                      <span>{skill}</span>
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
