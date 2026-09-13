"use client";

import * as React from "react";
import Image from "next/image";
import { personalInfo } from "@/data/personalInfo";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { motion } from "framer-motion";
import { ResumeButton } from "@/components/ResumeButton";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const FULL_NAME = "Abu Saleh MD Araf";

function BlinkingCursor() {
  return (
    <motion.span
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 1, 0, 0, 1] }}
      transition={{
        repeat: Infinity,
        duration: 0.8,
        times: [0, 0.49, 0.5, 0.99, 1],
        ease: "linear",
      }}
      className="inline-block font-normal ml-1 text-primary select-none"
      aria-hidden="true"
    >
      |
    </motion.span>
  );
}

export function Hero() {
  const [displayText, setDisplayText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < FULL_NAME.length) {
        timeout = setTimeout(() => {
          setDisplayText(FULL_NAME.slice(0, displayText.length + 1));
        }, 85);
      } else {
        // Pause for 2.5s at full name before deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2500);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(FULL_NAME.slice(0, displayText.length - 1));
        }, 40);
      } else {
        // Pause briefly when empty before retyping
        timeout = setTimeout(() => {
          setIsDeleting(false);
        }, 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);

  return (
    <section id="home" className="relative w-full pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-24 px-5 md:px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-hero-glow -z-10 pointer-events-none"></div>
      
      <div className="container mx-auto max-w-5xl flex flex-col lg:grid lg:grid-cols-2 lg:items-center gap-8 lg:gap-12 relative z-10">
        {/* LEFT COLUMN: Text and Actions */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col w-full order-2 lg:order-1"
        >
          {/* Welcome & Titles */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <span className="text-primary font-medium tracking-wider uppercase text-sm mb-2 md:mb-3">
              Welcome to my portfolio
            </span>
            <h1 className="font-heading font-bold tracking-tight mb-2 md:mb-3">
              <span className="sr-only">Hi, I&apos;m {FULL_NAME}</span>
              <span aria-hidden="true" className="block text-2xl sm:text-3xl md:text-4xl text-foreground mb-1 md:mb-2">
                Hi, I&apos;m
              </span>
              <span aria-hidden="true" className="block min-h-[1.15em] text-[clamp(1.85rem,4.8vw,3.35rem)] leading-[1.15] text-primary whitespace-nowrap">
                <span>{displayText}</span>
                <BlinkingCursor />
              </span>
            </h1>
            <h2 className="font-heading text-xl md:text-2xl font-medium text-muted">
              {personalInfo.designation}
            </h2>
          </motion.div>
          
          {/* Description */}
          <motion.p variants={itemVariants} className="mt-5 md:mt-6 text-lg text-muted max-w-xl leading-relaxed">
            {personalInfo.shortIntroduction}
          </motion.p>
          
          {/* Buttons */}
          <motion.div variants={itemVariants} className="mt-6 md:mt-7 flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects"
              className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary h-12 px-8 text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm"
            >
              View Projects
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <ResumeButton />
          </motion.div>
          
          {/* Social Links */}
          <motion.div variants={itemVariants} className="mt-5 md:mt-6 pt-5 md:pt-6 flex flex-wrap items-center gap-6 border-t border-card-border w-full max-w-max">
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
          </motion.div>
        </motion.div>
        
        {/* RIGHT COLUMN: Profile Photo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center lg:justify-end w-full order-1 lg:order-2"
        >
          <div className="relative w-[280px] h-[280px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] mx-auto lg:mx-0 group">
            {/* Soft glow ring behind profile */}
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl group-hover:bg-primary/30 transition-all duration-500"></div>
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
