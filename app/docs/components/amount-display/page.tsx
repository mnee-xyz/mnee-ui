import { AmountDisplay } from "@/components/ui/amount-display";
import { ComponentPreview } from "@/components/site/ComponentPreview";
import { CodeBlock } from "@/components/site/CodeBlock";
import { ComponentStatus } from "@/components/site/ComponentStatus";
import { AmountDisplayDemo } from "./demo";

const snippets = {
  empty: `<AmountDisplay value="" onChange={setValue} />`,

  filled: `<AmountDisplay value="120" onChange={setValue} />`,

  readOnly: `<AmountDisplay value="2,500" prefix="" readOnly />`,

  withSubtitle: `<AmountDisplay
  value={amount}
  onChange={setAmount}
  subtitle="Available: $24,567.54"
  subtitleAction={{ label: "Max", onClick: () => setAmount("24567.54") }}
/>`,

  usage: `import { AmountDisplay } from "@mnee-ui/ui"

// Balance comes from your backend / API
const { balance } = useWalletBalance()   // e.g. { balance: 24567.54 }
const [amount, setAmount] = useState("")

<AmountDisplay
  value={amount}
  onChange={setAmount}
  subtitle={\`Available: $\${balance.toLocaleString("en-US", { minimumFractionDigits: 2 })}\`}
  subtitleAction={{
    label: "Max",
    onClick: () => setAmount(String(balance)),
  }}
/>`,

  backendExample: `// subtitle and subtitleAction accept any dynamic value.
// Wire them to your API response:

const { data } = useSWR("/api/wallet/balance", fetcher)
const available = data?.available ?? 0

<AmountDisplay
  value={amount}
  onChange={setAmount}
  subtitle={\`Available: $\${available.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}\`}
  subtitleAction={{
    label: "Max",
    onClick: () => setAmount(String(available)),
  }}
/>`,
};

export default function AmountDisplayPage() {
  return (
    <div>
      <p className="text-xs font-mono text-gray-400 mb-2">Components</p>
      <div className="flex items-center gap-2.5 mb-3">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">AmountDisplay</h1>
        <ComponentStatus status="stable" />
      </div>
      <p className="text-gray-500 mb-8 leading-relaxed">
        Large inline currency input for transfer modals. The &ldquo;0&rdquo; placeholder renders
        in muted gray; typed values switch to foreground black. Matches the Figma
        pattern: <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">$</code> prefix
        at 30px + amount at 60px bold.
      </p>

      <h2 className="text-lg font-semibold text-gray-900 mb-3">Interactive (type a number)</h2>
      <ComponentPreview code={snippets.withSubtitle} className="mb-10">
        <AmountDisplayDemo />
      </ComponentPreview>

      <h2 className="text-lg font-semibold text-gray-900 mb-3">Read-only (no input)</h2>
      <ComponentPreview code={snippets.readOnly} className="mb-10">
        <AmountDisplay value="2,500" prefix="" readOnly />
      </ComponentPreview>

      <h2 className="text-lg font-semibold text-gray-900 mb-3">Usage</h2>
      <CodeBlock code={snippets.usage} lang="tsx" />

      <h2 className="text-lg font-semibold text-gray-900 mt-8 mb-3">Backend-driven balance</h2>
      <p className="text-gray-500 mb-4 leading-relaxed">
        The <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">subtitle</code> and{" "}
        <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">subtitleAction</code> props
        accept any dynamic value. Pass your API balance directly — the component
        does not fetch or format data internally.
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
              ["value", "string", '""', "Current numeric string"],
              ["onChange", "(value: string) => void", "—", "Called on input change"],
              ["prefix", "string", '"$"', "Currency prefix (30px bold) — use for USD mode"],
              ["suffix", "string", "—", "Token suffix (30px bold, e.g. \"USDC\") — use for crypto mode"],
              ["placeholder", "string", '"0"', "Placeholder when empty (muted color)"],
              ["subtitle", "string", "—", "Text below the amount — pass your backend balance here"],
              ["subtitleAction", "{ label: string; onClick: () => void }", "—", "Inline action (e.g. Max) — wire onClick to set the BE balance"],
              ["readOnly", "boolean", "false", "Disable input, show as static text"],
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
