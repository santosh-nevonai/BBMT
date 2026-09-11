/**
 * Centralised image configuration.
 *
 * These now reference real photography of Baba Baidyanath Medical Trust, stored
 * in `/public/images/**`. To swap an image later, drop a new file in and change
 * the path here — no component needs to change.
 *
 * Note: the reception photo carries "AYUVA Healthcare" signage (the operating
 * brand of the facility); it is used only in reception/appointment contexts.
 */

export type ImageAsset = {
  src: string;
  alt: string;
};

export const IMAGES = {
  hero: {
    src: "/images/hospital/exterior.jpg",
    alt: "Baba Baidyanath Medical Trust building exterior with entrance signage",
  },
  overview: {
    src: "/images/hospital/opd-waiting.jpg",
    alt: "Spacious out-patient waiting area with diagnostic rooms",
  },
  about: {
    src: "/images/facilities/operation-theatre.jpg",
    alt: "Modern operation theatre with surgical lighting and operating table",
  },
  trust: {
    src: "/images/hospital/nursing-station.jpg",
    alt: "Nursing station on an in-patient ward with staff on duty",
  },
  emergency: {
    src: "/images/facilities/icu.jpg",
    alt: "Intensive care unit with patient beds and ventilator support",
  },
  appointment: {
    src: "/images/hospital/reception.jpg",
    alt: "Hospital reception and help desk",
  },
  facilities: {
    src: "/images/facilities/operation-theatre-2.jpg",
    alt: "Modern operating theatre with overhead LED surgical lights",
  },
  department: {
    src: "/images/departments/diagnostics.jpg",
    alt: "Diagnostics corridor with X-ray, pathology lab and imaging rooms",
  },
} satisfies Record<string, ImageAsset>;

/** Neutral gradient used as a physician placeholder until real photos exist. */
export const DOCTOR_PLACEHOLDER_GRADIENT =
  "linear-gradient(135deg, hsl(var(--primary) / 0.12), hsl(var(--secondary) / 0.16))";
