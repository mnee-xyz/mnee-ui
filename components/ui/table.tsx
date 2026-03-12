import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Compound table primitives ────────────────────────────────────────────────

export function Table({ className, children, ...props }: React.HTMLAttributes<HTMLTableElement>) {
  return (
    <div className="w-full overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
      <table className={cn("w-full border-collapse text-sm", className)} {...props}>
        {children}
      </table>
    </div>
  );
}

export function TableHead({ className, children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <thead className={cn("bg-gray-50 border-b border-gray-200", className)} {...props}>
      {children}
    </thead>
  );
}

export function TableBody({ className, children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <tbody className={cn("divide-y divide-gray-100", className)} {...props}>
      {children}
    </tbody>
  );
}

export function TableRow({ className, children, onClick, ...props }: React.HTMLAttributes<HTMLTableRowElement>) {
  return (
    <tr
      className={cn(
        "transition-colors",
        onClick ? "cursor-pointer hover:bg-gray-50" : "hover:bg-gray-50/50",
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </tr>
  );
}

export interface TableHeaderProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  sortable?: boolean;
  sortDirection?: "asc" | "desc" | null;
  onSort?: () => void;
}

export function TableHeader({
  className,
  children,
  sortable,
  sortDirection,
  onSort,
  ...props
}: TableHeaderProps) {
  return (
    <th
      className={cn(
        "px-4 py-3 text-left text-xs font-semibold text-gray-600 whitespace-nowrap",
        sortable && "select-none",
        className
      )}
      {...props}
    >
      {sortable ? (
        <button
          type="button"
          onClick={onSort}
          className="inline-flex items-center gap-1 hover:text-gray-900 transition-colors"
        >
          {children}
          <span className="text-gray-400">
            {sortDirection === "asc" ? "↑" : sortDirection === "desc" ? "↓" : "↕"}
          </span>
        </button>
      ) : (
        children
      )}
    </th>
  );
}

export function TableCell({ className, children, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) {
  return (
    <td className={cn("px-4 py-3 text-sm text-gray-700", className)} {...props}>
      {children}
    </td>
  );
}

// ─── Empty state ──────────────────────────────────────────────────────────────

export interface TableEmptyProps {
  message?: string;
  description?: string;
}

export function TableEmpty({
  message = "No data",
  description,
}: TableEmptyProps) {
  return (
    <tr>
      <td colSpan={999}>
        <div className="flex flex-col items-center justify-center gap-2 py-16 text-center">
          <p className="text-sm font-medium text-gray-700">{message}</p>
          {description && <p className="text-xs text-gray-400 max-w-xs">{description}</p>}
        </div>
      </td>
    </tr>
  );
}

// ─── Loading overlay ──────────────────────────────────────────────────────────

export function TableLoading({ cols = 4 }: { cols?: number }) {
  return (
    <>
      {Array.from({ length: 4 }).map((_, r) => (
        <TableRow key={r}>
          {Array.from({ length: cols }).map((_, c) => (
            <TableCell key={c}>
              <div className="h-3.5 bg-gray-100 rounded animate-pulse" style={{ width: `${60 + ((r + c) % 3) * 15}%` }} />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
}

// ─── Pagination ───────────────────────────────────────────────────────────────

export interface PaginationProps {
  page: number;
  totalPages: number;
  totalItems?: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export function Pagination({ page, totalPages, totalItems, onPageChange, className }: PaginationProps) {
  return (
    <div className={cn("flex items-center justify-between px-4 py-3 border-t border-gray-200 text-sm text-gray-600", className)}>
      <span>
        {totalItems !== undefined
          ? `Page ${page} of ${totalPages} (${totalItems} items)`
          : `Page ${page} of ${totalPages}`}
      </span>
      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={() => onPageChange(page - 1)}
          disabled={page <= 1}
          className="flex items-center gap-1 px-2.5 py-1.5 rounded hover:bg-gray-100 disabled:opacity-40 disabled:pointer-events-none transition-colors"
        >
          <ChevronLeft size={14} />
          Previous
        </button>
        <span className="px-3 py-1.5 border border-gray-200 rounded text-xs font-medium min-w-[2rem] text-center">
          {page}
        </span>
        <button
          type="button"
          onClick={() => onPageChange(page + 1)}
          disabled={page >= totalPages}
          className="flex items-center gap-1 px-2.5 py-1.5 rounded hover:bg-gray-100 disabled:opacity-40 disabled:pointer-events-none transition-colors"
        >
          Next
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}

// ─── Convenience loading spinner for table toolbar ────────────────────────────

export { Loader2 };
