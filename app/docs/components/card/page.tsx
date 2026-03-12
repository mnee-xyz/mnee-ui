"use client";

import { Card, CardContainer } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ComponentPreview } from "@/components/site/ComponentPreview";
import { CodeBlock } from "@/components/site/CodeBlock";
import { ComponentStatus } from "@/components/site/ComponentStatus";

const snippets = {
  balance: `<Card
  variant="balance"
  title="Total balance"
  description="Your current MNEE balance"
  amount="$1,204.00"
  action={<Button variant="outline" size="sm">Refresh</Button>}
/>`,

  balanceLoading: `<Card
  variant="balance"
  title="Total balance"
  description="Your current MNEE balance"
  amount=""
  loading
/>`,

  module: `<Card
  variant="module"
  title="Stripe Payments"
  status="success"
  statusLabel="Active"
  description="Module type: Stripe Custom Payment"
  onEdit={() => {}}
  onView={() => {}}
/>`,

  moduleLoading: `<Card
  variant="module"
  title=""
  description=""
  onEdit={() => {}}
  onView={() => {}}
  loading
/>`,

  container: `<CardContainer className="p-5">
  <h3 className="font-semibold text-gray-900">Custom content</h3>
  <p className="text-sm text-gray-500 mt-1">
    CardContainer is a generic shell — bring your own layout.
  </p>
</CardContainer>`,

  install: `import { Card, CardContainer } from "@mnee-ui/ui"`,
};

export default function CardPage() {
  return (
    <div>
      <p className="text-xs font-mono text-gray-400 mb-2">Components</p>
      <div className="flex items-center gap-2.5 mb-3">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Card</h1>
        <ComponentStatus status="in-progress" />
      </div>
      <p className="text-gray-500 mb-8 leading-relaxed">
        A surface for grouping related content. Choose a{" "}
        <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">variant</code>{" "}
        and pass data — no layout classes required.
      </p>

      {/* Balance variant */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Balance variant</h2>
      <ComponentPreview code={snippets.balance} className="mb-4">
        <Card
          variant="balance"
          title="Total balance"
          description="Your current MNEE balance"
          amount="$1,204.00"
          action={<Button variant="outline" size="sm">Refresh</Button>}
        />
      </ComponentPreview>

      <h3 className="text-sm font-semibold text-gray-700 mb-3">Loading state</h3>
      <ComponentPreview code={snippets.balanceLoading} className="mb-8">
        <Card
          variant="balance"
          title="Total balance"
          description="Your current MNEE balance"
          amount=""
          loading
        />
      </ComponentPreview>

      {/* Module variant */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Module variant</h2>
      <ComponentPreview code={snippets.module} className="mb-4">
        <Card
          variant="module"
          title="Stripe Payments"
          status="success"
          statusLabel="Active"
          description="Module type: Stripe Custom Payment"
          onEdit={() => {}}
          onView={() => {}}
        />
      </ComponentPreview>

      <h3 className="text-sm font-semibold text-gray-700 mb-3">Loading state</h3>
      <ComponentPreview code={snippets.moduleLoading} className="mb-10">
        <Card
          variant="module"
          title=""
          description=""
          onEdit={() => {}}
          onView={() => {}}
          loading
        />
      </ComponentPreview>

      {/* Container (generic) */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Container (generic)</h2>
      <p className="text-gray-500 mb-4 text-sm">
        Use <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">CardContainer</code>{" "}
        when you need the card shell without an opinionated layout. Pass any children and add padding/background via <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">className</code>.
      </p>
      <ComponentPreview code={snippets.container} className="mb-10">
        <CardContainer className="p-5">
          <h3 className="font-semibold text-gray-900">Custom content</h3>
          <p className="text-sm text-gray-500 mt-1">
            CardContainer is a generic shell — bring your own layout.
          </p>
        </CardContainer>
      </ComponentPreview>

      {/* Usage */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Usage</h2>
      <CodeBlock code={snippets.install} lang="tsx" />

      {/* Props tables */}
      <h2 className="text-lg font-semibold text-gray-900 mt-8 mb-3">Props — balance variant</h2>
      <div className="overflow-auto rounded-lg border border-[#E5E5E5] mb-8">
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
              ["variant", '"balance"', "—", "Required — selects the balance layout"],
              ["title", "string", "—", "Card heading"],
              ["description", "string?", "—", "Muted subtext below the title"],
              ["amount", "string", "—", "Large monetary figure displayed in the body"],
              ["action", "ReactNode?", "—", "Slot rendered in the footer (e.g. a Button)"],
              ["loading", "boolean?", "false", "Replaces content with animated skeleton placeholders"],
              ["className", "string?", "—", "Layout utilities only (margin, width)"],
            ].map(([prop, type, def, desc]) => (
              <tr key={prop} className="hover:bg-gray-50">
                <td className="px-4 py-2.5 border-b border-[#E5E5E5] font-mono text-xs text-gray-800">{prop}</td>
                <td className="px-4 py-2.5 border-b border-[#E5E5E5] font-mono text-xs text-gray-500">{type}</td>
                <td className="px-4 py-2.5 border-b border-[#E5E5E5] font-mono text-xs text-gray-500">{def}</td>
                <td className="px-4 py-2.5 border-b border-[#E5E5E5] text-xs text-gray-600">{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-lg font-semibold text-gray-900 mb-3">Props — module variant</h2>
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
              ["variant", '"module"', "—", "Required — selects the module layout"],
              ["title", "string", "—", "Card heading"],
              ["description", "string?", "—", "Muted subtext below the title"],
              ["status", '"success" | "warning" | "error" | "info" | "default"?', "—", "Badge color shown next to the title"],
              ["statusLabel", "string?", "—", "Text inside the status badge"],
              ["onEdit", "() => void?", "—", "Renders an Edit button in the footer"],
              ["onView", "() => void?", "—", "Renders a View button in the footer"],
              ["loading", "boolean?", "false", "Replaces content with animated skeleton placeholders"],
              ["className", "string?", "—", "Layout utilities only (margin, width)"],
            ].map(([prop, type, def, desc]) => (
              <tr key={prop} className="hover:bg-gray-50">
                <td className="px-4 py-2.5 border-b border-[#E5E5E5] font-mono text-xs text-gray-800">{prop}</td>
                <td className="px-4 py-2.5 border-b border-[#E5E5E5] font-mono text-xs text-gray-500">{type}</td>
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
