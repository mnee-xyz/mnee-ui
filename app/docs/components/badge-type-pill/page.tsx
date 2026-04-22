import { BadgeTypePill } from "@/components/ui/badge-type-pill";
import { ComponentPreview } from "@/components/site/ComponentPreview";
import { CodeBlock } from "@/components/site/CodeBlock";
import { ComponentStatus } from "@/components/site/ComponentStatus";

const snippets = {
  variants: `<BadgeTypePill variant="receive">Receive</BadgeTypePill>
<BadgeTypePill variant="send">Send</BadgeTypePill>`,

  usage: `import { BadgeTypePill } from "@mnee-ui/ui"

// In the transaction table Type column
<BadgeTypePill variant={tx.direction === "IN" ? "receive" : "send"}>
  {tx.direction === "IN" ? "Receive" : "Send"}
</BadgeTypePill>`,
};

export default function BadgeTypePillPage() {
  return (
    <div>
      <p className="text-xs font-mono text-gray-400 mb-2">Components</p>
      <div className="flex items-center gap-2.5 mb-3">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">BadgeTypePill</h1>
        <ComponentStatus status="stable" />
      </div>
      <p className="text-gray-500 mb-4 leading-relaxed">
        Read-only direction indicator used in the transaction table&apos;s Type column.
        Visually distinct from <code className="font-mono text-xs">Badge</code> — uses{" "}
        <code className="font-mono text-xs">rounded-full</code> (capsule shape) instead of{" "}
        <code className="font-mono text-xs">rounded-lg</code>.
      </p>
      <div className="mb-8 rounded-lg border border-[#E5E5E5] bg-gray-50 px-4 py-3 text-sm text-gray-600">
        Not a <code className="font-mono text-xs">Badge</code>. Do not use for status labels — use{" "}
        <code className="font-mono text-xs">{'Badge variant="success|warning|destructive"'}</code> for
        Completed / Pending / Failed.
      </div>

      {/* Variants */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Variants</h2>
      <ComponentPreview code={snippets.variants} className="mb-10">
        <BadgeTypePill variant="receive">Receive</BadgeTypePill>
        <BadgeTypePill variant="send">Send</BadgeTypePill>
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
              {["Prop", "Type", "Default", "Description"].map(h => (
                <th key={h} className="text-left px-4 py-2.5 border-b border-[#E5E5E5] text-xs font-semibold text-gray-500 uppercase bg-gray-50">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["variant",   `"receive" | "send"`, "required", "Visual style"],
              ["children",  "React.ReactNode",    "—",        "Label text"],
              ["className", "string",             "—",        "Layout overrides"],
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

      {/* Design notes */}
      <h2 className="text-lg font-semibold text-gray-900 mt-8 mb-3">Design notes</h2>
      <div className="overflow-auto rounded-lg border border-[#E5E5E5]">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              {["Variant", "Background", "Text", "Border"].map(h => (
                <th key={h} className="text-left px-4 py-2.5 border-b border-[#E5E5E5] text-xs font-semibold text-gray-500 uppercase bg-gray-50">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["receive", "bg-brand (#D97706)", "text-white", "none"],
              ["send",    "transparent",        "#0a0a0a",    "surface-border (#E5E5E5)"],
            ].map(([variant, bg, text, border]) => (
              <tr key={variant} className="hover:bg-gray-50">
                <td className="px-4 py-2.5 border-b border-[#E5E5E5] font-mono text-xs text-gray-800">{variant}</td>
                <td className="px-4 py-2.5 border-b border-[#E5E5E5] font-mono text-xs text-gray-600">{bg}</td>
                <td className="px-4 py-2.5 border-b border-[#E5E5E5] font-mono text-xs text-gray-600">{text}</td>
                <td className="px-4 py-2.5 border-b border-[#E5E5E5] font-mono text-xs text-gray-600">{border}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
