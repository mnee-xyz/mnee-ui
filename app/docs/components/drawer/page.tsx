"use client";

import { useState } from "react";
import { Drawer } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { ComponentPreview } from "@/components/site/ComponentPreview";
import { CodeBlock } from "@/components/site/CodeBlock";

const snippets = {
  basic: `const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Open drawer</Button>

<Drawer
  isOpen={open}
  onClose={() => setOpen(false)}
  title="Transaction details"
  footer={
    <Button variant="outline" className="w-full" onClick={() => setOpen(false)}>
      Close
    </Button>
  }
>
  <div>
    <div className="py-3 border-b border-gray-100">
      <p className="text-xs text-gray-500 mb-0.5">Transaction ID</p>
      <p className="text-sm text-gray-900 font-medium">tx_abc123def456</p>
    </div>
    <div className="py-3 border-b border-gray-100">
      <p className="text-xs text-gray-500 mb-0.5">Amount</p>
      <p className="text-sm text-gray-900 font-medium">$1,200.00 USD</p>
    </div>
    {/* ...more rows */}
  </div>
</Drawer>`,

  widths: `<Drawer isOpen={open} onClose={close} title="Small (320px)"  width="sm">{/* ... */}</Drawer>
<Drawer isOpen={open} onClose={close} title="Medium (480px)" width="md">{/* ... */}</Drawer>
<Drawer isOpen={open} onClose={close} title="Large (600px)"  width="lg">{/* ... */}</Drawer>
<Drawer isOpen={open} onClose={close} title="XL (800px)"     width="xl">{/* ... */}</Drawer>`,

  side: `<Drawer isOpen={open} onClose={close} side="left"  title="Left drawer">{/* ... */}</Drawer>
<Drawer isOpen={open} onClose={close} side="right" title="Right drawer">{/* ... */}</Drawer>`,

  install: `import { Drawer } from "@mnee/ui"`,
};

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="py-3 border-b border-gray-100 last:border-0">
      <p className="text-xs text-gray-500 mb-0.5">{label}</p>
      <p className="text-sm text-gray-900 font-medium">{value}</p>
    </div>
  );
}

function BasicDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open drawer</Button>
      <Drawer
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Transaction details"
        footer={
          <Button variant="outline" className="w-full" onClick={() => setOpen(false)}>
            Close
          </Button>
        }
      >
        <div>
          <DetailRow label="Transaction ID" value="tx_abc123def456" />
          <DetailRow label="Amount" value="$1,200.00 USD" />
          <DetailRow label="Status" value="Completed" />
          <DetailRow label="Network" value="BSV" />
          <DetailRow label="Created on" value="Feb 24, 2026, 3:45 PM" />
          <DetailRow label="Currency" value="MNEE" />
        </div>
      </Drawer>
    </>
  );
}

function WidthDemo() {
  const [open, setOpen] = useState<"sm" | "md" | "lg" | "xl" | null>(null);
  return (
    <>
      <div className="flex gap-2 flex-wrap">
        <Button size="sm" variant="outline" onClick={() => setOpen("sm")}>Small</Button>
        <Button size="sm" variant="outline" onClick={() => setOpen("md")}>Medium</Button>
        <Button size="sm" variant="outline" onClick={() => setOpen("lg")}>Large</Button>
        <Button size="sm" variant="outline" onClick={() => setOpen("xl")}>XL</Button>
      </div>
      {(["sm", "md", "lg", "xl"] as const).map(w => (
        <Drawer
          key={w}
          isOpen={open === w}
          onClose={() => setOpen(null)}
          title={w === "sm" ? "Small (320px)" : w === "md" ? "Medium (480px)" : w === "lg" ? "Large (600px)" : "XL (800px)"}
          width={w}
          footer={
            <Button variant="outline" className="w-full" onClick={() => setOpen(null)}>
              Close
            </Button>
          }
        >
          <p className="text-sm text-gray-600">
            This is the <strong>{w}</strong> width variant.
          </p>
        </Drawer>
      ))}
    </>
  );
}

function SideDemo() {
  const [side, setSide] = useState<"left" | "right" | null>(null);
  return (
    <>
      <div className="flex gap-2">
        <Button size="sm" variant="outline" onClick={() => setSide("left")}>Left</Button>
        <Button size="sm" variant="outline" onClick={() => setSide("right")}>Right</Button>
      </div>
      {(["left", "right"] as const).map(s => (
        <Drawer
          key={s}
          isOpen={side === s}
          onClose={() => setSide(null)}
          title={s === "left" ? "Left drawer" : "Right drawer"}
          side={s}
          footer={
            <Button variant="outline" className="w-full" onClick={() => setSide(null)}>
              Close
            </Button>
          }
        >
          <p className="text-sm text-gray-600">
            This drawer slides in from the <strong>{s}</strong>.
          </p>
        </Drawer>
      ))}
    </>
  );
}

export default function DrawerPage() {
  return (
    <div>
      <p className="text-xs font-mono text-gray-400 mb-2">Components</p>
      <h1 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">Drawer</h1>
      <p className="text-gray-500 mb-8 leading-relaxed">
        Side panel that slides in from the left or right edge of the screen.
        Closes on backdrop click or <kbd className="text-xs bg-gray-100 border border-gray-200 px-1.5 py-0.5 rounded font-mono">Esc</kbd>.
        Body scroll is locked while the drawer is open.
      </p>

      {/* Design ownership callout */}
      <div className="mb-8 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
        <span className="font-semibold">Design system component.</span>{" "}
        Fully styled by the UX team — no color or style changes needed. Choose a variant, provide your content, and wire your handler or route.
      </div>

      {/* Basic */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Default</h2>
      <ComponentPreview code={snippets.basic} className="mb-8">
        <BasicDemo />
      </ComponentPreview>

      {/* Width variants */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Width variants</h2>
      <ComponentPreview code={snippets.widths} className="mb-8">
        <WidthDemo />
      </ComponentPreview>

      {/* Side variants */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Side</h2>
      <ComponentPreview code={snippets.side} className="mb-10">
        <SideDemo />
      </ComponentPreview>

      {/* Usage */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Usage</h2>
      <CodeBlock code={snippets.install} lang="tsx" />

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
              ["isOpen", "boolean", "—", "Controls open/close state"],
              ["onClose", "() => void", "—", "Called on backdrop click or Esc key"],
              ["title", "string", "—", "Header title text"],
              ["width", `"sm" | "md" | "lg" | "xl"`, `"md"`, "Panel width: 320 / 480 / 600 / 800 px"],
              ["side", `"left" | "right"`, `"right"`, "Edge the drawer slides in from"],
              ["footer", "ReactNode", "—", "Sticky footer content (e.g. Close button)"],
              ["children", "ReactNode", "—", "Scrollable body content"],
              ["className", "string", "—", "Layout utilities only (margin, padding, width)"],
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
