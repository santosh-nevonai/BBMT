import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Check,
  CalendarPlus,
  Phone,
  ArrowRight,
  Stethoscope,
  Users,
} from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { EmergencyCTA } from "@/components/sections/EmergencyCTA";
import { buildMetadata } from "@/lib/seo";
import {
  departments,
  getDepartment,
  departmentSlugs,
} from "@/data/departments";
import { getDoctorsForDepartment } from "@/data/doctors";
import { EMERGENCY_PHONE, telHref } from "@/config/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return departmentSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const dept = getDepartment(slug);
  if (!dept) return buildMetadata({ title: "Department not found" });
  return buildMetadata({
    title: dept.name,
    description: dept.description ?? dept.intro,
    path: `/departments/${dept.slug}`,
  });
}

export default async function DepartmentPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const dept = getDepartment(slug);
  if (!dept) notFound();

  const relatedDoctors = getDoctorsForDepartment(dept.slug);
  const otherDepartments = departments
    .filter((d) => d.slug !== dept.slug)
    .slice(0, 6);
  const Icon = dept.icon;

  return (
    <>
      <PageHeader
        eyebrow="Department"
        title={dept.name}
        description={dept.description}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Departments", href: "/departments" },
          { label: dept.name },
        ]}
        actions={
          <Button href={`/appointment?department=${dept.slug}`}>
            <CalendarPlus className="h-4 w-4" />
            Book Appointment
          </Button>
        }
      />

      {dept.image ? (
        <div className="bg-background pt-10">
          <Container size="wide">
            <Reveal>
              <div className="relative aspect-[16/7] w-full overflow-hidden rounded-[1.75rem] border border-border shadow-lift">
                <Image
                  src={dept.image}
                  alt={dept.imageAlt ?? dept.name}
                  fill
                  priority
                  sizes="(max-width: 1152px) 100vw, 1100px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/25 to-transparent" />
              </div>
            </Reveal>
          </Container>
        </div>
      ) : null}

      <section className="section bg-background">
        <Container size="wide">
          <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
            {/* Main content */}
            <div className="flex flex-col gap-10">
              <Reveal className="flex flex-col gap-4">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                  <Icon className="h-7 w-7" aria-hidden />
                </span>
                <h2 className="text-2xl font-semibold sm:text-3xl">Overview</h2>
                <p className="max-w-prose leading-relaxed text-muted">
                  {dept.intro ?? dept.description}
                </p>
              </Reveal>

              {dept.services.length > 0 ? (
                <Reveal className="flex flex-col gap-5">
                  <h2 className="text-2xl font-semibold sm:text-3xl">
                    Services &amp; capabilities
                  </h2>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {dept.services.map((service) => (
                      <li
                        key={service}
                        className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-sm font-medium text-foreground"
                      >
                        <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-secondary-dark">
                          <Check className="h-3.5 w-3.5" aria-hidden />
                        </span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ) : (
                <Reveal>
                  <div className="rounded-2xl border border-dashed border-border bg-surface-muted p-6 text-sm text-muted">
                    Detailed service information for this department will be
                    published as it is confirmed. For specific enquiries, please{" "}
                    <Link
                      href="/contact"
                      className="font-medium text-primary link-underline"
                    >
                      contact the hospital
                    </Link>
                    .
                  </div>
                </Reveal>
              )}

              {/* Associated doctors */}
              <Reveal className="flex flex-col gap-5">
                <h2 className="text-2xl font-semibold sm:text-3xl">
                  Our consultants
                </h2>
                {relatedDoctors.length > 0 ? (
                  <ul className="grid gap-4 sm:grid-cols-2">
                    {relatedDoctors.map((doc) => (
                      <li key={doc.slug}>
                        <Link
                          href={`/doctors/${doc.slug}`}
                          className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-primary/30"
                        >
                          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/8 text-primary">
                            <Stethoscope className="h-5 w-5" aria-hidden />
                          </span>
                          <span className="font-medium text-foreground">
                            {doc.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="flex flex-col items-start gap-4 rounded-2xl border border-dashed border-border bg-surface-muted p-6">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/8 text-primary">
                      <Users className="h-5 w-5" aria-hidden />
                    </span>
                    <p className="text-sm text-muted">
                      Consultant assignments for this department are being
                      finalised. Meanwhile, you can view our full medical team.
                    </p>
                    <Button href="/doctors" variant="outline" size="sm">
                      View all doctors
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </Reveal>
            </div>

            {/* Sidebar */}
            <aside className="flex flex-col gap-5 lg:sticky lg:top-28 lg:self-start">
              <Card className="p-6">
                <h3 className="text-lg font-semibold">Request an appointment</h3>
                <p className="mt-2 text-sm text-muted">
                  Book a consultation with the {dept.name} team.
                </p>
                <Button
                  href={`/appointment?department=${dept.slug}`}
                  className="mt-4 w-full"
                >
                  <CalendarPlus className="h-4 w-4" />
                  Book Appointment
                </Button>
              </Card>

              <Card className="border-emergency/20 bg-emergency/5 p-6">
                <h3 className="text-lg font-semibold text-emergency-dark">
                  Medical emergency?
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Our emergency and critical care teams are available 24 / 7.
                </p>
                <Button
                  href={telHref(EMERGENCY_PHONE)}
                  external
                  variant="emergency"
                  className="mt-4 w-full"
                >
                  <Phone className="h-4 w-4" />
                  Call Emergency
                </Button>
              </Card>

              <Card className="p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">
                  Other departments
                </h3>
                <ul className="mt-3 flex flex-col gap-1">
                  {otherDepartments.map((d) => (
                    <li key={d.slug}>
                      <Link
                        href={`/departments/${d.slug}`}
                        className="flex items-center justify-between rounded-lg px-2 py-2 text-sm text-foreground/80 transition-colors hover:bg-surface-muted hover:text-primary"
                      >
                        {d.name}
                        <ArrowRight className="h-3.5 w-3.5 text-muted" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </Card>
            </aside>
          </div>
        </Container>
      </section>

      {dept.emergencyRelated ? <EmergencyCTA /> : null}
    </>
  );
}
