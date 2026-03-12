export type InputSize = "sm" | "md" | "lg";
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
    label?: string;
    hint?: string;
    error?: string;
    size?: InputSize;
    prefix?: string;
    suffix?: string;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
}
export declare function Input({ label, hint, error, size, className, id, disabled, required, prefix, suffix, leadingIcon, trailingIcon, ...props }: InputProps): import("react/jsx-runtime").JSX.Element;
