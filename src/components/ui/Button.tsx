import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "emergency"
  | "white";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60 active:translate-y-px";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground shadow-soft hover:bg-primary-dark hover:shadow-lift focus-visible:ring-primary",
  secondary:
    "bg-secondary text-primary-dark shadow-soft hover:bg-secondary-dark hover:text-white hover:shadow-lift focus-visible:ring-primary",
  outline:
    "border border-border bg-surface text-foreground hover:border-primary/40 hover:bg-surface-muted focus-visible:ring-primary",
  ghost:
    "text-foreground hover:bg-surface-muted focus-visible:ring-primary",
  emergency:
    "bg-emergency text-white shadow-soft hover:bg-emergency-dark hover:shadow-lift focus-visible:ring-emergency",
  white:
    "bg-white text-primary shadow-soft hover:bg-white/90 focus-visible:ring-white",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm sm:text-[0.95rem]",
  lg: "h-[3.25rem] px-7 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  /** Render as a Next.js link when provided. */
  href?: string;
  /** For external links. */
  external?: boolean;
};

type ButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  external,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
