import { LoaderCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export type SpinnerVariant = "circle" | "loader";
export type SpinnerSize = "sm" | "md" | "lg";
export type SpinnerColor = "default" | "brand" | "muted" | "success" | "error" | "warning" | "info";

export interface SpinnerProps extends React.SVGAttributes<SVGSVGElement> {
  variant?: SpinnerVariant;
  size?: SpinnerSize;
  color?: SpinnerColor;
}

const sizeMap: Record<SpinnerSize, number> = {
  sm: 12,
  md: 16,
  lg: 24,
};

const colorStyles: Record<SpinnerColor, string> = {
  default: "",
  brand:   "text-brand",
  muted:   "text-muted",
  success: "text-[#22c55e]",
  error:   "text-[#ef4444]",
  warning: "text-[#eab308]",
  info:    "text-[#3b82f6]",
};

export function Spinner({
  variant = "circle",
  size = "md",
  color = "default",
  className,
  ...props
}: SpinnerProps) {
  const px = sizeMap[size];
  const Icon = variant === "loader" ? Loader2 : LoaderCircle;
  return (
    <Icon
      size={px}
      className={cn("animate-spin shrink-0", colorStyles[color], className)}
      {...props}
    />
  );
}
