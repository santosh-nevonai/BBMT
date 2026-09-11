import { Phone, Ambulance } from "lucide-react";
import { EMERGENCY_PHONE, telHref } from "@/config/site";

/**
 * Slim announcement / emergency strip. Rendered at the very top of the home
 * hero so it reads as a site-wide notice without introducing a variable-height
 * fixed bar above the header.
 */
export function AnnouncementBar() {
  return (
    <div className="border-b border-white/10 bg-primary-dark text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-1.5 px-5 py-2 text-center text-xs sm:flex-row sm:px-6 sm:text-left lg:px-8">
        <p className="flex items-center gap-2 text-white/85">
          <Ambulance className="h-4 w-4 text-secondary" aria-hidden />
          24/7 Emergency, Trauma &amp; Ambulance Support
        </p>
        <a
          href={telHref(EMERGENCY_PHONE)}
          className="flex items-center gap-1.5 font-medium text-white transition-colors hover:text-secondary"
        >
          <Phone className="h-3.5 w-3.5" aria-hidden />
          Emergency Helpline
          <span className="text-white/60">·</span>
          <span className="tabular-nums">{EMERGENCY_PHONE}</span>
        </a>
      </div>
    </div>
  );
}
