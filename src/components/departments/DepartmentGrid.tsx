import type { Department } from "@/data/types";
import { DepartmentCard } from "./DepartmentCard";
import { StaggerGrid } from "@/components/common/StaggerGrid";

/**
 * Server component: renders the cards (icons stay server-side) and hands the
 * finished elements to a client wrapper for the staggered entrance.
 */
export function DepartmentGrid({
  departments,
}: {
  departments: Department[];
}) {
  return (
    <StaggerGrid className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {departments.map((department) => (
        <DepartmentCard key={department.slug} department={department} />
      ))}
    </StaggerGrid>
  );
}
