"use client";

import { cn } from "@/lib/utils";
import { Badge } from "./badge";
import { Button } from "./button";

/* ── Discriminated union ──────────────────────────────── */

type BalanceCardProps = {
  variant: "balance";
  title: string;
  description?: string;
  amount: string;
  action?: React.ReactNode;
  loading?: boolean;
  className?: string;
};

type ModuleCardProps = {
  variant: "module";
  title: string;
  description?: string;
  status?: "success" | "warning" | "destructive" | "info" | "default";
  statusLabel?: string;
  onEdit?: () => void;
  onView?: () => void;
  loading?: boolean;
  className?: string;
};

export type CardProps = BalanceCardProps | ModuleCardProps;

/* ── CardContainer — generic composable card ─────────── */

export interface CardContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function CardContainer({ className, children, ...props }: CardContainerProps) {
  return (
    <div
      className={cn("bg-white rounded-lg border border-[#E5E5E5] shadow-sm", className)}
      {...props}
    >
      {children}
    </div>
  );
}

/* ── Card ─────────────────────────────────────────────── */

export function Card(props: CardProps) {
  if (props.variant === "balance") {
    return <BalanceCard {...props} />;
  }
  return <ModuleCard {...props} />;
}

/* ── Internal: shell ──────────────────────────────────── */

function CardShell({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("bg-white rounded-lg border border-[#E5E5E5] shadow-sm", className)}>
      {children}
    </div>
  );
}

/* ── Internal: skeleton block ─────────────────────────── */

function Skeleton({ className }: { className?: string }) {
  return <div className={cn("animate-pulse rounded bg-gray-200", className)} />;
}

/* ── Internal: BalanceCard ────────────────────────────── */

function BalanceCard({ title, description, amount, action, loading, className }: BalanceCardProps) {
  return (
    <CardShell className={className}>
      <div className="px-6 pt-6 pb-4">
        {loading ? (
          <>
            <Skeleton className="h-4 w-32" />
            {description !== undefined && <Skeleton className="mt-2 h-3 w-48" />}
          </>
        ) : (
          <>
            <h3 className="text-base font-semibold text-gray-900 leading-tight">{title}</h3>
            {description && (
              <p className="mt-1 text-sm text-gray-500 leading-normal">{description}</p>
            )}
          </>
        )}
      </div>
      <div className="px-6 pb-4">
        {loading ? (
          <Skeleton className="h-9 w-36" />
        ) : (
          <p className="text-3xl font-bold text-gray-900">{amount}</p>
        )}
      </div>
      {action && (
        <div className="flex items-center px-6 py-4 border-t border-[#E5E5E5] bg-gray-50 rounded-b-lg">
          {action}
        </div>
      )}
    </CardShell>
  );
}

/* ── Internal: ModuleCard ─────────────────────────────── */

function ModuleCard({ title, description, status, statusLabel, onEdit, onView, loading, className }: ModuleCardProps) {
  return (
    <CardShell className={className}>
      <div className="px-6 pt-6 pb-4">
        {loading ? (
          <>
            <div className="flex items-center justify-between">
              <Skeleton className="h-4 w-36" />
              <Skeleton className="h-5 w-16 rounded-full" />
            </div>
            {description !== undefined && <Skeleton className="mt-2 h-3 w-52" />}
          </>
        ) : (
          <>
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-gray-900 leading-tight">{title}</h3>
              {status && statusLabel && (
                <Badge variant={status}>{statusLabel}</Badge>
              )}
            </div>
            {description && (
              <p className="mt-1 text-sm text-gray-500 leading-normal">{description}</p>
            )}
          </>
        )}
      </div>
      {(onEdit || onView) && (
        <div className="flex items-center justify-end gap-2 px-6 py-4 border-t border-[#E5E5E5] bg-gray-50 rounded-b-lg">
          {loading ? (
            <>
              <Skeleton className="h-7 w-12" />
              <Skeleton className="h-7 w-12" />
            </>
          ) : (
            <>
              {onEdit && <Button variant="ghost" size="sm" onClick={onEdit}>Edit</Button>}
              {onView && <Button variant="primary" size="sm" onClick={onView}>View</Button>}
            </>
          )}
        </div>
      )}
    </CardShell>
  );
}
