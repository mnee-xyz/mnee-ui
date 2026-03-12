import { LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export type ButtonIconVariant = "primary" | "secondary" | "destructive" | "outline" | "ghost";

export interface ButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonIconVariant;
  loading?: boolean;
  icon?: React.ReactNode;
}

const variantStyles: Record<ButtonIconVariant, string> = {
  primary:
    "bg-brand text-white hover:opacity-80 disabled:bg-[#fdba74]",
  secondary:
    "bg-gray-100 text-gray-900 shadow-sm hover:bg-gray-200 hover:opacity-80 disabled:bg-[#cecece]",
  destructive:
    "bg-error text-white hover:opacity-80 disabled:bg-[#fca5a5]",
  outline:
    "bg-white border border-surface-border shadow-sm hover:bg-[#f5f5f5] hover:opacity-80 disabled:bg-[#cecece]",
  ghost:
    "hover:bg-[#f5f5f5] hover:shadow-sm hover:opacity-80 disabled:bg-[#cecece] disabled:shadow-sm",
};

export function ButtonIcon({
  variant = "primary",
  loading = false,
  disabled,
  icon,
  className,
  ...props
}: ButtonIconProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg size-8 transition-opacity",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50",
        "disabled:pointer-events-none disabled:opacity-80",
        variantStyles[variant],
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? <LoaderCircle className="animate-spin" size={14} /> : icon}
    </button>
  );
}
