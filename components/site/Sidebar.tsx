"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type Status = "stable" | "in-progress" | "deprecated";

const dotColor: Record<Status, string> = {
  stable: "bg-green-500",
  "in-progress": "bg-amber-400",
  deprecated: "bg-red-500",
};

const navigation: Array<{
  section: string;
  items: Array<{ label: string; href: string; status?: Status }>;
}> = [
  {
    section: "Getting Started",
    items: [
      { label: "Introduction", href: "/docs/introduction" },
      { label: "Token Reference", href: "/docs/colors" },
      { label: "Updating", href: "/docs/updating" },
    ],
  },
  {
    section: "Components",
    items: [
      { label: "Button", href: "/docs/components/button", status: "stable" as const },
      { label: "Button Icon", href: "/docs/components/button-icon", status: "stable" as const },
      { label: "Badge", href: "/docs/components/badge", status: "in-progress" as const },
      { label: "Card", href: "/docs/components/card", status: "in-progress" as const },
      { label: "Input", href: "/docs/components/input", status: "stable" as const },
      { label: "Toast", href: "/docs/components/toast", status: "in-progress" as const },
      { label: "Icons", href: "/docs/components/icons", status: "in-progress" as const },
      { label: "Banner", href: "/docs/components/banner", status: "in-progress" as const },
      { label: "Table", href: "/docs/components/table", status: "in-progress" as const },
      { label: "Drawer", href: "/docs/components/drawer", status: "in-progress" as const },
      { label: "Modal", href: "/docs/components/modal", status: "in-progress" as const },
      { label: "Alert", href: "/docs/components/alert", status: "in-progress" as const },
      { label: "Skeleton", href: "/docs/components/skeleton", status: "stable" as const },
      { label: "CodeBlock", href: "/docs/components/code-block", status: "in-progress" as const },
      { label: "TokenIcon", href: "/docs/components/token-icon", status: "in-progress" as const },
      { label: "AmountDisplay", href: "/docs/components/amount-display", status: "in-progress" as const },
      { label: "DropdownToken", href: "/docs/components/dropdown-token", status: "in-progress" as const },
      { label: "SelectList", href: "/docs/components/select-list", status: "in-progress" as const },
      { label: "DetailRow", href: "/docs/components/detail-row", status: "in-progress" as const },
      { label: "InputAddress", href: "/docs/components/input-address", status: "in-progress" as const },
    ],
  },
  {
    section: "Pages",
    items: [
      { label: "Stripe Integration", href: "/docs/pages/stripe-integration" },
      { label: "Transactions Drawer", href: "/docs/pages/transactions-fees-drawer" },
      { label: "Convert & Withdraw", href: "/docs/pages/convert-withdraw" },
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
                      <span className="flex items-center justify-between">
                        {item.label}
                        {item.status && (
                          <span className={`w-1.5 h-1.5 rounded-full ${dotColor[item.status]}`} />
                        )}
                      </span>
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
