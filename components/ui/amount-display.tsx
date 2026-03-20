"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

export interface AmountDisplayProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** Current numeric string (e.g. "120", "0.5", "") */
  value: string;
  /** Called when the user types — receives the raw string */
  onChange?: (value: string) => void;
  /** Currency prefix shown at smaller size (e.g. "$") */
  prefix?: string;
  /** Token suffix shown at smaller size (e.g. "USDC") — used in crypto denomination mode */
  suffix?: string;
  /** Placeholder shown when value is empty (default "0") */
  placeholder?: string;
  /** Subtitle text below the amount — pass your backend balance here */
  subtitle?: string;
  /** Inline action in the subtitle (e.g. "Max" button) — wire onClick to set the BE balance */
  subtitleAction?: { label: string; onClick: () => void };
  /** When true, renders as static text (no input) */
  readOnly?: boolean;
}

export function AmountDisplay({
  value,
  onChange,
  prefix = "$",
  suffix,
  placeholder = "0",
  subtitle,
  subtitleAction,
  readOnly = false,
  className,
  ...props
}: AmountDisplayProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const isEmpty = !value || value === "0";
  const displayValue = isEmpty ? placeholder : value;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value;
    // Allow only digits, one decimal point, and empty string
    if (raw === "" || /^\d*\.?\d*$/.test(raw)) {
      onChange?.(raw);
    }
  }

  return (
    <div
      className={cn("text-center", className)}
      onClick={() => !readOnly && inputRef.current?.focus()}
      {...props}
    >
      <div className="flex items-center justify-center gap-1">
        {prefix && (
          <div className="text-[30px] font-bold leading-9 text-gray-900">
            {prefix}
          </div>
        )}

        {readOnly ? (
          <div
            className={cn(
              "text-[60px] font-bold leading-[60px]",
              isEmpty ? "text-muted" : "text-gray-900"
            )}
          >
            {displayValue}
          </div>
        ) : (
          <div className="relative inline-flex">
            {/* Visible placeholder — absolutely positioned so it doesn't affect width */}
            {isEmpty && (
              <div
                aria-hidden="true"
                className="absolute inset-0 text-[60px] font-bold leading-[60px] text-muted pointer-events-none"
              >
                {placeholder}
              </div>
            )}
            {/* Invisible sizer — keeps the input width matching the text */}
            <div
              aria-hidden="true"
              className="text-[60px] font-bold leading-[60px] whitespace-pre invisible"
            >
              {displayValue || placeholder}
            </div>
            <input
              ref={inputRef}
              type="text"
              inputMode="decimal"
              autoComplete="off"
              data-1p-ignore
              data-lpignore="true"
              value={value}
              onChange={handleChange}
              className={cn(
                "absolute inset-0 w-full bg-transparent outline-none text-left",
                "text-[60px] font-bold leading-[60px] text-gray-900",
                "caret-brand"
              )}
            />
          </div>
        )}

        {suffix && (
          <div className="text-[30px] font-bold leading-9 text-gray-900">
            {suffix}
          </div>
        )}
      </div>

      {(subtitle || subtitleAction) && (
        <p className="mt-3 text-sm text-[#737373]">
          {subtitle}
          {subtitleAction && (
            <button
              type="button"
              onClick={subtitleAction.onClick}
              className="ml-1.5 font-semibold text-brand hover:text-brand-dark transition-colors"
            >
              {subtitleAction.label}
            </button>
          )}
        </p>
      )}
    </div>
  );
}
