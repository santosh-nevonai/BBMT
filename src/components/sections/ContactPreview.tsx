import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { Button } from "@/components/ui/Button";
import { MapPlaceholder } from "@/components/common/MapPlaceholder";
import {
  HOSPITAL_ADDRESS_TEXT,
  HOSPITAL_PHONE,
  HOSPITAL_EMAIL,
  telHref,
  mailHref,
} from "@/config/site";

const items = [
  {
    icon: MapPin,
    label: "Address",
    value: HOSPITAL_ADDRESS_TEXT,
    href: undefined as string | undefined,
  },
  { icon: Phone, label: "Phone", value: HOSPITAL_PHONE, href: telHref(HOSPITAL_PHONE) },
  { icon: Mail, label: "Email", value: HOSPITAL_EMAIL, href: mailHref(HOSPITAL_EMAIL) },
  { icon: Clock, label: "Emergency", value: "Open 24 / 7", href: undefined },
];

export function ContactPreview() {
  return (
    <section className="section bg-surface-muted">
      <Container size="wide">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-8">
            <SectionHeading
              eyebrow="Get in touch"
              title="Here to help, whenever you need us"
              description="Reach out for appointments, general enquiries or directions. For medical emergencies, please call our emergency helpline directly."
            />
            <ul className="grid gap-4 sm:grid-cols-2">
              {items.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal as="li" key={item.label} delay={i * 0.04}>
                    <div className="flex h-full items-start gap-3 rounded-2xl border border-border bg-surface p-4">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/8 text-primary">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="break-words text-sm font-medium text-foreground transition-colors hover:text-primary"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="break-words text-sm font-medium text-foreground">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </ul>
            <Reveal delay={0.1}>
              <Button href="/contact" variant="outline" className="w-fit">
                Full contact details
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <MapPlaceholder className="h-full min-h-[20rem]" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
