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
  const isManualScroll = React.useRef(false);
  const manualTimeout = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    const visibleEntries = new Map<string, IntersectionObserverEntry>();

    const observer = new IntersectionObserver(
      (entries) => {
        if (isManualScroll.current) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleEntries.set(entry.target.id, entry);
          } else {
            visibleEntries.delete(entry.target.id);
          }
        });

        if (visibleEntries.size === 0) return;

        // Choose the visible section closest to the top / with highest presence
        let chosenId = "";
        let maxRatio = -1;

        visibleEntries.forEach((entry, id) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            chosenId = id;
          }
        });

        if (chosenId) {
          setActiveSection(chosenId);
        }
      },
      {
        rootMargin: "-15% 0px -45% 0px",
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1.0],
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
      if (manualTimeout.current) clearTimeout(manualTimeout.current);
    };
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    setActiveSection(id);
    isManualScroll.current = true;

    if (manualTimeout.current) {
      clearTimeout(manualTimeout.current);
    }
    manualTimeout.current = setTimeout(() => {
      isManualScroll.current = false;
    }, 900);

    // If on homepage, smooth scroll directly without route reload/flicker
    if (window.location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        e.preventDefault();
        window.history.pushState(null, "", `#${id}`);
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

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
                onClick={(e) => handleNavClick(e, link.id)}
                className={`relative flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive
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
                onClick={(e) => {
                  setIsOpen(false);
                  handleNavClick(e, link.id);
                }}
                className={`relative flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${isActive
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
