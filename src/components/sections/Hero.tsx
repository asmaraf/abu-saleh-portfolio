"use client";

import * as React from "react";
import Image from "next/image";
import { personalInfo } from "@/data/personalInfo";
import { ArrowRight, Mail, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="w-full pt-8 md:pt-12 lg:pt-20 pb-12 md:pb-20 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl flex flex-col lg:grid lg:grid-cols-2 lg:items-center gap-8 lg:gap-12">
        
        {/* LEFT COLUMN: Text and Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col w-full order-2 lg:order-1"
        >
          {/* Welcome & Titles */}
          <div className="flex flex-col">
            <span className="text-primary font-medium tracking-wider uppercase text-sm mb-2 md:mb-3">
              Welcome to my portfolio
            </span>
            <h1 className="text-[2.5rem] leading-[1.1] md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground mb-2 md:mb-3 text-balance">
              Hi, I&apos;m <span className="text-primary inline-block">Abu Saleh</span> <span className="text-primary inline-block">MD Araf</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-muted">
              {personalInfo.designation}
            </h2>
          </div>
          
          {/* Description */}
          <p className="mt-5 md:mt-6 text-lg text-muted max-w-xl leading-relaxed">
            {personalInfo.shortIntroduction}
          </p>
          
          {/* Buttons */}
          <div className="mt-6 md:mt-7 flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects"
              className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary h-12 px-8 text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm"
            >
              View Projects
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <button
              onClick={() => alert("Resume will be available soon.")}
              className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary h-12 px-8 text-lg border-2 border-primary text-primary hover:bg-primary/10 shadow-sm"
            >
              <FileText className="mr-2 w-4 h-4" />
              Resume
            </button>
          </div>
          
          {/* Social Links */}
          <div className="mt-5 md:mt-6 pt-5 md:pt-6 flex flex-wrap items-center gap-6 border-t border-card-border w-full max-w-max">
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
        
        {/* RIGHT COLUMN: Profile Photo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center lg:justify-end w-full order-1 lg:order-2"
        >
          <div className="relative w-[280px] h-[280px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] mx-auto lg:mx-0">
            <div className="absolute inset-0 rounded-full border-4 border-primary/20 overflow-hidden bg-muted/10 shadow-xl">
              <Image
                src="/profile.png"
                alt="Abu Saleh MD Araf - Full Stack Developer and CSE Student"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 280px, (max-width: 1024px) 300px, 400px"
              />
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
