import type { Metadata } from "next";
import { PageHeader } from "@/components/common/PageHeader";
import { Container } from "@/components/common/Container";
import { DepartmentGrid } from "@/components/departments/DepartmentGrid";
import { EmergencyCTA } from "@/components/sections/EmergencyCTA";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";
import { departments } from "@/data/departments";

export const metadata: Metadata = buildMetadata({
  title: "Departments & Specialties",
  description:
    "Explore the multi-specialty departments at Baba Baidyanath Medical Trust, from general medicine and critical care to surgery, cardiology, radiology and more.",
  path: "/departments",
});

export default function DepartmentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Specialties"
        title="Comprehensive Medical Care Across Specialties"
        description="Coordinated, evidence-based care delivered by dedicated teams across our multi-specialty departments."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Departments" }]}
        actions={<Button href="/appointment">Book an Appointment</Button>}
      />

      <section className="section bg-surface-muted">
        <Container size="wide">
          <DepartmentGrid departments={departments} />
        </Container>
      </section>

      <EmergencyCTA />
    </>
  );
}
