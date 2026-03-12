import { codeToTokens, type ThemedToken, type BundledLanguage } from "shiki";
import { CopyButton } from "./CopyButton";

interface CodeBlockProps {
  code: string;
  lang?: BundledLanguage;
}

export async function CodeBlock({ code, lang = "tsx" }: CodeBlockProps) {
  const { tokens, bg, fg } = await codeToTokens(code.trim(), {
    lang,
    theme: "github-light",
  });

  return (
    <div className="relative">
      <CopyButton code={code.trim()} />
      <pre
        className="rounded-lg border border-[#E5E5E5] overflow-auto text-sm p-4"
        style={{ background: bg, color: fg }}
      >
        <code>
          {tokens.map((line: ThemedToken[], i: number) => (
            <span key={i} className="block">
              {line.map((token: ThemedToken, j: number) => (
                <span key={j} style={{ color: token.color }}>
                  {token.content}
                </span>
              ))}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}
