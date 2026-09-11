import type { ReactNode } from "react";
import { Info } from "lucide-react";
import { PageHeader } from "./PageHeader";
import { Container } from "./Container";

export type LegalSection = {
  heading: string;
  body: ReactNode;
};

export function LegalPage({
  title,
  eyebrow,
  intro,
  updated,
  sections,
}: {
  title: string;
  eyebrow: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHeader
        eyebrow={eyebrow}
        title={title}
        description={intro}
        breadcrumb={[{ label: "Home", href: "/" }, { label: title }]}
      />

      <section className="section bg-background">
        <Container size="narrow">
          <div className="mb-8 flex items-start gap-3 rounded-2xl border border-dashed border-border bg-surface-muted p-5">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
            <p className="text-sm text-muted">
              This is a template document provided as a starting point and should
              be reviewed and finalised by the hospital and its legal counsel
              before publication.
            </p>
          </div>

          <p className="mb-10 text-sm text-muted">Last updated: {updated}</p>

          <div className="flex flex-col gap-10">
            {sections.map((section) => (
              <div key={section.heading} className="flex flex-col gap-3">
                <h2 className="text-xl font-semibold text-foreground">
                  {section.heading}
                </h2>
                <div className="leading-relaxed text-muted [&_a]:font-medium [&_a]:text-primary">
                  {section.body}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
