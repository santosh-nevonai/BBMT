import {
  Stethoscope,
  HeartPulse,
  Slice,
  Baby,
  Bone,
  Activity,
  Heart,
  Syringe,
  ScanLine,
  Microscope,
} from "lucide-react";
import type { Department } from "./types";

/**
 * Departments - strictly the specialties and sub-services supplied by the
 * hospital. Descriptions/services are only included where confirmed; nothing
 * is invented.
 */
export const departments: Department[] = [
  {
    slug: "general-medicine",
    name: "General Medicine",
    description:
      "Comprehensive evaluation, diagnosis and treatment of a broad range of adult medical conditions.",
    intro:
      "Our General Medicine team provides evidence-based diagnosis and management across a wide range of adult health conditions, coordinating care with other specialties where needed.",
    services: [],
    icon: Stethoscope,
    image: "/images/hospital/opd-waiting.jpg",
    imageAlt: "Out-patient waiting and consultation area",
  },
  {
    slug: "critical-care-emergency-medicine",
    name: "Critical Care & Emergency Medicine",
    description:
      "Round-the-clock emergency response with resuscitation and advanced intensive care management.",
    intro:
      "Our Critical Care & Emergency Medicine department delivers immediate, life-saving intervention supported by resuscitation expertise and advanced intensive care management, available around the clock.",
    services: [
      "24/7 emergency response",
      "Resuscitation",
      "Advanced intensive care management",
    ],
    icon: HeartPulse,
    emergencyRelated: true,
    image: "/images/facilities/icu.jpg",
    imageAlt: "Intensive care unit with ventilator support",
  },
  {
    slug: "general-minimal-access-surgery",
    name: "General & Minimal Access Surgery",
    description:
      "Open and laparoscopic surgery for abdominal, gastrointestinal and general surgical conditions.",
    intro:
      "Our surgical team provides both open and minimal access (laparoscopic) approaches, selecting the technique best suited to each patient across abdominal, gastrointestinal and general surgical conditions.",
    services: [
      "Open surgery",
      "Laparoscopic surgery",
      "Abdominal conditions",
      "Gastrointestinal conditions",
      "General surgical conditions",
    ],
    icon: Slice,
    image: "/images/facilities/operation-theatre.jpg",
    imageAlt: "Modern operation theatre with surgical lighting",
  },
  {
    slug: "obstetrics-gynecology",
    name: "Obstetrics & Gynecology",
    description:
      "Care for women across pregnancy, childbirth and gynecological health.",
    intro:
      "Our Obstetrics & Gynecology department supports women through pregnancy, childbirth and a range of gynecological health needs with compassionate, evidence-based care.",
    services: [],
    icon: Baby,
    image: "/images/facilities/labour-room.jpg",
    imageAlt: "Labour and delivery procedure room",
  },
  {
    slug: "orthopedics-trauma-surgery",
    name: "Orthopedics & Trauma Surgery",
    description:
      "Diagnosis and surgical care for musculoskeletal injuries and orthopedic conditions.",
    intro:
      "Our Orthopedics & Trauma Surgery team manages injuries and conditions affecting bones, joints and the musculoskeletal system, from trauma care through to surgical treatment and recovery.",
    services: [],
    icon: Bone,
    image: "/images/facilities/ot-minor.jpg",
    imageAlt: "Operation theatre prepared for a surgical procedure",
  },
  {
    slug: "pediatrics-neonatology",
    name: "Pediatrics & Neonatology",
    description:
      "Dedicated care for infants and children, including newborn care.",
    intro:
      "Our Pediatrics & Neonatology department provides attentive care for infants and children, including specialised support for newborns.",
    services: [],
    icon: Activity,
    image: "/images/hospital/nursing-station.jpg",
    imageAlt: "In-patient ward with nursing station",
  },
  {
    slug: "cardiology",
    name: "Cardiology",
    description: "Assessment of heart health with non-invasive diagnostics.",
    intro:
      "Our Cardiology team focuses on the assessment and management of heart health, supported by non-invasive diagnostic capabilities.",
    services: ["Non-invasive diagnostics"],
    icon: Heart,
    image: "/images/departments/diagnostics.jpg",
    imageAlt: "Diagnostics area including Echo / TMT room",
  },
  {
    slug: "anesthesiology-pain-management",
    name: "Anesthesiology & Pain Management",
    description:
      "Peri-operative anesthesia care and management of pain.",
    intro:
      "Our Anesthesiology & Pain Management department supports safe surgical care through peri-operative anesthesia and provides management of pain.",
    services: [],
    icon: Syringe,
    image: "/images/facilities/operation-theatre-2.jpg",
    imageAlt: "Operation theatre with overhead LED surgical lights",
  },
  {
    slug: "radiology-diagnostic-imaging",
    name: "Radiology & Diagnostic Imaging",
    description:
      "Diagnostic imaging to support accurate, timely diagnosis.",
    intro:
      "Our Radiology & Diagnostic Imaging department provides imaging services that support accurate and timely diagnosis across specialties.",
    services: [],
    icon: ScanLine,
    image: "/images/departments/diagnostics.jpg",
    imageAlt: "Radiology and diagnostic imaging corridor including X-ray room",
  },
  {
    slug: "pathology-laboratory-medicine",
    name: "Pathology & Laboratory Medicine",
    description:
      "Laboratory diagnostics supporting clinical decision-making.",
    intro:
      "Our Pathology & Laboratory Medicine department delivers laboratory diagnostics that underpin accurate clinical decision-making across the hospital.",
    services: [],
    icon: Microscope,
    image: "/images/departments/diagnostics.jpg",
    imageAlt: "Pathology laboratory within the diagnostics corridor",
  },
];

export const getDepartment = (slug: string): Department | undefined =>
  departments.find((d) => d.slug === slug);

export const departmentSlugs = departments.map((d) => d.slug);
