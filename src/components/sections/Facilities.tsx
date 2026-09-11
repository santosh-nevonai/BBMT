import Image from "next/image";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { Button } from "@/components/ui/Button";
import { IMAGES } from "@/config/images";
import { facilities } from "@/data/facilities";

export function Facilities() {
  return (
    <section className="section bg-surface-muted">
      <Container size="wide">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Left — heading + image */}
          <div className="flex flex-col gap-8">
            <SectionHeading
              eyebrow="Facilities"
              title="Modern infrastructure for complete care"
              description="Confirmed hospital facilities supporting emergency, critical, surgical and everyday care — all under one roof."
            />
            <Reveal delay={0.1}>
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border shadow-card">
                <Image
                  src={IMAGES.facilities.src}
                  alt={IMAGES.facilities.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <Button href="/facilities" variant="outline" className="w-fit">
                Explore all facilities
              </Button>
            </Reveal>
          </div>

          {/* Right — facility list */}
          <ul className="flex flex-col divide-y divide-border rounded-2xl border border-border bg-surface">
            {facilities.map((facility, i) => {
              const Icon = facility.icon;
              return (
                <Reveal as="li" key={facility.slug} delay={i * 0.04}>
                  <div className="flex items-start gap-4 p-5 transition-colors hover:bg-surface-muted sm:p-6">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/12 text-secondary-dark">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {facility.name}
                      </h3>
                      <p className="mt-0.5 text-sm leading-relaxed text-muted">
                        {facility.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
