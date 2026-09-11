import { apiFetch, isApiConfigured } from "./client";
import { departments } from "@/data/departments";
import { doctors } from "@/data/doctors";
import { facilities } from "@/data/facilities";
import type { Department, Doctor, Facility } from "@/data/types";

/**
 * Read-only directory data (departments / doctors / facilities).
 *
 * These currently return the local static data. When the API is available they
 * transparently switch to:
 *   GET /api/departments
 *   GET /api/doctors
 *   GET /api/facilities
 *
 * NOTE: Lucide icon components cannot be serialised over the wire, so a real
 * integration would map an API `icon` string back to a component here.
 */

export async function getDepartments(): Promise<Department[]> {
  if (isApiConfigured()) {
    const res = await apiFetch<Department[]>("/api/departments");
    if (res.ok) return res.data;
  }
  return departments;
}

export async function getDoctors(): Promise<Doctor[]> {
  if (isApiConfigured()) {
    const res = await apiFetch<Doctor[]>("/api/doctors");
    if (res.ok) return res.data;
  }
  return doctors;
}

export async function getFacilities(): Promise<Facility[]> {
  if (isApiConfigured()) {
    const res = await apiFetch<Facility[]>("/api/facilities");
    if (res.ok) return res.data;
  }
  return facilities;
}
