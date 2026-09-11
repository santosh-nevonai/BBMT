import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  className?: string;
  variant?: "default" | "secondary" | "emergency" | "outline";
};

const variants = {
  default: "bg-primary/10 text-primary",
  secondary: "bg-secondary/12 text-secondary-dark",
  emergency: "bg-emergency/12 text-emergency-dark",
  outline: "border border-border bg-surface text-muted",
} as const;

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
