import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", asChild = false, ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 cursor-pointer active:scale-[0.98]";
    
    const variants = {
      primary: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-md hover:shadow-primary/20 shadow-sm",
      secondary: "bg-card border border-card-border hover:bg-muted/10 hover:border-primary/30 hover:shadow-sm text-foreground",
      outline: "border-2 border-primary text-primary hover:bg-primary/10 hover:shadow-sm",
      ghost: "hover:bg-muted/10 text-foreground hover:text-primary",
    };

    const sizes = {
      sm: "h-8 px-3 text-sm",
      md: "h-10 px-4 py-2",
      lg: "h-12 px-8 text-lg",
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    // If asChild is needed later (e.g. for wrapping next/link), we can use @radix-ui/react-slot. 
    // For now, keeping it simple as a native button element.
    
    return (
      <button ref={ref} className={classes} {...props} />
    );
  }
);

Button.displayName = "Button";
