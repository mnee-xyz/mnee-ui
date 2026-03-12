"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

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

const sizeStyles: Record<ModalSize, string> = {
  sm: "w-[400px]",
  md: "w-[520px]",
  lg: "w-[640px]",
};

export function Modal({ isOpen, onClose, title, children, footer, size = "sm", className }: ModalProps) {
  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={cn(
          "fixed inset-0 z-40 bg-black/50 transition-opacity duration-200",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      />

      {/* Centering container — pointer-events-none so clicks reach the backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-50 flex items-center justify-center p-4",
          "pointer-events-none"
        )}
      >
        {/* Panel */}
        <div
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={(e) => e.stopPropagation()}
          className={cn(
            "bg-white rounded-lg shadow-2xl flex flex-col max-h-[90vh] pointer-events-auto",
            "transition-all duration-200 ease-out",
            sizeStyles[size],
            isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95",
            className
          )}
        >
          {/* Header */}
          <ModalHeader>
            {title && (
              <h2 className="text-lg font-semibold text-gray-900 flex-1">{title}</h2>
            )}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="text-gray-400 hover:text-gray-600 transition-colors ml-auto"
            >
              <X size={20} />
            </button>
          </ModalHeader>

          {/* Body */}
          <ModalBody>{children}</ModalBody>

          {/* Footer */}
          {footer && <ModalFooter>{footer}</ModalFooter>}
        </div>
      </div>
    </>
  );
}

// ─── Sub-components (also usable standalone for custom modal layouts) ─────────

export function ModalHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex items-center gap-3 px-6 py-4 border-b border-gray-200 shrink-0", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function ModalBody({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex-1 overflow-y-auto px-6 py-5", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function ModalFooter({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("shrink-0 px-6 py-4 border-t border-gray-200 bg-white rounded-b-lg", className)}
      {...props}
    >
      {children}
    </div>
  );
}
