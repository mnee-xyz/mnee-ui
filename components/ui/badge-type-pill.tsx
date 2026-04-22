import { cn } from "@/lib/utils";

export type BadgeTypePillVariant = "receive" | "send";

export interface BadgeTypePillProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant: BadgeTypePillVariant;
  children?: React.ReactNode;
}

const variantStyles: Record<BadgeTypePillVariant, string> = {
  receive: "bg-brand text-white",
  send:    "border border-surface-border bg-transparent text-[#0a0a0a]",
};

export function BadgeTypePill({
  variant,
  className,
  children,
  ...props
}: BadgeTypePillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center px-2.5 h-[22px] rounded-full",
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
