import type { Metadata } from "next";
import {
  Phone,
  Siren,
  HeartPulse,
  Activity,
  Stethoscope,
  Ambulance,
  ShieldPlus,
  Clock,
} from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";
import { EMERGENCY_PHONE, telHref } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: "24/7 Emergency & Trauma Care",
  description:
    "Round-the-clock emergency and trauma care at Baba Baidyanath Medical Trust — resuscitation, critical care, ICU/HDU and ambulance & patient transport support.",
  path: "/emergency",
});

const capabilities = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Emergency and trauma teams ready around the clock, every day.",
  },
  {
    icon: ShieldPlus,
    title: "Trauma Support",
    description: "Rapid assessment and stabilisation for traumatic injuries.",
  },
  {
    icon: HeartPulse,
    title: "Critical Care",
    description: "Advanced intensive care management for critically ill patients.",
  },
  {
    icon: Activity,
    title: "Resuscitation",
    description: "Immediate life-saving resuscitation by trained specialists.",
  },
  {
    icon: Stethoscope,
    title: "ICU / HDU",
    description: "Intensive care and high-dependency units for close monitoring.",
  },
  {
    icon: Ambulance,
    title: "Ambulance & Transport",
    description: "Ambulance and patient transportation support when you need it.",
  },
];

export default function EmergencyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Emergency & Trauma"
        title="24/7 Emergency & Trauma Care"
        description="Our emergency and critical care teams are ready around the clock — with resuscitation, advanced intensive care and ambulance support when every second matters."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Emergency" }]}
        actions={
          <Button
            href={telHref(EMERGENCY_PHONE)}
            external
            variant="emergency"
            size="lg"
          >
            <Phone className="h-5 w-5" />
            Call Emergency
          </Button>
        }
      />

      {/* Prominent emergency call band */}
      <section className="bg-primary py-12 text-white sm:py-14">
        <Container size="wide">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-emergency/25 blur-3xl"
            />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div className="flex items-start gap-4">
                <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emergency/25 text-white sm:inline-flex">
                  <Siren className="h-7 w-7" aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-medium uppercase tracking-wide text-white/60">
                    Need emergency care?
                  </p>
                  <h2 className="mt-1 text-2xl font-semibold text-white sm:text-3xl">
                    Call our emergency helpline
                  </h2>
                  <p className="mt-2 max-w-lg text-sm text-white/70">
                    Emergency number to be confirmed — update{" "}
                    <code className="rounded bg-white/10 px-1.5 py-0.5 text-white/90">
                      EMERGENCY_PHONE
                    </code>{" "}
                    in configuration.
                  </p>
                </div>
              </div>
              <a
                href={telHref(EMERGENCY_PHONE)}
                className="flex items-center justify-center gap-3 rounded-2xl bg-emergency px-6 py-4 text-lg font-semibold text-white shadow-lift transition-colors hover:bg-emergency-dark"
              >
                <Phone className="h-6 w-6" aria-hidden />
                <span className="tabular-nums">{EMERGENCY_PHONE}</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="section bg-background">
        <Container size="wide">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal as="li" key={c.title} delay={(i % 3) * 0.05}>
                  <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-surface p-7 shadow-soft">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emergency/10 text-emergency-dark">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <h2 className="text-lg font-semibold">{c.title}</h2>
                    <p className="text-sm leading-relaxed text-muted">
                      {c.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* Guidance strip */}
      <section className="section-tight bg-surface-muted">
        <Container size="narrow">
          <Reveal className="rounded-2xl border border-border bg-surface p-8 text-center">
            <h2 className="text-xl font-semibold">In a medical emergency</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted">
              Call the emergency helpline immediately and, if safe to do so,
              bring the patient to our 24/7 Emergency &amp; Trauma Unit. Our team
              will be ready to provide immediate assessment and care.
            </p>
            <div className="mt-6 flex justify-center">
              <Button href={telHref(EMERGENCY_PHONE)} external variant="emergency">
                <Phone className="h-4 w-4" />
                Call Emergency Now
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
