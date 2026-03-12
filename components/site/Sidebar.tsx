"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navigation = [
  {
    section: "Getting Started",
    items: [
      { label: "Introduction", href: "/docs/introduction" },
      { label: "Token Reference", href: "/docs/colors" },
    ],
  },
  {
    section: "Components",
    items: [
      { label: "Button", href: "/docs/components/button" },
      { label: "Badge", href: "/docs/components/badge" },
      { label: "Card", href: "/docs/components/card" },
      { label: "Input", href: "/docs/components/input" },
      { label: "Toast", href: "/docs/components/toast" },
      { label: "Icons", href: "/docs/components/icons" },
      { label: "Banner", href: "/docs/components/banner" },
      { label: "Table", href: "/docs/components/table" },
      { label: "Drawer", href: "/docs/components/drawer" },
      { label: "Modal", href: "/docs/components/modal" },
      { label: "Alert", href: "/docs/components/alert" },
      { label: "CodeBlock", href: "/docs/components/code-block" },
    ],
  },
  {
    section: "Pages",
    items: [
      { label: "Stripe Integration", href: "/docs/pages/stripe-integration" },
      { label: "Transactions Drawer", href: "/docs/pages/transactions-fees-drawer" },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-56 shrink-0 border-r border-[#E5E5E5] h-full overflow-y-auto py-6 px-3">
      <nav className="space-y-5">
        {navigation.map((group) => (
          <div key={group.section}>
            <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-1.5 px-3">
              {group.section}
            </p>
            <ul>
              {group.items.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block px-3 py-1.5 text-sm rounded-md transition-colors",
                        active
                          ? "text-gray-900 font-medium bg-gray-100"
                          : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
