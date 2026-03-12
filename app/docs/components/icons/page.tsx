import { Wallet, Zap, Send } from "lucide-react";
import { Icon, MneeIcon } from "@/components/ui/icons";
import { ComponentPreview } from "@/components/site/ComponentPreview";
import { CodeBlock } from "@/components/site/CodeBlock";

const snippets = {
  basic: `import { Wallet, Zap, Send } from "lucide-react";
import { Icon } from "@mnee/ui";

<Icon icon={Wallet} />
<Icon icon={Zap} size="lg" />
<Icon icon={Send} size="xl" className="text-brand" />`,

  sizes: `import { Wallet } from "lucide-react";
import { Icon } from "@mnee/ui";

<Icon icon={Wallet} size="xs" />  {/* 12px */}
<Icon icon={Wallet} size="sm" />  {/* 14px */}
<Icon icon={Wallet} size="md" />  {/* 16px — default */}
<Icon icon={Wallet} size="lg" />  {/* 20px */}
<Icon icon={Wallet} size="xl" />  {/* 24px */}`,

  colors: `import { Wallet } from "lucide-react";
import { Icon } from "@mnee/ui";

<Icon icon={Wallet} className="text-gray-700" />
<Icon icon={Wallet} className="text-brand" />
<Icon icon={Wallet} className="text-success" />
<Icon icon={Wallet} className="text-error" />
<Icon icon={Wallet} className="text-info" />`,

  brand: `<MneeIcon className="w-10 h-10" />`,

  install: `import { Wallet, Zap } from "lucide-react";
import { Icon } from "@mnee/ui";

// Pass any Lucide icon as a component reference
<Icon icon={Wallet} size="md" />`,
};

export default function IconsPage() {
  return (
    <div>
      <p className="text-xs font-mono text-gray-400 mb-2">Components</p>
      <h1 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">Icons</h1>
      <p className="text-gray-500 mb-8 leading-relaxed">
        A thin wrapper around{" "}
        <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">lucide-react</code>{" "}
        that applies design-system size tokens. Pass any Lucide icon as a component reference —
        tree-shaking stays intact and the full 600+ icon library is available.
      </p>

      {/* Basic usage */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Icon component</h2>
      <ComponentPreview code={snippets.basic} className="mb-8">
        <div className="flex items-center gap-4">
          <Icon icon={Wallet} />
          <Icon icon={Zap} size="lg" />
          <Icon icon={Send} size="xl" className="text-brand" />
        </div>
      </ComponentPreview>

      {/* Size scale */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Size scale</h2>
      <ComponentPreview code={snippets.sizes} className="mb-8">
        <div className="flex items-end gap-6">
          <div className="flex flex-col items-center gap-2">
            <Icon icon={Wallet} size="xs" className="text-gray-700" />
            <span className="text-[10px] text-gray-400 font-mono">xs</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Icon icon={Wallet} size="sm" className="text-gray-700" />
            <span className="text-[10px] text-gray-400 font-mono">sm</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Icon icon={Wallet} size="md" className="text-gray-700" />
            <span className="text-[10px] text-gray-400 font-mono">md</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Icon icon={Wallet} size="lg" className="text-gray-700" />
            <span className="text-[10px] text-gray-400 font-mono">lg</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Icon icon={Wallet} size="xl" className="text-gray-700" />
            <span className="text-[10px] text-gray-400 font-mono">xl</span>
          </div>
        </div>
      </ComponentPreview>

      {/* Color */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Color</h2>
      <ComponentPreview code={snippets.colors} className="mb-8">
        <div className="flex items-center gap-4">
          <Icon icon={Wallet} size="lg" className="text-gray-700" />
          <Icon icon={Wallet} size="lg" className="text-brand" />
          <Icon icon={Wallet} size="lg" className="text-success" />
          <Icon icon={Wallet} size="lg" className="text-error" />
          <Icon icon={Wallet} size="lg" className="text-info" />
        </div>
      </ComponentPreview>

      {/* Lucide library callout */}
      <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 mb-8">
        <p className="text-sm text-amber-900 font-medium mb-1">600+ icons available</p>
        <p className="text-sm text-amber-800">
          Browse the full library at{" "}
          <span className="font-mono text-xs bg-amber-100 px-1.5 py-0.5 rounded">lucide.dev/icons</span>.
          Import directly from{" "}
          <span className="font-mono text-xs bg-amber-100 px-1.5 py-0.5 rounded">lucide-react</span>{" "}
          and pass the component via the{" "}
          <span className="font-mono text-xs bg-amber-100 px-1.5 py-0.5 rounded">icon</span>{" "}
          prop — no registration needed.
        </p>
      </div>

      {/* Brand icon */}
      <h2 className="text-lg font-semibold text-gray-900 mb-1">Brand icon</h2>
      <p className="text-sm text-gray-500 mb-3">
        <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">MneeIcon</code> is a
        gradient SVG asset — not a Lucide icon. Size with Tailwind{" "}
        <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">w-*</code> /{" "}
        <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">h-*</code> classes.
      </p>
      <ComponentPreview code={snippets.brand} className="mb-8">
        <MneeIcon className="w-16 h-16" />
      </ComponentPreview>

      {/* Usage */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Usage</h2>
      <CodeBlock code={snippets.install} lang="tsx" />

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
              ["icon", "LucideIcon", "required", "Any Lucide icon component reference"],
              ["size", '"xs" | "sm" | "md" | "lg" | "xl"', '"md"', "Design-system size token (12 / 14 / 16 / 20 / 24px)"],
              ["className", "string", "—", "Tailwind utilities — use text-* for color"],
              ["strokeWidth", "number", "2", "Lucide stroke width passthrough"],
              ["aria-label", "string", "—", "Accessible label for standalone icons"],
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

      {/* Design ownership */}
      <div className="mt-8 rounded-lg border border-[#E5E5E5] bg-gray-50 px-4 py-3">
        <p className="text-xs text-gray-500">
          <span className="font-medium text-gray-700">Design system owned by Federico (Head of UX).</span>{" "}
          For token additions or icon system changes, coordinate with the UX team before publishing.
        </p>
      </div>
    </div>
  );
}
