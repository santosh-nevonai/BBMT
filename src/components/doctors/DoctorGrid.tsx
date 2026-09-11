import type { Doctor } from "@/data/types";
import { DoctorCard } from "./DoctorCard";
import { StaggerGrid } from "@/components/common/StaggerGrid";

export function DoctorGrid({ doctors }: { doctors: Doctor[] }) {
  return (
    <StaggerGrid className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.slug} doctor={doctor} />
      ))}
    </StaggerGrid>
  );
}
