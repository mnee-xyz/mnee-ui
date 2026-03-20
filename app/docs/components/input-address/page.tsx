import { ComponentPreview } from "@/components/site/ComponentPreview";
import { CodeBlock } from "@/components/site/CodeBlock";
import { ComponentStatus } from "@/components/site/ComponentStatus";
import { InputAddressDemo, InputAddressErrorDemo } from "./demo";

const snippets = {
  basic: `const [address, setAddress] = useState("")

<InputAddress
  label="Withdraw to"
  value={address}
  onChange={setAddress}
/>`,

  usage: `import { InputAddress } from "@mnee-ui/ui"

const [address, setAddress] = useState("")

<InputAddress
  label="Withdraw to"
  value={address}
  onChange={setAddress}
  placeholder="Enter address"
  title="Address"
/>`,

  error: `const [address, setAddress] = useState("0x0h12321412413")

<InputAddress
  label="Send to"
  value={address}
  onChange={setAddress}
  error="Invalid address"
  hint="Not an Ethereum address"
/>`,

  backendExample: `// Validate address on the backend as the user types

const [address, setAddress] = useState("")
const [error, setError] = useState<string>()
const { data } = useSWR(
  address.length > 10 ? \`/api/validate-address?addr=\${address}\` : null,
  fetcher,
  { onSuccess: (d) => setError(d.valid ? undefined : "Invalid address") }
)

<InputAddress
  label="Withdraw to"
  value={address}
  onChange={setAddress}
  error={error}
  hint="Not a valid Ethereum address"
/>`,
};

export default function InputAddressPage() {
  return (
    <div>
      <p className="text-xs font-mono text-gray-400 mb-2">Components</p>
      <div className="flex items-center gap-2.5 mb-3">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">InputAddress</h1>
        <ComponentStatus status="stable" />
      </div>
      <p className="text-gray-500 mb-8 leading-relaxed">
        Pill-shaped address input matching the DropdownToken structure.
        Title (&ldquo;Address&rdquo;) stays fixed, the subtitle line is the input field.
        Shows a wallet icon on the left and an X clear button when focused or filled.
        Focus state uses the brand ring. Error state shows a red border with a hint message below.
      </p>

      <h2 className="text-lg font-semibold text-gray-900 mb-3">Interactive (type an address)</h2>
      <ComponentPreview code={snippets.basic} className="mb-10">
        <InputAddressDemo />
      </ComponentPreview>

      <h2 className="text-lg font-semibold text-gray-900 mb-3">Error state</h2>
      <p className="text-gray-500 mb-4 leading-relaxed">
        Pass <code className="text-xs bg-gray-100 px-1 py-0.5 rounded">error</code> to show a red border and{" "}
        <code className="text-xs bg-gray-100 px-1 py-0.5 rounded">hint</code> for the message below the pill.
      </p>
      <ComponentPreview code={snippets.error} className="mb-10">
        <InputAddressErrorDemo />
      </ComponentPreview>

      <h2 className="text-lg font-semibold text-gray-900 mb-3">Usage</h2>
      <CodeBlock code={snippets.usage} lang="tsx" />

      <h2 className="text-lg font-semibold text-gray-900 mt-8 mb-3">Backend validation</h2>
      <p className="text-gray-500 mb-4 leading-relaxed">
        Wire address validation to your API. Pass the error and hint props
        based on the backend response.
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
              ["label", "string", '"Withdraw to"', "Label above the pill"],
              ["hasLabel", "boolean", "true", "Show/hide the label"],
              ["value", "string", "\u2014", "Current address value"],
              ["onChange", "(value: string) => void", "\u2014", "Called on input change"],
              ["placeholder", "string", '"Enter address"', "Input placeholder text"],
              ["title", "string", '"Address"', "Fixed title above the input line"],
              ["icon", "React.ReactNode", "Wallet icon", "Custom leading icon"],
              ["error", "string", "\u2014", "Error message \u2014 switches pill to red border"],
              ["hint", "string", "\u2014", "Hint text shown below the pill (visible when error is set)"],
              ["className", "string", "\u2014", "Additional container classes"],
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
