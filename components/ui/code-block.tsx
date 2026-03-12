"use client";

import { useState, useEffect } from "react";
import { Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/toast";
import type { ThemedToken } from "shiki";

export interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  className?: string;
}

type TokenLine = ThemedToken[];

export function CodeBlock({
  code,
  language = "bash",
  title,
  className,
}: CodeBlockProps) {
  const [tokens, setTokens] = useState<TokenLine[] | null>(null);
  const [bg, setBg] = useState("#000000");
  const [fg, setFg] = useState("#d4d4d4");
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    const highlight = async () => {
      try {
        const { codeToTokens } = await import("shiki");
        const result = await codeToTokens(code.trim(), {
          lang: language as Parameters<typeof codeToTokens>[1]["lang"],
          theme: "dark-plus",
        });
        setTokens(result.tokens);
        if (result.bg) setBg(result.bg);
        if (result.fg) setFg(result.fg);
      } catch {
        // leave tokens null — fallback pre renders raw code
      }
    };
    highlight();
  }, [code, language]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    showToast("Copied to clipboard!", "success");
    setTimeout(() => setCopied(false), 1500);
  };

  const copyButton = (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1 bg-gray-700 hover:bg-gray-600 text-gray-200 px-2 py-1 rounded text-xs transition-colors"
    >
      <Copy size={13} />
      {copied ? "Copied!" : "Copy"}
    </button>
  );

  return (
    <div
      className={cn(
        "relative border border-gray-700 rounded-lg overflow-hidden",
        className
      )}
    >
      {title ? (
        <div className="flex items-center justify-between bg-[#161B22] px-4 py-2 text-sm text-gray-300 border-b border-gray-700">
          <span className="truncate">{title}</span>
          {copyButton}
        </div>
      ) : (
        <div className="absolute top-2 right-2 z-10">{copyButton}</div>
      )}

      {tokens === null ? (
        <pre
          className="p-4 overflow-x-auto text-sm font-mono"
          style={{ background: bg, color: fg }}
        >
          <code>{code}</code>
        </pre>
      ) : (
        <pre
          className="p-4 overflow-x-auto text-sm font-mono !m-0 !rounded-none"
          style={{ background: bg, color: fg }}
        >
          <code>
            {tokens.map((line, i) => (
              <span key={i} className="block">
                {line.map((token, j) => (
                  <span key={j} style={{ color: token.color }}>
                    {token.content}
                  </span>
                ))}
              </span>
            ))}
          </code>
        </pre>
      )}
    </div>
  );
}
