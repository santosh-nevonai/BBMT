import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  /** Semantic heading level (defaults to h2). */
  as?: "h1" | "h2" | "h3";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: Heading = "h2",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        align === "center" && "mx-auto max-w-2xl",
        className
      )}
    >
      {eyebrow ? (
        <span className="eyebrow">
          <span
            aria-hidden
            className="h-px w-6 bg-secondary"
          />
          {eyebrow}
        </span>
      ) : null}
      <Heading className="text-3xl leading-[1.1] sm:text-4xl lg:text-[2.75rem]">
        {title}
      </Heading>
      {description ? (
        <p className="prose-lead max-w-2xl">{description}</p>
      ) : null}
    </Reveal>
  );
}
