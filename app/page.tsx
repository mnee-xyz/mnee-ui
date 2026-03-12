import Link from "next/link";

export default function HomePage() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-16">
      {/* Logo mark */}
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand text-white font-bold text-lg mb-8 shadow-sm">
        M
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
        MNEE UI
      </h1>
      <p className="text-lg text-gray-500 mb-10 leading-relaxed max-w-xl">
        The design system that powers the MNEE merchant portal — formalized as
        a component library and published as{" "}
        <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded font-mono text-gray-700">
          @mnee/ui
        </code>
        .
      </p>

      <div className="flex items-center gap-4 mb-16">
        <Link
          href="/docs/introduction"
          className="inline-flex items-center gap-2 h-10 px-5 rounded-lg bg-brand text-white text-sm font-medium hover:bg-brand-dark transition-colors shadow-sm"
        >
          Get Started
        </Link>
        <Link
          href="/docs/components/button"
          className="inline-flex items-center gap-2 h-10 px-5 rounded-lg border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors"
        >
          Browse Components
        </Link>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-3 gap-4 mb-16">
        {[
          { label: "Components", value: "3" },
          { label: "Design tokens", value: "12" },
          { label: "Package", value: "@mnee/ui" },
        ].map((stat) => (
          <div key={stat.label} className="border border-[#E5E5E5] rounded-lg p-4">
            <div className="text-2xl font-semibold text-gray-900 font-mono">{stat.value}</div>
            <div className="text-sm text-gray-500 mt-0.5">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Quick links */}
      <div className="space-y-2">
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
          Quick links
        </h2>
        {[
          { href: "/docs/introduction", title: "Introduction", desc: "Install and set up @mnee/ui" },
          { href: "/docs/colors", title: "Design Tokens", desc: "Colors and semantic variables" },
          { href: "/docs/components/button", title: "Button", desc: "Primary actions and form submissions" },
          { href: "/docs/components/badge", title: "Badge", desc: "Status chips for transactions" },
          { href: "/docs/components/card", title: "Card", desc: "Content container with header and footer" },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center justify-between px-4 py-3 rounded-lg border border-[#E5E5E5] hover:border-gray-300 hover:bg-gray-50 transition-colors group"
          >
            <div>
              <span className="text-sm font-medium text-gray-900 group-hover:text-brand transition-colors">
                {link.title}
              </span>
              <p className="text-xs text-gray-500 mt-0.5">{link.desc}</p>
            </div>
            <span className="text-gray-300 group-hover:text-brand transition-colors text-lg">→</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
