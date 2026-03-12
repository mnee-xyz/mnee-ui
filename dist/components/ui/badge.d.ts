export type BadgeVariant = "success" | "warning" | "error" | "info" | "default" | "brand";
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: BadgeVariant;
    children?: React.ReactNode;
}
export declare function Badge({ variant, className, children, ...props }: BadgeProps): import("react/jsx-runtime").JSX.Element;
