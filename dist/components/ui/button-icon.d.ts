export type ButtonIconVariant = "primary" | "secondary" | "destructive" | "outline" | "ghost";
export interface ButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonIconVariant;
    loading?: boolean;
    icon?: React.ReactNode;
}
export declare function ButtonIcon({ variant, loading, disabled, icon, className, ...props }: ButtonIconProps): import("react/jsx-runtime").JSX.Element;
