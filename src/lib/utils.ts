/** Tiny className combiner (no extra dependency). */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Build initials from a full name, e.g. "Dr. Raj Kumar" → "RK". */
export function getInitials(name: string): string {
  return name
    .replace(/^Dr\.?\s+/i, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}
