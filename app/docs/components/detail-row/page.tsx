import { DetailRow } from "@/components/ui/detail-row";
import { TokenIcon } from "@/components/ui/token-icon";
import { BaseNetworkIcon } from "@/components/ui/token-icons/networks/base";
import { ComponentPreview } from "@/components/site/ComponentPreview";
import { CodeBlock } from "@/components/site/CodeBlock";
import { ComponentStatus } from "@/components/site/ComponentStatus";

const snippets = {
  variants: `<DetailRow label="Token" value="USDC" />
<DetailRow label="Status" value="Completed" variant="success" />
<DetailRow label="Error" value="Insufficient funds" variant="error" />
<DetailRow label="Est. network fee" value="~$0.02" />
<DetailRow label="Recipient receives" value="~119.98 USDC" variant="brand" />`,

  card: `{/* Confirmation card pattern */}
<div className="rounded-xl border border-[#e5e5e5] overflow-hidden">
  {/* Header */}
  <div className="bg-[#f5f5f5] pt-3 px-4 pb-4">
    <p className="text-sm text-muted">You are sending</p>
    <p className="text-2xl font-semibold text-gray-900">$120.00</p>
  </div>
  {/* Rows */}
  <div className="flex flex-col gap-3 p-4">
    <DetailRow label="Token" value={<>USDC <TokenIcon token="USDC" size="sm" /></>} />
    <DetailRow label="Network" value="Base" />
    <DetailRow label="Destination" value="038123...2301" />
    <div className="border-t border-[#e5e5e5]" />
    <DetailRow label="Est. network fee" value="~$0.02" />
    <DetailRow label="Recipient receives" value="~119.98 USDC" variant="brand" />
  </div>
</div>`,

  usage: `import { DetailRow } from "@mnee-ui/ui"

<div className="flex flex-col gap-3">
  <DetailRow label="Token" value="USDC" />
  <DetailRow label="Network" value="Base" />
  <DetailRow label="Amount" value="$120.00" />
  <DetailRow label="Recipient receives" value="~119.98 USDC" variant="brand" />
</div>`,

  backendExample: `// All values come from your API — DetailRow is purely presentational.

const { data: tx } = useSWR(\`/api/withdraw/\${txId}/preview\`, fetcher)

<div className="rounded-xl border border-[#e5e5e5] overflow-hidden">
  <div className="bg-[#f5f5f5] pt-3 px-4 pb-4">
    <p className="text-sm text-muted">You are sending</p>
    <p className="text-2xl font-semibold text-gray-900">
      $\{tx.amountUsd.toLocaleString("en-US", { minimumFractionDigits: 2 })}
    </p>
  </div>
  <div className="flex flex-col gap-3 p-4">
    <DetailRow
      label="Token"
      value={<>{tx.token} <TokenIcon token={tx.token} size="sm" /></>}
    />
    <DetailRow
      label="Network"
      value={<>{tx.networkName} <NetworkIcon network={tx.network} /></>}
    />
    <DetailRow
      label="Destination"
      value={<span className="font-mono">{truncateAddress(tx.address)}</span>}
    />
    <div className="border-t border-[#e5e5e5]" />
    <DetailRow label="Est. network fee" value={\`~$\${tx.fee}\`} />
    <DetailRow
      label="Recipient receives"
      value={\`~\${tx.recipientAmount} \${tx.token}\`}
      variant="brand"
    />
  </div>
</div>`,
};

export default function DetailRowPage() {
  return (
    <div>
      <p className="text-xs font-mono text-gray-400 mb-2">Components</p>
      <div className="flex items-center gap-2.5 mb-3">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">DetailRow</h1>
        <ComponentStatus status="in-progress" />
      </div>
      <p className="text-gray-500 mb-8 leading-relaxed">
        Key-value pair row for confirmation screens and receipts.
        Label on the left, value on the right. Values can include inline icons.
        Use <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">variant=&quot;brand&quot;</code> for
        highlighted values like &ldquo;Recipient receives&rdquo;.
      </p>

      <h2 className="text-lg font-semibold text-gray-900 mb-3">Variants</h2>
      <ComponentPreview code={snippets.variants} className="mb-10">
        <div className="w-[400px] flex flex-col gap-3">
          <DetailRow label="Token" value="USDC" />
          <DetailRow label="Status" value="Completed" variant="success" />
          <DetailRow label="Error" value="Insufficient funds" variant="error" />
          <DetailRow label="Est. network fee" value="~$0.02" />
          <DetailRow label="Recipient receives" value="~119.98 USDC" variant="brand" />
        </div>
      </ComponentPreview>

      <h2 className="text-lg font-semibold text-gray-900 mb-3">Confirmation card</h2>
      <ComponentPreview code={snippets.card} className="mb-10">
        <div className="w-[430px] rounded-xl border border-[#e5e5e5] overflow-hidden">
          <div className="bg-[#f5f5f5] pt-3 px-4 pb-4">
            <p className="text-sm text-[#737373]">You are sending</p>
            <p className="text-2xl font-semibold text-gray-900">$120.00</p>
          </div>
          <div className="flex flex-col gap-3 p-4">
            <DetailRow label="Token" value={<>USDC <TokenIcon token="USDC" size="sm" /></>} />
            <DetailRow label="Network" value={<>Base <BaseNetworkIcon className="w-4 h-4 rounded-full" /></>} />
            <DetailRow label="Destination" value={<span className="font-mono">038123...2301</span>} />
            <div className="border-t border-[#e5e5e5]" />
            <DetailRow label="Est. network fee" value="~$0.02" />
            <DetailRow label="Recipient receives" value="~119.98 USDC" variant="brand" />
          </div>
        </div>
      </ComponentPreview>

      <h2 className="text-lg font-semibold text-gray-900 mb-3">Usage</h2>
      <CodeBlock code={snippets.usage} lang="tsx" />

      <h2 className="text-lg font-semibold text-gray-900 mt-8 mb-3">Backend-driven confirmation</h2>
      <p className="text-gray-500 mb-4 leading-relaxed">
        DetailRow is purely presentational — pass any value from your API.
        Token icons, network icons, truncated addresses, and fee estimates
        all come from the backend response.
      </p>
      <CodeBlock code={snippets.backendExample} lang="tsx" />

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
              ["label", "string", "—", "Left-side label text"],
              ["value", "React.ReactNode", "—", "Right-side value (string, icon+text, etc)"],
              ["action", "React.ReactNode", "—", "Optional trailing action (e.g. copy button)"],
              ["variant", '"default" | "success" | "error" | "muted" | "brand"', '"default"', "Value color variant"],
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
