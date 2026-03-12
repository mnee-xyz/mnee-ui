import { ButtonIcon } from "@/components/ui/button-icon";
import { ComponentPreview } from "@/components/site/ComponentPreview";
import { CodeBlock } from "@/components/site/CodeBlock";
import { ChevronRight } from "lucide-react";

const snippets = {
  variants: `<ButtonIcon variant="primary" icon={<ChevronRight size={16} />} />
<ButtonIcon variant="secondary" icon={<ChevronRight size={16} />} />
<ButtonIcon variant="destructive" icon={<ChevronRight size={16} />} />
<ButtonIcon variant="outline" icon={<ChevronRight size={16} />} />
<ButtonIcon variant="ghost" icon={<ChevronRight size={16} />} />`,

  states: `<ButtonIcon loading icon={<ChevronRight size={16} />} />
<ButtonIcon disabled icon={<ChevronRight size={16} />} />`,

  install: `import { ButtonIcon } from "@mnee-ui/ui"`,
};

export default function ButtonIconPage() {
  return (
    <div>
      <p className="text-xs font-mono text-gray-400 mb-2">Components</p>
      <h1 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">Button Icon</h1>
      <p className="text-gray-500 mb-8 leading-relaxed">
        A square icon-only button. Use when there is no room for a text label —
        toolbars, table actions, or icon-dense UIs.
      </p>

      {/* Variants */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Variants</h2>
      <ComponentPreview code={snippets.variants} className="mb-8">
        <ButtonIcon variant="primary" icon={<ChevronRight size={16} />} />
        <ButtonIcon variant="secondary" icon={<ChevronRight size={16} />} />
        <ButtonIcon variant="destructive" icon={<ChevronRight size={16} />} />
        <ButtonIcon variant="outline" icon={<ChevronRight size={16} />} />
        <ButtonIcon variant="ghost" icon={<ChevronRight size={16} />} />
      </ComponentPreview>

      {/* States */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">States</h2>
      <ComponentPreview code={snippets.states} className="mb-10">
        <ButtonIcon loading icon={<ChevronRight size={16} />} />
        <ButtonIcon disabled icon={<ChevronRight size={16} />} />
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
              ["variant", `"primary" | "secondary" | "destructive" | "outline" | "ghost"`, `"primary"`, "Visual style"],
              ["icon", "React.ReactNode", "—", "Lucide icon element — e.g. <ChevronRight size={16} />"],
              ["loading", "boolean", "false", "Shows spinner and disables interaction"],
              ["disabled", "boolean", "false", "Disables interaction"],
              ["className", "string", "—", "Layout utilities only (margin, position)"],
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
    </div>
  );
}
