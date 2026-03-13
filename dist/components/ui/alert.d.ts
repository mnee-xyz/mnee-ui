export type AlertVariant = "info" | "warning" | "tip" | "error" | "success";
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: AlertVariant;
    title?: string;
    children?: React.ReactNode;
    /** Optional action element (e.g. a Button) rendered at the trailing edge */
    action?: React.ReactNode;
}
export declare function Alert({ variant, title, children, action, className, ...props }: AlertProps): import("react/jsx-runtime").JSX.Element;
