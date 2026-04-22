import { Spinner } from "@/components/ui/spinner";
import { BrikSpinner } from "@/components/ui/brik-spinner";
import { Badge } from "@/components/ui/badge";
import { ComponentPreview } from "@/components/site/ComponentPreview";
import { CodeBlock } from "@/components/site/CodeBlock";
import { ComponentStatus } from "@/components/site/ComponentStatus";

const snippets = {
  default: `<Spinner />`,

  sizes: `<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />`,

  colors: `<Spinner color="default" />
<Spinner color="brand" />
<Spinner color="muted" />
<Spinner color="success" />
<Spinner color="error" />
<Spinner color="warning" />
<Spinner color="info" />`,

  variants: `<Spinner variant="circle" size="lg" />
<Spinner variant="loader" size="lg" />`,

  inButton: `<BrikSpinner />
<BrikSpinner variant="secondary" />
<BrikSpinner variant="outline" />`,

  inBadge: `import { Spinner } from "@mnee-ui/ui"

<Badge variant="default"   icon={<Spinner size="sm" color="brand" />}>Syncing</Badge>
<Badge variant="secondary" icon={<Spinner size="sm" />}>Updating</Badge>
<Badge variant="outline"   icon={<Spinner size="sm" />}>Processing</Badge>`,

  emptyState: `import { Spinner } from "@mnee-ui/ui"

<div className="flex flex-col items-center gap-2 p-12">
  <div className="flex items-center justify-center size-10 rounded-lg bg-[#f5f5f5]">
    <Spinner size="lg" color="brand" />
  </div>
  <p className="text-lg font-medium text-[#0a0a0a]">Processing your request</p>
  <p className="text-sm text-[#737373] text-center max-w-xs">
    Please wait while we process your request. Do not refresh the page.
  </p>
</div>`,

  usage: `import { Spinner } from "@mnee-ui/ui"

<Spinner />
<Spinner size="lg" color="brand" />
<Spinner variant="loader" size="sm" color="muted" />`,
};

export default function SpinnerPage() {
  return (
    <div>
      <p className="text-xs font-mono text-gray-400 mb-2">Components</p>
      <div className="flex items-center gap-2.5 mb-3">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Spinner</h1>
        <ComponentStatus status="stable" />
      </div>
      <p className="text-gray-500 mb-8 leading-relaxed">
        An indicator that can be used to show a loading state.
      </p>

      {/* Default */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Default</h2>
      <ComponentPreview code={snippets.default} className="mb-10">
        <Spinner />
      </ComponentPreview>

      {/* Sizes */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Sizes</h2>
      <p className="text-gray-500 text-sm mb-3 leading-relaxed">
        Three sizes: <code className="font-mono text-xs">sm</code> (12px),{" "}
        <code className="font-mono text-xs">md</code> (16px, default),{" "}
        <code className="font-mono text-xs">lg</code> (24px).
      </p>
      <ComponentPreview code={snippets.sizes} className="mb-10">
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <Spinner size="sm" />
            <span className="text-xs text-gray-400">sm</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner size="md" />
            <span className="text-xs text-gray-400">md</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner size="lg" />
            <span className="text-xs text-gray-400">lg</span>
          </div>
        </div>
      </ComponentPreview>

      {/* Colors */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Colors</h2>
      <ComponentPreview code={snippets.colors} className="mb-10">
        <div className="flex items-center gap-5">
          <Spinner size="lg" color="default" />
          <Spinner size="lg" color="brand" />
          <Spinner size="lg" color="muted" />
          <Spinner size="lg" color="success" />
          <Spinner size="lg" color="error" />
          <Spinner size="lg" color="warning" />
          <Spinner size="lg" color="info" />
        </div>
      </ComponentPreview>

      {/* Variants */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Variants</h2>
      <p className="text-gray-500 text-sm mb-3 leading-relaxed">
        <code className="font-mono text-xs">circle</code> uses{" "}
        <code className="font-mono text-xs">LoaderCircle</code> (arc ring, default).{" "}
        <code className="font-mono text-xs">loader</code> uses{" "}
        <code className="font-mono text-xs">Loader2</code> (8-spoke asterisk).
      </p>
      <ComponentPreview code={snippets.variants} className="mb-10">
        <div className="flex items-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <Spinner variant="circle" size="lg" />
            <span className="text-xs text-gray-400">circle</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner variant="loader" size="lg" />
            <span className="text-xs text-gray-400">loader</span>
          </div>
        </div>
      </ComponentPreview>

      {/* In Buttons */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">BrikSpinner</h2>
      <p className="text-gray-500 text-sm mb-3 leading-relaxed">
        A dedicated loading-button component. Always in the loading state — no toggle needed.
        Supports <code className="font-mono text-xs">primary</code>,{" "}
        <code className="font-mono text-xs">secondary</code>, and{" "}
        <code className="font-mono text-xs">outline</code> variants.
      </p>
      <ComponentPreview code={snippets.inButton} className="mb-10">
        <BrikSpinner />
        <BrikSpinner variant="secondary" />
        <BrikSpinner variant="outline" />
      </ComponentPreview>

      {/* In Badges */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">In Badges</h2>
      <p className="text-gray-500 text-sm mb-3 leading-relaxed">
        Pass a <code className="font-mono text-xs">Spinner</code> to the{" "}
        <code className="font-mono text-xs">icon</code> prop for inline loading badges.
      </p>
      <ComponentPreview code={snippets.inBadge} className="mb-10">
        <Badge variant="default" icon={<Spinner size="sm" color="brand" />}>Syncing</Badge>
        <Badge variant="secondary" icon={<Spinner size="sm" />}>Updating</Badge>
        <Badge variant="outline" icon={<Spinner size="sm" />}>Processing</Badge>
      </ComponentPreview>

      {/* Loading Empty State */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Loading Empty State</h2>
      <p className="text-gray-500 text-sm mb-3 leading-relaxed">
        Compose with standard layout utilities to build a full-page loading state.
      </p>
      <ComponentPreview code={snippets.emptyState} className="mb-10">
        <div className="flex flex-col items-center gap-2 p-12">
          <div className="flex items-center justify-center size-10 rounded-lg bg-[#f5f5f5]">
            <Spinner size="lg" color="brand" />
          </div>
          <p className="text-lg font-medium text-[#0a0a0a]">Processing your request</p>
          <p className="text-sm text-[#737373] text-center max-w-xs">
            Please wait while we process your request. Do not refresh the page.
          </p>
        </div>
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
              {["Prop", "Type", "Default", "Description"].map((h) => (
                <th
                  key={h}
                  className="text-left px-4 py-2.5 border-b border-[#E5E5E5] text-xs font-semibold text-gray-500 uppercase bg-gray-50"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["variant", `"circle" | "loader"`, `"circle"`, "LoaderCircle (arc ring) or Loader2 (8-spoke)"],
              ["size", `"sm" | "md" | "lg"`, `"md"`, "12px / 16px / 24px"],
              ["color", `"default" | "brand" | "muted" | "success" | "error" | "warning" | "info"`, `"default"`, "Icon color"],
              ["className", "string", "—", "Additional classes passed to the SVG element"],
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
