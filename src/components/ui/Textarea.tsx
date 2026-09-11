import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Field, controlClasses } from "./Input";

type TextareaProps = {
  id: string;
  label: string;
  error?: string;
  hint?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({
  id,
  label,
  error,
  hint,
  required,
  className,
  rows = 4,
  ...props
}: TextareaProps) {
  return (
    <Field id={id} label={label} error={error} required={required} hint={hint}>
      <textarea
        id={id}
        rows={rows}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={
          error ? `${id}-error` : hint ? `${id}-hint` : undefined
        }
        className={cn(controlClasses, "h-auto resize-y py-2.5", className)}
        {...props}
      />
    </Field>
  );
}
