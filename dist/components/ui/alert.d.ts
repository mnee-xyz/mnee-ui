export type AlertVariant = "info" | "warning" | "tip" | "error" | "success";
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: AlertVariant;
    title?: string;
    children?: React.ReactNode;
}
export declare function Alert({ variant, title, children, className, ...props }: AlertProps): import("react/jsx-runtime").JSX.Element;
