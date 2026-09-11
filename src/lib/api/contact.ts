import { apiFetch, isApiConfigured, mockDelay } from "./client";
import type { ApiResult } from "./client";

export type ContactRequest = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
};

export type ContactResponse = {
  referenceId: string;
};

/**
 * Submit a general contact enquiry.
 * Future: POST /api/contact on the ASP.NET Core API.
 */
export async function submitContact(
  payload: ContactRequest
): Promise<ApiResult<ContactResponse>> {
  if (isApiConfigured()) {
    return apiFetch<ContactResponse>(`/api/contact`, {
      method: "POST",
      body: JSON.stringify(payload),
    });
  }

  await mockDelay();
  return {
    ok: true,
    data: { referenceId: `MSG-${Date.now().toString(36).toUpperCase()}` },
  };
}
