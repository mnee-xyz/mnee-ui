import { cn } from "@/lib/utils";
import { DetailRow } from "./detail-row";
import type { DetailRowVariant } from "./detail-row";

export type ConfirmCardState = "default" | "loading";

export interface ConfirmCardRow {
  label: string;
  value: React.ReactNode;
  action?: React.ReactNode;
  variant?: DetailRowVariant;
}

export interface ConfirmCardProps extends React.HTMLAttributes<HTMLDivElement> {
  subtitle?: string;
  amount: string;
  rows: ConfirmCardRow[];
  belowDivider?: ConfirmCardRow[];
  state?: ConfirmCardState;
  skeletonRowCount?: number;
}

export function ConfirmCard({
  subtitle = "You're withdrawing",
  amount,
  rows,
  belowDivider,
  state = "default",
  skeletonRowCount = 5,
  className,
  ...props
}: ConfirmCardProps) {
  const isLoading = state === "loading";

  return (
    <div
      className={cn("rounded-xl border border-[#e5e5e5] overflow-hidden", className)}
      {...props}
    >
      {/* Header */}
      <div className={cn("bg-[#f5f5f5] pt-3 px-4 pb-4", isLoading && "animate-pulse")}>
        {isLoading ? (
          <>
            <div className="h-3 w-28 rounded-full bg-[#e0e0e0] mb-3" />
            <div className="h-8 w-36 rounded-lg bg-[#e0e0e0]" />
          </>
        ) : (
          <>
            <p className="text-sm text-[#737373]">{subtitle}</p>
            <p className="text-[30px] leading-9 font-semibold text-gray-900">{amount}</p>
          </>
        )}
      </div>

      {/* Body */}
      <div className={cn("flex flex-col gap-3 p-4", isLoading && "animate-pulse")}>
        {isLoading
          ? Array.from({ length: skeletonRowCount }).map((_, i) => (
              <DetailRow key={i} variant="loading" />
            ))
          : (
            <>
              {rows.map((row, i) => (
                <DetailRow
                  key={i}
                  label={row.label}
                  value={row.value}
                  action={row.action}
                  variant={row.variant}
                />
              ))}
              {belowDivider && belowDivider.length > 0 && (
                <>
                  <div className="border-t border-[#e5e5e5]" />
                  {belowDivider.map((row, i) => (
                    <DetailRow
                      key={i}
                      label={row.label}
                      value={row.value}
                      action={row.action}
                      variant={row.variant}
                    />
                  ))}
                </>
              )}
            </>
          )}
      </div>
    </div>
  );
}
