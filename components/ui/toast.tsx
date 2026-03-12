"use client";

import { createContext, useContext, useRef, useState } from "react";
import { X, CheckCircle, AlertTriangle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

export type ToastType = "success" | "error" | "warning" | "info" | "default";

export interface ToastContextType {
  showToast: (message: string, type?: ToastType) => void;
}

// ─── Context ──────────────────────────────────────────────────────────────────

const ToastContext = createContext<ToastContextType | null>(null);

// ─── useToast hook ────────────────────────────────────────────────────────────

export function useToast(): ToastContextType {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used inside <ToastProvider>");
  }
  return ctx;
}

// ─── Toast visual component ───────────────────────────────────────────────────
// Renders the notification box only — no fixed positioning.
// ToastProvider wraps it in the fixed top-right container.

const toastStyles: Record<ToastType, { bg: string; text: string; icon: React.ReactNode }> = {
  success: {
    bg: "bg-success-bg",
    text: "text-success",
    icon: <CheckCircle size={18} className="text-success shrink-0" />,
  },
  error: {
    bg: "bg-error-bg",
    text: "text-error",
    icon: <AlertTriangle size={18} className="text-error shrink-0" />,
  },
  warning: {
    bg: "bg-warning-bg",
    text: "text-warning",
    icon: <AlertTriangle size={18} className="text-warning shrink-0" />,
  },
  info: {
    bg: "bg-info-bg",
    text: "text-info",
    icon: <Info size={18} className="text-info shrink-0" />,
  },
  default: {
    bg: "bg-gray-100",
    text: "text-gray-700",
    icon: <CheckCircle size={18} className="text-gray-500 shrink-0" />,
  },
};

export interface ToastProps {
  message: string;
  type: ToastType;
  onClose?: () => void;
  className?: string;
}

export function Toast({ message, type, onClose = () => {}, className }: ToastProps) {
  const { bg, text, icon } = toastStyles[type];

  return (
    <div
      role="alert"
      aria-live="polite"
      className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg w-[380px]",
        bg,
        text,
        className
      )}
    >
      {icon}
      <span className="flex-1 text-sm font-medium">{message}</span>
      <button
        onClick={onClose}
        aria-label="Dismiss notification"
        className="opacity-60 hover:opacity-100 transition-opacity"
      >
        <X size={16} />
      </button>
    </div>
  );
}

// ─── ToastProvider ────────────────────────────────────────────────────────────

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toast, setToast] = useState<{ message: string; type: ToastType } | null>(null);
  const [isExiting, setIsExiting] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const dismiss = () => {
    setIsExiting(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setToast(null);
      setIsExiting(false);
    }, 300);
  };

  const showToast = (message: string, type: ToastType = "default") => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsExiting(false);
    setToast({ message, type });
    timerRef.current = setTimeout(dismiss, 4000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <div
          className="fixed top-6 right-6"
          style={{
            zIndex: 9999,
            animation: isExiting
              ? "slideOutToast 0.3s ease-in forwards"
              : "slideInToast 0.3s ease-out",
          }}
        >
          <Toast message={toast.message} type={toast.type} onClose={dismiss} />
        </div>
      )}
    </ToastContext.Provider>
  );
}
