import { Banner } from "@/components/ui/banner";
import { Button } from "@/components/ui/button";
import { ComponentPreview } from "@/components/site/ComponentPreview";
import { CodeBlock } from "@/components/site/CodeBlock";
import { ComponentStatus } from "@/components/site/ComponentStatus";

const snippets = {
  gradient: `<Banner
  variant="gradient"
  title="Rewards coming soon!"
  description="Earn a daily reward on your MNEE balance."
/>`,

  variants: `<Banner variant="info"    title="Update available" description="Version 2.1 is ready to install." />
<Banner variant="success" title="Payment confirmed" description="Your transaction was processed." />
<Banner variant="warning" title="Action required"   description="Please verify your email address." />
<Banner variant="error"   title="Payment failed"    description="Your card was declined." />`,

  withAction: `<Banner
  variant="gradient"
  title="Rewards coming soon!"
  description="Earn a daily reward on your MNEE balance."
  action={<Button size="sm">Learn more</Button>}
/>`,

  install: `import { Banner } from "@mnee-ui/ui"`,
};

export default function BannerPage() {
  return (
    <div>
      <p className="text-xs font-mono text-gray-400 mb-2">Components</p>
      <div className="flex items-center gap-2.5 mb-3">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Banner</h1>
        <ComponentStatus status="in-progress" />
      </div>
      <p className="text-gray-500 mb-8 leading-relaxed">
        Informational strip for announcements, status messages, or promotions.
        The <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">gradient</code> variant
        matches the MNEE product&apos;s APY banner aesthetic; semantic variants use design tokens.
      </p>

      {/* Gradient */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Gradient (default)</h2>
      <ComponentPreview code={snippets.gradient} className="mb-8">
        <div className="w-full max-w-md">
          <Banner
            variant="gradient"
            title="Rewards coming soon!"
            description="Earn a daily reward on your MNEE balance."
          />
        </div>
      </ComponentPreview>

      {/* Semantic variants */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Semantic variants</h2>
      <ComponentPreview code={snippets.variants} className="mb-8">
        <div className="flex flex-col gap-3 w-full">
          <Banner variant="info"    title="Update available"  description="Version 2.1 is ready to install." />
          <Banner variant="success" title="Payment confirmed" description="Your transaction was processed." />
          <Banner variant="warning" title="Action required"   description="Please verify your email address." />
          <Banner variant="error"   title="Payment failed"    description="Your card was declined." />
        </div>
      </ComponentPreview>

      {/* With action */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">With action</h2>
      <ComponentPreview code={snippets.withAction} className="mb-10">
        <div className="w-full max-w-md">
          <Banner
            variant="gradient"
            title="Rewards coming soon!"
            description="Earn a daily reward on your MNEE balance."
            action={<Button size="sm">Learn more</Button>}
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
              ["title", "string", "—", "Primary text, rendered in bold"],
              ["description", "string", "—", "Secondary text below the title"],
              ["variant", `"gradient" | "info" | "success" | "warning" | "error"`, `"gradient"`, "Visual style — gradient uses teal→amber, others use semantic tokens"],
              ["action", "ReactNode", "—", "Optional element rendered on the right (e.g. a Button)"],
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
