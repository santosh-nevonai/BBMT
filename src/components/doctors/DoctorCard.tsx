import Image from "next/image";
import Link from "next/link";
import { UserRound, ArrowRight, CalendarPlus } from "lucide-react";
import type { Doctor } from "@/data/types";
import { getInitials } from "@/lib/utils";

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  const initials = getInitials(doctor.name);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-card">
      {/* Portrait area — real photo when available, elegant neutral placeholder otherwise */}
      <div className="relative aspect-[4/3.6] w-full overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/15">
        {doctor.image ? (
          <Image
            src={doctor.image}
            alt={`Portrait of ${doctor.name}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-primary/70">
            <span
              aria-hidden
              className="flex h-16 w-16 items-center justify-center rounded-full bg-surface/80 text-xl font-semibold text-primary shadow-sm"
            >
              {initials || <UserRound className="h-7 w-7" />}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="text-base font-semibold text-foreground">
            {doctor.name}
          </h3>
          <p className="mt-0.5 text-sm text-muted">
            {doctor.specialization ?? "Specialty details to be updated"}
          </p>
        </div>

        <div className="mt-auto flex items-center gap-2 pt-2">
          <Link
            href={`/doctors/${doctor.slug}`}
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            View Profile
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
          <Link
            href={`/appointment?doctor=${doctor.slug}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-dark"
          >
            <CalendarPlus className="h-3.5 w-3.5" aria-hidden />
            Appointment
          </Link>
        </div>
      </div>
    </article>
  );
}
