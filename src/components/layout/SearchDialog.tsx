"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, ArrowUpRight } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { departments } from "@/data/departments";
import { doctors } from "@/data/doctors";
import { controlClasses } from "@/components/ui/Input";

type Result = { label: string; sub: string; href: string };

const staticPages: Result[] = [
  { label: "About the Trust", sub: "Page", href: "/about" },
  { label: "Book an Appointment", sub: "Page", href: "/appointment" },
  { label: "Emergency & Trauma Care", sub: "Page", href: "/emergency" },
  { label: "Facilities", sub: "Page", href: "/facilities" },
  { label: "Services", sub: "Page", href: "/services" },
  { label: "Contact", sub: "Page", href: "/contact" },
];

export function SearchDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");

  const results = useMemo<Result[]>(() => {
    const all: Result[] = [
      ...departments.map((d) => ({
        label: d.name,
        sub: "Department",
        href: `/departments/${d.slug}`,
      })),
      ...doctors.map((d) => ({
        label: d.name,
        sub: "Doctor",
        href: `/doctors/${d.slug}`,
      })),
      ...staticPages,
    ];
    const q = query.trim().toLowerCase();
    if (!q) return all.slice(0, 6);
    return all.filter((r) => r.label.toLowerCase().includes(q)).slice(0, 8);
  }, [query]);

  return (
    <Modal open={open} onClose={onClose} title="Search">
      <div className="relative">
        <Search
          className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
          aria-hidden
        />
        <input
          type="search"
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search departments, doctors, pages…"
          aria-label="Search query"
          className={`${controlClasses} pl-10`}
        />
      </div>

      <ul className="mt-4 flex flex-col gap-1">
        {results.length === 0 ? (
          <li className="px-3 py-6 text-center text-sm text-muted">
            No results for “{query}”.
          </li>
        ) : (
          results.map((r) => (
            <li key={r.href}>
              <Link
                href={r.href}
                onClick={onClose}
                className="group flex items-center justify-between rounded-xl px-3 py-2.5 transition-colors hover:bg-surface-muted"
              >
                <span className="flex flex-col">
                  <span className="text-sm font-medium text-foreground">
                    {r.label}
                  </span>
                  <span className="text-xs text-muted">{r.sub}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            </li>
          ))
        )}
      </ul>
    </Modal>
  );
}
