import { DropdownToken } from "@/components/ui/dropdown-token";
import { TokenIcon } from "@/components/ui/token-icon";
import { ComponentPreview } from "@/components/site/ComponentPreview";
import { CodeBlock } from "@/components/site/CodeBlock";
import { ComponentStatus } from "@/components/site/ComponentStatus";
import { DropdownTokenDemo } from "./demo";

const snippets = {
  basic: `<DropdownToken title="USD Coin" subtitle="USDC on Base" hasLeadingIcon={false} />`,

  withIcon: `<DropdownToken
  label="Convert in"
  icon={<TokenIcon token="USDC" network="base" />}
  title="USD Coin"
  subtitle="USDC on Base"
/>`,

  noTrailing: `<DropdownToken
  icon={<TokenIcon token="ETH" network="ethereum" />}
  title="Ethereum"
  subtitle="ETH on Ethereum"
  hasTrailingIcon={false}
/>`,

  usage: `import { DropdownToken } from "@mnee-ui/ui"

<DropdownToken
  label="Token"
  icon={<TokenIcon token={selected.symbol} />}
  title={selected.name}
  subtitle={selected.symbol}
  isOpen={dropdownOpen}
  onClick={() => setDropdownOpen(!dropdownOpen)}
/>`,
};

export default function DropdownTokenPage() {
  return (
    <div>
      <p className="text-xs font-mono text-gray-400 mb-2">Components</p>
      <div className="flex items-center gap-2.5 mb-3">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">DropdownToken</h1>
        <ComponentStatus status="in-progress" />
      </div>
      <p className="text-gray-500 mb-8 leading-relaxed">
        Pill-shaped dropdown trigger with secondary background. Displays a leading icon,
        title, subtitle, and trailing chevron. Toggle icon slots with{" "}
        <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">hasLeadingIcon</code> and{" "}
        <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">hasTrailingIcon</code>.
        Pairs with SelectList for dropdown behavior.
      </p>

      <h2 className="text-lg font-semibold text-gray-900 mb-3">With icon &amp; label</h2>
      <ComponentPreview code={snippets.withIcon} className="mb-10">
        <DropdownTokenDemo />
      </ComponentPreview>

      <h2 className="text-lg font-semibold text-gray-900 mb-3">Without leading icon</h2>
      <ComponentPreview code={snippets.basic} className="mb-10">
        <div className="w-[430px]">
          <DropdownToken title="USD Coin" subtitle="USDC on Base" hasLeadingIcon={false} />
        </div>
      </ComponentPreview>

      <h2 className="text-lg font-semibold text-gray-900 mb-3">Without trailing icon</h2>
      <ComponentPreview code={snippets.noTrailing} className="mb-10">
        <div className="w-[430px]">
          <DropdownToken
            icon={<TokenIcon token="ETH" network="ethereum" size="lg" />}
            title="Ethereum"
            subtitle="ETH on Ethereum"
            hasTrailingIcon={false}
          />
        </div>
      </ComponentPreview>

      <h2 className="text-lg font-semibold text-gray-900 mb-3">Usage</h2>
      <CodeBlock code={snippets.usage} lang="tsx" />

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
              ["label", "string", "\u2014", "Section label above the trigger (e.g. \"Convert in\")"],
              ["hasLabel", "boolean", "true", "Show/hide the label"],
              ["icon", "React.ReactNode", "Coins icon", "Leading icon content (e.g. TokenIcon). Falls back to a placeholder coins icon when omitted"],
              ["hasLeadingIcon", "boolean", "true", "Show/hide the leading icon slot"],
              ["hasTrailingIcon", "boolean", "true", "Show/hide the trailing chevron"],
              ["title", "string", "\u2014", "Primary text (14px medium)"],
              ["subtitle", "string", "\u2014", "Secondary text (14px medium, muted)"],
              ["isOpen", "boolean", "false", "Rotates chevron 180\u00b0 when open"],
              ["className", "string", "\u2014", "Additional classes on wrapper div"],
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
