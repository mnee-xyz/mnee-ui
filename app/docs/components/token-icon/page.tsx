import { TokenIcon } from "@/components/ui/token-icon";
import { ComponentPreview } from "@/components/site/ComponentPreview";
import { CodeBlock } from "@/components/site/CodeBlock";
import { ComponentStatus } from "@/components/site/ComponentStatus";

const snippets = {
  basic: `<TokenIcon token="USDC" />
<TokenIcon token="ETH" />
<TokenIcon token="BTC" />
<TokenIcon token="SOL" />
<TokenIcon token="MATIC" />`,

  sizes: `<TokenIcon token="USDC" size="sm" />
<TokenIcon token="USDC" size="md" />
<TokenIcon token="USDC" size="lg" />`,

  network: `<TokenIcon token="USDC" network="base" />
<TokenIcon token="ETH" network="ethereum" />
<TokenIcon token="USDC" network="arbitrum" />`,

  fallback: `<TokenIcon token="AAVE" />
<TokenIcon token="LINK" />
<TokenIcon token="UNI" />`,

  usage: `import { TokenIcon } from "@mnee-ui/ui"

<TokenIcon token="USDC" network="base" size="lg" />`,
};

export default function TokenIconPage() {
  return (
    <div>
      <p className="text-xs font-mono text-gray-400 mb-2">Components</p>
      <div className="flex items-center gap-2.5 mb-3">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">TokenIcon</h1>
        <ComponentStatus status="in-progress" />
      </div>
      <p className="text-gray-500 mb-8 leading-relaxed">
        Token and network icon registry. Renders inline SVG icons for crypto tokens
        with an optional network badge overlay. Falls back to colored initials when
        no icon is registered.
      </p>

      <h2 className="text-lg font-semibold text-gray-900 mb-3">Tokens</h2>
      <ComponentPreview code={snippets.basic} className="mb-10">
        <TokenIcon token="USDC" />
        <TokenIcon token="ETH" />
        <TokenIcon token="BTC" />
        <TokenIcon token="SOL" />
        <TokenIcon token="MATIC" />
        <TokenIcon token="USDT" />
        <TokenIcon token="XRP" />
        <TokenIcon token="DOGE" />
        <TokenIcon token="ADA" />
        <TokenIcon token="LTC" />
      </ComponentPreview>

      <h2 className="text-lg font-semibold text-gray-900 mb-3">Sizes</h2>
      <ComponentPreview code={snippets.sizes} className="mb-10">
        <TokenIcon token="USDC" size="sm" />
        <TokenIcon token="USDC" size="md" />
        <TokenIcon token="USDC" size="lg" />
      </ComponentPreview>

      <h2 className="text-lg font-semibold text-gray-900 mb-3">Network badge</h2>
      <ComponentPreview code={snippets.network} className="mb-10">
        <TokenIcon token="USDC" network="base" size="lg" />
        <TokenIcon token="ETH" network="ethereum" size="lg" />
        <TokenIcon token="USDC" network="arbitrum" size="lg" />
        <TokenIcon token="MATIC" network="polygon" size="lg" />
        <TokenIcon token="SOL" network="solana" size="lg" />
      </ComponentPreview>

      <h2 className="text-lg font-semibold text-gray-900 mb-3">Fallback (unregistered tokens)</h2>
      <ComponentPreview code={snippets.fallback} className="mb-10">
        <TokenIcon token="AAVE" size="lg" />
        <TokenIcon token="LINK" size="lg" />
        <TokenIcon token="UNI" size="lg" />
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
              ["token", "string", "—", "Token symbol (e.g. \"USDC\", \"ETH\")"],
              ["network", "string", "—", "Optional network badge (e.g. \"base\", \"ethereum\")"],
              ["size", '"sm" | "md" | "lg"', '"md"', "Icon size: 20px / 28px / 36px"],
              ["className", "string", "—", "Additional container classes"],
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
