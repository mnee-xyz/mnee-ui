import { Loader2 } from "lucide-react";
export declare function Table({ className, children, ...props }: React.HTMLAttributes<HTMLTableElement>): import("react/jsx-runtime").JSX.Element;
export declare function TableHead({ className, children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>): import("react/jsx-runtime").JSX.Element;
export declare function TableBody({ className, children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>): import("react/jsx-runtime").JSX.Element;
export declare function TableRow({ className, children, onClick, ...props }: React.HTMLAttributes<HTMLTableRowElement>): import("react/jsx-runtime").JSX.Element;
export interface TableHeaderProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
    sortable?: boolean;
    sortDirection?: "asc" | "desc" | null;
    onSort?: () => void;
}
export declare function TableHeader({ className, children, sortable, sortDirection, onSort, ...props }: TableHeaderProps): import("react/jsx-runtime").JSX.Element;
export declare function TableCell({ className, children, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>): import("react/jsx-runtime").JSX.Element;
export interface TableEmptyProps {
    message?: string;
    description?: string;
}
export declare function TableEmpty({ message, description, }: TableEmptyProps): import("react/jsx-runtime").JSX.Element;
export declare function TableLoading({ cols }: {
    cols?: number;
}): import("react/jsx-runtime").JSX.Element;
export interface PaginationProps {
    page: number;
    totalPages: number;
    totalItems?: number;
    onPageChange: (page: number) => void;
    className?: string;
}
export declare function Pagination({ page, totalPages, totalItems, onPageChange, className }: PaginationProps): import("react/jsx-runtime").JSX.Element;
export { Loader2 };
