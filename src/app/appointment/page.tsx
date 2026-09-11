import { Suspense } from "react";
import type { Metadata } from "next";
import { Phone, ShieldCheck, Clock, CalendarPlus } from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { AppointmentForm } from "@/components/appointments/AppointmentForm";
import { buildMetadata } from "@/lib/seo";
import { EMERGENCY_PHONE, telHref } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: "Book an Appointment",
  description:
    "Request an appointment with a specialist at Baba Baidyanath Medical Trust. Choose a department, preferred doctor and a convenient time.",
  path: "/appointment",
});

const reassurances = [
  {
    icon: ShieldCheck,
    title: "Evidence-based care",
    text: "Consultations grounded in sound medical practice.",
  },
  {
    icon: Clock,
    title: "Flexible scheduling",
    text: "Choose a date and time that works for you.",
  },
  {
    icon: CalendarPlus,
    title: "Simple process",
    text: "Request in minutes — we'll confirm the details.",
  },
];

function FormFallback() {
  return (
    <div className="flex flex-col gap-5" aria-hidden>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="h-[4.75rem] animate-pulse rounded-xl bg-surface-muted" />
        <div className="h-[4.75rem] animate-pulse rounded-xl bg-surface-muted" />
      </div>
      <div className="h-[4.75rem] animate-pulse rounded-xl bg-surface-muted" />
      <div className="h-[4.75rem] animate-pulse rounded-xl bg-surface-muted" />
      <div className="h-32 animate-pulse rounded-xl bg-surface-muted" />
    </div>
  );
}

export default function AppointmentPage() {
  return (
    <>
      <PageHeader
        eyebrow="Appointments"
        title="Book an Appointment"
        description="Request a consultation with our specialists. Complete the form and our team will help coordinate your visit."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Appointment" }]}
      />

      <section className="section bg-surface-muted">
        <Container size="wide">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            {/* Form */}
            <Reveal>
              <Card className="p-6 sm:p-8">
                <h2 className="text-2xl font-semibold">Appointment details</h2>
                <p className="mt-2 text-sm text-muted">
                  Fields marked with{" "}
                  <span className="text-emergency">*</span> are required.
                </p>
                <div className="mt-6">
                  <Suspense fallback={<FormFallback />}>
                    <AppointmentForm />
                  </Suspense>
                </div>
              </Card>
            </Reveal>

            {/* Supporting info */}
            <aside className="flex flex-col gap-5 lg:sticky lg:top-28 lg:self-start">
              <Reveal delay={0.05}>
                <Card className="p-6">
                  <h2 className="text-lg font-semibold">Why book with us</h2>
                  <ul className="mt-4 flex flex-col gap-4">
                    {reassurances.map((r) => {
                      const Icon = r.icon;
                      return (
                        <li key={r.title} className="flex items-start gap-3">
                          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary/12 text-secondary-dark">
                            <Icon className="h-[1.1rem] w-[1.1rem]" aria-hidden />
                          </span>
                          <div>
                            <p className="text-sm font-semibold text-foreground">
                              {r.title}
                            </p>
                            <p className="text-sm text-muted">{r.text}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </Card>
              </Reveal>

              <Reveal delay={0.1}>
                <Card className="border-emergency/20 bg-emergency/5 p-6">
                  <h2 className="text-lg font-semibold text-emergency-dark">
                    Medical emergency?
                  </h2>
                  <p className="mt-2 text-sm text-muted">
                    Do not use this form for emergencies. Call our helpline for
                    immediate assistance, available 24 / 7.
                  </p>
                  <Button
                    href={telHref(EMERGENCY_PHONE)}
                    external
                    variant="emergency"
                    className="mt-4 w-full"
                  >
                    <Phone className="h-4 w-4" />
                    Call Emergency
                  </Button>
                </Card>
              </Reveal>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
