export type ButtonVariant = "primary" | "secondary" | "destructive" | "ghost" | "outline";
export type ButtonSize = "sm" | "md" | "lg";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
    children?: React.ReactNode;
}
export declare function Button({ variant, size, loading, disabled, className, children, ...props }: ButtonProps): import("react/jsx-runtime").JSX.Element;
