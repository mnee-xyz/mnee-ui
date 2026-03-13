export type SkeletonVariant = "line" | "circle" | "block";
export interface SkeletonProps {
    variant?: SkeletonVariant;
    width?: string | number;
    height?: string | number;
    className?: string;
}
export declare function Skeleton({ variant, width, height, className, }: SkeletonProps): import("react/jsx-runtime").JSX.Element;
