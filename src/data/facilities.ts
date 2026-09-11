import {
  Ambulance,
  Siren,
  HeartPulse,
  Cross,
  Pill,
} from "lucide-react";
import type { Facility } from "./types";

/**
 * Confirmed hospital facilities — exactly as supplied. We do NOT invent counts
 * (beds, theatres, ambulances), equipment brands, blood bank, cafeteria, etc.
 */
export const facilities: Facility[] = [
  {
    slug: "emergency-trauma",
    name: "24/7 Emergency & Trauma Unit",
    description: "Round-the-clock emergency and trauma support.",
    icon: Siren,
  },
  {
    slug: "intensive-care",
    name: "Intensive Care Units",
    description: "ICU / HDU facilities for critical care.",
    icon: HeartPulse,
  },
  {
    slug: "operation-theatres",
    name: "Modern Operation Theatres",
    description: "Modern operating theatre infrastructure.",
    icon: Cross,
  },
  {
    slug: "pharmacy",
    name: "In-House 24/7 Pharmacy",
    description: "Round-the-clock pharmacy support within the hospital.",
    icon: Pill,
  },
  {
    slug: "ambulance",
    name: "Ambulance & Patient Transport",
    description: "Ambulance and patient transportation support.",
    icon: Ambulance,
  },
];

export const getFacility = (slug: string): Facility | undefined =>
  facilities.find((f) => f.slug === slug);
