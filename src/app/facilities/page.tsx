import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/common/PageHeader";
import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { Button } from "@/components/ui/Button";
import { EmergencyCTA } from "@/components/sections/EmergencyCTA";
import { buildMetadata } from "@/lib/seo";
import { facilities } from "@/data/facilities";
import { IMAGES } from "@/config/images";

export const metadata: Metadata = buildMetadata({
  title: "Hospital Facilities",
  description:
    "Confirmed facilities at Baba Baidyanath Medical Trust: 24/7 emergency & trauma, intensive care units, modern operation theatres, in-house pharmacy and ambulance support.",
  path: "/facilities",
});

export default function FacilitiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Facilities"
        title="Modern infrastructure for complete care"
        description="Everything needed to support emergency, critical, surgical and everyday care, under one roof."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Facilities" }]}
      />

      <section className="section bg-background">
        <Container size="wide">
          <div className="mb-12 overflow-hidden rounded-[1.75rem] border border-border shadow-lift">
            <div className="relative aspect-[16/7] w-full">
              <Image
                src={IMAGES.facilities.src}
                alt={IMAGES.facilities.alt}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>

          <ul className="grid gap-6 md:grid-cols-2">
            {facilities.map((facility, i) => {
              const Icon = facility.icon;
              return (
                <Reveal as="li" key={facility.slug} delay={(i % 2) * 0.06}>
                  <div className="flex h-full items-start gap-5 rounded-2xl border border-border bg-surface p-7 shadow-soft transition-shadow hover:shadow-card">
                    <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                      <Icon className="h-7 w-7" aria-hidden />
                    </span>
                    <div>
                      <h2 className="text-lg font-semibold text-foreground">
                        {facility.name}
                      </h2>
                      <p className="mt-1.5 leading-relaxed text-muted">
                        {facility.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>

          <Reveal className="mt-12 rounded-2xl border border-dashed border-border bg-surface-muted p-6 text-center text-sm text-muted">
            Additional facility details will be published as they are confirmed.
            For specific enquiries,{" "}
            <a href="/contact" className="font-medium text-primary link-underline">
              contact the hospital
            </a>
            .
          </Reveal>

          <Reveal className="mt-8 flex justify-center">
            <Button href="/appointment">Book an Appointment</Button>
          </Reveal>
        </Container>
      </section>

      <EmergencyCTA />
    </>
  );
}
