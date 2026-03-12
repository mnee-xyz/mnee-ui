import { cn } from "@/lib/utils";

export type BannerVariant = "gradient" | "info" | "success" | "warning" | "error";

export interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  variant?: BannerVariant;
  action?: React.ReactNode;
}

const variantStyles: Record<BannerVariant, { wrapper: string; title: string; desc: string }> = {
  gradient: {
    wrapper: "border border-[var(--color-surface-border)]",
    title:   "text-gray-800",
    desc:    "text-gray-600",
  },
  info: {
    wrapper: "bg-info-bg border border-info/20",
    title:   "text-info",
    desc:    "text-info/80",
  },
  success: {
    wrapper: "bg-success-bg border border-success/20",
    title:   "text-success",
    desc:    "text-success/80",
  },
  warning: {
    wrapper: "bg-warning-bg border border-warning/20",
    title:   "text-warning",
    desc:    "text-warning/80",
  },
  error: {
    wrapper: "bg-error-bg border border-error/20",
    title:   "text-error",
    desc:    "text-error/80",
  },
};

export function Banner({
  title,
  description,
  variant = "gradient",
  action,
  className,
  ...props
}: BannerProps) {
  const styles = variantStyles[variant];

  return (
    <div
      className={cn(
        "rounded-lg p-4 flex items-center justify-between gap-4 shadow-sm",
        styles.wrapper,
        className
      )}
      style={
        variant === "gradient"
          ? { background: "linear-gradient(90deg, #F0FDFA 0%, #FFF7ED 100%)" }
          : undefined
      }
      {...props}
    >
      <div className="flex flex-col gap-0.5">
        <p className={cn("font-semibold text-sm", styles.title)}>{title}</p>
        {description && (
          <p className={cn("text-sm", styles.desc)}>{description}</p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
