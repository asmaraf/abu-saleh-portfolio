"use client";

import * as React from "react";
import gsap from "gsap";
import { FileText } from "lucide-react";
import { personalInfo } from "@/data/personalInfo";

interface ResumeButtonProps {
  className?: string;
}

export function ResumeButton({ className = "" }: ResumeButtonProps) {
  const buttonRef = React.useRef<HTMLAnchorElement>(null);

  const handleMouseEnter = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        y: -4,
        duration: 0.25,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
  };

  const handleMouseLeave = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        y: 0,
        scale: 1,
        duration: 0.25,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
  };

  const handleMouseDown = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 0.97,
        duration: 0.1,
        ease: "power1.out",
        overwrite: "auto",
      });
    }
  };

  const handleMouseUp = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 1,
        duration: 0.15,
        ease: "power1.out",
        overwrite: "auto",
      });
    }
  };

  return (
    <a
      ref={buttonRef}
      href={personalInfo.resumeUrl}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className={`inline-flex items-center justify-center rounded-md font-medium h-12 px-8 text-lg border-2 border-primary text-primary bg-background/50 hover:bg-primary/10 hover:border-primary shadow-sm hover:shadow-lg hover:shadow-primary/15 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary select-none cursor-pointer ${className}`}
    >
      <FileText className="mr-2 w-5 h-5 shrink-0" />
      <span>Resume</span>
    </a>
  );
}
