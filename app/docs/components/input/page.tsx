import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ComponentPreview } from "@/components/site/ComponentPreview";
import { CodeBlock } from "@/components/site/CodeBlock";

const snippets = {
  default: `<Input placeholder="Enter value..." />`,

  withLabel: `<Input
  label="Email address"
  hint="We'll never share your email."
  placeholder="you@example.com"
/>`,

  error: `<Input
  label="Username"
  error="Username is already taken."
  defaultValue="john_doe"
/>`,

  sizes: `<Input size="sm" placeholder="Small" />
<Input size="md" placeholder="Medium (default)" />
<Input size="lg" placeholder="Large" />`,

  disabled: `<Input label="Read-only field" disabled defaultValue="Cannot edit" />`,

  withPrefix: `<Input label="Amount" prefix="$" placeholder="0.00" />`,

  withSuffix: `<Input label="Rate" suffix="%" placeholder="0.0" />`,

  withLeadingIcon: `import { Search } from "lucide-react";

<Input label="Search" leadingIcon={<Search />} placeholder="Search..." />`,

  required: `<Input label="Full name" required placeholder="Jane Doe" />`,

  install: `import { Input } from "@mnee/ui"`,
};

export default function InputPage() {
  return (
    <div>
      <p className="text-xs font-mono text-gray-400 mb-2">Components</p>
      <h1 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">Input</h1>
      <p className="text-gray-500 mb-6 leading-relaxed">
        Base text input with optional label, hint, and error states. Extends all
        native <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">input</code> HTML attributes.
      </p>

      <div className="mb-8 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
        <strong>Design system owned.</strong> Prefix/suffix symbols, leading icons, and required indicators
        are handled by this component — pass props, don&apos;t add wrapper divs. Engineers should not
        manually position absolute spans or hardcode focus rings around inputs.
      </div>

      {/* Default */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Default</h2>
      <ComponentPreview code={snippets.default} className="mb-8">
        <div className="w-64">
          <Input placeholder="Enter value..." />
        </div>
      </ComponentPreview>

      {/* With Label + Hint */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">With label & hint</h2>
      <ComponentPreview code={snippets.withLabel} className="mb-8">
        <div className="w-72">
          <Input
            label="Email address"
            hint="We'll never share your email."
            placeholder="you@example.com"
          />
        </div>
      </ComponentPreview>

      {/* Error state */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Error state</h2>
      <ComponentPreview code={snippets.error} className="mb-8">
        <div className="w-72">
          <Input
            label="Username"
            error="Username is already taken."
            defaultValue="john_doe"
          />
        </div>
      </ComponentPreview>

      {/* Sizes */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Sizes</h2>
      <ComponentPreview code={snippets.sizes} className="mb-8">
        <div className="w-64 flex flex-col gap-3">
          <Input size="sm" placeholder="Small" />
          <Input size="md" placeholder="Medium (default)" />
          <Input size="lg" placeholder="Large" />
        </div>
      </ComponentPreview>

      {/* Disabled */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Disabled</h2>
      <ComponentPreview code={snippets.disabled} className="mb-8">
        <div className="w-72">
          <Input label="Read-only field" disabled defaultValue="Cannot edit" />
        </div>
      </ComponentPreview>

      {/* With prefix */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">With prefix</h2>
      <ComponentPreview code={snippets.withPrefix} className="mb-8">
        <div className="w-48">
          <Input label="Amount" prefix="$" placeholder="0.00" />
        </div>
      </ComponentPreview>

      {/* With suffix */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">With suffix</h2>
      <ComponentPreview code={snippets.withSuffix} className="mb-8">
        <div className="w-48">
          <Input label="Rate" suffix="%" placeholder="0.0" />
        </div>
      </ComponentPreview>

      {/* With leading icon */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">With leading icon</h2>
      <ComponentPreview code={snippets.withLeadingIcon} className="mb-8">
        <div className="w-72">
          <Input label="Search" leadingIcon={<Search />} placeholder="Search..." />
        </div>
      </ComponentPreview>

      {/* Required field */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Required field</h2>
      <ComponentPreview code={snippets.required} className="mb-10">
        <div className="w-72">
          <Input label="Full name" required placeholder="Jane Doe" />
        </div>
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
              ["label", "string", "—", "Label text rendered above the input"],
              ["hint", "string", "—", "Helper text shown below (hidden when error is set)"],
              ["error", "string", "—", "Error message; applies error styling and aria-invalid"],
              ["size", `"sm" | "md" | "lg"`, `"md"`, "Controls height, padding, and font size"],
              ["prefix", "string", "—", `Text adornment inside the left edge of the border (e.g. "$", "https://")`],
              ["suffix", "string", "—", `Text adornment inside the right edge of the border (e.g. "%", ".com")`],
              ["leadingIcon", "ReactNode", "—", "Icon at the left of the input — pass a Lucide icon; size and color are design-system controlled"],
              ["trailingIcon", "ReactNode", "—", "Icon at the right of the input"],
              ["required", "boolean", "false", "Marks the field as required; renders a red * after the label text"],
              ["disabled", "boolean", "false", "Disables the input"],
              ["placeholder", "string", "—", "Placeholder text"],
              ["className", "string", "—", "Layout utilities only (margin, width) — applied to the outer field wrapper"],
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
