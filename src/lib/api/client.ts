/**
 * Minimal typed API client.
 *
 * When the ASP.NET Core Web API is ready, set NEXT_PUBLIC_API_BASE_URL and the
 * feature modules in this folder will call the real endpoints. Until then they
 * fall back to local mock behaviour, so no UI component needs to know whether a
 * backend exists.
 */
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

export const isApiConfigured = () => API_BASE_URL.length > 0;

export type ApiResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: string };

export async function apiFetch<T>(
  path: string,
  init?: RequestInit
): Promise<ApiResult<T>> {
  try {
    const res = await fetch(`${API_BASE_URL}${path}`, {
      headers: { "Content-Type": "application/json", ...(init?.headers ?? {}) },
      ...init,
    });

    if (!res.ok) {
      return { ok: false, error: `Request failed (${res.status})` };
    }

    const data = (await res.json()) as T;
    return { ok: true, data };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : "Network error",
    };
  }
}

/** Simulates network latency for mock flows. */
export const mockDelay = (ms = 900) =>
  new Promise((resolve) => setTimeout(resolve, ms));
