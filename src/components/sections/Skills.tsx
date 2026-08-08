"use client";

import * as React from "react";
import { skillsData } from "@/data/skills";
import { SectionHeading } from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { LayoutTemplate, Server, BrainCircuit, Wrench } from "lucide-react";

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
    <section id="skills" className="py-24 px-4 md:px-6 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <SectionHeading 
          title="Technical Skills" 
          subtitle="Technologies and tools I work with" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-16">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-background text-foreground border border-card-border px-4 py-2 rounded-lg text-sm font-medium hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all duration-300 cursor-default shadow-sm hover:shadow hover:-translate-y-0.5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
