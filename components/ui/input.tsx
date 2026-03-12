import { cn } from "@/lib/utils";

export type InputSize = "sm" | "md" | "lg";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  hint?: string;
  error?: string;
  size?: InputSize;
  prefix?: string;
  suffix?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}

const sizeStyles: Record<InputSize, string> = {
  sm: "rounded-md text-xs",
  md: "rounded-lg text-sm",
  lg: "rounded-lg text-base",
};

const inputPaddingStyles: Record<InputSize, string> = {
  sm: "py-1.5 px-2.5",
  md: "py-2 px-3",
  lg: "py-2.5 px-4",
};

const addonPaddingStyles: Record<InputSize, string> = {
  sm: "px-2",
  md: "px-2.5",
  lg: "px-3",
};

const iconSizeStyles: Record<InputSize, string> = {
  sm: "[&>svg]:size-3.5",
  md: "[&>svg]:size-4",
  lg: "[&>svg]:size-5",
};

export function Input({
  label,
  hint,
  error,
  size = "md",
  className,
  id,
  disabled,
  required,
  prefix,
  suffix,
  leadingIcon,
  trailingIcon,
  ...props
}: InputProps) {
  const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  const hasLeading = leadingIcon != null || prefix != null;
  const hasTrailing = trailingIcon != null || suffix != null;

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
      <div
        className={cn(
          "flex items-center w-full border bg-white transition-colors",
          "focus-within:ring-2 focus-within:ring-brand/50",
          "has-[input:disabled]:pointer-events-none has-[input:disabled]:opacity-50",
          error
            ? "border-error focus-within:border-error focus-within:ring-error/30"
            : "border-gray-300 focus-within:border-brand",
          sizeStyles[size],
        )}
      >
        {leadingIcon && (
          <span className={cn("flex items-center pointer-events-none text-gray-400", addonPaddingStyles[size], iconSizeStyles[size])}>
            {leadingIcon}
          </span>
        )}
        {prefix && (
          <span className={cn("flex items-center pointer-events-none text-gray-400 select-none", addonPaddingStyles[size])}>
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
            "flex-1 min-w-0 bg-transparent outline-none placeholder:text-gray-400",
            inputPaddingStyles[size],
            hasLeading && "pl-1.5",
            hasTrailing && "pr-1.5",
          )}
          {...props}
        />
        {suffix && (
          <span className={cn("flex items-center pointer-events-none text-gray-400 select-none", addonPaddingStyles[size])}>
            {suffix}
          </span>
        )}
        {trailingIcon && (
          <span className={cn("flex items-center pointer-events-none text-gray-400", addonPaddingStyles[size], iconSizeStyles[size])}>
            {trailingIcon}
          </span>
        )}
      </div>
      {error ? (
        <p id={`${inputId}-error`} className="text-xs text-error">
          {error}
        </p>
      ) : hint ? (
        <p id={`${inputId}-hint`} className="text-xs text-muted">
          {hint}
        </p>
      ) : null}
    </div>
  );
}
