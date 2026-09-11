import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, Siren } from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { Card } from "@/components/ui/Card";
import { ContactForm } from "@/components/contact/ContactForm";
import { MapPlaceholder } from "@/components/common/MapPlaceholder";
import { buildMetadata } from "@/lib/seo";
import {
  HOSPITAL_ADDRESS_TEXT,
  HOSPITAL_PHONE,
  HOSPITAL_EMAIL,
  EMERGENCY_PHONE,
  WORKING_HOURS,
  telHref,
  mailHref,
} from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch with Baba Baidyanath Medical Trust for appointments, enquiries and directions. For medical emergencies, call our 24/7 emergency helpline.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        description="We're here to help with appointments, general enquiries and directions. For medical emergencies, please call our emergency helpline directly."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="section bg-background">
        <Container size="wide">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
            {/* Info column */}
            <div className="flex flex-col gap-6">
              <Reveal>
                <Card className="flex items-start gap-4 p-5">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/8 text-primary">
                    <MapPin className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
                      Address
                    </h2>
                    <p className="mt-1 text-foreground">{HOSPITAL_ADDRESS_TEXT}</p>
                  </div>
                </Card>
              </Reveal>

              <div className="grid gap-6 sm:grid-cols-2">
                <Reveal delay={0.05}>
                  <Card className="flex h-full items-start gap-4 p-5">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/8 text-primary">
                      <Phone className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
                        Phone
                      </h2>
                      <a
                        href={telHref(HOSPITAL_PHONE)}
                        className="mt-1 block break-words text-foreground transition-colors hover:text-primary"
                      >
                        {HOSPITAL_PHONE}
                      </a>
                    </div>
                  </Card>
                </Reveal>
                <Reveal delay={0.1}>
                  <Card className="flex h-full items-start gap-4 p-5">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/8 text-primary">
                      <Mail className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
                        Email
                      </h2>
                      <a
                        href={mailHref(HOSPITAL_EMAIL)}
                        className="mt-1 block break-words text-foreground transition-colors hover:text-primary"
                      >
                        {HOSPITAL_EMAIL}
                      </a>
                    </div>
                  </Card>
                </Reveal>
              </div>

              {/* Working hours */}
              <Reveal delay={0.1}>
                <Card className="p-5">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/8 text-primary">
                      <Clock className="h-5 w-5" aria-hidden />
                    </span>
                    <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
                      Working Hours
                    </h2>
                  </div>
                  <dl className="divide-y divide-border">
                    {WORKING_HOURS.map((row) => (
                      <div
                        key={row.label}
                        className="flex items-center justify-between py-2.5 text-sm"
                      >
                        <dt className="text-muted">{row.label}</dt>
                        <dd className="font-medium text-foreground">
                          {row.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </Card>
              </Reveal>

              {/* Emergency */}
              <Reveal delay={0.1}>
                <Card className="flex items-start gap-4 border-emergency/25 bg-emergency/5 p-5">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emergency/12 text-emergency-dark">
                    <Siren className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h2 className="text-sm font-semibold uppercase tracking-wide text-emergency-dark">
                      Emergency
                    </h2>
                    <a
                      href={telHref(EMERGENCY_PHONE)}
                      className="mt-1 block font-medium text-foreground transition-colors hover:text-emergency-dark"
                    >
                      {EMERGENCY_PHONE} · Available 24 / 7
                    </a>
                  </div>
                </Card>
              </Reveal>

              <Reveal delay={0.1}>
                <MapPlaceholder />
              </Reveal>
            </div>

            {/* Form column */}
            <Reveal delay={0.05}>
              <Card className="p-6 sm:p-8">
                <h2 className="text-2xl font-semibold">Send us a message</h2>
                <p className="mt-2 text-sm text-muted">
                  Fill in the form below and our team will get back to you.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </Card>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
