import { cn } from "@/lib/utils";

export type DetailRowVariant = "default" | "success" | "error" | "muted" | "brand";

export interface DetailRowProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value: React.ReactNode;
  action?: React.ReactNode;
  variant?: DetailRowVariant;
}

const valueStyles: Record<DetailRowVariant, string> = {
  default: "text-gray-900 font-medium",
  success: "text-success font-medium",
  error: "text-error font-medium",
  muted: "text-gray-900 font-medium",
  brand: "text-brand font-semibold",
};

export function DetailRow({
  label,
  value,
  action,
  variant = "default",
  className,
  ...props
}: DetailRowProps) {
  return (
    <div
      className={cn("flex items-center justify-between gap-4", className)}
      {...props}
    >
      <div className="text-sm text-[#737373] leading-[21px] whitespace-nowrap">{label}</div>
      <div className={cn("text-sm leading-[21px] flex items-center gap-1", valueStyles[variant])}>
        {value}
        {action}
      </div>
    </div>
  );
}
