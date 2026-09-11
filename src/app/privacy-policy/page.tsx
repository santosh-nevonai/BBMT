import type { Metadata } from "next";
import { LegalPage } from "@/components/common/LegalPage";
import { buildMetadata } from "@/lib/seo";
import { HOSPITAL_NAME } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: `How ${HOSPITAL_NAME} handles and protects your personal information.`,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro={`This policy describes how ${HOSPITAL_NAME} handles information collected through this website.`}
      updated="To be confirmed"
      sections={[
        {
          heading: "Introduction",
          body: (
            <p>
              We are committed to protecting the privacy of visitors to our
              website. This policy explains what information we may collect and
              how it is used. Final details will be confirmed by the hospital.
            </p>
          ),
        },
        {
          heading: "Information we collect",
          body: (
            <p>
              When you submit an appointment request or contact form, we may
              collect details such as your name, phone number, email address and
              any information you choose to share with us. We collect only what
              is necessary to respond to your request.
            </p>
          ),
        },
        {
          heading: "How we use your information",
          body: (
            <p>
              Information is used to respond to enquiries, coordinate
              appointments and improve our services. We do not sell your personal
              information.
            </p>
          ),
        },
        {
          heading: "Data protection",
          body: (
            <p>
              We take reasonable measures to protect personal information from
              unauthorised access, disclosure or misuse. Specific safeguards and
              retention periods will be confirmed by the hospital.
            </p>
          ),
        },
        {
          heading: "Cookies",
          body: (
            <p>
              This website may use essential cookies to function correctly.
              Details of any additional analytics or cookies will be documented
              here once confirmed.
            </p>
          ),
        },
        {
          heading: "Contact",
          body: (
            <p>
              For any questions about this policy, please <a href="/contact">contact the hospital</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
