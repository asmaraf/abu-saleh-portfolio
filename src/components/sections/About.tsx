"use client";

import * as React from "react";
import { personalInfo } from "@/data/personalInfo";
import { SectionHeading } from "@/components/SectionHeading";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 px-5 md:px-6 bg-muted/5">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading 
          title="About Me" 
          subtitle="Get to know me better" 
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="relative group bg-card border border-card-border hover:border-primary/30 rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden"
        >
          {/* Subtle gradient accent */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary/10 via-primary to-primary/10 opacity-80" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/10 transition-colors duration-500" />
          
          <div className="space-y-6 text-muted leading-relaxed relative z-10 text-lg">
            <p>
              I am a <strong className="text-foreground font-medium">Computer Science and Engineering</strong> student at the <strong className="text-foreground font-medium">University of Liberal Arts Bangladesh (ULAB)</strong>.
            </p>
            
            <p>
              My programming journey has gradually moved from learning the fundamentals of web development toward building complete applications and exploring machine learning and research-oriented projects. I enjoy building practical software projects where I can work on both the user interface and backend logic.
            </p>

            <div className="pt-4">
              <h3 className="font-heading text-foreground font-semibold mb-3">Core Development Interests</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Full Stack Web Development", 
                  "Frontend Development", 
                  "Backend Development", 
                  "Artificial Intelligence", 
                  "Machine Learning", 
                  "Computer Vision"
                ].map((interest) => (
                  <span key={interest} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <h3 className="font-heading text-foreground font-semibold mb-3">AI & Research Experience</h3>
              <p className="mb-4">
                I am also interested in AI/ML research and have worked on projects involving:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Facial Emotion Recognition",
                  "Deep Learning",
                  "Computer Vision",
                  "Multimodal / Cross-Modal learning"
                ].map((item) => (
                  <li key={item} className="flex items-center space-x-3 bg-muted/10 p-3 rounded-lg border border-card-border">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
