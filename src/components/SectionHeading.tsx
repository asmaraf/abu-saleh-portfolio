"use client";

import * as React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-12 text-center"
    >
      <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4 relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-1/2 w-12 h-1 bg-primary -translate-x-1/2 rounded-full"></span>
      </h2>
      {subtitle && <p className="text-muted mt-4 max-w-2xl mx-auto">{subtitle}</p>}
    </motion.div>
  );
}
