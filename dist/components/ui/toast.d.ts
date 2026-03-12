export type ToastType = "success" | "error" | "warning" | "info" | "default";
export interface ToastContextType {
    showToast: (message: string, type?: ToastType) => void;
}
export declare function useToast(): ToastContextType;
export interface ToastProps {
    message: string;
    type: ToastType;
    onClose?: () => void;
    className?: string;
}
export declare function Toast({ message, type, onClose, className }: ToastProps): import("react/jsx-runtime").JSX.Element;
export declare function ToastProvider({ children }: {
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
