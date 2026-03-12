import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight mt-0">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-lg font-semibold text-gray-900 mt-10 mb-3 border-b border-[#E5E5E5] pb-2">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-base font-semibold text-gray-800 mt-6 mb-2">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-gray-600 leading-relaxed mb-4 text-sm">{children}</p>
    ),
    // Inline code vs inside <pre> — pass className through so shiki still works
    code: ({ children, className }) =>
      className ? (
        <code className={className}>{children}</code>
      ) : (
        <code className="text-xs bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded font-mono">
          {children}
        </code>
      ),
    pre: ({ children }) => (
      <pre className="bg-gray-50 border border-[#E5E5E5] rounded-lg p-4 overflow-auto text-xs font-mono mb-6 leading-relaxed">
        {children}
      </pre>
    ),
    table: ({ children }) => (
      <div className="overflow-auto rounded-lg border border-[#E5E5E5] mb-6">
        <table className="w-full text-sm border-collapse">{children}</table>
      </div>
    ),
    thead: ({ children }) => <thead>{children}</thead>,
    tbody: ({ children }) => <tbody>{children}</tbody>,
    tr: ({ children }) => <tr className="hover:bg-gray-50">{children}</tr>,
    th: ({ children }) => (
      <th className="text-left px-4 py-2.5 border-b border-[#E5E5E5] text-xs font-semibold text-gray-500 uppercase tracking-wider bg-gray-50">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-4 py-2.5 border-b border-[#E5E5E5] font-mono text-xs text-gray-600 align-top">
        {children}
      </td>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-outside pl-5 mb-4 space-y-1.5 text-gray-600">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-outside pl-5 mb-4 space-y-1.5 text-gray-600">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="text-sm leading-relaxed">{children}</li>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-brand underline underline-offset-2 hover:text-brand-dark"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-gray-900">{children}</strong>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-brand pl-4 text-gray-500 mb-4">
        {children}
      </blockquote>
    ),
    hr: () => <hr className="border-[#E5E5E5] my-8" />,
    ...components,
  };
}
