import { ComponentPreview } from "@/components/site/ComponentPreview";
import { CodeBlock as SiteCodeBlock } from "@/components/site/CodeBlock";
import { CodeBlock } from "@/components/ui/code-block";
import { ComponentStatus } from "@/components/site/ComponentStatus";

const snippets = {
  basic: `<CodeBlock code="npm install @mnee-ui/ui" />`,

  withTitle: `<CodeBlock
  title="Install the package"
  code="npm install @mnee-ui/ui"
/>`,

  javascript: `<CodeBlock
  language="javascript"
  title="Handle payment submission:"
  code={\`async function handleSubmit() {
  const { submittedEl } = await elements.submit();
  if (submittedEl.selectedPaymentMethod === "YOUR_CPMT_ID") {
    const url = await fetchMNEEPayCheckout(submittedEl);
    window.location.href = url;
  }
}\`}
/>`,

  install: `import { CodeBlock } from "@mnee-ui/ui"`,
};

const exampleCode = `async function handleSubmit() {
  const { submittedEl } = await elements.submit();
  if (submittedEl.selectedPaymentMethod === "YOUR_CPMT_ID") {
    const url = await fetchMNEEPayCheckout(submittedEl);
    window.location.href = url;
  }
}`;

export default function CodeBlockPage() {
  return (
    <div>
      <p className="text-xs font-mono text-gray-400 mb-2">Components</p>
      <div className="flex items-center gap-2.5 mb-3">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">CodeBlock</h1>
        <ComponentStatus status="in-progress" />
      </div>
      <p className="text-gray-500 mb-8 leading-relaxed">
        Client-side syntax-highlighted code display with title bar and copy button.
        Uses Shiki with the <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">dark-plus</code> theme.
        Distinct from the documentation site&apos;s server-only <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">CodeBlock</code>.
      </p>

      {/* Basic */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Basic</h2>
      <ComponentPreview code={snippets.basic} className="mb-8">
        <div className="w-full">
          <CodeBlock code="npm install @mnee-ui/ui" />
        </div>
      </ComponentPreview>

      {/* With title */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">With title</h2>
      <ComponentPreview code={snippets.withTitle} className="mb-8">
        <div className="w-full">
          <CodeBlock title="Install the package" code="npm install @mnee-ui/ui" />
        </div>
      </ComponentPreview>

      {/* JavaScript */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">JavaScript with title</h2>
      <ComponentPreview code={snippets.javascript} className="mb-10">
        <div className="w-full">
          <CodeBlock
            language="javascript"
            title="Handle payment submission:"
            code={exampleCode}
          />
        </div>
      </ComponentPreview>

      {/* Usage */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Usage</h2>
      <SiteCodeBlock code={snippets.install} lang="tsx" />

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
              ["code", "string", "—", "The code string to highlight and display"],
              ["language", "string", `"bash"`, "Shiki language: bash, javascript, typescript, tsx, jsx"],
              ["title", "string", "—", "Optional header bar label. Also moves copy button to header when set."],
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
