import type { Metadata } from "next";
import { Building2, BedDouble, HeartPulse, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { Button } from "@/components/ui/Button";
import { DepartmentGrid } from "@/components/departments/DepartmentGrid";
import { EmergencyCTA } from "@/components/sections/EmergencyCTA";
import { buildMetadata } from "@/lib/seo";
import { departments } from "@/data/departments";
import { facilities } from "@/data/facilities";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Holistic health services across outpatient, inpatient and critical care domains — supported by multi-specialty departments and modern hospital facilities.",
  path: "/services",
});

const careDomains = [
  {
    icon: Building2,
    title: "Outpatient Care",
    description:
      "Consultation, diagnosis and follow-up across our multi-specialty departments.",
  },
  {
    icon: BedDouble,
    title: "Inpatient Care",
    description:
      "Comprehensive in-patient care with dedicated nursing and clinical support.",
  },
  {
    icon: HeartPulse,
    title: "Critical Care",
    description:
      "Round-the-clock emergency response and advanced intensive care management.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Holistic care, across every stage"
        description="From everyday consultations to critical care, our services span outpatient, inpatient and critical care domains."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Services" }]}
        actions={<Button href="/appointment">Book an Appointment</Button>}
      />

      {/* Care domains */}
      <section className="section bg-background">
        <Container size="wide">
          <ul className="grid gap-6 md:grid-cols-3">
            {careDomains.map((d, i) => {
              const Icon = d.icon;
              return (
                <Reveal as="li" key={d.title} delay={i * 0.06}>
                  <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-surface p-7 shadow-soft">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/8 text-primary">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <h3 className="text-lg font-semibold">{d.title}</h3>
                    <p className="text-sm leading-relaxed text-muted">
                      {d.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* Specialties */}
      <section className="section bg-surface-muted">
        <Container size="wide">
          <SectionHeading
            eyebrow="Clinical specialties"
            title="Multi-specialty departments"
            description="Coordinated care delivered by dedicated teams across our specialties."
            className="mb-12"
          />
          <DepartmentGrid departments={departments} />
        </Container>
      </section>

      {/* Facilities + support */}
      <section className="section bg-background">
        <Container size="wide">
          <SectionHeading
            eyebrow="Support services"
            title="Facilities that support your care"
            className="mb-10"
          />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal as="li" key={f.slug} delay={(i % 3) * 0.05}>
                  <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-surface p-5">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary/12 text-secondary-dark">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-semibold text-foreground">{f.name}</h3>
                      <p className="mt-0.5 text-sm text-muted">
                        {f.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
          <Reveal className="mt-10">
            <Button href="/facilities" variant="outline">
              View all facilities
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </Container>
      </section>

      <EmergencyCTA />
    </>
  );
}
