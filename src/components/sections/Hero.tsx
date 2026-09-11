import Image from "next/image";
import { ShieldPlus, Stethoscope, ArrowRight, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/common/Reveal";
import { IMAGES } from "@/config/images";
import { EMERGENCY_HIGHLIGHTS } from "@/data/hospital";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-surface-muted">
      {/* Soft decorative background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-16 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-24 lg:pt-24 lg:px-8">
        {/* Left — message */}
        <div className="flex flex-col items-start gap-6">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold text-primary shadow-sm">
              <ShieldPlus className="h-4 w-4 text-secondary" aria-hidden />
              Multi-Specialty Healthcare Trust
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="max-w-xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]">
              Advanced Care.
              <br />
              <span className="text-primary">Compassionate Healing.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="prose-lead max-w-xl">
              Baba Baidyanath Medical Trust provides accessible, high-quality
              multi-specialty healthcare — supported by modern infrastructure,
              advanced diagnostics and an experienced team of medical
              professionals.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="flex flex-col gap-3 sm:flex-row">
            <Button href="/appointment" size="lg">
              Book an Appointment
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/departments" variant="outline" size="lg">
              <Stethoscope className="h-4 w-4" />
              Explore Departments
            </Button>
          </Reveal>
        </div>

        {/* Right — image composition */}
        <Reveal delay={0.1} className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-lift sm:aspect-[5/5]">
            <Image
              src={IMAGES.hero.src}
              alt={IMAGES.hero.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/35 via-transparent to-transparent" />
          </div>

          {/* Floating info element */}
          <div className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl border border-border bg-surface/95 p-4 shadow-lift backdrop-blur-sm sm:-left-6">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emergency/12 text-emergency">
              <HeartPulse className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">
                24/7 Emergency & Critical Care
              </p>
              <p className="text-xs text-muted">Always ready, day and night</p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Emergency / trust strip beneath the hero */}
      <div className="border-t border-border bg-surface/60">
        <ul className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-5 sm:px-6 lg:justify-between lg:px-8">
          {EMERGENCY_HIGHLIGHTS.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-sm font-medium text-foreground/80"
            >
              <span
                aria-hidden
                className="h-1.5 w-1.5 rounded-full bg-secondary"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
