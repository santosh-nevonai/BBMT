import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { WHY_CHOOSE_US } from "@/data/hospital";

export function WhyChooseUs() {
  return (
    <section className="section bg-background">
      <Container size="wide">
        <SectionHeading
          eyebrow="Why Baba Baidyanath Medical Trust"
          title="Care you can trust, built around people"
          description="Every element of the hospital is designed around one goal — accessible, compassionate and clinically sound care."
          className="mb-12 max-w-2xl"
        />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal as="li" key={item.title} delay={(i % 3) * 0.05}>
                <div className="flex h-full flex-col gap-3 border-l-2 border-secondary/30 pl-5 transition-colors hover:border-secondary">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/8 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
