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
  filename?: string;
  className?: string;
}

type TokenLine = ThemedToken[];

export function CodeBlock({
  code,
  language = "bash",
  title,
  filename,
  className,
}: CodeBlockProps) {
  const [tokens, setTokens] = useState<TokenLine[] | null>(null);
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
      className="flex items-center gap-1.5 text-gray-400 hover:text-gray-200 text-xs transition-colors"
    >
      {copied ? "Copied!" : "Copy code"}
      <Copy size={14} />
    </button>
  );

  return (
    <div className={cn(filename && "flex flex-col gap-2", className)}>
      {filename && (
        <div className="text-sm text-slate-600">{filename}</div>
      )}
      <div className="relative border border-gray-700 rounded-lg overflow-hidden bg-gray-950">
        {title ? (
          <div className="flex items-center justify-between bg-gray-900 px-4 py-2 text-sm text-slate-300 border-b border-gray-700">
            <div className="truncate">{title}</div>
            {copyButton}
          </div>
        ) : (
          <div className="absolute top-2 right-2 z-10">{copyButton}</div>
        )}

        {tokens === null ? (
          <pre className="p-4 overflow-x-auto text-sm font-mono text-gray-300">
            <code>{code}</code>
          </pre>
        ) : (
          <pre className="p-4 overflow-x-auto text-sm font-mono text-gray-300 !m-0 !rounded-none">
            <code>
              {tokens.map((line, i) => (
                <div key={i}>
                  {line.map((token, j) => (
                    <span key={j} style={{ color: token.color }}>
                      {token.content}
                    </span>
                  ))}
                </div>
              ))}
            </code>
          </pre>
        )}
      </div>
    </div>
  );
}
