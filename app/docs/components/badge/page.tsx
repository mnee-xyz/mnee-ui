import { Badge } from "@/components/ui/badge";
import { ComponentPreview } from "@/components/site/ComponentPreview";
import { CodeBlock } from "@/components/site/CodeBlock";

const snippets = {
  variants: `<Badge variant="success">Completed</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="error">Failed</Badge>
<Badge variant="info">Info</Badge>
<Badge variant="default">Default</Badge>
<Badge variant="brand">MNEE Pay</Badge>`,

  usage: `import { Badge } from "@mnee/ui"

// Map transaction status to badge variant
const statusVariant = {
  COMPLETED: "success",
  VERIFIED:  "success",
  PENDING:   "warning",
  FAILED:    "error",
} as const

<Badge variant={statusVariant[tx.status] ?? "default"}>
  {tx.status}
</Badge>`,
};

export default function BadgePage() {
  return (
    <div>
      <p className="text-xs font-mono text-gray-400 mb-2">Components</p>
      <h1 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">Badge</h1>
      <p className="text-gray-500 mb-4 leading-relaxed">
        Compact status labels. Used in the transaction table to communicate payment status.
        Solid-color pills with white text — a visual replica of the product&apos;s status indicators.
      </p>
      <div className="mb-8 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
        <strong>Design ownership:</strong> Badge colors are defined by the UX Design team (Federico).
        Do not override variants with ad-hoc Tailwind classes — use the <code className="font-mono text-xs">variant</code> prop.
      </div>

      {/* All variants */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Variants</h2>
      <ComponentPreview code={snippets.variants} className="mb-10">
        <Badge variant="success">Completed</Badge>
        <Badge variant="warning">Pending</Badge>
        <Badge variant="error">Failed</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="default">Default</Badge>
        <Badge variant="brand">MNEE Pay</Badge>
      </ComponentPreview>

      {/* Usage */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Usage</h2>
      <CodeBlock code={snippets.usage} lang="tsx" />

      {/* Props */}
      <h2 className="text-lg font-semibold text-gray-900 mt-8 mb-3">Props</h2>
      <div className="overflow-auto rounded-lg border border-[#E5E5E5]">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <th className="text-left px-4 py-2.5 border-b border-[#E5E5E5] text-xs font-semibold text-gray-500 uppercase bg-gray-50">Prop</th>
              <th className="text-left px-4 py-2.5 border-b border-[#E5E5E5] text-xs font-semibold text-gray-500 uppercase bg-gray-50">Type</th>
              <th className="text-left px-4 py-2.5 border-b border-[#E5E5E5] text-xs font-semibold text-gray-500 uppercase bg-gray-50">Default</th>
              <th className="text-left px-4 py-2.5 border-b border-[#E5E5E5] text-xs font-semibold text-gray-500 uppercase bg-gray-50">Description</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["variant", `"success" | "warning" | "error" | "info" | "default" | "brand"`, `"default"`, "Semantic color"],
              ["children", "React.ReactNode", "—", "Badge label text"],
              ["className", "string", "—", "Layout utilities only (margin, padding, width)"],
            ].map(([prop, type, def, desc]) => (
              <tr key={prop} className="hover:bg-gray-50">
                <td className="px-4 py-2.5 border-b border-[#E5E5E5] font-mono text-xs text-gray-800">{prop}</td>
                <td className="px-4 py-2.5 border-b border-[#E5E5E5] font-mono text-xs text-amber-700">{type}</td>
                <td className="px-4 py-2.5 border-b border-[#E5E5E5] font-mono text-xs text-gray-500">{def}</td>
                <td className="px-4 py-2.5 border-b border-[#E5E5E5] text-xs text-gray-600">{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Token mapping */}
      <h2 className="text-lg font-semibold text-gray-900 mt-8 mb-3">Token mapping</h2>
      <div className="overflow-auto rounded-lg border border-[#E5E5E5]">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <th className="text-left px-4 py-2.5 border-b border-[#E5E5E5] text-xs font-semibold text-gray-500 uppercase bg-gray-50">Variant</th>
              <th className="text-left px-4 py-2.5 border-b border-[#E5E5E5] text-xs font-semibold text-gray-500 uppercase bg-gray-50">Background</th>
              <th className="text-left px-4 py-2.5 border-b border-[#E5E5E5] text-xs font-semibold text-gray-500 uppercase bg-gray-50">Text</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["success", "bg-success (#15803D)", "text-white"],
              ["warning", "bg-warning (#D97706)", "text-white"],
              ["error",   "bg-red-600 (#DC2626)", "text-white"],
              ["info",    "bg-info (#2563EB)",    "text-white"],
              ["default", "bg-gray-600 (#4B5563)", "text-white"],
              ["brand",   "bg-brand (#D97706)",   "text-white"],
            ].map(([variant, bg, text]) => (
              <tr key={variant} className="hover:bg-gray-50">
                <td className="px-4 py-2.5 border-b border-[#E5E5E5] font-mono text-xs text-gray-800">{variant}</td>
                <td className="px-4 py-2.5 border-b border-[#E5E5E5] font-mono text-xs text-gray-600">{bg}</td>
                <td className="px-4 py-2.5 border-b border-[#E5E5E5] font-mono text-xs text-gray-600">{text}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
