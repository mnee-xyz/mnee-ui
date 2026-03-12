"use client";

import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/toast";

interface CopyButtonProps {
  code: string;
}

export function CopyButton({ code }: CopyButtonProps) {
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
    <button
      onClick={handleCopy}
      aria-label="Copy code to clipboard"
      className="absolute top-3 right-3 p-1.5 rounded-md bg-white/80 border border-[#E5E5E5] text-gray-500 hover:text-gray-900 hover:bg-white transition-colors"
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
    </button>
  );
}
