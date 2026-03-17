import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ComponentPreview } from "@/components/site/ComponentPreview";
import { CodeBlock } from "@/components/site/CodeBlock";
import { ComponentStatus } from "@/components/site/ComponentStatus";

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

  // ── InputStack (layout="stacked") ──────────────────────────
  stackDefault: `<Input
  layout="stacked"
  label="Email"
  hint="This is your public display name."
  placeholder="Email"
  action={<Button variant="primary">Submit</Button>}
/>`,

  stackRequired: `<Input
  layout="stacked"
  label="Email"
  hint="This is your public display name."
  placeholder="Email"
  required
  action={<Button variant="primary">Submit</Button>}
/>`,

  stackError: `<Input
  layout="stacked"
  label="Email"
  error="This is your public display name."
  placeholder="Email"
  action={<Button variant="primary">Submit</Button>}
/>`,

  stackDisabled: `<Input
  layout="stacked"
  label="Email"
  hint="This is your public display name."
  placeholder="Email"
  disabled
  action={<Button variant="primary" disabled>Submit</Button>}
/>`,

  stackNoHint: `<Input
  layout="stacked"
  label="Email"
  placeholder="Email"
  action={<Button variant="primary">Submit</Button>}
/>`,

  stackNoButton: `<Input
  layout="stacked"
  label="Email"
  hint="This is your public display name."
  placeholder="Email"
/>`,

  // ── InputInline (layout="inline") ──────────────────────────
  inlineDefault: `<Input
  layout="inline"
  label="Email"
  placeholder="Email"
  action={<Button variant="primary">Submit</Button>}
/>`,

  inlineRequired: `<Input
  layout="inline"
  label="Email"
  placeholder="Email"
  required
  action={<Button variant="primary">Submit</Button>}
/>`,

  inlineError: `<Input
  layout="inline"
  label="Email"
  error="Invalid email address."
  placeholder="Email"
  action={<Button variant="primary">Submit</Button>}
/>`,

  inlineDisabled: `<Input
  layout="inline"
  label="Email"
  placeholder="Email"
  disabled
  action={<Button variant="primary" disabled>Submit</Button>}
/>`,

  inlineNoLabel: `<Input
  layout="inline"
  placeholder="Email"
  action={<Button variant="primary">Submit</Button>}
/>`,

  install: `import { Input } from "@mnee-ui/ui"`,
};

