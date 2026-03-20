import { SelectListDemo } from "./demo";
import { ComponentPreview } from "@/components/site/ComponentPreview";
import { CodeBlock } from "@/components/site/CodeBlock";
import { ComponentStatus } from "@/components/site/ComponentStatus";

const snippets = {
  basic: `const options = [
  { id: "usdc-base", icon: <TokenIcon token="USDC" network="base" size="lg" />, title: "USD Coin", subtitle: "USDC on Base" },
  { id: "usdc-eth",  icon: <TokenIcon token="USDC" network="ethereum" size="lg" />, title: "USD Coin", subtitle: "USDC on Ethereum" },
  { id: "usdt-eth",  icon: <TokenIcon token="USDT" network="ethereum" size="lg" />, title: "Tether", subtitle: "USDT on Ethereum" },
]

<SelectList
  options={options}
  selectedId={selected}
  onSelect={(opt) => setSelected(opt.id)}
/>`,

  usage: `import { SelectList } from "@mnee-ui/ui"

<SelectList
  options={tokenOptions}
  selectedId={selectedToken}
  onSelect={(opt) => setSelectedToken(opt.id)}
  maxHeight="300px"
/>`,
};

export default function SelectListPage() {
  return (
    <div>
      <p className="text-xs font-mono text-gray-400 mb-2">Components</p>
      <div className="flex items-center gap-2.5 mb-3">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">SelectList</h1>
        <ComponentStatus status="in-progress" />
      </div>
      <p className="text-gray-500 mb-8 leading-relaxed">
        Scrollable options list with token icons, title, and subtitle per row.
        Selected item shows a checkmark. Pairs with DropdownToken but works independently.
        Rounded 2xl container with secondary background and shadow.
      </p>

      <h2 className="text-lg font-semibold text-gray-900 mb-3">Interactive</h2>
      <ComponentPreview code={snippets.basic} className="mb-10">
        <SelectListDemo />
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
              ["options", "SelectOption[]", "—", "Array of { id, icon?, title, subtitle? }"],
              ["selectedId", "string", "—", "Currently selected option ID (shows checkmark)"],
              ["onSelect", "(option: SelectOption) => void", "—", "Callback when an option is clicked"],
              ["maxHeight", "string", '"400px"', "Max height before scrolling"],
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
