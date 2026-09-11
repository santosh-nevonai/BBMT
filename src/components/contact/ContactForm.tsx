"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Send, RotateCcw } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { submitContact } from "@/lib/api/contact";

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const emptyForm: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const update =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [key]: e.target.value }));
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    };

  const validate = () => {
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.subject.trim()) next.subject = "Please add a subject.";
    if (!form.message.trim()) {
      next.message = "Please enter a message.";
    } else if (form.message.trim().length < 10) {
      next.message = "Please provide a little more detail.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    if (!validate()) return;

    setStatus("loading");
    const res = await submitContact({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim() || undefined,
      subject: form.subject.trim(),
      message: form.message.trim(),
    });

    if (res.ok) {
      setSent(true);
      setStatus("idle");
    } else {
      setServerError(res.error);
      setStatus("error");
    }
  };

  const reset = () => {
    setForm(emptyForm);
    setErrors({});
    setSent(false);
    setStatus("idle");
    setServerError(null);
  };

  if (sent) {
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
            Message sent
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted">
            Thank you for reaching out. Our team will respond as soon as
            possible.
          </p>
        </div>
        <Button variant="outline" onClick={reset}>
          <RotateCcw className="h-4 w-4" />
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          id="name"
          label="Name"
          required
          autoComplete="name"
          value={form.name}
          onChange={update("name")}
          error={errors.name}
        />
        <Input
          id="contactEmail"
          label="Email"
          type="email"
          required
          autoComplete="email"
          value={form.email}
          onChange={update("email")}
          error={errors.email}
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          id="contactPhone"
          label="Phone"
          type="tel"
          hint="Optional"
          autoComplete="tel"
          value={form.phone}
          onChange={update("phone")}
        />
        <Input
          id="subject"
          label="Subject"
          required
          value={form.subject}
          onChange={update("subject")}
          error={errors.subject}
        />
      </div>
      <Textarea
        id="contactMessage"
        label="Message"
        required
        rows={5}
        value={form.message}
        onChange={update("message")}
        error={errors.message}
      />

      {serverError ? (
        <p
          className="rounded-xl border border-emergency/30 bg-emergency/5 px-4 py-3 text-sm text-emergency-dark"
          role="alert"
        >
          {serverError} Please try again.
        </p>
      ) : null}

      <div>
        <Button type="submit" size="lg" disabled={status === "loading"}>
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Send Message
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
