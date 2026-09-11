import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { Button } from "@/components/ui/Button";
import { IMAGES } from "@/config/images";
import { OVERVIEW_PARAGRAPHS, OVERVIEW_STATS } from "@/data/hospital";

export function HospitalOverview() {
  return (
    <section className="section bg-background">
      <Container size="wide">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — editorial copy */}
          <div className="flex flex-col gap-6">
            <Reveal>
              <span className="eyebrow">
                <span aria-hidden className="h-px w-6 bg-secondary" />
                About the Trust
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-3xl leading-[1.12] sm:text-4xl">
                About Baba Baidyanath Medical Trust
              </h2>
            </Reveal>
            {OVERVIEW_PARAGRAPHS.map((para, i) => (
              <Reveal key={i} delay={0.1 + i * 0.05}>
                <p className="max-w-prose leading-relaxed text-muted">{para}</p>
              </Reveal>
            ))}
            <Reveal delay={0.25}>
              <Button href="/about" variant="outline">
                Learn more about us
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Reveal>
          </div>

          {/* Right — image with floating stat panel */}
          <Reveal delay={0.1} className="relative">
            <div className="relative aspect-[4/3.4] w-full overflow-hidden rounded-[1.75rem] border border-border shadow-lift">
              <Image
                src={IMAGES.overview.src}
                alt={IMAGES.overview.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-8 left-4 right-4 rounded-2xl border border-border bg-surface p-5 shadow-lift sm:left-8 sm:right-8">
              <dl className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4">
                {OVERVIEW_STATS.map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <dt className="order-2 text-xs text-muted">{stat.label}</dt>
                    <dd className="order-1 text-lg font-bold text-primary">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
