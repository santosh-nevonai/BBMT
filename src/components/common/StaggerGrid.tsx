"use client";

import { Children, type ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

/**
 * Client-side staggered reveal for a list of already-rendered children.
 *
 * Cards are rendered on the server (so Lucide icon components never cross the
 * server→client prop boundary); this wrapper only adds the entrance animation
 * around each child element.
 */
export function StaggerGrid({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.ul
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={className}
    >
      {Children.map(children, (child, i) => (
        <motion.li key={i} variants={fadeUp} className="h-full">
          {child}
        </motion.li>
      ))}
    </motion.ul>
  );
}
