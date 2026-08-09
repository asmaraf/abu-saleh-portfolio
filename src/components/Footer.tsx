import * as React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon, FacebookIcon } from "@/components/Icons";
import { personalInfo } from "@/data/personalInfo";



export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-card-border bg-card">
      <div className="container mx-auto px-5 py-8 md:px-6">
        <div className="flex flex-col mb-8">
          <div>
            <Link href="/" className="text-xl font-bold tracking-tighter text-foreground mb-2 inline-block">
              {personalInfo.shortName}
              <span className="text-primary">.</span>
            </Link>
            <p className="text-muted mb-6">
              {personalInfo.designation}
            </p>
            <div className="flex space-x-4">
              <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors" aria-label="GitHub">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors" aria-label="LinkedIn">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href={personalInfo.social.twitter} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors" aria-label="Twitter">
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a href={personalInfo.social.facebook} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors" aria-label="Facebook">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href={`mailto:${personalInfo.contact.email}`} className="text-muted hover:text-primary transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-card-border flex justify-center">
          <p className="text-sm text-muted text-center">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
