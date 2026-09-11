import type { Metadata } from "next";
import {
  SITE_URL,
  HOSPITAL_NAME,
  HOSPITAL_DESCRIPTION,
} from "@/config/site";

type BuildMetadataArgs = {
  title: string;
  description?: string;
  /** Path beginning with "/", used for canonical + OG url. */
  path?: string;
};

/** Consistent, healthcare-appropriate metadata for every page. */
export function buildMetadata({
  title,
  description = HOSPITAL_DESCRIPTION,
  path = "/",
}: BuildMetadataArgs): Metadata {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: HOSPITAL_NAME,
      title,
      description,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

/**
 * Organisation JSON-LD. We include only confirmed, non-fabricated data
 * (name, description, url, and the medical specialties offered). Address and
 * telephone are intentionally omitted until real values are supplied.
 */
export function hospitalJsonLd(specialties: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": ["Hospital", "MedicalOrganization"],
    name: HOSPITAL_NAME,
    description: HOSPITAL_DESCRIPTION,
    url: SITE_URL,
    medicalSpecialty: specialties,
  };
}

export function physicianJsonLd(name: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name,
    url,
    memberOf: {
      "@type": "MedicalOrganization",
      name: HOSPITAL_NAME,
      url: SITE_URL,
    },
  };
}
