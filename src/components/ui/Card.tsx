import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** Adds hover elevation + border transition for interactive cards. */
  interactive?: boolean;
};

export function Card({
  children,
  className,
  as: Tag = "div",
  interactive = false,
}: CardProps) {
  return (
    <Tag
      className={cn(
        "rounded-2xl border border-border bg-surface shadow-soft",
        interactive &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-card",
        className
      )}
    >
      {children}
    </Tag>
  );
}
