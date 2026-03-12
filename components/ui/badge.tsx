import { cn } from "@/lib/utils";

export type BadgeVariant = "success" | "warning" | "error" | "info" | "default" | "brand";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children?: React.ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  success: "bg-success text-white",
  warning: "bg-warning text-white",
  error:   "bg-red-600 text-white",
  info:    "bg-info text-white",
  default: "bg-gray-600 text-white",
  brand:   "bg-brand text-white",
};

export function Badge({
  variant = "default",
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center px-2.5 py-0.5 rounded-lg",
        "text-xs font-medium leading-4 whitespace-nowrap",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
