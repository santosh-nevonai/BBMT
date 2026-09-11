import Image from "next/image";
import { Phone, ArrowRight, ShieldPlus } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { IMAGES } from "@/config/images";
import { EMERGENCY_PHONE, telHref } from "@/config/site";

const CAPABILITIES = [
  "24/7 emergency response",
  "Trauma support",
  "Resuscitation",
  "Advanced intensive care management (ICU / HDU)",
  "Ambulance & patient transport",
];

export function EmergencyHighlight() {
  return (
    <section className="section bg-surface-muted">
      <Container size="wide">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[1.75rem] border border-border shadow-lift">
              <Image
                src={IMAGES.emergency.src}
                alt={IMAGES.emergency.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <Badge variant="emergency" className="bg-white/95 shadow-soft">
                  <ShieldPlus className="h-3.5 w-3.5" aria-hidden />
                  Ready around the clock
                </Badge>
              </div>
            </div>
          </Reveal>

          <div className="order-1 flex flex-col gap-6 lg:order-2">
            <Reveal>
              <span className="eyebrow">
                <span aria-hidden className="h-px w-6 bg-emergency" />
                Emergency & Critical Care
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-3xl leading-[1.12] sm:text-4xl">
                Immediate care when every second counts
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-prose leading-relaxed text-muted">
                Our Critical Care &amp; Emergency Medicine team provides
                round-the-clock emergency response, resuscitation and advanced
                intensive care management, backed by ambulance and patient
                transport support.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {CAPABILITIES.map((c) => (
                  <li key={c} className="flex items-center gap-2.5 text-sm text-foreground/85">
                    <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-emergency" />
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.2} className="flex flex-col gap-3 pt-1 sm:flex-row">
              <Button href={telHref(EMERGENCY_PHONE)} external variant="emergency">
                <Phone className="h-4 w-4" />
                Call Emergency
              </Button>
              <Button href="/emergency" variant="outline">
                Emergency information
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
