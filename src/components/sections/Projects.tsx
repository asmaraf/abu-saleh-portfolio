"use client";

import * as React from "react";
import { projectsData } from "@/data/projects";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { FolderGit2, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/Button";

export function Projects() {
  const [showAll, setShowAll] = React.useState(false);
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
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {projectsData.map((project, index) => {
                let visibilityClass = "h-full";
                if (!showAll) {
                  if (index >= 4 && index < 6) {
                    visibilityClass += " hidden md:block";
                  } else if (index >= 6) {
                    visibilityClass += " hidden";
                  }
                }

                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: "easeOut" }}
                    className={visibilityClass}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                );
              })}
            </div>

            {projectsData.length > 4 && (
              <div className={`mt-12 text-center ${projectsData.length <= 6 ? "md:hidden" : ""}`}>
                <Button
                  onClick={() => {
                    if (showAll) {
                      setShowAll(false);
                      const el = document.getElementById("projects");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    } else {
                      setShowAll(true);
                    }
                  }}
                  variant="secondary"
                  size="md"
                  className="px-6 py-2.5 rounded-xl border border-card-border hover:border-primary/40 text-foreground hover:text-primary transition-all duration-300 shadow-sm inline-flex items-center gap-2 group"
                >
                  <span>{showAll ? "Show Less" : "Show More Projects"}</span>
                  {showAll ? (
                    <ChevronUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                  ) : (
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                  )}
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
