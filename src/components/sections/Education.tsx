"use client";

import * as React from "react";
import { educationData } from "@/data/education";
import { SectionHeading } from "@/components/SectionHeading";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export function Education() {
  return (
    <section id="education" className="py-24 px-5 md:px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <SectionHeading 
          title="Education" 
          subtitle="My academic background and qualifications" 
        />
        
        <div className="mt-16 space-y-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
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
                  {edu.duration && (
                    <span className="inline-flex items-center text-sm font-bold text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
                      <Calendar className="w-3.5 h-3.5 mr-2" />
                      {edu.duration}
                    </span>
                  )}
                </div>
                
                <div className="md:col-span-4 group bg-card border border-card-border hover:border-primary/30 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-foreground flex items-center group-hover:text-primary transition-colors">
                        <GraduationCap className="w-6 h-6 mr-3 text-primary" />
                        {edu.degree}
                      </h3>
                      <p className="text-muted font-medium mt-2 text-lg">
                        {edu.institution}
                      </p>
                      {edu.department && (
                        <p className="text-muted/80 font-medium mt-1 text-md">
                          {edu.department}
                        </p>
                      )}
                    </div>
                    {edu.status && (
                      <span className="inline-flex items-center px-3 py-1 bg-muted/10 text-foreground text-xs font-bold uppercase tracking-wider rounded-md border border-card-border h-fit w-fit whitespace-nowrap">
                        {edu.status}
                      </span>
                    )}
                  </div>
                  
                  {((edu.relevantCoursework && edu.relevantCoursework.length > 0) || (edu.achievements && edu.achievements.length > 0)) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-card-border/50">
                      {edu.relevantCoursework && edu.relevantCoursework.length > 0 && (
                        <div>
                          <h4 className="text-sm font-bold uppercase tracking-wider text-foreground flex items-center mb-4">
                            <BookOpen className="w-4 h-4 mr-2 text-primary" />
                            Relevant Coursework
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.relevantCoursework.map((course) => (
                              <span key={course} className="text-xs font-medium bg-muted/10 text-muted px-3 py-1.5 rounded-lg border border-card-border hover:bg-muted/20 hover:text-foreground transition-colors cursor-default">
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {edu.achievements && edu.achievements.length > 0 && (
                        <div>
                          <h4 className="text-sm font-bold uppercase tracking-wider text-foreground flex items-center mb-4">
                            <Award className="w-4 h-4 mr-2 text-primary" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {edu.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start text-sm text-muted">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 mr-2.5 flex-shrink-0" />
                                <span className="leading-relaxed">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
