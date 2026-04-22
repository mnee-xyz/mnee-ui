import { Copy, Check } from "lucide-react";
import { DetailRow } from "@/components/ui/detail-row";
import { TokenIcon } from "@/components/ui/token-icon";
import { ComponentPreview } from "@/components/site/ComponentPreview";
import { CodeBlock } from "@/components/site/CodeBlock";
import { ComponentStatus } from "@/components/site/ComponentStatus";

const snippets = {
  variants: `<DetailRow label="Token" value="USDC" action={<TokenIcon token="USDC" size="sm" />} />
<DetailRow label="Status" value="Completed" variant="success" />
<DetailRow label="Est. network fee" value="~$0.02" />
<DetailRow label="Recipient receives" value="~119.98 USDC" variant="brand" />`,

  card: `{/* Confirmation card — uses DetailRow's \`action\` slot for trailing icons */}
<div className="rounded-xl border border-[#e5e5e5] overflow-hidden">
  <div className="bg-[#f5f5f5] pt-3 px-4 pb-4">
    <p className="text-sm text-muted">You are withdrawing</p>
    <p className="text-2xl font-semibold text-gray-900">$120.00</p>
  </div>
  <div className="flex flex-col gap-3 p-4">
    <DetailRow label="Token" value="USDC" action={<TokenIcon token="USDC" size="sm" />} />
    <DetailRow label="Network" value="Ethereum" action={<TokenIcon network="ethereum" size="sm" />} />
    <DetailRow label="Destination" value={<span className="font-mono">038123...2301</span>} />
    <div className="border-t border-[#e5e5e5]" />
    <DetailRow label="Est. network fee" value="~$0.02" />
    <DetailRow label="Recipient receives" value="~119.98 USDC" variant="brand" />
  </div>
</div>`,

  success: `{/* Success confirmation — transaction complete */}
<div className="rounded-xl border border-[#e5e5e5] p-6">
  <div className="flex flex-col items-center text-center mb-6">
    <div className="w-16 h-16 rounded-full bg-success-bg flex items-center justify-center mb-4">
      <Check className="w-8 h-8 text-success" strokeWidth={2.5} />
    </div>
    <h3 className="text-xl font-semibold text-gray-900">Withdraw successful</h3>
    <p className="text-sm text-[#737373] mt-1">
      ~119.98 USDC has been sent to 038123...2301 on Ethereum.
    </p>
  </div>
  <div className="flex flex-col gap-3">
    <DetailRow label="Amount sent" value="$120.00" />
    <DetailRow label="Token received" value="USDC" action={<TokenIcon token="USDC" size="sm" />} />
    <DetailRow label="Network" value="Ethereum" action={<TokenIcon network="ethereum" size="sm" />} />
    <DetailRow label="Network fee" value="~$0.02" />
    <DetailRow label="Net received" value="~119.98 USDC" variant="brand" />
    <div className="border-t border-[#e5e5e5]" />
    <DetailRow
      label="Transaction ID"
      value={<span className="font-mono">0x7a8b...3f2e</span>}
      variant="brand"
      action={<Copy className="w-3.5 h-3.5 text-brand cursor-pointer" />}
    />
  </div>
</div>`,

  usage: `import { DetailRow, TokenIcon } from "@mnee-ui/ui"

<div className="flex flex-col gap-3">
  <DetailRow label="Token" value="USDC" action={<TokenIcon token="USDC" size="sm" />} />
  <DetailRow label="Network" value="Ethereum" action={<TokenIcon network="ethereum" size="sm" />} />
  <DetailRow label="Amount" value="$120.00" />
  <DetailRow label="Recipient receives" value="~119.98 USDC" variant="brand" />
</div>`,

  backendExample: `// All values come from your API — DetailRow is purely presentational.

const { data: tx } = useSWR(\`/api/withdraw/\${txId}/preview\`, fetcher)

<div className="rounded-xl border border-[#e5e5e5] overflow-hidden">
  <div className="bg-[#f5f5f5] pt-3 px-4 pb-4">
    <p className="text-sm text-muted">You are withdrawing</p>
    <p className="text-2xl font-semibold text-gray-900">
      $\{tx.amountUsd.toLocaleString("en-US", { minimumFractionDigits: 2 })}
    </p>
  </div>
  <div className="flex flex-col gap-3 p-4">
    <DetailRow
      label="Token"
      value={tx.token}
      action={<TokenIcon token={tx.token} size="sm" />}
    />
    <DetailRow
      label="Network"
      value={tx.networkName}
      action={<TokenIcon network={tx.network} size="sm" />}
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
        <ComponentStatus status="stable" />
      </div>
      <p className="text-gray-500 mb-8 leading-relaxed">
        Key-value pair row for confirmation screens and receipts.
        Label on the left, value on the right, with an optional trailing{" "}
        <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">action</code> slot
        for icons or buttons. Use{" "}
        <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">variant=&quot;brand&quot;</code>{" "}
        for highlighted values like &ldquo;Recipient receives&rdquo;.
      </p>

      <h2 className="text-lg font-semibold text-gray-900 mb-3">Variants</h2>
      <ComponentPreview code={snippets.variants} className="mb-10">
        <div className="w-[400px] flex flex-col gap-3">
          <DetailRow label="Token" value="USDC" action={<TokenIcon token="USDC" size="sm" />} />
          <DetailRow label="Status" value="Completed" variant="success" />
          <DetailRow label="Est. network fee" value="~$0.02" />
          <DetailRow label="Recipient receives" value="~119.98 USDC" variant="brand" />
        </div>
      </ComponentPreview>

      <h2 className="text-lg font-semibold text-gray-900 mb-3">Confirmation card</h2>
      <ComponentPreview code={snippets.card} className="mb-10">
        <div className="w-[430px] rounded-xl border border-[#e5e5e5] overflow-hidden">
          <div className="bg-[#f5f5f5] pt-3 px-4 pb-4">
            <p className="text-sm text-[#737373]">You are withdrawing</p>
            <p className="text-2xl font-semibold text-gray-900">$120.00</p>
          </div>
          <div className="flex flex-col gap-3 p-4">
            <DetailRow label="Token" value="USDC" action={<TokenIcon token="USDC" size="sm" />} />
            <DetailRow label="Network" value="Ethereum" action={<TokenIcon network="ethereum" size="sm" />} />
            <DetailRow label="Destination" value={<span className="font-mono">038123...2301</span>} />
            <div className="border-t border-[#e5e5e5]" />
            <DetailRow label="Est. network fee" value="~$0.02" />
            <DetailRow label="Recipient receives" value="~119.98 USDC" variant="brand" />
          </div>
        </div>
      </ComponentPreview>

      <h2 className="text-lg font-semibold text-gray-900 mb-3">Success confirmation</h2>
      <ComponentPreview code={snippets.success} className="mb-10">
        <div className="w-[430px] rounded-xl border border-[#e5e5e5] p-6 bg-white">
          <div className="flex flex-col items-center text-center mb-6">
            <div className="w-16 h-16 rounded-full bg-success-bg flex items-center justify-center mb-4">
              <Check className="w-8 h-8 text-success" strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Withdraw successful</h3>
            <p className="text-sm text-[#737373] mt-1">
              ~119.98 USDC has been sent to 038123...2301 on Ethereum.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <DetailRow label="Amount sent" value="$120.00" />
            <DetailRow label="Token received" value="USDC" action={<TokenIcon token="USDC" size="sm" />} />
            <DetailRow label="Network" value="Ethereum" action={<TokenIcon network="ethereum" size="sm" />} />
            <DetailRow label="Network fee" value="~$0.02" />
            <DetailRow label="Net received" value="~119.98 USDC" variant="brand" />
            <div className="border-t border-[#e5e5e5]" />
            <DetailRow
              label="Transaction ID"
              value={<span className="font-mono">0x7a8b...3f2e</span>}
              variant="brand"
              action={<Copy className="w-3.5 h-3.5 text-brand cursor-pointer" />}
            />
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
              ["action", "React.ReactNode", "—", "Optional trailing slot (icon, copy button, token badge)"],
              ["variant", '"default" | "success" | "muted" | "brand"', '"default"', "Value color variant"],
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
