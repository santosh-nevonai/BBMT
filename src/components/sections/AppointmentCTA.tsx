import Image from "next/image";
import { CalendarPlus, Clock, PhoneCall } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { Button } from "@/components/ui/Button";
import { IMAGES } from "@/config/images";
import { HOSPITAL_PHONE, telHref } from "@/config/site";

export function AppointmentCTA() {
  return (
    <section className="section bg-background">
      <Container size="wide">
        <Reveal>
          <div className="grid overflow-hidden rounded-3xl border border-border bg-surface shadow-card lg:grid-cols-2">
            <div className="relative min-h-[16rem] lg:min-h-full">
              <Image
                src={IMAGES.appointment.src}
                alt={IMAGES.appointment.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-6 p-8 sm:p-12">
              <span className="eyebrow">
                <span aria-hidden className="h-px w-6 bg-secondary" />
                Appointments
              </span>
              <h2 className="text-3xl leading-[1.12] sm:text-4xl">
                Book a consultation with our specialists
              </h2>
              <p className="max-w-prose leading-relaxed text-muted">
                Request an appointment in a few simple steps. Choose a
                department and preferred time, and our team will help coordinate
                your visit.
              </p>
              <ul className="flex flex-col gap-3 text-sm text-foreground/85">
                <li className="flex items-center gap-3">
                  <PhoneCall className="h-4 w-4 text-secondary" aria-hidden />
                  <a
                    href={telHref(HOSPITAL_PHONE)}
                    className="link-underline"
                  >
                    Call us at {HOSPITAL_PHONE}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-secondary" aria-hidden />
                  Emergency care available 24 / 7
                </li>
              </ul>
              <div className="flex flex-col gap-3 pt-1 sm:flex-row">
                <Button href="/appointment" size="lg">
                  <CalendarPlus className="h-4 w-4" />
                  Book an Appointment
                </Button>
                <Button href="/departments" variant="outline" size="lg">
                  Browse Departments
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
