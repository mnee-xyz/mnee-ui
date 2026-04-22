import { ConfirmCard } from "@/components/ui/confirm-card";
import { TokenIcon } from "@/components/ui/token-icon";
import { ComponentPreview } from "@/components/site/ComponentPreview";
import { CodeBlock } from "@/components/site/CodeBlock";
import { ComponentStatus } from "@/components/site/ComponentStatus";

const snippets = {
  default: `<ConfirmCard
  subtitle="You're withdrawing"
  amount="$120.00"
  rows={[
    { label: "Token",       value: "USDC",           action: <TokenIcon token="USDC" size="sm" /> },
    { label: "Network",     value: "Ethereum",        action: <TokenIcon network="ethereum" size="sm" /> },
    { label: "Destination", value: <span className="font-mono">038123...2301</span> },
  ]}
  belowDivider={[
    { label: "Est. network fee",  value: "~$0.02" },
    { label: "Recipient receives", value: "~119.98 USDC", variant: "brand" },
  ]}
/>`,

  loading: `<ConfirmCard
  subtitle="You're withdrawing"
  amount="$120.00"
  rows={[]}
  state="loading"
/>`,

  usage: `import { ConfirmCard } from "@mnee-ui/ui"

// Fetch preview from API, show skeleton while loading
const { data, isLoading } = useSWR(\`/api/withdraw/\${id}/preview\`, fetcher)

<ConfirmCard
  subtitle="You're withdrawing"
  amount={data?.amountUsd ?? "$0.00"}
  state={isLoading ? "loading" : "default"}
  rows={[
    { label: "Token",       value: data?.token,    action: <TokenIcon token={data?.token} size="sm" /> },
    { label: "Network",     value: data?.network,  action: <TokenIcon network={data?.networkId} size="sm" /> },
    { label: "Destination", value: data?.address },
  ]}
  belowDivider={[
    { label: "Est. network fee",   value: \`~$\${data?.fee}\` },
    { label: "Recipient receives", value: \`~\${data?.receiveAmount} \${data?.token}\`, variant: "brand" },
  ]}
/>`,
};

export default function ConfirmCardPage() {
  return (
    <div>
      <p className="text-xs font-mono text-gray-400 mb-2">Components</p>
      <div className="flex items-center gap-2.5 mb-3">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">ConfirmCard</h1>
        <ComponentStatus status="stable" />
      </div>
      <p className="text-gray-500 mb-8 leading-relaxed">
        Pre-send confirmation card. Shows the transaction summary with a header (label + amount)
        and a list of{" "}
        <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">DetailRow</code>{" "}
        entries. Supports a{" "}
        <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">loading</code>{" "}
        state with an animated skeleton while fee estimates are being fetched.
      </p>

      <h2 className="text-lg font-semibold text-gray-900 mb-3">Default</h2>
      <ComponentPreview code={snippets.default} className="mb-10">
        <div className="w-[430px]">
          <ConfirmCard
            subtitle="You're withdrawing"
            amount="$120.00"
            rows={[
              { label: "Token",       value: "USDC",           action: <TokenIcon token="USDC" size="sm" /> },
              { label: "Network",     value: "Ethereum",        action: <TokenIcon network="ethereum" size="sm" /> },
              { label: "Destination", value: <span className="font-mono">038123...2301</span> },
            ]}
            belowDivider={[
              { label: "Est. network fee",   value: "~$0.02" },
              { label: "Recipient receives", value: "~119.98 USDC", variant: "brand" },
            ]}
          />
        </div>
      </ComponentPreview>

      <h2 className="text-lg font-semibold text-gray-900 mb-3">Loading</h2>
      <ComponentPreview code={snippets.loading} className="mb-10">
        <div className="w-[430px]">
          <ConfirmCard
            subtitle="You're withdrawing"
            amount="$120.00"
            rows={[]}
            state="loading"
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
              ["subtitle", "string", '"You\'re withdrawing"', "Label above the amount"],
              ["amount", "string", "—", "Large amount displayed in the header"],
              ["rows", "ConfirmCardRow[]", "—", "Rows above the divider"],
              ["belowDivider", "ConfirmCardRow[]", "—", "Rows below the divider (fees, totals)"],
              ["state", '"default" | "loading"', '"default"', "Loading shows animated skeleton rows"],
              ["skeletonRowCount", "number", "5", "Number of skeleton rows in loading state"],
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

      <h2 className="text-lg font-semibold text-gray-900 mt-8 mb-3">ConfirmCardRow</h2>
      <div className="overflow-auto rounded-lg border border-[#E5E5E5]">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <th className="text-left px-4 py-2.5 border-b border-[#E5E5E5] text-xs font-semibold text-gray-500 uppercase bg-gray-50">Field</th>
              <th className="text-left px-4 py-2.5 border-b border-[#E5E5E5] text-xs font-semibold text-gray-500 uppercase bg-gray-50">Type</th>
              <th className="text-left px-4 py-2.5 border-b border-[#E5E5E5] text-xs font-semibold text-gray-500 uppercase bg-gray-50">Description</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["label", "string", "Row label text"],
              ["value", "React.ReactNode", "Row value (string, JSX, monospace address)"],
              ["action", "React.ReactNode", "Trailing icon (TokenIcon, copy button, etc.)"],
              ["variant", '"default" | "success" | "muted" | "brand"', "Value color variant"],
            ].map(([field, type, desc]) => (
              <tr key={field} className="hover:bg-gray-50">
                <td className="px-4 py-2.5 border-b border-[#E5E5E5] font-mono text-xs text-gray-800">{field}</td>
                <td className="px-4 py-2.5 border-b border-[#E5E5E5] font-mono text-xs text-amber-700">{type}</td>
                <td className="px-4 py-2.5 border-b border-[#E5E5E5] text-xs text-gray-600">{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
