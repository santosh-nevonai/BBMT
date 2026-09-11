import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { IMAGES } from "@/config/images";

const CONCEPTS = [
  "Compassionate care",
  "Evidence-based treatment",
  "Experienced medical professionals",
  "Modern infrastructure",
  "Accessible healthcare",
  "Patient-centered approach",
];

export function TrustSection() {
  return (
    <section className="relative overflow-hidden bg-primary-dark text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-0 h-full w-[40rem] bg-secondary/10 blur-3xl"
      />
      <Container size="wide" className="relative py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-secondary">
                <span aria-hidden className="h-px w-6 bg-secondary" />
                Human-centered healthcare
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-3xl leading-[1.12] text-white sm:text-4xl">
                Healthcare built around people
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-prose text-lg leading-relaxed text-white/75">
                We combine compassionate, patient-centered care with
                evidence-based treatment, an experienced medical team and modern
                infrastructure — keeping quality healthcare accessible to the
                community we serve.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <ul className="mt-2 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {CONCEPTS.map((c) => (
                  <li key={c} className="flex items-center gap-3 text-sm text-white/85">
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                      <Check className="h-3.5 w-3.5" aria-hidden />
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3.4] w-full overflow-hidden rounded-[1.75rem] border border-white/10 shadow-lift">
              <Image
                src={IMAGES.trust.src}
                alt={IMAGES.trust.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
