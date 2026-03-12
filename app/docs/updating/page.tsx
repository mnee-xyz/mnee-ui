import { CodeBlock } from "@/components/site/CodeBlock";

export default function UpdatingPage() {
  return (
    <div>
      <p className="text-xs font-mono text-gray-400 mb-2">Getting Started</p>
      <h1 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">Updating</h1>
      <p className="text-gray-500 mb-8 leading-relaxed">
        How to check your current version, pull in the latest components, and — if you&apos;re a
        design system contributor — how to build and publish a new release.
      </p>

      {/* ── Consumers ─────────────────────────────── */}
      <h2 className="text-xl font-semibold text-gray-900 mb-4">For engineers consuming the package</h2>

      <h3 className="text-base font-semibold text-gray-900 mb-2">Check your current version</h3>
      <p className="text-gray-500 mb-3 text-sm">
        Run this in the root of your product repo to see which version is installed:
      </p>
      <CodeBlock code={`npm list @mnee-ui/ui`} lang="bash" />

      <p className="text-gray-500 mt-3 mb-6 text-sm">
        Or open <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">package.json</code> and
        look for <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">&quot;@mnee-ui/ui&quot;</code> in
        the <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">dependencies</code> section.
      </p>

      <h3 className="text-base font-semibold text-gray-900 mb-2">Update to the latest version</h3>
      <p className="text-gray-500 mb-3 text-sm">
        Run the standard npm install with the <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">@latest</code> tag:
      </p>
      <CodeBlock code={`npm install @mnee-ui/ui@latest`} lang="bash" />

      <p className="text-gray-500 mt-3 mb-3 text-sm">
        To pin to a specific version instead:
      </p>
      <CodeBlock code={`npm install @mnee-ui/ui@0.0.2`} lang="bash" />

      <div className="mt-6 mb-8 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
        <strong>No style changes needed on update.</strong> Design tokens are shipped inside the
        package. Your existing <code className="text-xs bg-amber-100 px-1 py-0.5 rounded font-mono">@import &quot;@mnee-ui/ui/styles&quot;</code> line
        picks up any new tokens automatically after the install.
      </div>

      <h3 className="text-base font-semibold text-gray-900 mb-3">What can change between versions</h3>
      <div className="overflow-auto rounded-lg border border-[#E5E5E5] mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <th className="text-left px-4 py-2.5 border-b border-[#E5E5E5] text-xs font-semibold text-gray-500 uppercase bg-gray-50">Semver bump</th>
              <th className="text-left px-4 py-2.5 border-b border-[#E5E5E5] text-xs font-semibold text-gray-500 uppercase bg-gray-50">What changed</th>
              <th className="text-left px-4 py-2.5 border-b border-[#E5E5E5] text-xs font-semibold text-gray-500 uppercase bg-gray-50">Action required?</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["patch  (0.0.x)", "Bug fixes, visual tweaks, token value adjustments", "None — safe to update"],
              ["minor  (0.x.0)", "New components, new props or variants added to existing ones", "None for existing usage — new APIs are additive"],
              ["major  (x.0.0)", "Breaking prop renames, removed components, token renames", "Read the release notes before updating"],
            ].map(([bump, what, action]) => (
              <tr key={bump} className="hover:bg-gray-50">
                <td className="px-4 py-2.5 border-b border-[#E5E5E5] font-mono text-xs text-gray-800 whitespace-nowrap">{bump}</td>
                <td className="px-4 py-2.5 border-b border-[#E5E5E5] text-xs text-gray-600">{what}</td>
                <td className="px-4 py-2.5 border-b border-[#E5E5E5] text-xs text-gray-600">{action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Contributors ──────────────────────────── */}
      <h2 className="text-xl font-semibold text-gray-900 mb-4">For design system contributors</h2>
      <p className="text-gray-500 mb-6 text-sm leading-relaxed">
        The following workflow applies when you&apos;ve added or updated components and are ready to
        ship a new version of the package to npm.
      </p>

      <h3 className="text-base font-semibold text-gray-900 mb-2">1. Build the library</h3>
      <p className="text-gray-500 mb-3 text-sm">
        This runs <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">tsup</code> to
        produce <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">dist/index.js</code> (CJS)
        and <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">dist/index.mjs</code> (ESM),
        then runs <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">tsc</code> for type declarations:
      </p>
      <CodeBlock code={`npm run build:lib`} lang="bash" />

      <div className="mt-3 mb-6 rounded-lg border border-[#E5E5E5] bg-gray-50 px-4 py-3 text-sm text-gray-600">
        Verify the <code className="text-xs bg-gray-100 px-1 py-0.5 rounded font-mono">dist/</code> folder
        was updated before continuing. The CSS file
        at <code className="text-xs bg-gray-100 px-1 py-0.5 rounded font-mono">components/ui/mnee-ui.css</code> is
        published as-is — no build step needed for styles.
      </div>

      <h3 className="text-base font-semibold text-gray-900 mb-2">2. Bump the version</h3>
      <p className="text-gray-500 mb-3 text-sm">
        Edit <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">package.json</code> and
        increment <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">&quot;version&quot;</code> following
        semver. Or use npm&apos;s built-in version command:
      </p>
      <CodeBlock
        code={`npm version patch   # 0.0.2 → 0.0.3  (bug fix / tweak)
npm version minor   # 0.0.2 → 0.1.0  (new component or prop)
npm version major   # 0.0.2 → 1.0.0  (breaking change)`}
        lang="bash"
      />

      <h3 className="text-base font-semibold text-gray-900 mt-6 mb-2">3. Publish</h3>
      <p className="text-gray-500 mb-3 text-sm">
        The package is scoped public, so pass <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">--access public</code> (already
        set in <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">publishConfig</code>, but shown
        here for clarity):
      </p>
      <CodeBlock code={`npm publish --access public`} lang="bash" />

      <p className="text-gray-500 mt-3 mb-8 text-sm">
        npm will package only the files listed under{" "}
        <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">&quot;files&quot;</code> in{" "}
        <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">package.json</code>:
        the <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">dist/</code> folder
        and <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">components/ui/mnee-ui.css</code>.
        The doc site source, Storybook config, and other dev files are excluded automatically.
      </p>

      <h3 className="text-base font-semibold text-gray-900 mb-2">Full release checklist</h3>
      <div className="overflow-auto rounded-lg border border-[#E5E5E5]">
        <table className="w-full text-sm border-collapse">
          <tbody>
            {[
              ["Component added or updated in", "components/ui/<name>.tsx"],
              ["Exported from", "components/ui/index.ts"],
              ["Doc page created or updated in", "app/docs/components/<name>/page.tsx"],
              ["Sidebar entry added in", "components/site/Sidebar.tsx"],
              ["Library built with", "npm run build:lib"],
              ["Version bumped in", "package.json"],
              ["Published with", "npm publish --access public"],
            ].map(([step, location]) => (
              <tr key={step} className="hover:bg-gray-50">
                <td className="px-4 py-2.5 border-b border-[#E5E5E5] text-xs text-gray-600 w-1/2">{step}</td>
                <td className="px-4 py-2.5 border-b border-[#E5E5E5] font-mono text-xs text-amber-700">{location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
