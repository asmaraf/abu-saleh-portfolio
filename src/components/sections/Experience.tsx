"use client";

import * as React from "react";
import { experienceData } from "@/data/experience";
import { SectionHeading } from "@/components/SectionHeading";
import { Briefcase, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export function Experience() {
  // If no experience data is available, render an empty state or nothing.
  // For the portfolio foundation, we'll render a placeholder structure if empty.
  const hasExperience = experienceData && experienceData.length > 0;

  return (
    <section id="experience" className="py-24 px-5 md:px-6">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading 
          title="Academic & Research Experience" 
          subtitle="My academic projects, research work, and development experience" 
        />
        
        {!hasExperience ? (
          <div className="text-center py-12 bg-card border border-card-border border-dashed rounded-xl mt-8">
            <Briefcase className="w-10 h-10 text-muted mx-auto mb-4 opacity-50" />
            <p className="text-muted">
              Experience details will be added here soon.
            </p>
          </div>
        ) : (
          <div className="mt-12 space-y-8">
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-0"
              >
                <div className="md:grid md:grid-cols-5 gap-8 items-start relative">
                  
                  {/* Timeline line - Desktop */}
                  <div className="hidden md:block absolute left-[20%] top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-card-border to-transparent -translate-x-1/2"></div>
                  
                  {/* Timeline node - Desktop */}
                  <div className="hidden md:flex absolute left-[20%] top-2 w-5 h-5 rounded-full bg-primary -translate-x-1/2 ring-4 ring-background shadow-[0_0_15px_rgba(20,184,166,0.5)]"></div>
                  
                  {/* Timeline line - Mobile */}
                  <div className="md:hidden absolute left-0 top-2 bottom-0 w-px bg-gradient-to-b from-primary/50 via-card-border to-transparent"></div>
                  
                  {/* Timeline node - Mobile */}
                  <div className="md:hidden absolute left-0 top-2 w-4 h-4 rounded-full bg-primary -translate-x-[7px] ring-4 ring-background shadow-[0_0_10px_rgba(20,184,166,0.5)]"></div>
  
                  <div className="md:col-span-1 md:text-right md:pr-8 mb-4 md:mb-0 pt-1.5">
                    <span className="inline-flex items-center text-sm font-bold text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
                      <Calendar className="w-3.5 h-3.5 mr-2" />
                      {exp.duration}
                    </span>
                  </div>
                  
                  <div className="md:col-span-4 group bg-card border border-card-border hover:border-primary/30 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-muted font-medium mt-2 text-lg">
                          {exp.company}
                        </p>
                      </div>
                      <span className="inline-flex items-center px-3 py-1 bg-muted/10 text-foreground text-xs font-bold uppercase tracking-wider rounded-md border border-card-border h-fit w-fit whitespace-nowrap">
                        {exp.type}
                      </span>
                    </div>
                    
                    <ul className="space-y-3 mt-6 pt-6 border-t border-card-border/50">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="flex items-start text-base text-muted">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 mr-3 flex-shrink-0" />
                          <span className="leading-relaxed">{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
