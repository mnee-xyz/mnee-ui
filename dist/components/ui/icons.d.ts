import { type LucideIcon, type LucideProps } from "lucide-react";
import type { SVGProps } from "react";
export type IconSize = "xs" | "sm" | "md" | "lg" | "xl";
export interface IconProps extends Omit<LucideProps, "size"> {
    /** Any Lucide icon component, e.g. import { Wallet } from "lucide-react" */
    icon: LucideIcon;
    /** Design-system size token. Defaults to "md" (16px). */
    size?: IconSize;
}
export declare function Icon({ icon: LucideComponent, size, className, ...props }: IconProps): import("react/jsx-runtime").JSX.Element;
export declare function MneeIcon(props: SVGProps<SVGSVGElement>): import("react/jsx-runtime").JSX.Element;
