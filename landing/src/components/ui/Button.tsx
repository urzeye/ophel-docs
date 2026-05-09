import React from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "glow";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-white text-[#000] font-semibold tracking-tight hover:bg-zinc-200": variant === "primary",
            "bg-surface border border-surface-border text-white hover:bg-surface-hover hover:border-white/20": variant === "secondary",
            "hover:bg-white/10 text-zinc-300 hover:text-white": variant === "ghost",
            "relative bg-black text-white border border-neon-cyan/50 hover:border-neon-cyan hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]": variant === "glow",
          },
          {
            "h-8 px-4 text-xs": size === "sm",
            "h-10 px-6 text-sm": size === "md",
            "h-12 px-8 text-base": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