export default function InputPage() {
  return (
    <div>
      <p className="text-xs font-mono text-gray-400 mb-2">Components</p>
      <div className="flex items-center gap-2.5 mb-3">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Input</h1>
        <ComponentStatus status="stable" />
      </div>
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

      {/* ── INPUT STACK (layout="stacked") ──────────────────────── */}
      <div className="border-t border-gray-200 mt-4 mb-6" />
      <h2 className="text-xl font-semibold text-gray-900 mb-2">InputStack</h2>
      <p className="text-gray-500 text-sm mb-2">
        Use <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">layout=&quot;stacked&quot;</code> to
        render label, input, hint/error, and an action button in a vertical stack.
      </p>
      <p className="text-xs text-gray-400 mb-6">
        Figma component: <strong>InputStack</strong> — linked here because nested Code Connect instances
        are not yet supported in Figma Dev Mode.
      </p>

      {/* Stack: Default */}
      <h3 className="text-base font-medium text-gray-900 mb-3">Default</h3>
      <ComponentPreview code={snippets.stackDefault} className="mb-8">
        <div className="w-72">
          <Input
            layout="stacked"
            label="Email"
            hint="This is your public display name."
            placeholder="Email"
            action={<Button variant="primary">Submit</Button>}
          />
        </div>
      </ComponentPreview>

      {/* Stack: Required */}
      <h3 className="text-base font-medium text-gray-900 mb-3">With required</h3>
      <ComponentPreview code={snippets.stackRequired} className="mb-8">
        <div className="w-72">
          <Input
            layout="stacked"
            label="Email"
            hint="This is your public display name."
            placeholder="Email"
            required
            action={<Button variant="primary">Submit</Button>}
          />
        </div>
      </ComponentPreview>

      {/* Stack: Error */}
      <h3 className="text-base font-medium text-gray-900 mb-3">Error</h3>
      <p className="text-gray-500 text-sm mb-3">
        When <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">error</code> is
        set, it replaces the hint text and the border turns red.
      </p>
      <ComponentPreview code={snippets.stackError} className="mb-8">
        <div className="w-72">
          <Input
            layout="stacked"
            label="Email"
            error="This is your public display name."
            placeholder="Email"
            action={<Button variant="primary">Submit</Button>}
          />
        </div>
      </ComponentPreview>

      {/* Stack: Disabled */}
      <h3 className="text-base font-medium text-gray-900 mb-3">Disabled</h3>
      <p className="text-gray-500 text-sm mb-3">
        Pass <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">disabled</code> to
        the Input and the action Button to disable the entire group.
      </p>
      <ComponentPreview code={snippets.stackDisabled} className="mb-8">
        <div className="w-72">
          <Input
            layout="stacked"
            label="Email"
            hint="This is your public display name."
            placeholder="Email"
            disabled
            action={<Button variant="primary" disabled>Submit</Button>}
          />
        </div>
      </ComponentPreview>

      {/* Stack: Without hint */}
      <h3 className="text-base font-medium text-gray-900 mb-3">Without hint</h3>
      <ComponentPreview code={snippets.stackNoHint} className="mb-8">
        <div className="w-72">
          <Input
            layout="stacked"
            label="Email"
            placeholder="Email"
            action={<Button variant="primary">Submit</Button>}
          />
        </div>
      </ComponentPreview>

      {/* Stack: Without button */}
      <h3 className="text-base font-medium text-gray-900 mb-3">Without button</h3>
      <ComponentPreview code={snippets.stackNoButton} className="mb-8">
        <div className="w-72">
          <Input
            layout="stacked"
            label="Email"
            hint="This is your public display name."
            placeholder="Email"
          />
        </div>
      </ComponentPreview>

      {/* ── INPUT INLINE (layout="inline") ──────────────────────── */}
      <div className="border-t border-gray-200 mt-4 mb-6" />
      <h2 className="text-xl font-semibold text-gray-900 mb-2">InputInline</h2>
      <p className="text-gray-500 text-sm mb-2">
        Use <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">layout=&quot;inline&quot;</code> to
        place the action beside the field — ideal for newsletter sign-ups and quick-submit forms.
        Hint text is hidden in inline mode.
      </p>
      <p className="text-xs text-gray-400 mb-6">
        Figma component: <strong>InputInline</strong> — linked here because nested Code Connect instances
        are not yet supported in Figma Dev Mode.
      </p>

      {/* Inline: Default */}
      <h3 className="text-base font-medium text-gray-900 mb-3">Default</h3>
      <ComponentPreview code={snippets.inlineDefault} className="mb-8">
        <div className="w-96">
          <Input
            layout="inline"
            label="Email"
            placeholder="Email"
            action={<Button variant="primary">Submit</Button>}
          />
        </div>
      </ComponentPreview>

      {/* Inline: Required */}
      <h3 className="text-base font-medium text-gray-900 mb-3">With required</h3>
      <ComponentPreview code={snippets.inlineRequired} className="mb-8">
        <div className="w-96">
          <Input
            layout="inline"
            label="Email"
            placeholder="Email"
            required
            action={<Button variant="primary">Submit</Button>}
          />
        </div>
      </ComponentPreview>

      {/* Inline: Error */}
      <h3 className="text-base font-medium text-gray-900 mb-3">Error</h3>
      <ComponentPreview code={snippets.inlineError} className="mb-8">
        <div className="w-96">
          <Input
            layout="inline"
            label="Email"
            error="Invalid email address."
            placeholder="Email"
            action={<Button variant="primary">Submit</Button>}
          />
        </div>
      </ComponentPreview>

      {/* Inline: Disabled */}
      <h3 className="text-base font-medium text-gray-900 mb-3">Disabled</h3>
      <ComponentPreview code={snippets.inlineDisabled} className="mb-8">
        <div className="w-96">
          <Input
            layout="inline"
            label="Email"
            placeholder="Email"
            disabled
            action={<Button variant="primary" disabled>Submit</Button>}
          />
        </div>
      </ComponentPreview>

      {/* Inline: Without label */}
      <h3 className="text-base font-medium text-gray-900 mb-3">Without label</h3>
      <ComponentPreview code={snippets.inlineNoLabel} className="mb-10">
        <div className="w-96">
          <Input
            layout="inline"
            placeholder="Email"
            action={<Button variant="primary">Submit</Button>}
          />
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
              ["layout", `"stacked" | "inline"`, "—", "stacked: renders action below the field; inline: renders action beside it (hint hidden)"],
              ["action", "ReactNode", "—", "Action element (e.g. Button) placed via the layout slot"],
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
