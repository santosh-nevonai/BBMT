/**
 * Central site configuration.
 *
 * IMPORTANT - CONTENT RULE:
 * The values below marked as PLACEHOLDER are intentionally NOT real hospital
 * data. Replace them with the information supplied by the hospital. Nothing
 * here should be presented to patients as confirmed until it is filled in.
 */

export const SITE_URL = "https://bbmt.onrender.com"; // Update if a custom domain is added

export const HOSPITAL_NAME = "Baba Baidyanath Medical Trust";
export const HOSPITAL_SHORT_NAME = "BBMT";
export const HOSPITAL_TAGLINE = "Advanced Care. Compassionate Healing.";

export const HOSPITAL_DESCRIPTION =
  "Baba Baidyanath Medical Trust operates a premier multi-specialty healthcare institution dedicated to delivering accessible, high-quality medical care and clinical education, supported by advanced diagnostics, modern operating theatres and round-the-clock emergency support.";

/**
 * Contact details - PLACEHOLDERS.
 * Do not invent real values; update these when the hospital provides them.
 */
export const HOSPITAL_ADDRESS = {
  line1: "Address line to be confirmed", // PLACEHOLDER
  line2: "",
  city: "City",
  state: "State",
  postalCode: "000000",
  country: "India",
} as const;

export const HOSPITAL_ADDRESS_TEXT =
  "Address to be confirmed"; // PLACEHOLDER

export const HOSPITAL_PHONE = "+00 0000 000000"; // PLACEHOLDER
export const HOSPITAL_EMAIL = "contact@example.org"; // PLACEHOLDER
export const EMERGENCY_PHONE = "+00 0000 000000"; // PLACEHOLDER

/** Working hours - general OPD guidance placeholder. */
export const WORKING_HOURS = [
  { label: "Emergency & Trauma", value: "Open 24 / 7" },
  { label: "Out-Patient Department", value: "Hours to be confirmed" }, // PLACEHOLDER
  { label: "In-House Pharmacy", value: "Open 24 / 7" },
] as const;

/** Social links - leave empty until confirmed. */
export const SOCIAL_LINKS: { label: string; href: string }[] = [];

/** Helper to convert a display phone number into a tel: href. */
export const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;
export const mailHref = (email: string) => `mailto:${email}`;
