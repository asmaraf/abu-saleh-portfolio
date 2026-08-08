import * as React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4 relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-1/2 w-12 h-1 bg-primary -translate-x-1/2 rounded-full"></span>
      </h2>
      {subtitle && <p className="text-muted mt-4 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}
