import type { InputHTMLAttributes, ReactNode } from "react";
import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type FieldWrapperProps = {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  hint?: string;
  children: ReactNode;
};

/** Shared label + error scaffolding for form controls. */
export function Field({
  id,
  label,
  error,
  required,
  hint,
  children,
}: FieldWrapperProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
        {required ? (
          <span className="ml-0.5 text-emergency" aria-hidden>
            *
          </span>
        ) : null}
      </label>
      {children}
      {hint && !error ? (
        <p id={`${id}-hint`} className="text-xs text-muted">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p
          id={`${id}-error`}
          className="flex items-center gap-1.5 text-xs font-medium text-emergency-dark"
          role="alert"
        >
          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden />
          {error}
        </p>
      ) : null}
    </div>
  );
}

export const controlClasses =
  "h-11 w-full rounded-xl border border-border bg-surface px-3.5 text-[0.95rem] text-foreground shadow-sm outline-none transition-colors placeholder:text-muted/70 focus:border-primary focus:ring-2 focus:ring-primary/25 disabled:opacity-60 aria-[invalid=true]:border-emergency aria-[invalid=true]:focus:ring-emergency/25";

type InputProps = {
  id: string;
  label: string;
  error?: string;
  hint?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function Input({
  id,
  label,
  error,
  hint,
  required,
  className,
  ...props
}: InputProps) {
  return (
    <Field id={id} label={label} error={error} required={required} hint={hint}>
      <input
        id={id}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={
          error ? `${id}-error` : hint ? `${id}-hint` : undefined
        }
        className={cn(controlClasses, className)}
        {...props}
      />
    </Field>
  );
}
