export type ModalSize = "sm" | "md" | "lg";
export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children?: React.ReactNode;
    size?: ModalSize;
    /** Footer content — rendered in a sticky bar at the bottom */
    footer?: React.ReactNode;
    className?: string;
}
export declare function Modal({ isOpen, onClose, title, children, footer, size, className }: ModalProps): import("react/jsx-runtime").JSX.Element;
export declare function ModalHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
export declare function ModalBody({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
export declare function ModalFooter({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
