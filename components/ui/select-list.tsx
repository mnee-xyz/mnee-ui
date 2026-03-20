import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SelectOption {
  id: string;
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
}

export interface SelectListProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSelect"> {
  options: SelectOption[];
  selectedId?: string;
  onSelect: (option: SelectOption) => void;
  maxHeight?: string;
}

export function SelectList({
  options,
  selectedId,
  onSelect,
  maxHeight = "400px",
  className,
  ...props
}: SelectListProps) {
  return (
    <div
      className={cn(
        "w-full rounded-2xl border border-surface-border bg-[#f5f5f5] overflow-hidden",
        "shadow-2xl",
        className
      )}
      {...props}
    >
      <div className="overflow-y-auto p-px" style={{ maxHeight }}>
        {options.map((option) => {
          const isSelected = option.id === selectedId;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onSelect(option)}
              className={cn(
                "flex items-center justify-between w-full h-[60px] px-4",
                "transition-colors text-left",
                "hover:bg-black/5 focus:outline-none focus:bg-black/5"
              )}
            >
              <div className="flex items-center gap-3">
                {option.icon && (
                  <div className="shrink-0 w-8 h-8">{option.icon}</div>
                )}
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm font-medium leading-5 tracking-[-0.15px] text-gray-900">
                    {option.title}
                  </p>
                  {option.subtitle && (
                    <p className="text-xs leading-4 text-[#99a1af]">
                      {option.subtitle}
                    </p>
                  )}
                </div>
              </div>
              {isSelected && (
                <div className="shrink-0 w-4 h-4">
                  <Check size={16} className="text-gray-900" />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
