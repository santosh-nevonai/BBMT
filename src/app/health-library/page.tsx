import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";
import { departments } from "@/data/departments";

export const metadata: Metadata = buildMetadata({
  title: "Health Library",
  description:
    "Reliable health information from Baba Baidyanath Medical Trust, organised by specialty. Content is being developed.",
  path: "/health-library",
});

export default function HealthLibraryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Health Library"
        title="Trusted health information"
        description="A growing library of reliable, evidence-based health information, organised by our medical specialties."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Health Library" },
        ]}
      />

      <section className="section bg-background">
        <Container size="wide">
          <Reveal className="mb-10 flex flex-col items-center gap-4 rounded-2xl border border-dashed border-border bg-surface-muted px-6 py-12 text-center">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/8 text-primary">
              <BookOpen className="h-7 w-7" aria-hidden />
            </span>
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Content coming soon
              </h2>
              <p className="mx-auto mt-1 max-w-md text-sm text-muted">
                Our clinical teams are preparing accessible health information.
                In the meantime, explore our specialties below.
              </p>
            </div>
          </Reveal>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((d) => (
              <li key={d.slug}>
                <Link
                  href={`/departments/${d.slug}`}
                  className="group flex items-center justify-between rounded-xl border border-border bg-surface px-4 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:text-primary"
                >
                  {d.name}
                  <ArrowRight className="h-4 w-4 text-muted transition-transform group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>

          <Reveal className="mt-10 flex justify-center">
            <Button href="/departments" variant="outline">
              Explore all departments
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
