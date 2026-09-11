import type { Metadata } from "next";
import { PageHeader } from "@/components/common/PageHeader";
import { Container } from "@/components/common/Container";
import { DoctorDirectory } from "@/components/doctors/DoctorDirectory";
import { EmergencyCTA } from "@/components/sections/EmergencyCTA";
import { buildMetadata } from "@/lib/seo";
import { doctors } from "@/data/doctors";
import { departments } from "@/data/departments";

export const metadata: Metadata = buildMetadata({
  title: "Our Doctors",
  description:
    "Meet the medical team at Baba Baidyanath Medical Trust — an experienced group of consultants and specialists committed to compassionate, evidence-based care.",
  path: "/doctors",
});

export default function DoctorsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Doctors"
        title="Meet our medical team"
        description="An experienced team of consultants, specialists and dedicated staff — here to care for you and your family."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Doctors" }]}
      />

      <section className="section bg-surface-muted">
        <Container size="wide">
          <DoctorDirectory
            doctors={doctors}
            departments={departments.map((d) => ({
              slug: d.slug,
              name: d.name,
            }))}
          />
        </Container>
      </section>

      <EmergencyCTA />
    </>
  );
}
