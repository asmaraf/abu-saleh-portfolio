"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative rounded-2xl border border-card-border bg-card overflow-hidden hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
      {/* Subtle top gradient line for premium feel */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted/10 border-b border-card-border">
        {project.image ? (
          <>
            <Image
              src={project.image}
              alt={`Screenshot of ${project.name} project`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
            />
            {/* Image Overlay */}
            <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-muted font-medium">
            No image available
          </div>
        )}
        
        {/* Category Badge over image */}
        <div className="absolute top-3 left-3 flex flex-col items-start gap-1">
          {project.category.includes("/") ? (
            <>
              <span className="text-[10px] font-bold uppercase tracking-wider text-background bg-foreground/90 backdrop-blur-md px-2 py-1 rounded shadow-sm">
                {project.category.split(" / ")[0]}
              </span>
              <span className="text-xs font-semibold text-background bg-foreground/75 backdrop-blur-md px-2.5 py-1 rounded shadow-sm">
                {project.category.split(" / ")[1]}
              </span>
            </>
          ) : (
            <span className="text-xs font-bold uppercase tracking-wider text-background bg-foreground/90 backdrop-blur-md px-2.5 py-1 rounded shadow-sm">
              {project.category}
            </span>
          )}
        </div>
      </div>
      
      <div className="p-6 md:p-7 flex flex-col flex-grow relative bg-gradient-to-b from-card to-card/50">
        <div className="flex items-start justify-between mb-3 gap-4">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
            <Link href={`/projects/${project.slug}`}>
              {project.name}
              <span className="absolute inset-0" aria-hidden="true" />
            </Link>
          </h3>
          <div className="flex gap-2 shrink-0 relative z-10">
            {project.clientGithubUrl && (
              <a 
                href={project.clientGithubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground bg-muted/10 hover:bg-muted/20 p-2 rounded-full transition-colors flex items-center justify-center"
                aria-label={`View ${project.name} source code on GitHub`}
                title="View Source Code"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground bg-muted/10 hover:bg-muted/20 p-2 rounded-full transition-colors flex items-center justify-center"
                aria-label={`View ${project.name} live project`}
                title="View Live Project"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
        
        <p className="text-muted mb-6 line-clamp-3 text-sm md:text-sm leading-relaxed">
          {project.shortDescription}
        </p>
        
        <div className="mt-auto flex flex-col gap-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <span 
                key={tech} 
                className="text-xs font-semibold bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-xs font-semibold bg-muted/10 text-muted px-3 py-1 rounded-full border border-card-border whitespace-nowrap">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
          
          <div className="pt-4 border-t border-card-border/50 flex items-center text-sm font-semibold text-foreground group-hover:text-primary transition-colors w-max">
            View Project Details
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
