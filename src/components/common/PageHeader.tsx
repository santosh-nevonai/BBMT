import type { ReactNode } from "react";
import { Container } from "./Container";
import { Breadcrumb } from "./Breadcrumb";
import type { Crumb } from "./Breadcrumb";
import { Reveal } from "./Reveal";

type PageHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  breadcrumb?: Crumb[];
  actions?: ReactNode;
};

/**
 * Standard interior-page hero band. The sticky site header sits directly above
 * it; the generous top padding keeps content clear and provides visual calm.
 */
export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumb,
  actions,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-surface-muted to-background">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-secondary/8 blur-3xl"
      />
      <Container size="wide" className="relative pb-14 pt-10 sm:pt-12 lg:pb-16 lg:pt-14">
        {breadcrumb ? <Breadcrumb items={breadcrumb} className="mb-6" /> : null}
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="flex max-w-3xl flex-col gap-4">
            {eyebrow ? (
              <Reveal>
                <span className="eyebrow">
                  <span aria-hidden className="h-px w-6 bg-secondary" />
                  {eyebrow}
                </span>
              </Reveal>
            ) : null}
            <Reveal delay={0.05}>
              <h1 className="text-4xl leading-[1.08] sm:text-5xl">{title}</h1>
            </Reveal>
            {description ? (
              <Reveal delay={0.1}>
                <p className="prose-lead">{description}</p>
              </Reveal>
            ) : null}
          </div>
          {actions ? (
            <Reveal delay={0.1} className="shrink-0">
              {actions}
            </Reveal>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
