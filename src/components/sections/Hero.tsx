"use client";

import * as React from "react";
import Image from "next/image";
import { personalInfo } from "@/data/personalInfo";
import { Button } from "@/components/Button";
import { FileText, ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-5 md:space-y-6"
        >
          <div className="space-y-2">
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              Welcome to my portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground text-balance">
              Hi, I&apos;m <span className="text-primary">{personalInfo.name}</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-muted">
              {personalInfo.designation}
            </h2>
          </div>
          
          <p className="text-lg text-muted max-w-xl text-balance leading-relaxed">
            {personalInfo.shortIntroduction}
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <a 
              href="#projects"
              className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary h-12 px-8 text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm"
            >
              View Projects
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
          
          <div className="flex items-center space-x-6 pt-5 border-t border-card-border w-max">
            <a 
              href={personalInfo.social.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors flex items-center"
            >
              <GithubIcon className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a 
              href={personalInfo.social.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors flex items-center"
            >
              <LinkedinIcon className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a 
              href={`mailto:${personalInfo.contact.email}`} 
              className="text-muted hover:text-primary transition-colors flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Email</span>
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden lg:flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-[320px] lg:h-[320px]">
            {/* Professional photo */}
            <div className="absolute inset-0 rounded-full border-4 border-primary/20 overflow-hidden bg-muted/10 shadow-xl">
              <Image
                src="/profile.png"
                alt="Abu Saleh MD Araf - Full Stack Developer and CSE Student"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
              />
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
