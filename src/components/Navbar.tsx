"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Home, User, Code, Briefcase, Mail } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "/#home", id: "home", icon: Home },
  { name: "About", href: "/#about", id: "about", icon: User },
  { name: "Skills", href: "/#skills", id: "skills", icon: Code },
  { name: "Projects", href: "/#projects", id: "projects", icon: Briefcase },
  { name: "Contact", href: "/#contact", id: "contact", icon: Mail },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home");

  React.useEffect(() => {
    const visibleSections = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.add(entry.target.id);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        // Determine the top-most visible section in DOM/navLinks order
        const currentActive = navLinks.find((link) =>
          visibleSections.has(link.id)
        );

        if (currentActive) {
          setActiveSection(currentActive.id);
        }
      },
      {
        rootMargin: "-20% 0px -35% 0px",
        threshold: 0,
      }
    );

    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav className="fixed top-6 left-0 w-full z-50 px-4 md:px-6 pointer-events-none">
      <div className="container mx-auto max-w-5xl relative flex items-center justify-between pointer-events-auto h-12">
        
        {/* Center: Desktop Navigation */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center p-1.5 rounded-full bg-card/80 backdrop-blur-lg border border-card-border shadow-lg">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(link.id)}
                className={`relative flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-[#2dd4bf]"
                    : "text-muted hover:text-[#2dd4bf]"
                }`}
                style={isActive ? { color: "#2dd4bf" } : undefined}
              >
                <Icon className="w-4 h-4 mr-2" />
                {link.name}
                {isActive && (
                  <span 
                    className="absolute bottom-1 left-4 right-4 h-0.5 rounded-full" 
                    style={{ backgroundColor: "#2dd4bf" }} 
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right: Theme Toggle & Mobile Menu */}
        <div className="ml-auto flex items-center gap-2">
          {/* Theme Toggle Pill */}
          <div className="w-11 h-11 flex items-center justify-center rounded-full bg-card/80 backdrop-blur-lg border border-card-border shadow-lg overflow-hidden">
            <ThemeToggle />
          </div>

          {/* Mobile Nav Toggle */}
          <div className="lg:hidden w-11 h-11 flex items-center justify-center rounded-full bg-card/80 backdrop-blur-lg border border-card-border shadow-lg">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground focus:outline-none flex items-center justify-center w-full h-full rounded-full hover:bg-muted/10 hover:text-primary transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-4 right-4 mt-4 bg-card/95 backdrop-blur-xl border border-card-border shadow-2xl rounded-3xl py-4 px-4 flex flex-col space-y-2 pointer-events-auto">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => {
                  setIsOpen(false);
                  setActiveSection(link.id);
                }}
                className={`relative flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                  isActive
                    ? "text-[#2dd4bf] bg-[#2dd4bf]/10"
                    : "text-muted hover:text-foreground"
                }`}
                style={isActive ? { color: "#2dd4bf" } : undefined}
              >
                <Icon className="w-5 h-5 mr-3" />
                {link.name}
                {isActive && (
                  <span 
                    className="absolute bottom-1.5 left-4 right-4 h-0.5 rounded-full" 
                    style={{ backgroundColor: "#2dd4bf" }} 
                  />
                )}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
