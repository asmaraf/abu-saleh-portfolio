import * as React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Calendar, Tag } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { projectsData } from "@/data/projects";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";

// Generate static params for all projects
export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="flex-1 pt-24 pb-20">
        <article className="container mx-auto px-5 md:px-6 max-w-4xl">
          {/* Back Button */}
          <Link 
            href="/#projects" 
            className="inline-flex items-center text-sm font-medium text-muted hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                <Tag className="w-3 h-3 mr-1.5" />
                {project.category}
              </span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              {project.name}
            </h1>
            <p className="text-xl text-muted text-balance">
              {project.shortDescription}
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-card-border">
              {project.clientGithubUrl && (
                <a 
                  href={project.clientGithubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary h-10 px-4 py-2 bg-card border border-card-border hover:bg-muted/10 hover:border-primary/30 text-foreground shadow-sm"
                >
                  <GithubIcon className="w-4 h-4 mr-2" />
                  Client Code
                </a>
              )}
              {project.liveUrl && (
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              )}
              {project.serverApiUrl && (
                <a 
                  href={project.serverApiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary h-10 px-4 py-2 bg-card border border-card-border hover:bg-muted/10 hover:border-primary/30 text-foreground shadow-sm"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Server API
                </a>
              )}
            </div>
          </header>

          {/* Hero Image */}
          <div className="relative aspect-video w-full overflow-hidden bg-muted/20 rounded-2xl mb-12 border border-card-border shadow-sm">
            {project.image ? (
              <Image
                src={project.image}
                alt={`Detailed view of ${project.name} project`}
                fill
                sizes="(max-width: 1200px) 100vw, 896px"
                className="object-cover"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-muted">
                No image available
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-12">
              {project.purpose && (
                <section>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Project Purpose</h2>
                  <div className="prose prose-neutral dark:prose-invert max-w-none text-muted">
                    <p>{project.purpose}</p>
                  </div>
                </section>
              )}

              {project.overview && (
                <section>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Project Overview</h2>
                  <div className="prose prose-neutral dark:prose-invert max-w-none text-muted">
                    <p>{project.overview}</p>
                  </div>
                </section>
              )}

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Full Description</h2>
                <div className="prose prose-neutral dark:prose-invert max-w-none text-muted whitespace-pre-line">
                  <p>{project.fullDescription}</p>
                </div>
              </section>

              {project.features && project.features.length > 0 && (
                <section>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Key Features</h2>
                  <ul className="list-disc list-inside space-y-2 text-muted ml-2">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </section>
              )}

              {project.challenges && project.challenges.length > 0 && (
                <section>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Challenges & Solutions</h2>
                  <ul className="list-disc list-inside space-y-2 text-muted ml-2">
                    {project.challenges.map((challenge, i) => (
                      <li key={i}>{challenge}</li>
                    ))}
                  </ul>
                </section>
              )}

              {project.futureImprovements && project.futureImprovements.length > 0 && (
                <section>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Future Improvements</h2>
                  <ul className="list-disc list-inside space-y-2 text-muted ml-2">
                    {project.futureImprovements.map((improvement, i) => (
                      <li key={i}>{improvement}</li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-card border border-card-border rounded-xl p-6 shadow-sm">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-4 border-b border-card-border pb-2">Technologies Used</h3>
                  
                  {(project.frontendTechnologies || project.backendTechnologies || project.libraries) ? (
                    <div className="space-y-6">
                      {project.frontendTechnologies && project.frontendTechnologies.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-muted mb-3 uppercase tracking-wider">Frontend</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.frontendTechnologies.map((tech) => (
                              <span key={tech} className="text-sm font-medium bg-muted/10 text-foreground px-3 py-1.5 rounded-lg border border-card-border">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      {project.backendTechnologies && project.backendTechnologies.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-muted mb-3 uppercase tracking-wider">Backend</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.backendTechnologies.map((tech) => (
                              <span key={tech} className="text-sm font-medium bg-muted/10 text-foreground px-3 py-1.5 rounded-lg border border-card-border">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      {project.libraries && project.libraries.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-muted mb-3 uppercase tracking-wider">Libraries</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.libraries.map((tech) => (
                              <span key={tech} className="text-sm font-medium bg-muted/10 text-foreground px-3 py-1.5 rounded-lg border border-card-border">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      {project.deployment && project.deployment.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-muted mb-3 uppercase tracking-wider">Deployment</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.deployment.map((tech) => (
                              <span key={tech} className="text-sm font-medium bg-muted/10 text-foreground px-3 py-1.5 rounded-lg border border-card-border">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="text-sm font-medium bg-muted/10 text-foreground px-3 py-1.5 rounded-lg border border-card-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
