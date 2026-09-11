import Link from "next/link";
import { cn } from "@/lib/utils";
import { HOSPITAL_NAME } from "@/config/site";

/**
 * Brand mark: an elegant monogram combining a medical cross with a caring
 * hand/pulse motif. Uses theme colors only.
 */
export function Logo({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "onDark";
}) {
  const onDark = variant === "onDark";
  return (
    <Link
      href="/"
      aria-label={`${HOSPITAL_NAME} — home`}
      className={cn("group flex items-center gap-3", className)}
    >
      <span className="relative inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-soft transition-transform duration-300 group-hover:scale-[1.04]">
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          aria-hidden
        >
          {/* medical cross */}
          <path
            d="M12 4.5v15M4.5 12h15"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            className="opacity-90"
          />
          {/* pulse accent */}
          <path
            d="M3 15.5h3l1.6-3.2L10 18l2.2-9 2 6 1.3-2.3H21"
            stroke="hsl(var(--secondary))"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-0"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={cn(
            "font-display text-[0.95rem] font-bold tracking-tight sm:text-base",
            onDark ? "text-white" : "text-foreground"
          )}
        >
          Baba Baidyanath
        </span>
        <span
          className={cn(
            "text-[0.7rem] font-semibold uppercase tracking-[0.18em]",
            onDark ? "text-white/70" : "text-secondary-dark"
          )}
        >
          Medical Trust
        </span>
      </span>
    </Link>
  );
}
