import type { Metadata } from "next";
import { LegalPage } from "@/components/common/LegalPage";
import { buildMetadata } from "@/lib/seo";
import { HOSPITAL_NAME } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions",
  description: `The terms governing use of the ${HOSPITAL_NAME} website.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      intro={`These terms govern your use of the ${HOSPITAL_NAME} website.`}
      updated="To be confirmed"
      sections={[
        {
          heading: "Acceptance of terms",
          body: (
            <p>
              By using this website, you agree to these terms. If you do not
              agree, please discontinue use of the site.
            </p>
          ),
        },
        {
          heading: "Use of the website",
          body: (
            <p>
              This website is provided for general information and to help you
              access our services. You agree to use it lawfully and not to
              misuse any feature, including appointment and contact forms.
            </p>
          ),
        },
        {
          heading: "Medical disclaimer",
          body: (
            <p>
              Information on this website is for general purposes only and is not
              a substitute for professional medical advice, diagnosis or
              treatment. Always seek the advice of a qualified healthcare
              provider. In a medical emergency, contact our emergency helpline or
              your nearest emergency service immediately.
            </p>
          ),
        },
        {
          heading: "Intellectual property",
          body: (
            <p>
              Content on this website is owned by or licensed to the hospital and
              may not be reproduced without permission.
            </p>
          ),
        },
        {
          heading: "External links",
          body: (
            <p>
              The website may contain links to third-party sites. We are not
              responsible for the content or practices of those sites.
            </p>
          ),
        },
        {
          heading: "Changes to these terms",
          body: (
            <p>
              We may update these terms from time to time. Continued use of the
              website constitutes acceptance of any changes.
            </p>
          ),
        },
        {
          heading: "Contact",
          body: (
            <p>
              For questions about these terms, please <a href="/contact">contact the hospital</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
