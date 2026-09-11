import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/site";
import { departmentSlugs } from "@/data/departments";
import { doctorSlugs } from "@/data/doctors";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/about",
    "/departments",
    "/doctors",
    "/services",
    "/facilities",
    "/emergency",
    "/appointment",
    "/contact",
    "/patient-information",
    "/health-library",
    "/careers",
    "/privacy-policy",
    "/terms",
  ];

  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const departmentEntries: MetadataRoute.Sitemap = departmentSlugs.map((slug) => ({
    url: `${SITE_URL}/departments/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const doctorEntries: MetadataRoute.Sitemap = doctorSlugs.map((slug) => ({
    url: `${SITE_URL}/doctors/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticEntries, ...departmentEntries, ...doctorEntries];
}
