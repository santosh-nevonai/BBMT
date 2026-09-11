import Image from "next/image";
import type { Metadata } from "next";
import { PageHeader } from "@/components/common/PageHeader";
import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { TrustSection } from "@/components/sections/TrustSection";
import { EmergencyCTA } from "@/components/sections/EmergencyCTA";
import { buildMetadata } from "@/lib/seo";
import { IMAGES } from "@/config/images";
import { OVERVIEW_PARAGRAPHS, OVERVIEW_STATS } from "@/data/hospital";

export const metadata: Metadata = buildMetadata({
  title: "About the Trust",
  description:
    "Baba Baidyanath Medical Trust is a premier multi-specialty healthcare institution dedicated to accessible, high-quality and compassionate care.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="A premier multi-specialty healthcare institution"
        description="Delivering accessible, high-quality medical care and clinical education, with compassion at its core."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section className="section bg-background">
        <Container size="wide">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal className="lg:sticky lg:top-28">
              <div className="relative aspect-[4/3.6] w-full overflow-hidden rounded-[1.75rem] border border-border shadow-lift">
                <Image
                  src={IMAGES.about.src}
                  alt={IMAGES.about.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <div className="flex flex-col gap-6">
              <Reveal>
                <span className="eyebrow">
                  <span aria-hidden className="h-px w-6 bg-secondary" />
                  Our mission
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-3xl leading-[1.12] sm:text-4xl">
                  Bridging the gap in tertiary healthcare
                </h2>
              </Reveal>
              {OVERVIEW_PARAGRAPHS.map((para, i) => (
                <Reveal key={i} delay={0.1 + i * 0.05}>
                  <p className="leading-relaxed text-muted">{para}</p>
                </Reveal>
              ))}

              <Reveal delay={0.25}>
                <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-6 border-t border-border pt-8 sm:grid-cols-4">
                  {OVERVIEW_STATS.map((stat) => (
                    <div key={stat.label} className="flex flex-col">
                      <dt className="order-2 text-xs text-muted">{stat.label}</dt>
                      <dd className="order-1 text-xl font-bold text-primary">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <WhyChooseUs />
      <TrustSection />
      <EmergencyCTA />
    </>
  );
}
