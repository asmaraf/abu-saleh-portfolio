"use client";

import * as React from "react";
import { projectsData } from "@/data/projects";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { FolderGit2 } from "lucide-react";
import { motion } from "framer-motion";

export function Projects() {
  const hasProjects = projectsData && projectsData.length > 0;

  return (
    <section id="projects" className="py-24 px-5 md:px-6 bg-muted/5">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading 
          title="Featured Projects" 
        />
        
        {!hasProjects ? (
          <div className="text-center py-20 bg-card border border-card-border border-dashed rounded-2xl mt-12 max-w-3xl mx-auto">
            <FolderGit2 className="w-12 h-12 text-muted mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-medium text-foreground mb-2">No Projects Yet</h3>
            <p className="text-muted max-w-md mx-auto">
              I am currently working on updating this section with my latest projects. 
              Check back soon to see my work!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                className="h-full"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
