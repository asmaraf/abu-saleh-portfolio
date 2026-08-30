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

const GsapIcon: IconType = (props) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    role="img"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M17.21 0c-.545.003-1.084.134-1.256.367-.11.165-.192 1.196-.11 1.718 0 0 .032.345.09.614a14.6 14.6 0 0 1-.02.182 7.024 7.024 0 0 1-.097.605c-.01.056-.207.095-.425.152a2.495 2.495 0 0 0-.138-.042c-.234-.069-.385.123-.618.26-.069-.04-.371-.178-.536-.082-.165.096-.275.193-.44.261-.082-.041-.302-.041-.48.028a1.27 1.27 0 0 0-.483.278c-2.314.58-4.813 1.635-5.012 1.741-1.017.522-2.679 1.415-3.434 2.033-1.291 1.071-2.06 2.322-2.363 3.242-.385 1.14-.275 1.827.096 1.387.298-.366 1.632-1.454 2.475-1.999l-.002.007a3.219 3.219 0 0 1 .44-.26l.233-.124.505-.323c.602.552.803 1.433.937 2.63.22 1.841 1.704 2.693 3.434 2.72 1.8.028 2.446.399 3.119 1.305.153.201.318.307.47.368a1.954 1.954 0 0 0-.16.405c-.075.17-.125.38-.157.608a.157.157 0 0 0-.03.075c-.068.536-.055 1.8-.068 2.473-.014.673-.028.77-.083.866-.055.11-.11.178-.178.467-.069.302-.193.384-.316.631-.206.385-.165.81.041 1.003.206.192.77.481 1.538.385.77-.096.88-.151.756-.893-.014-.11-.192-.605-.137-.797.082-.206-.096-.563-.055-.577.041-.014.096-.288.096-.426 0-.137-.014-.796.137-1.14.062-.14.193-.46.326-.785.442-.723.459-1.161.48-1.41.03-.202.046-.46.018-.744.055-.083.289-.275.316-.646 0 0 .644-.337 1.102-1.148.16.557.31.91.286 1.272-.499.39-.684.678-.76.959-.048-.02-.076-.037-.11-.04h-.027a.437.437 0 0 0-.106.029c-.192.068-.041 1.318.165 1.827.206.508.316.81.398 1.36.083.549-.192 1.222-.302 1.524 0 0-.179.536.233.824.358.248 1.704.18 2.308.18.605 0 1.511.219 2.088.109.715-.124.824-.55.399-.77-.426-.22-1.072-.329-1.91-.933-.22-.152-.522-.289-.563-.412-.041-.124-.041-.838-.027-1.457.013-.618.22-1.414.288-1.84.064-.398-.076-.388-.262-.351.032-.147.066-.292.097-.446.344-.632.193-1.223.193-1.223.82-1.044.4-3.27.22-4.048.64.303.96.188.96.188.102-.055.192-.134.274-.224.337-.362.51-.916.51-.916V11c.782-.783 1.151-1.936.26-2.692a1.331 1.331 0 0 0-.219-1.263 1.56 1.56 0 0 0-.37-1.731 1.36 1.36 0 0 0-.487-.297c-.2-.295-.245-.417-.572-.349-.15-.165-.178-.288-.494-.178 0 0-.096-.234-.275-.289a.25.25 0 0 0-.05-.015c-.302-.21-.576-.215-.772-.16-.064-.048-.061-.124-.07-.388-.008-.2-.019-.486-.031-.744.027-.328.102-.974.126-1.303.028-.37.042-.948-.123-1.195C18.303.12 17.754-.003 17.21 0z" />
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
  "GSAP": { icon: GsapIcon, color: "#88CE02" },

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
