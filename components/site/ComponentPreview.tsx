"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/toast";

interface ComponentPreviewProps {
  /** The live rendered component */
  children: React.ReactNode;
  /** Raw JSX string to show in the Code tab */
  code: string;
  className?: string;
}

/**
 * Preview/Code tab toggle for component documentation pages.
 *
 * Pattern: pass raw code as a string prop. The code tab renders it
 * in a styled <pre> inline (no server-side shiki needed), keeping
 * this a pure client component. For full syntax-highlighted examples
 * use <CodeBlock> as a separate server component in the MDX.
 */
export function ComponentPreview({
  children,
  code,
  className,
}: ComponentPreviewProps) {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      showToast("Copied to clipboard!", "success");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      showToast("Failed to copy", "error");
    }
  };

  return (
    <div className={cn("rounded-xl border border-[#E5E5E5] overflow-hidden not-prose", className)}>
      {/* Tab bar */}
      <div className="flex items-center gap-1 px-4 py-2 border-b border-[#E5E5E5] bg-gray-50">
        <button
          onClick={() => setTab("preview")}
          className={cn(
            "px-3 py-1 text-sm rounded-md transition-colors",
            tab === "preview"
              ? "bg-white border border-[#E5E5E5] text-gray-900 shadow-sm"
              : "text-gray-500 hover:text-gray-700"
          )}
        >
          Preview
        </button>
        <button
          onClick={() => setTab("code")}
          className={cn(
            "px-3 py-1 text-sm rounded-md transition-colors",
            tab === "code"
              ? "bg-white border border-[#E5E5E5] text-gray-900 shadow-sm"
              : "text-gray-500 hover:text-gray-700"
          )}
        >
          Code
        </button>
      </div>

      {/* Preview panel */}
      {tab === "preview" && (
        <div className="p-8 bg-white flex flex-wrap items-center justify-center gap-4 min-h-[140px]">
          {children}
        </div>
      )}

      {/* Code panel */}
      {tab === "code" && (
        <div className="relative">
          <button
            onClick={handleCopy}
            aria-label="Copy code to clipboard"
            className="absolute top-3 right-3 p-1.5 rounded-md bg-white/80 border border-[#E5E5E5] text-gray-500 hover:text-gray-900 hover:bg-white transition-colors"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
          <pre className="p-4 bg-gray-50 overflow-auto text-sm font-mono text-gray-800 leading-relaxed">
            <code>{code.trim()}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
