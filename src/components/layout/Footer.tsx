import Link from "next/link";
import { MapPin, Phone, Mail, Siren } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Logo } from "./Logo";
import { FOOTER_NAV } from "@/config/navigation";
import {
  HOSPITAL_NAME,
  HOSPITAL_ADDRESS_TEXT,
  HOSPITAL_PHONE,
  HOSPITAL_EMAIL,
  EMERGENCY_PHONE,
  telHref,
  mailHref,
} from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-primary-dark text-white/80">
      <Container size="wide" className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          {/* Brand + contact */}
          <div className="flex flex-col gap-6">
            <Logo variant="onDark" />
            <p className="max-w-xs text-sm leading-relaxed text-white/70">
              A premier multi-specialty healthcare institution delivering
              accessible, high-quality, compassionate care.
            </p>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden />
                <span className="text-white/70">{HOSPITAL_ADDRESS_TEXT}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-secondary" aria-hidden />
                <a
                  href={telHref(HOSPITAL_PHONE)}
                  className="text-white/70 transition-colors hover:text-white"
                >
                  {HOSPITAL_PHONE}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-secondary" aria-hidden />
                <a
                  href={mailHref(HOSPITAL_EMAIL)}
                  className="text-white/70 transition-colors hover:text-white"
                >
                  {HOSPITAL_EMAIL}
                </a>
              </li>
            </ul>
          </div>

          {/* Link columns */}
          {FOOTER_NAV.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                {group.title}
              </h2>
              <ul className="flex flex-col gap-2.5 text-sm">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/65 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Emergency line */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emergency/20 text-emergency">
              <Siren className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">
                24/7 Emergency & Trauma Support
              </p>
              <p className="text-xs text-white/60">
                Round-the-clock critical care, ready when every second matters.
              </p>
            </div>
          </div>
          <a
            href={telHref(EMERGENCY_PHONE)}
            className="inline-flex items-center gap-2 rounded-full bg-emergency px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-emergency-dark"
          >
            <Phone className="h-4 w-4" />
            Call Emergency
          </a>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container
          size="wide"
          className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/55 sm:flex-row"
        >
          <p>
            © {year} {HOSPITAL_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms &amp; Conditions
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
