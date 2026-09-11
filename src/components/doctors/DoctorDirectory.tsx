"use client";

import { useMemo, useState } from "react";
import { Search, UserX } from "lucide-react";
import { DoctorCard } from "./DoctorCard";
import { Select } from "@/components/ui/Select";
import { controlClasses } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import type { Doctor, Department } from "@/data/types";

export function DoctorDirectory({
  doctors,
  departments,
}: {
  doctors: Doctor[];
  departments: Pick<Department, "slug" | "name">[];
}) {
  const [query, setQuery] = useState("");
  const [dept, setDept] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return doctors.filter((d) => {
      const matchesQuery = !q || d.name.toLowerCase().includes(q);
      const matchesDept = !dept || (d.departmentSlugs?.includes(dept) ?? false);
      return matchesQuery && matchesDept;
    });
  }, [doctors, query, dept]);

  const clear = () => {
    setQuery("");
    setDept("");
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Filters */}
      <div className="grid gap-4 rounded-2xl border border-border bg-surface p-4 sm:grid-cols-[1.5fr_1fr] sm:items-end">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="doctor-search"
            className="text-sm font-medium text-foreground"
          >
            Search doctors
          </label>
          <div className="relative">
            <Search
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
              aria-hidden
            />
            <input
              id="doctor-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name…"
              className={`${controlClasses} pl-10`}
            />
          </div>
        </div>

        <Select
          id="doctor-department"
          label="Department"
          value={dept}
          onChange={(e) => setDept(e.target.value)}
          placeholder="All departments"
          options={[
            { value: "", label: "All departments" },
            ...departments.map((d) => ({ value: d.slug, label: d.name })),
          ]}
        />
      </div>

      {/* Results */}
      <div aria-live="polite">
        {filtered.length > 0 ? (
          <>
            <p className="mb-5 text-sm text-muted">
              Showing {filtered.length}{" "}
              {filtered.length === 1 ? "doctor" : "doctors"}
            </p>
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {filtered.map((doctor) => (
                <li key={doctor.slug} className="h-full">
                  <DoctorCard doctor={doctor} />
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-border bg-surface-muted px-6 py-16 text-center">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/8 text-primary">
              <UserX className="h-7 w-7" aria-hidden />
            </span>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                No doctors match your search
              </h3>
              <p className="mx-auto mt-1 max-w-sm text-sm text-muted">
                Try a different name, or clear the filters to see our full
                medical team.
              </p>
            </div>
            <Button variant="outline" onClick={clear}>
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
