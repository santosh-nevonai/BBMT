"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { CalendarCheck, CheckCircle2, Loader2, RotateCcw } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { departments } from "@/data/departments";
import { doctors } from "@/data/doctors";
import {
  submitAppointment,
  type AppointmentResponse,
} from "@/lib/api/appointments";

type FormState = {
  patientName: string;
  phone: string;
  email: string;
  departmentSlug: string;
  doctorSlug: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const todayISO = () => new Date().toISOString().split("T")[0];

const emptyForm = (departmentSlug = "", doctorSlug = ""): FormState => ({
  patientName: "",
  phone: "",
  email: "",
  departmentSlug,
  doctorSlug,
  preferredDate: "",
  preferredTime: "",
  message: "",
});

export function AppointmentForm() {
  const params = useSearchParams();
  const [form, setForm] = useState<FormState>(() =>
    emptyForm(params.get("department") ?? "", params.get("doctor") ?? "")
  );
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const [confirmation, setConfirmation] = useState<AppointmentResponse | null>(
    null
  );

  const update =
    (key: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
      setForm((f) => ({ ...f, [key]: e.target.value }));
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    };

  const validate = (): boolean => {
    const next: Errors = {};
    if (!form.patientName.trim()) next.patientName = "Please enter the patient's name.";
    if (!form.phone.trim()) {
      next.phone = "Please enter a contact phone number.";
    } else if (!/^[+\d][\d\s-]{6,}$/.test(form.phone.trim())) {
      next.phone = "Please enter a valid phone number.";
    }
    if (!form.email.trim()) {
      next.email = "Please enter an email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.departmentSlug) next.departmentSlug = "Please select a department.";
    if (!form.preferredDate) {
      next.preferredDate = "Please choose a preferred date.";
    } else if (form.preferredDate < todayISO()) {
      next.preferredDate = "Please choose a date that is not in the past.";
    }
    if (!form.preferredTime) next.preferredTime = "Please choose a preferred time.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    if (!validate()) return;

    setStatus("loading");
    const res = await submitAppointment({
      patientName: form.patientName.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      departmentSlug: form.departmentSlug,
      doctorSlug: form.doctorSlug || undefined,
      preferredDate: form.preferredDate,
      preferredTime: form.preferredTime,
      message: form.message.trim() || undefined,
    });

    if (res.ok) {
      setConfirmation(res.data);
      setStatus("idle");
    } else {
      setServerError(res.error);
      setStatus("error");
    }
  };

  const reset = () => {
    setForm(emptyForm());
    setErrors({});
    setConfirmation(null);
    setStatus("idle");
    setServerError(null);
  };

  // ── Success state ──────────────────────────────────────────────
  if (confirmation) {
    return (
      <div
        className="flex flex-col items-center gap-4 rounded-2xl border border-secondary/30 bg-secondary/5 p-8 text-center"
        role="status"
        aria-live="polite"
      >
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-secondary/15 text-secondary-dark">
          <CheckCircle2 className="h-7 w-7" aria-hidden />
        </span>
        <div>
          <h2 className="text-xl font-semibold text-foreground">
            Appointment request received
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted">
            Thank you. Our team will reach out to confirm your appointment. Your
            reference number is{" "}
            <span className="font-semibold text-foreground">
              {confirmation.referenceId}
            </span>
            .
          </p>
        </div>
        <Button variant="outline" onClick={reset}>
          <RotateCcw className="h-4 w-4" />
          Book another appointment
        </Button>
      </div>
    );
  }

  // ── Form ───────────────────────────────────────────────────────
  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          id="patientName"
          label="Patient Name"
          required
          autoComplete="name"
          placeholder="Full name"
          value={form.patientName}
          onChange={update("patientName")}
          error={errors.patientName}
        />
        <Input
          id="phone"
          label="Phone Number"
          type="tel"
          required
          autoComplete="tel"
          placeholder="Contact number"
          value={form.phone}
          onChange={update("phone")}
          error={errors.phone}
        />
      </div>

      <Input
        id="email"
        label="Email"
        type="email"
        required
        autoComplete="email"
        placeholder="you@example.com"
        value={form.email}
        onChange={update("email")}
        error={errors.email}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Select
          id="departmentSlug"
          label="Department"
          required
          placeholder="Select a department"
          value={form.departmentSlug}
          onChange={update("departmentSlug")}
          error={errors.departmentSlug}
          options={departments.map((d) => ({ value: d.slug, label: d.name }))}
        />
        <Select
          id="doctorSlug"
          label="Preferred Doctor"
          placeholder="No preference"
          hint="Optional"
          value={form.doctorSlug}
          onChange={update("doctorSlug")}
          options={doctors.map((d) => ({ value: d.slug, label: d.name }))}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          id="preferredDate"
          label="Preferred Date"
          type="date"
          required
          min={todayISO()}
          value={form.preferredDate}
          onChange={update("preferredDate")}
          error={errors.preferredDate}
        />
        <Input
          id="preferredTime"
          label="Preferred Time"
          type="time"
          required
          value={form.preferredTime}
          onChange={update("preferredTime")}
          error={errors.preferredTime}
        />
      </div>

      <Textarea
        id="message"
        label="Message"
        hint="Optional. Briefly describe your concern or any special request."
        rows={4}
        placeholder="Tell us how we can help…"
        value={form.message}
        onChange={update("message")}
      />

      {serverError ? (
        <p
          className="rounded-xl border border-emergency/30 bg-emergency/5 px-4 py-3 text-sm text-emergency-dark"
          role="alert"
        >
          {serverError} Please try again.
        </p>
      ) : null}

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" disabled={status === "loading"}>
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Submitting…
            </>
          ) : (
            <>
              <CalendarCheck className="h-4 w-4" />
              Request Appointment
            </>
          )}
        </Button>
        <p className="text-xs text-muted">
          For medical emergencies, please call our emergency helpline directly.
        </p>
      </div>
    </form>
  );
}
