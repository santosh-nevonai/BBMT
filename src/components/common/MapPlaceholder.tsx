import { MapPin } from "lucide-react";
import { HOSPITAL_ADDRESS_TEXT } from "@/config/site";

/**
 * Map placeholder. We do NOT embed real GPS coordinates or a live map until the
 * hospital confirms its address. Swap this for an embedded map when available.
 */
export function MapPlaceholder({ className }: { className?: string }) {
  return (
    <div
      className={`relative flex min-h-[16rem] items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface-muted ${className ?? ""}`}
      role="img"
      aria-label="Map location to be confirmed"
    >
      {/* subtle grid pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative flex flex-col items-center gap-2 text-center">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <MapPin className="h-6 w-6" aria-hidden />
        </span>
        <p className="text-sm font-medium text-foreground">Location map</p>
        <p className="max-w-xs text-xs text-muted">
          {HOSPITAL_ADDRESS_TEXT} — precise location to be confirmed.
        </p>
      </div>
    </div>
  );
}
