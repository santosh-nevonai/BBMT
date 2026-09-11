import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { Button } from "@/components/ui/Button";
import { DepartmentGrid } from "@/components/departments/DepartmentGrid";
import { departments } from "@/data/departments";

export function Departments() {
  return (
    <section id="departments" className="section bg-surface-muted">
      <Container size="wide">
        <SectionHeading
          eyebrow="Specialties"
          title="Comprehensive Medical Care Across Specialties"
          description="From everyday medicine to critical care and surgery, our multi-specialty teams deliver coordinated, evidence-based treatment."
          align="center"
          className="mb-12"
        />
        <DepartmentGrid departments={departments} />
        <Reveal className="mt-10 flex justify-center">
          <Button href="/departments" variant="outline">
            View all departments
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
