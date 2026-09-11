import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { Button } from "@/components/ui/Button";
import { DoctorGrid } from "@/components/doctors/DoctorGrid";
import { doctors } from "@/data/doctors";

export function Doctors() {
  return (
    <section className="section bg-background">
      <Container size="wide">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Our Doctors"
            title="Meet our medical team"
            description="An experienced team of consultants and specialists dedicated to compassionate, evidence-based care."
            className="max-w-2xl"
          />
          <Reveal delay={0.1}>
            <Button href="/doctors" variant="outline" className="shrink-0">
              View all doctors
            </Button>
          </Reveal>
        </div>
        <DoctorGrid doctors={doctors} />
      </Container>
    </section>
  );
}
