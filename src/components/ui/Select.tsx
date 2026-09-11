import type { SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Field, controlClasses } from "./Input";

export type SelectOption = { value: string; label: string };

type SelectProps = {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  options: SelectOption[];
  placeholder?: string;
} & SelectHTMLAttributes<HTMLSelectElement>;

export function Select({
  id,
  label,
  error,
  hint,
  options,
  placeholder,
  required,
  className,
  ...props
}: SelectProps) {
  return (
    <Field id={id} label={label} error={error} required={required} hint={hint}>
      <div className="relative">
        <select
          id={id}
          required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={
            error ? `${id}-error` : hint ? `${id}-hint` : undefined
          }
          className={cn(
            controlClasses,
            "appearance-none pr-10",
            props.value === "" && "text-muted/70",
            className
          )}
          {...props}
        >
          {placeholder ? (
            <option value="" disabled>
              {placeholder}
            </option>
          ) : null}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
          aria-hidden
        />
      </div>
    </Field>
  );
}
