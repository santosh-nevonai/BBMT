import type { Metadata } from "next";
import { ClipboardList, Users, CreditCard, Info } from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { EmergencyCTA } from "@/components/sections/EmergencyCTA";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Patient Information",
  description:
    "Helpful information for patients and visitors at Baba Baidyanath Medical Trust — appointments, visiting and what to expect.",
  path: "/patient-information",
});

const topics = [
  {
    icon: ClipboardList,
    title: "Preparing for your visit",
    text: "Bring any previous medical records, prescriptions and reports relevant to your condition to help our team provide the best care.",
  },
  {
    icon: Users,
    title: "Visitors & attendants",
    text: "We welcome family support during care. Specific visiting guidance will be confirmed by the hospital.",
  },
  {
    icon: CreditCard,
    title: "Admissions & billing",
    text: "Details on admission procedures and billing will be published as they are confirmed by the hospital.",
  },
];

export default function PatientInformationPage() {
  return (
    <>
      <PageHeader
        eyebrow="For Patients"
        title="Patient Information"
        description="Practical guidance to help you and your family prepare for a visit to the hospital."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Patient Information" },
        ]}
      />

      <section className="section bg-background">
        <Container size="wide">
          <ul className="grid gap-6 md:grid-cols-3">
            {topics.map((t, i) => {
              const Icon = t.icon;
              return (
                <Reveal as="li" key={t.title} delay={i * 0.06}>
                  <Card className="flex h-full flex-col gap-3 p-7">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/8 text-primary">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <h2 className="text-lg font-semibold">{t.title}</h2>
                    <p className="text-sm leading-relaxed text-muted">{t.text}</p>
                  </Card>
                </Reveal>
              );
            })}
          </ul>

          <Reveal className="mt-10 flex items-start gap-3 rounded-2xl border border-dashed border-border bg-surface-muted p-6">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
            <p className="text-sm text-muted">
              More detailed patient information will be added here as it is
              confirmed. For any questions in the meantime, please{" "}
              <a href="/contact" className="font-medium text-primary link-underline">
                contact the hospital
              </a>{" "}
              or{" "}
              <a
                href="/appointment"
                className="font-medium text-primary link-underline"
              >
                book an appointment
              </a>
              .
            </p>
          </Reveal>

          <Reveal className="mt-8">
            <Button href="/appointment">Book an Appointment</Button>
          </Reveal>
        </Container>
      </section>

      <EmergencyCTA />
    </>
  );
}
