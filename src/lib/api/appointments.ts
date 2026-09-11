import { API_BASE_URL, apiFetch, isApiConfigured, mockDelay } from "./client";
import type { ApiResult } from "./client";

export type AppointmentRequest = {
  patientName: string;
  phone: string;
  email: string;
  departmentSlug: string;
  doctorSlug?: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
};

export type AppointmentResponse = {
  referenceId: string;
  receivedAt: string;
};

/**
 * Submit an appointment request.
 * Future: POST /api/appointments on the ASP.NET Core API.
 */
export async function submitAppointment(
  payload: AppointmentRequest
): Promise<ApiResult<AppointmentResponse>> {
  if (isApiConfigured()) {
    return apiFetch<AppointmentResponse>(`/api/appointments`, {
      method: "POST",
      body: JSON.stringify(payload),
    });
  }

  // Mock flow (no backend configured yet)
  await mockDelay();
  return {
    ok: true,
    data: {
      referenceId: `BBMT-${Date.now().toString(36).toUpperCase()}`,
      receivedAt: new Date().toISOString(),
    },
  };
}

export const APPOINTMENTS_ENDPOINT = `${API_BASE_URL}/api/appointments`;
