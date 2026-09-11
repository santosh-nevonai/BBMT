"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, viewportOnce } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Delay in seconds, useful for simple sequencing. */
  delay?: number;
  as?: "div" | "section" | "li" | "article";
};

/**
 * Subtle fade-up on scroll. framer-motion automatically honours
 * `prefers-reduced-motion` (it reduces transforms), and the animation is short
 * and runs once.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
