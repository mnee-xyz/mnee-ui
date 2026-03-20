"use client";

import { useRef, useState } from "react";
import { Wallet, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface InputAddressProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** Label above the pill (e.g. "Withdraw to") */
  label?: string;
  /** Show the label */
  hasLabel?: boolean;
  /** Current address value */
  value: string;
  /** Called when input changes */
  onChange: (value: string) => void;
  /** Placeholder for the input */
  placeholder?: string;
  /** Title text above the input line */
  title?: string;
  /** Leading icon — defaults to wallet icon in white circle */
  icon?: React.ReactNode;
  /** Error message — shows red border and hint text below */
  error?: string;
  /** Hint text shown below the pill (only visible when error is set) */
  hint?: string;
}

export function InputAddress({
  label = "Withdraw to",
  hasLabel = true,
  value,
  onChange,
  placeholder = "Enter address",
  title = "Address",
  icon,
  error,
  hint,
  className,
  ...props
}: InputAddressProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [focused, setFocused] = useState(false);
  const isFilled = value.length > 0;
  const showClear = focused || isFilled;

  return (
    <div className={cn("w-full flex flex-col gap-1", className)} {...props}>
      {hasLabel && (
        <p className="text-sm text-[#737373] px-3">{label}</p>
      )}
      <div
        className={cn(
          "flex items-center justify-between w-full h-[66px] px-[13px] py-[13px]",
          "rounded-full border bg-[#f5f5f5] transition-all cursor-text",
          error
            ? "border-error"
            : focused
              ? "border-brand shadow-[0px_0px_0px_3px_rgba(232,140,31,0.5)]"
              : "border-surface-border hover:border-brand"
        )}
        onClick={() => inputRef.current?.focus()}
      >
        {/* Left content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 w-full">
            {/* Leading icon */}
            <div className="shrink-0 w-8 h-8">
              {icon || (
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <Wallet size={18} className="text-gray-500" />
                </div>
              )}
            </div>
            {/* Title + input */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col justify-center text-sm font-medium tracking-[-0.15px] leading-5 text-left">
                <p className="text-gray-900">{title}</p>
                <input
                  ref={inputRef}
                  type="text"
                  autoComplete="off"
                  data-1p-ignore
                  data-lpignore="true"
                  aria-invalid={!!error}
                  value={value}
                  onChange={(e) => onChange(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  placeholder={placeholder}
                  className="w-full bg-transparent outline-none text-sm font-medium tracking-[-0.15px] leading-5 text-gray-900 placeholder:text-[#737373]"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Clear button */}
        {showClear && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onChange("");
              inputRef.current?.focus();
            }}
            className="shrink-0 w-4 h-4"
          >
            <X size={16} className="text-gray-400 hover:text-gray-600 transition-colors" />
          </button>
        )}
      </div>
      {error && hint && (
        <p className="text-sm text-error px-3">{hint}</p>
      )}
    </div>
  );
}
