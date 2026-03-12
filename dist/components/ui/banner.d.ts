export type BannerVariant = "gradient" | "info" | "success" | "warning" | "error";
export interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    description?: string;
    variant?: BannerVariant;
    action?: React.ReactNode;
}
export declare function Banner({ title, description, variant, action, className, ...props }: BannerProps): import("react/jsx-runtime").JSX.Element;
