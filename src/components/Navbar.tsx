"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Home, User, Code, Briefcase, Mail } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "/#home", icon: Home },
  { name: "About", href: "/#about", icon: User },
  { name: "Skills", href: "/#skills", icon: Code },
  { name: "Projects", href: "/#projects", icon: Briefcase },
  { name: "Contact", href: "/#contact", icon: Mail },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-6 left-0 w-full z-50 px-4 md:px-6 pointer-events-none">
      <div className="container mx-auto max-w-5xl relative flex items-center justify-between pointer-events-auto h-12">
        
        {/* Center: Desktop Navigation */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center p-1.5 rounded-full bg-card/80 backdrop-blur-lg border border-card-border shadow-lg">
          {navLinks.map((link) => {
            const Icon = link.icon;
            
            return (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center px-4 py-2 rounded-full text-sm font-medium text-muted hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Icon className="w-4 h-4 mr-2" />
                {link.name}
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
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center px-4 py-3 rounded-xl text-base font-medium text-muted hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Icon className="w-5 h-5 mr-3" />
                {link.name}
              </Link>
            )
          })}
        </div>
      )}
    </nav>
  );
}
