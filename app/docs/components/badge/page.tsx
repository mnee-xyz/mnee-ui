import { Badge } from "@/components/ui/badge";
import { ComponentPreview } from "@/components/site/ComponentPreview";
import { CodeBlock } from "@/components/site/CodeBlock";
import { ComponentStatus } from "@/components/site/ComponentStatus";
import { CircleCheck } from "lucide-react";

const snippets = {
  variants: `<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="success">Completed</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="info">Info</Badge>`,

  withIcon: `import { CircleCheck } from "lucide-react"

<Badge variant="success" icon={<CircleCheck className="size-3" />}>Completed</Badge>
<Badge variant="warning" icon={<CircleCheck className="size-3" />}>Pending</Badge>
<Badge variant="destructive" icon={<CircleCheck className="size-3" />}>Failed</Badge>`,

  usage: `import { Badge } from "@mnee-ui/ui"
import { CircleCheck } from "lucide-react"

const statusVariant = {
  COMPLETED: "success",
  PENDING:   "warning",
  FAILED:    "destructive",
} as const

<Badge
  variant={statusVariant[tx.status] ?? "secondary"}
  icon={<CircleCheck className="size-3" />}
>
  {tx.status}
</Badge>`,
};

export default function BadgePage() {
  return (
    <div>
      <p className="text-xs font-mono text-gray-400 mb-2">Components</p>
      <div className="flex items-center gap-2.5 mb-3">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Badge</h1>
        <ComponentStatus status="stable" />
      </div>
      <p className="text-gray-500 mb-8 leading-relaxed">
        Compact labels for status, category, and metadata. Follows the shadcn Badge system
        with MNEE semantic extensions. Accepts an optional <code className="font-mono text-xs">icon</code> slot
        for leading icons.
      </p>

      {/* Variants */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Variants</h2>
      <ComponentPreview code={snippets.variants} className="mb-10">
        <Badge variant="default">Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="success">Completed</Badge>
        <Badge variant="warning">Pending</Badge>
        <Badge variant="info">Info</Badge>
      </ComponentPreview>

      {/* With icon */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">With icon</h2>
      <p className="text-gray-500 text-sm mb-3 leading-relaxed">
        Pass any Lucide icon (or any node) to the <code className="font-mono text-xs">icon</code> prop.
        It renders before the label and inherits the variant&apos;s text color.
      </p>
      <ComponentPreview code={snippets.withIcon} className="mb-10">
        <Badge variant="success"  icon={<CircleCheck className="size-3" />}>Completed</Badge>
        <Badge variant="warning"  icon={<CircleCheck className="size-3" />}>Pending</Badge>
        <Badge variant="destructive" icon={<CircleCheck className="size-3" />}>Failed</Badge>
        <Badge variant="info"     icon={<CircleCheck className="size-3" />}>Info</Badge>
        <Badge variant="default"  icon={<CircleCheck className="size-3" />}>Default</Badge>
        <Badge variant="secondary" icon={<CircleCheck className="size-3" />}>Secondary</Badge>
        <Badge variant="outline"  icon={<CircleCheck className="size-3" />}>Outline</Badge>
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
              ["variant", `"default" | "secondary" | "destructive" | "outline" | "success" | "warning" | "info"`, `"default"`, "Visual style"],
              ["icon",    "React.ReactNode", "—", "Leading icon, e.g. <CircleCheck className=\"size-3\" />"],
              ["children","React.ReactNode", "—", "Badge label"],
              ["className","string",         "—", "Layout overrides (margin, width)"],
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
              {["Variant", "Background", "Text"].map(h => (
                <th key={h} className="text-left px-4 py-2.5 border-b border-[#E5E5E5] text-xs font-semibold text-gray-500 uppercase bg-gray-50">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["default",     "bg-brand (#D97706)",          "text-white"],
              ["secondary",   "#f5f5f5",                     "#0a0a0a"],
              ["destructive", "bg-error (#B91C1C)",           "text-white"],
              ["outline",     "transparent",                 "#0a0a0a (border: surface-border)"],
              ["success",     "bg-success (#15803D)",         "text-white"],
              ["warning",     "bg-surface-border (#E5E5E5)", "#737373"],
              ["info",        "#0d74ce",                     "text-white"],
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
