"use client";

import { useEffect, useId, useRef } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

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

const widthStyles: Record<DrawerWidth, string> = {
  sm: "w-80",
  md: "w-[480px]",
  lg: "w-[600px]",
  xl: "w-[800px]",
};

const sideStyles: Record<DrawerSide, { position: string; translate: string }> = {
  right: { position: "right-0", translate: "translate-x-full" },
  left:  { position: "left-0",  translate: "-translate-x-full" },
};

export function Drawer({
  isOpen, onClose, title, children, footer,
  width = "md", side = "right", className,
}: DrawerProps) {
  const headingId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  // Capture focus before open; move focus into panel on open; restore on close
  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      requestAnimationFrame(() => panelRef.current?.focus());
    } else {
      previousFocusRef.current?.focus();
    }
  }, [isOpen]);

  // Body scroll lock with scrollbar-width compensation to prevent layout shift
  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  const { position, translate } = sideStyles[side];

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={cn(
          "fixed inset-0 z-40 bg-black/50 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      />

      {/* Panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? headingId : undefined}
        tabIndex={-1}
        className={cn(
          "fixed top-0 z-50 h-full bg-white shadow-2xl flex flex-col outline-none",
          "transition-transform duration-300 ease-in-out",
          position,
          widthStyles[width],
          isOpen ? "translate-x-0" : translate,
          className
        )}
      >
        {/* Header */}
        <DrawerHeader>
          {title && (
            <h2 id={headingId} className="text-lg font-semibold text-gray-900 flex-1">{title}</h2>
          )}
          <button
            onClick={onClose}
            aria-label="Close drawer"
            className="text-gray-400 hover:text-gray-600 transition-colors ml-auto"
          >
            <X size={20} />
          </button>
        </DrawerHeader>

        {/* Body */}
        <DrawerBody>{children}</DrawerBody>

        {/* Footer */}
        {footer && <DrawerFooter>{footer}</DrawerFooter>}
      </div>
    </>
  );
}

// ─── Sub-components (also usable standalone for custom drawer layouts) ─────────

export function DrawerHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex items-center gap-3 px-6 py-4 border-b border-gray-200 shrink-0", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function DrawerBody({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex-1 overflow-y-auto px-6 py-5", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function DrawerFooter({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("shrink-0 px-6 py-4 border-t border-gray-200 bg-white", className)}
      {...props}
    >
      {children}
    </div>
  );
}
