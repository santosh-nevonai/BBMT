import type { Doctor } from "./types";

/**
 * Our doctors.
 *
 * CONTENT RULE: Only the names below were supplied by the hospital. We do NOT
 * invent degrees, specializations, experience, positions, awards or photos.
 * `specialization`, `departmentSlugs` and `image` are intentionally left
 * undefined until the hospital confirms them - the UI degrades gracefully with
 * neutral placeholders.
 */
export const doctors: Doctor[] = [
  { slug: "dr-abhinav-nikunj", name: "Dr. Abhinav Nikunj" },
  { slug: "dr-ajit-kumar", name: "Dr. Ajit Kumar" },
  { slug: "dr-h-n-prasad", name: "Dr. H N Prasad" },
  { slug: "dr-raj-kumar", name: "Dr. Raj Kumar" },
];

export const getDoctor = (slug: string): Doctor | undefined =>
  doctors.find((d) => d.slug === slug);

export const doctorSlugs = doctors.map((d) => d.slug);

/** Doctors associated with a given department (none confirmed yet → empty). */
export const getDoctorsForDepartment = (departmentSlug: string): Doctor[] =>
  doctors.filter((d) => d.departmentSlugs?.includes(departmentSlug));
