import type { LucideIcon } from "lucide-react";

export type Department = {
  /** URL slug, e.g. "general-medicine" */
  slug: string;
  name: string;
  /** Short summary used on cards. Only present where the hospital supplied it. */
  description?: string;
  /** Longer introduction for the department detail page. */
  intro?: string;
  /** Confirmed sub-services / capabilities. Empty when none were supplied. */
  services: string[];
  icon: LucideIcon;
  /** Whether this department is directly tied to emergency/critical care. */
  emergencyRelated?: boolean;
  /** Optional representative photograph (path under /public). */
  image?: string;
  imageAlt?: string;
};

export type Doctor = {
  /** URL slug derived from the name. */
  slug: string;
  name: string;
  /**
   * Specialization - intentionally OPTIONAL. Left undefined until the
   * hospital confirms it. We never fabricate a specialty.
   */
  specialization?: string;
  /** Optional department slugs this doctor is associated with (none confirmed yet). */
  departmentSlugs?: string[];
  /** Local image path once real photography is available. */
  image?: string;
};

export type Facility = {
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
};

export type Stat = {
  label: string;
  /** A qualitative value (we do not invent numeric statistics). */
  value: string;
};
