import { Toast } from "@/components/ui/toast";
import { ComponentPreview } from "@/components/site/ComponentPreview";
import { CodeBlock } from "@/components/site/CodeBlock";
import { ToastLiveDemo } from "./ToastDemo";

const snippets = {
  variants: `<Toast type="success" message="Payment processed successfully." onClose={() => {}} />
<Toast type="error"   message="Something went wrong. Please try again." onClose={() => {}} />
<Toast type="warning" message="Your session will expire in 5 minutes." onClose={() => {}} />
<Toast type="info"    message="A new version is available." onClose={() => {}} />
<Toast type="default" message="Changes saved." onClose={() => {}} />`,

  setup: `// In your root layout or _app
import { ToastProvider } from "@mnee/ui";

export default function RootLayout({ children }) {
  return (
    <ToastProvider>
      {children}
    </ToastProvider>
  );
}`,

  usage: `import { useToast } from "@mnee/ui";

function MyComponent() {
  const { showToast } = useToast();

  return (
    <button onClick={() => showToast("Saved!", "success")}>
      Save
    </button>
  );
}`,

  install: `import { Toast, ToastProvider, useToast } from "@mnee/ui"`,
};

export default function ToastPage() {
  return (
    <div>
        <p className="text-xs font-mono text-gray-400 mb-2">Components</p>
        <h1 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">Toast</h1>
        <p className="text-gray-500 mb-8 leading-relaxed">
          Transient feedback notifications. Slides in from the top-right corner and auto-dismisses
          after 4 seconds. Wrap your app in{" "}
          <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">ToastProvider</code> and
          trigger toasts anywhere via the{" "}
          <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">useToast()</code> hook.
        </p>

        <div className="mb-8 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          <strong>Design system owned.</strong> Toast positioning, animation, and auto-dismiss timing
          are handled by <code className="text-xs bg-amber-100 px-1 py-0.5 rounded font-mono">ToastProvider</code>.
          Pass a message and type to <code className="text-xs bg-amber-100 px-1 py-0.5 rounded font-mono">showToast()</code> —
          don&apos;t render fixed-position notification divs manually.
        </div>

        {/* Live trigger demo */}
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Live demo</h2>
        <ToastLiveDemo code={snippets.usage} />

        {/* Static variants */}
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Variants (static)</h2>
        <ComponentPreview code={snippets.variants} className="mb-8">
          <div className="flex flex-col gap-3">
            <Toast type="success" message="Payment processed successfully." />
            <Toast type="error"   message="Something went wrong. Please try again." />
            <Toast type="warning" message="Your session will expire in 5 minutes." />
            <Toast type="info"    message="A new version is available." />
            <Toast type="default" message="Changes saved." />
          </div>
        </ComponentPreview>

        {/* Provider setup */}
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Provider setup</h2>
        <p className="text-gray-500 mb-3 text-sm">
          Wrap your root layout with <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">ToastProvider</code> once.
          All child components can then call <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">useToast()</code>.
        </p>
        <CodeBlock code={snippets.setup} lang="tsx" />

        {/* useToast usage */}
        <h2 className="text-lg font-semibold text-gray-900 mt-8 mb-3">Usage</h2>
        <CodeBlock code={snippets.usage} lang="tsx" />

        {/* Install */}
        <h2 className="text-lg font-semibold text-gray-900 mt-8 mb-3">Import</h2>
        <CodeBlock code={snippets.install} lang="tsx" />

        {/* Props */}
        <h2 className="text-lg font-semibold text-gray-900 mt-8 mb-3">Toast props</h2>
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
                ["message", "string", "—", "Notification text content"],
                ["type", `"success" | "error" | "warning" | "info" | "default"`, `"default"`, "Visual variant using semantic tokens"],
                ["onClose", "() => void", "—", "Called when the dismiss button is clicked"],
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

        <h2 className="text-lg font-semibold text-gray-900 mb-3">showToast signature</h2>
        <div className="overflow-auto rounded-lg border border-[#E5E5E5]">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left px-4 py-2.5 border-b border-[#E5E5E5] text-xs font-semibold text-gray-500 uppercase bg-gray-50">Param</th>
                <th className="text-left px-4 py-2.5 border-b border-[#E5E5E5] text-xs font-semibold text-gray-500 uppercase bg-gray-50">Type</th>
                <th className="text-left px-4 py-2.5 border-b border-[#E5E5E5] text-xs font-semibold text-gray-500 uppercase bg-gray-50">Default</th>
                <th className="text-left px-4 py-2.5 border-b border-[#E5E5E5] text-xs font-semibold text-gray-500 uppercase bg-gray-50">Description</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["message", "string", "—", "The notification text"],
                ["type", `ToastType`, `"default"`, "Optional visual variant"],
              ].map(([param, type, def, desc]) => (
                <tr key={param} className="hover:bg-gray-50">
                  <td className="px-4 py-2.5 border-b border-[#E5E5E5] font-mono text-xs text-gray-800">{param}</td>
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
