"use client";

import { useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { ComponentPreview } from "@/components/site/ComponentPreview";
import { CodeBlock } from "@/components/site/CodeBlock";
import { ComponentStatus } from "@/components/site/ComponentStatus";

const snippets = {
  basic: `const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Open modal</Button>

<Modal
  isOpen={open}
  onClose={() => setOpen(false)}
  title="Confirm action"
  footer={
    <div className="flex justify-end gap-2">
      <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
      <Button onClick={() => setOpen(false)}>Confirm</Button>
    </div>
  }
>
  <p className="text-sm text-gray-600">Are you sure you want to proceed?</p>
</Modal>`,

  sizes: `<Modal isOpen={open} onClose={close} title="Small (400px)"  size="sm">{/* ... */}</Modal>
<Modal isOpen={open} onClose={close} title="Medium (520px)" size="md">{/* ... */}</Modal>
<Modal isOpen={open} onClose={close} title="Large (640px)"  size="lg">{/* ... */}</Modal>`,

  install: `import { Modal } from "@mnee-ui/ui"`,
};

function BasicDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Confirm action"
        footer={
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => setOpen(false)}>Confirm</Button>
          </div>
        }
      >
        <p className="text-sm text-gray-600">
          Are you sure you want to proceed? This action cannot be undone.
        </p>
      </Modal>
    </>
  );
}

function SizesDemo() {
  const [open, setOpen] = useState<"sm" | "md" | "lg" | null>(null);
  return (
    <>
      <div className="flex gap-2">
        <Button size="sm" variant="outline" onClick={() => setOpen("sm")}>Small</Button>
        <Button size="sm" variant="outline" onClick={() => setOpen("md")}>Medium</Button>
        <Button size="sm" variant="outline" onClick={() => setOpen("lg")}>Large</Button>
      </div>
      {(["sm", "md", "lg"] as const).map((s) => (
        <Modal
          key={s}
          isOpen={open === s}
          onClose={() => setOpen(null)}
          title={`${s === "sm" ? "Small (400px)" : s === "md" ? "Medium (520px)" : "Large (640px)"}`}
          size={s}
          footer={
            <div className="flex justify-end">
              <Button variant="outline" onClick={() => setOpen(null)}>Close</Button>
            </div>
          }
        >
          <p className="text-sm text-gray-600">
            This is the <strong>{s}</strong> size variant.
          </p>
        </Modal>
      ))}
    </>
  );
}

export default function ModalPage() {
  return (
    <div>
      <p className="text-xs font-mono text-gray-400 mb-2">Components</p>
      <div className="flex items-center gap-2.5 mb-3">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Modal</h1>
        <ComponentStatus status="in-progress" />
      </div>
      <p className="text-gray-500 mb-8 leading-relaxed">
        Centered overlay dialog for confirmations, forms, and focused interactions.
        Closes on backdrop click or <kbd className="text-xs bg-gray-100 border border-gray-200 px-1.5 py-0.5 rounded font-mono">Esc</kbd>.
        Body scroll is locked while the modal is open.
      </p>

      {/* Basic */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Default</h2>
      <ComponentPreview code={snippets.basic} className="mb-8">
        <BasicDemo />
      </ComponentPreview>

      {/* Size variants */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Size variants</h2>
      <ComponentPreview code={snippets.sizes} className="mb-10">
        <SizesDemo />
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
              ["size", `"sm" | "md" | "lg"`, `"sm"`, "Panel width: 400 / 520 / 640 px"],
              ["footer", "ReactNode", "—", "Sticky footer content (e.g. action buttons)"],
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
