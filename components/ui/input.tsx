import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
  prefix?: string;
  suffix?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  layout?: "stacked" | "inline";
  action?: React.ReactNode;
}

export function Input({
  label,
  hint,
  error,
  className,
  id,
  disabled,
  required,
  prefix,
  suffix,
  leadingIcon,
  trailingIcon,
  layout,
  action,
  ...props
}: InputProps) {
  const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  const hasLeading = leadingIcon != null || prefix != null;
  const hasTrailing = trailingIcon != null || suffix != null;

  const fieldBox = (
    <div
      className={cn(
        "flex items-center w-full rounded-md border bg-white text-base transition-colors",
        "shadow-xs focus-within:ring-[3px] focus-within:ring-brand/50",
        "has-[input:disabled]:pointer-events-none has-[input:disabled]:opacity-50",
        error
          ? "border-error focus-within:border-error focus-within:ring-error/50"
          : "border-gray-300 focus-within:border-brand",
      )}
    >
      {leadingIcon && (
        <span className="flex items-center pointer-events-none text-gray-400 px-2.5 [&>svg]:size-4">
          {leadingIcon}
        </span>
      )}
      {prefix && (
        <span className="flex items-center pointer-events-none text-gray-400 select-none px-2.5">
          {prefix}
        </span>
      )}
      <input
        id={inputId}
        disabled={disabled}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
        className={cn(
          "flex-1 min-w-0 bg-transparent outline-none placeholder:text-gray-400 py-2 px-3",
          hasLeading && "pl-1.5",
          hasTrailing && "pr-1.5",
        )}
        {...props}
      />
      {suffix && (
        <span className="flex items-center pointer-events-none text-gray-400 select-none px-2.5">
          {suffix}
        </span>
      )}
      {trailingIcon && (
        <span className="flex items-center pointer-events-none text-gray-400 px-2.5 [&>svg]:size-4">
          {trailingIcon}
        </span>
      )}
    </div>
  );

  return (
    <div className={cn("w-full flex flex-col gap-1", className)}>
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-gray-900"
        >
          {label}
          {required && (
            <span aria-hidden="true" className="text-error ml-0.5">*</span>
          )}
        </label>
      )}

      {layout === "inline" ? (
        <div className="flex items-center gap-2">
          <div className="flex-1">{fieldBox}</div>
          {action}
        </div>
      ) : (
        fieldBox
      )}

      {error ? (
        <p id={`${inputId}-error`} className="text-xs text-error">
          {error}
        </p>
      ) : hint && layout !== "inline" ? (
        <p id={`${inputId}-hint`} className="text-xs text-muted">
          {hint}
        </p>
      ) : null}

      {layout === "stacked" && action && <div>{action}</div>}
    </div>
  );
}
