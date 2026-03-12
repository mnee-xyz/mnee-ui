export type DrawerWidth = "sm" | "md" | "lg" | "xl";
export type DrawerSide = "left" | "right";
export interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children?: React.ReactNode;
    width?: DrawerWidth;
    /** Which edge the drawer slides in from */
    side?: DrawerSide;
    /** Footer content — rendered in a sticky bar at the bottom */
    footer?: React.ReactNode;
    className?: string;
}
export declare function Drawer({ isOpen, onClose, title, children, footer, width, side, className, }: DrawerProps): import("react/jsx-runtime").JSX.Element;
export declare function DrawerHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
export declare function DrawerBody({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
export declare function DrawerFooter({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
