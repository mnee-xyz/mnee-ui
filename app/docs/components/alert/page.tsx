import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { ComponentPreview } from "@/components/site/ComponentPreview";
import { CodeBlock } from "@/components/site/CodeBlock";
import { ComponentStatus } from "@/components/site/ComponentStatus";

const snippets = {
  info: `<Alert variant="info">
  This guide walks you through setup. Typically takes 10–15 minutes.
</Alert>`,

  tip: `<Alert variant="tip">
  Save your CPMT_ID somewhere secure. You'll need it later.
</Alert>`,

  variants: `<Alert variant="info">Informational note for the user.</Alert>
<Alert variant="warning">Something needs your attention.</Alert>
<Alert variant="tip">A helpful suggestion.</Alert>
<Alert variant="error">Something went wrong.</Alert>
<Alert variant="success">Action completed successfully.</Alert>`,

  customTitle: `<Alert variant="info" title="Custom title">
  You can override the default title label.
</Alert>`,

  withAction: `<Alert
  variant="warning"
  action={<Button size="sm" variant="outline">Verify Now</Button>}
>
  Your email address has not been verified.
</Alert>`,

  install: `import { Alert } from "@mnee-ui/ui"`,
};

export default function AlertPage() {
  return (
    <div>
      <p className="text-xs font-mono text-gray-400 mb-2">Components</p>
      <div className="flex items-center gap-2.5 mb-3">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Alert</h1>
        <ComponentStatus status="in-progress" />
      </div>
      <p className="text-gray-500 mb-8 leading-relaxed">
        Compact inline callout for notes, tips, warnings, and errors within prose or form content.
        Distinct from{" "}
        <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">Banner</code> which is a
        horizontal page-level strip with an optional CTA.
      </p>

      {/* Info */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Info (default)</h2>
      <ComponentPreview code={snippets.info} className="mb-8">
        <div className="w-full max-w-lg">
          <Alert variant="info">
            This guide walks you through setup. Typically takes 10–15 minutes.
          </Alert>
        </div>
      </ComponentPreview>

      {/* Tip */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Tip</h2>
      <ComponentPreview code={snippets.tip} className="mb-8">
        <div className="w-full max-w-lg">
          <Alert variant="tip">
            Save your CPMT_ID somewhere secure. You&apos;ll need it later.
          </Alert>
        </div>
      </ComponentPreview>

      {/* All variants */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">All variants</h2>
      <ComponentPreview code={snippets.variants} className="mb-8">
        <div className="flex flex-col gap-3 w-full">
          <Alert variant="info">Informational note for the user.</Alert>
          <Alert variant="warning">Something needs your attention.</Alert>
          <Alert variant="tip">A helpful suggestion.</Alert>
          <Alert variant="error">Something went wrong.</Alert>
          <Alert variant="success">Action completed successfully.</Alert>
        </div>
      </ComponentPreview>

      {/* Custom title */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Custom title</h2>
      <ComponentPreview code={snippets.customTitle} className="mb-8">
        <div className="w-full max-w-lg">
          <Alert variant="info" title="Custom title">
            You can override the default title label.
          </Alert>
        </div>
      </ComponentPreview>

      {/* With action */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">With action</h2>
      <ComponentPreview code={snippets.withAction} className="mb-10">
        <div className="w-full max-w-lg">
          <Alert
            variant="warning"
            action={<Button size="sm" variant="outline">Verify Now</Button>}
          >
            Your email address has not been verified.
          </Alert>
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
              ["variant", `"info" | "warning" | "tip" | "error" | "success"`, `"info"`, "Visual style and default icon/label"],
              ["title", "string", "variant label", "Override the default label (Note, Warning, Tip…)"],
              ["children", "ReactNode", "—", "Content rendered below the title row"],
              ["action", "ReactNode", "—", "Trailing action element (e.g. a Button)"],
              ["className", "string", "—", "Layout utilities (margin, width)"],
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
