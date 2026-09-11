import { Siren, Layers, ScanLine, Cross } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";

const highlights = [
  { icon: Siren, label: "24/7 Emergency Care", sub: "Round-the-clock response" },
  { icon: Layers, label: "Multi-Specialty Services", sub: "Care across specialties" },
  { icon: ScanLine, label: "Advanced Diagnostics", sub: "Accurate, timely results" },
  { icon: Cross, label: "Modern Operation Theatres", sub: "Contemporary infrastructure" },
];

export function QuickHighlights() {
  return (
    <section className="border-b border-border bg-surface">
      <Container size="wide" className="py-10">
        <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal as="li" key={item.label} delay={i * 0.05}>
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/12 text-secondary-dark">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <p className="font-semibold leading-tight text-foreground">
                      {item.label}
                    </p>
                    <p className="text-sm text-muted">{item.sub}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
