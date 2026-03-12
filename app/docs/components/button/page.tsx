import { Button } from "@/components/ui/button";
import { ComponentPreview } from "@/components/site/ComponentPreview";
import { CodeBlock } from "@/components/site/CodeBlock";
import { ComponentStatus } from "@/components/site/ComponentStatus";

const snippets = {
  variants: `<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>`,

  sizes: `<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`,

  states: `<Button loading>Saving...</Button>
<Button disabled>Disabled</Button>`,

  install: `import { Button } from "@mnee-ui/ui"`,
};

export default function ButtonPage() {
  return (
    <div>
      <p className="text-xs font-mono text-gray-400 mb-2">Components</p>
      <div className="flex items-center gap-2.5 mb-3">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Button</h1>
        <ComponentStatus status="stable" />
      </div>
      <p className="text-gray-500 mb-8 leading-relaxed">
        Triggers actions or navigation. Use <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">primary</code> for
        main CTAs, <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">outline</code> for secondary actions, and{" "}
        <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">ghost</code> inside tight layouts.
      </p>

      {/* Variants */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Variants</h2>
      <ComponentPreview code={snippets.variants} className="mb-8">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
      </ComponentPreview>

      {/* Sizes */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Sizes</h2>
      <ComponentPreview code={snippets.sizes} className="mb-8">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </ComponentPreview>

      {/* States */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">States</h2>
      <ComponentPreview code={snippets.states} className="mb-10">
        <Button loading>Saving...</Button>
        <Button disabled>Disabled</Button>
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
              ["variant", `"primary" | "secondary" | "destructive" | "ghost" | "outline"`, `"primary"`, "Visual style"],
              ["size", `"sm" | "md" | "lg"`, `"md"`, "Height and padding"],
              ["loading", "boolean", "false", "Shows spinner, disables button"],
              ["disabled", "boolean", "false", "Disables interaction"],
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
    </div>
  );
}
