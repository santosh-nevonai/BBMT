import { Phone, Siren } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { Button } from "@/components/ui/Button";
import { EMERGENCY_PHONE, telHref } from "@/config/site";

type EmergencyCTAProps = {
  title?: string;
  description?: string;
};

/**
 * Reusable emergency banner. Strong visual hierarchy without an aggressive,
 * red-heavy treatment - a confident navy field with a single emergency accent.
 */
export function EmergencyCTA({
  title = "24/7 Emergency & Trauma Support",
  description = "When every second matters, our emergency and critical care teams are ready around the clock.",
}: EmergencyCTAProps) {
  return (
    <section className="section-tight">
      <Container size="wide">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-12 text-white shadow-lift sm:px-12 sm:py-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-emergency/20 blur-3xl"
            />
            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="flex items-start gap-5">
                <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emergency/20 text-white sm:inline-flex">
                  <Siren className="h-7 w-7" aria-hidden />
                </span>
                <div>
                  <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                    {title}
                  </h2>
                  <p className="mt-2 max-w-xl text-white/75">{description}</p>
                </div>
              </div>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Button
                  href={telHref(EMERGENCY_PHONE)}
                  external
                  variant="emergency"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <Phone className="h-4 w-4" />
                  Emergency Assistance
                </Button>
                <Button
                  href="/contact"
                  variant="white"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Contact Hospital
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
