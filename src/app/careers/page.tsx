import type { Metadata } from "next";
import { Briefcase, HeartHandshake, Mail } from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";
import { HOSPITAL_EMAIL, mailHref } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: "Careers",
  description:
    "Join the team at Baba Baidyanath Medical Trust. Explore opportunities to build a career in compassionate, high-quality healthcare.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Build a career in compassionate care"
        description="We bring together medical consultants, critical care specialists and dedicated staff around a shared commitment to accessible, high-quality healthcare."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Careers" }]}
      />

      <section className="section bg-background">
        <Container size="narrow">
          <div className="grid gap-6 sm:grid-cols-2">
            <Reveal>
              <Card className="flex h-full flex-col gap-3 p-7">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/8 text-primary">
                  <HeartHandshake className="h-6 w-6" aria-hidden />
                </span>
                <h2 className="text-lg font-semibold">A purpose-led workplace</h2>
                <p className="text-sm leading-relaxed text-muted">
                  Be part of a team dedicated to evidence-based, patient-centered
                  care across outpatient, inpatient and critical care.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={0.06}>
              <Card className="flex h-full flex-col gap-3 p-7">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/8 text-primary">
                  <Briefcase className="h-6 w-6" aria-hidden />
                </span>
                <h2 className="text-lg font-semibold">Current openings</h2>
                <p className="text-sm leading-relaxed text-muted">
                  Open positions will be listed here as they become available.
                  We welcome expressions of interest from healthcare
                  professionals.
                </p>
              </Card>
            </Reveal>
          </div>

          <Reveal className="mt-8">
            <Card className="flex flex-col items-start gap-4 p-7 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden />
                <p className="text-sm text-muted">
                  Interested in joining us? Share your details and we&apos;ll be
                  in touch as opportunities arise.
                </p>
              </div>
              <Button href={mailHref(HOSPITAL_EMAIL)} external className="shrink-0">
                Express Interest
              </Button>
            </Card>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
