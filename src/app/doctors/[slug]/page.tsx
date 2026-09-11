import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  UserRound,
  CalendarPlus,
  Phone,
  ArrowLeft,
  Info,
} from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { Container } from "@/components/common/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { buildMetadata, physicianJsonLd } from "@/lib/seo";
import { getInitials } from "@/lib/utils";
import { doctors, getDoctor, doctorSlugs } from "@/data/doctors";
import {
  EMERGENCY_PHONE,
  SITE_URL,
  telHref,
  HOSPITAL_NAME,
} from "@/config/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return doctorSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doctor = getDoctor(slug);
  if (!doctor) return buildMetadata({ title: "Doctor not found" });
  return buildMetadata({
    title: doctor.name,
    description: `${doctor.name} is part of the medical team at ${HOSPITAL_NAME}.`,
    path: `/doctors/${doctor.slug}`,
  });
}

export default async function DoctorPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const doctor = getDoctor(slug);
  if (!doctor) notFound();

  const initials = getInitials(doctor.name);
  const others = doctors.filter((d) => d.slug !== doctor.slug);
  const jsonLd = physicianJsonLd(
    doctor.name,
    `${SITE_URL}/doctors/${doctor.slug}`
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        eyebrow="Medical Team"
        title={doctor.name}
        description={doctor.specialization ?? "Specialty details to be updated"}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Doctors", href: "/doctors" },
          { label: doctor.name },
        ]}
      />

      <section className="section bg-background">
        <Container size="wide">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            {/* Portrait + quick actions */}
            <div className="flex flex-col gap-5">
              <div className="relative aspect-[4/4] w-full overflow-hidden rounded-[1.75rem] border border-border bg-gradient-to-br from-primary/10 to-secondary/15 shadow-card">
                {doctor.image ? (
                  <Image
                    src={doctor.image}
                    alt={`Portrait of ${doctor.name}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="flex h-24 w-24 items-center justify-center rounded-full bg-surface/80 text-3xl font-semibold text-primary shadow-sm">
                      {initials || <UserRound className="h-10 w-10" />}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-3">
                <Button href={`/appointment?doctor=${doctor.slug}`}>
                  <CalendarPlus className="h-4 w-4" />
                  Book Appointment
                </Button>
                <Button
                  href={telHref(EMERGENCY_PHONE)}
                  external
                  variant="outline"
                >
                  <Phone className="h-4 w-4" />
                  Emergency Helpline
                </Button>
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl font-semibold sm:text-3xl">Profile</h2>
                <div className="flex items-start gap-3 rounded-2xl border border-dashed border-border bg-surface-muted p-6">
                  <Info
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    aria-hidden
                  />
                  <p className="text-sm leading-relaxed text-muted">
                    Detailed profile information — including qualifications,
                    specialisation and areas of expertise — will be published
                    once confirmed by the hospital. To request a consultation
                    with {doctor.name}, please book an appointment or contact the
                    hospital.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="text-xl font-semibold">Other doctors</h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {others.map((d) => (
                    <li key={d.slug}>
                      <a
                        href={`/doctors/${d.slug}`}
                        className="flex items-center gap-3 rounded-xl border border-border bg-surface p-3 transition-colors hover:border-primary/30"
                      >
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/8 text-sm font-semibold text-primary">
                          {getInitials(d.name) || <UserRound className="h-5 w-5" />}
                        </span>
                        <span className="text-sm font-medium text-foreground">
                          {d.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
                <Button href="/doctors" variant="ghost" className="w-fit">
                  <ArrowLeft className="h-4 w-4" />
                  Back to all doctors
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
