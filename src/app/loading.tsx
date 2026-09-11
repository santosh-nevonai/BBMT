import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div
      className="flex min-h-[60vh] flex-col items-center justify-center gap-4"
      role="status"
      aria-live="polite"
    >
      <Loader2 className="h-8 w-8 animate-spin text-primary" aria-hidden />
      <span className="text-sm text-muted">Loading…</span>
    </div>
  );
}
