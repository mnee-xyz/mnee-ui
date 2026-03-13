import { Skeleton } from "@/components/ui/skeleton";
import { ComponentPreview } from "@/components/site/ComponentPreview";
import { CodeBlock } from "@/components/site/CodeBlock";
import { ComponentStatus } from "@/components/site/ComponentStatus";

const snippets = {
  line: `<Skeleton variant="line" width={240} height={16} />`,

  circle: `<Skeleton variant="circle" width={48} height={48} />`,

  block: `<Skeleton variant="block" width="100%" height={120} />`,

  variants: `<Skeleton variant="line" width={240} height={16} />
<Skeleton variant="circle" width={48} height={48} />
<Skeleton variant="block" width="100%" height={120} />`,

  card: `<div className="flex flex-col gap-3 p-4 border border-[#E5E5E5] rounded-lg w-64">
  <Skeleton variant="block" width="100%" height={120} />
  <Skeleton variant="line" width="80%" height={14} />
  <Skeleton variant="line" width="60%" height={12} />
</div>`,

  install: `import { Skeleton } from "@mnee-ui/ui"`,
};

export default function SkeletonPage() {
  return (
    <div>
      <p className="text-xs font-mono text-gray-400 mb-2">Components</p>
      <div className="flex items-center gap-2.5 mb-3">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Skeleton</h1>
        <ComponentStatus status="stable" />
      </div>
      <p className="text-gray-500 mb-8 leading-relaxed">
        Animated placeholder shown while content is loading. Reduces perceived wait time and
        prevents layout shift compared to blank areas.
      </p>

      {/* Line */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Line</h2>
      <ComponentPreview code={snippets.line} className="mb-8">
        <Skeleton variant="line" width={240} height={16} />
      </ComponentPreview>

      {/* Circle */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Circle</h2>
      <ComponentPreview code={snippets.circle} className="mb-8">
        <Skeleton variant="circle" width={48} height={48} />
      </ComponentPreview>

      {/* Block */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Block</h2>
      <ComponentPreview code={snippets.block} className="mb-8">
        <div className="w-full max-w-sm">
          <Skeleton variant="block" width="100%" height={120} />
        </div>
      </ComponentPreview>

      {/* Card composition */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Card composition</h2>
      <ComponentPreview code={snippets.card} className="mb-10">
        <div className="flex flex-col gap-3 p-4 border border-[#E5E5E5] rounded-lg w-64">
          <Skeleton variant="block" width="100%" height={120} />
          <Skeleton variant="line" width="80%" height={14} />
          <Skeleton variant="line" width="60%" height={12} />
        </div>
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
              ["variant", `"line" | "circle" | "block"`, `"line"`, "Shape of the skeleton — line uses rounded corners, circle is fully rounded, block is rectangular"],
              ["width", "string | number", "—", "CSS width; numbers are treated as pixels"],
              ["height", "string | number", "—", "CSS height; numbers are treated as pixels"],
              ["className", "string", "—", "Additional Tailwind classes (margin, max-width, etc.)"],
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
