import { Button } from "./button";
import type { ButtonSize } from "./button";
import { cn } from "@/lib/utils";

export type BrikSpinnerVariant = "primary" | "secondary" | "outline";

export interface BrikSpinnerProps {
  variant?: BrikSpinnerVariant;
  size?: ButtonSize;
  children?: React.ReactNode;
  className?: string;
}

export function BrikSpinner({
  variant = "primary",
  size = "md",
  children = "Loading...",
  className,
}: BrikSpinnerProps) {
  return (
    <Button
      variant={variant}
      size={size}
      loading
      className={cn(className)}
    >
      {children}
    </Button>
  );
}
