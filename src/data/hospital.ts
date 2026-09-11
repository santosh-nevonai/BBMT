import {
  HeartHandshake,
  ClipboardCheck,
  Users,
  ScanLine,
  Siren,
  BedDouble,
} from "lucide-react";
import type { Stat } from "./types";

/**
 * Overview copy — the hospital's own source-of-truth text. Do not alter the
 * factual meaning.
 */
export const OVERVIEW_PARAGRAPHS = [
  "Baba Baidyanath Medical Trust operates a premier multi-specialty healthcare institution dedicated to delivering accessible, high-quality medical care and clinical education. Equipped with advanced diagnostic tools, modern operating theaters, round-the-clock emergency support, and comprehensive in-patient care, the hospital bridges the gap in tertiary healthcare with compassionate, evidence-based treatment.",
  "With an experienced team of medical consultants, critical care specialists, and dedicated nursing staff, the facility delivers holistic health services across outpatient, inpatient, and critical care domains.",
];

/**
 * Qualitative highlights only — NO invented numbers (no bed counts, years,
 * patient totals, etc.).
 */
export const OVERVIEW_STATS: Stat[] = [
  { label: "Emergency Care", value: "24 / 7" },
  { label: "Services", value: "Multi-Specialty" },
  { label: "Diagnostics", value: "Advanced" },
  { label: "Operation Theatres", value: "Modern" },
];

/** "Why choose us" pillars — factual themes, no fabricated achievements. */
export const WHY_CHOOSE_US = [
  {
    title: "Accessible Healthcare",
    description:
      "Care designed to bridge gaps in tertiary healthcare and remain within reach of the community it serves.",
    icon: HeartHandshake,
  },
  {
    title: "Evidence-Based Treatment",
    description:
      "Clinical decisions grounded in sound medical evidence and best practice.",
    icon: ClipboardCheck,
  },
  {
    title: "Experienced Medical Team",
    description:
      "Medical consultants, critical care specialists and dedicated nursing staff working together.",
    icon: Users,
  },
  {
    title: "Advanced Diagnostics",
    description:
      "Modern diagnostic tools that support accurate and timely diagnosis.",
    icon: ScanLine,
  },
  {
    title: "24/7 Emergency Support",
    description:
      "Round-the-clock emergency and critical care, ready when every second matters.",
    icon: Siren,
  },
  {
    title: "Comprehensive In-Patient Care",
    description:
      "Holistic services spanning outpatient, inpatient and critical care domains.",
    icon: BedDouble,
  },
] as const;

/** Emergency strip shown beneath the hero. */
export const EMERGENCY_HIGHLIGHTS = [
  "24/7 Emergency",
  "Advanced Critical Care",
  "Modern Operation Theatres",
  "24/7 Pharmacy",
  "Ambulance Support",
] as const;
