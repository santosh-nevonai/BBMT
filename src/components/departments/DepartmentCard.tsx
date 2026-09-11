import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Department } from "@/data/types";

export function DepartmentCard({ department }: { department: Department }) {
  const Icon = department.icon;
  return (
    <Link
      href={`/departments/${department.slug}`}
      className="group relative flex h-full flex-col gap-4 rounded-2xl border border-border bg-surface p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/8 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-6 w-6" aria-hidden />
      </span>

      <div className="flex flex-1 flex-col gap-1.5">
        <h3 className="text-lg font-semibold leading-snug text-foreground">
          {department.name}
        </h3>
        {department.description ? (
          <p className="text-sm leading-relaxed text-muted">
            {department.description}
          </p>
        ) : null}
      </div>

      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
        View Department
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
