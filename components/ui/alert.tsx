"use client";

import { Info, AlertTriangle, Lightbulb, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export type AlertVariant = "info" | "warning" | "tip" | "error" | "success";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
  title?: string;
  children?: React.ReactNode;
}

const variantStyles: Record<AlertVariant, { wrapper: string; text: string }> = {
  info: {
    wrapper: "border-blue-800 bg-blue-50",
    text: "text-blue-800",
  },
  warning: {
    wrapper: "border-[#FFF085] bg-[#FEFCE8]",
    text: "text-[#A65F00]",
  },
  tip: {
    wrapper: "border-[#FFF085] bg-[#FEFCE8]",
    text: "text-[#A65F00]",
  },
  error: {
    wrapper: "border-error/40 bg-error-bg",
    text: "text-error",
  },
  success: {
    wrapper: "border-success/40 bg-success-bg",
    text: "text-success",
  },
};

const variantIcons: Record<AlertVariant, React.ElementType> = {
  info: Info,
  warning: AlertTriangle,
  tip: Lightbulb,
  error: AlertTriangle,
  success: CheckCircle,
};

const variantLabels: Record<AlertVariant, string> = {
  info: "Note",
  warning: "Warning",
  tip: "Tip",
  error: "Error",
  success: "Success",
};

export function Alert({
  variant = "info",
  title,
  children,
  className,
  ...props
}: AlertProps) {
  const styles = variantStyles[variant];
  const Icon = variantIcons[variant];
  const label = title ?? variantLabels[variant];

  return (
    <div
      className={cn(
        "rounded-lg border px-4 py-2",
        styles.wrapper,
        className
      )}
      {...props}
    >
      <div className={cn("flex items-center gap-2 font-medium text-[12px]", styles.text)}>
        <Icon size={15} />
        <span>{label}</span>
      </div>
      {children && (
        <div className={cn("pl-6 font-light text-[12px]", styles.text)}>
          {children}
        </div>
      )}
    </div>
  );
}
