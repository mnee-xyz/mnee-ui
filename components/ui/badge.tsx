import { cn } from "@/lib/utils";

export type BadgeVariant =
  | "default" | "secondary" | "destructive" | "outline"
  | "success"  | "warning"   | "info";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  default:     "bg-brand text-white",
  secondary:   "bg-[#f5f5f5] text-[#0a0a0a]",
  destructive: "bg-error text-white",
  outline:     "border border-surface-border bg-transparent text-[#0a0a0a]",
  success:     "bg-success text-white",
  warning:     "bg-surface-border text-[#737373]",
  info:        "bg-[#0d74ce] text-white",
};

export function Badge({
  variant = "default",
  icon,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2.5 h-[22px] rounded-lg",
        "text-xs font-medium leading-4 whitespace-nowrap",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {icon}
      {children}
    </span>
  );
}
