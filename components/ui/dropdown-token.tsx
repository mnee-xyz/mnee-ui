import { ChevronDown, Coins } from "lucide-react";
import { cn } from "@/lib/utils";

export interface DropdownTokenProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Section label above the trigger (e.g. "Convert in") */
  label?: string;
  /** Show the label */
  hasLabel?: boolean;
  /** Leading icon node (e.g. TokenIcon) — only rendered when hasLeadingIcon is true */
  icon?: React.ReactNode;
  /** Show the leading icon slot */
  hasLeadingIcon?: boolean;
  /** Show the trailing chevron icon */
  hasTrailingIcon?: boolean;
  /** Primary text */
  title: string;
  /** Secondary text below title */
  subtitle?: string;
  /** Rotates chevron when open */
  isOpen?: boolean;
}

const DefaultIcon = () => (
  <div className="w-8 h-8 rounded-full bg-white border border-surface-border flex items-center justify-center">
    <Coins size={18} className="text-gray-400" />
  </div>
);

export function DropdownToken({
  label,
  hasLabel = true,
  icon,
  hasLeadingIcon = true,
  hasTrailingIcon = true,
  title,
  subtitle,
  isOpen = false,
  className,
  ...props
}: DropdownTokenProps) {
  return (
    <div className={cn("w-full", className)}>
      {hasLabel && label && (
        <p className="text-sm text-muted mb-1">{label}</p>
      )}
      <button
        type="button"
        className={cn(
          "flex items-center justify-between w-full h-[66px] px-[13px] py-[13px]",
          "rounded-full border border-surface-border bg-[#f5f5f5]",
          "transition-all hover:border-brand",
          "focus:outline-none focus:border-brand focus:shadow-[0px_0px_0px_3px_rgba(232,140,31,0.5)]"
        )}
        {...props}
      >
        {/* Left content — matches Figma "Container" */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 w-full">
            {hasLeadingIcon && (
              <div className="shrink-0 w-8 h-8">{icon || <DefaultIcon />}</div>
            )}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col justify-center text-sm font-medium tracking-[-0.15px] leading-5 text-left">
                <p className="text-gray-900 truncate">{title}</p>
                {subtitle && (
                  <p className="text-muted truncate">{subtitle}</p>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Chevron */}
        {hasTrailingIcon && (
          <div className="shrink-0 w-4 h-4">
            <ChevronDown
              size={16}
              className={cn(
                "text-gray-400 transition-transform duration-200",
                isOpen && "rotate-180"
              )}
            />
          </div>
        )}
      </button>
    </div>
  );
}
