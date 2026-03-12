"use client";

import { useState } from "react";
import {
  Table, TableHead, TableBody, TableRow,
  TableHeader, TableCell, TableEmpty, TableLoading, Pagination,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ComponentPreview } from "@/components/site/ComponentPreview";
import { CodeBlock } from "@/components/site/CodeBlock";

const snippets = {
  basic: `<Table>
  <TableHead>
    <TableRow>
      <TableHeader>Name</TableHeader>
      <TableHeader>Status</TableHeader>
      <TableHeader>Amount</TableHeader>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>Alice Johnson</TableCell>
      <TableCell><Badge variant="success">Active</Badge></TableCell>
      <TableCell>$1,200.00</TableCell>
    </TableRow>
  </TableBody>
</Table>`,

  sortable: `<Table>
  <TableHead>
    <TableRow>
      <TableHeader sortable sortDirection="asc" onSort={() => {}}>Date</TableHeader>
      <TableHeader sortable sortDirection={null} onSort={() => {}}>Amount</TableHeader>
      <TableHeader>Status</TableHeader>
    </TableRow>
  </TableHead>
  <TableBody>{/* rows */}</TableBody>
</Table>`,

  loading: `<Table>
  <TableHead>...</TableHead>
  <TableBody>
    <TableLoading cols={3} />
  </TableBody>
</Table>`,

  empty: `<Table>
  <TableHead>...</TableHead>
  <TableBody>
    <TableEmpty
      message="No transactions yet"
      description="Transactions will appear here once customers make payments."
    />
  </TableBody>
</Table>`,

  pagination: `<Pagination
  page={2}
  totalPages={8}
  totalItems={80}
  onPageChange={(p) => setPage(p)}
/>`,

  install: `import {
  Table, TableHead, TableBody, TableRow,
  TableHeader, TableCell, TableEmpty, TableLoading,
  Pagination,
} from "@mnee/ui"`,
};

const ROWS = [
  { id: "tx_001", name: "Alice Johnson",  status: "success" as const, amount: "$1,200.00", date: "Feb 24, 2026" },
  { id: "tx_002", name: "Bob Martinez",   status: "warning" as const, amount: "$340.50",   date: "Feb 23, 2026" },
  { id: "tx_003", name: "Carol Lee",      status: "success" as const, amount: "$5,780.00", date: "Feb 22, 2026" },
  { id: "tx_004", name: "David Kim",      status: "error"   as const, amount: "$90.00",    date: "Feb 21, 2026" },
];

type SortDir = "asc" | "desc" | null;

function SortableDemo() {
  const [sortDir, setSortDir] = useState<SortDir>("desc");
  const toggle = () => setSortDir(d => d === "desc" ? "asc" : "desc");
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader sortable sortDirection={sortDir} onSort={toggle}>Date</TableHeader>
          <TableHeader>Name</TableHeader>
          <TableHeader sortable sortDirection={null} onSort={() => {}}>Amount</TableHeader>
          <TableHeader>Status</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {ROWS.map(row => (
          <TableRow key={row.id}>
            <TableCell className="text-gray-500">{row.date}</TableCell>
            <TableCell className="font-medium text-gray-900">{row.name}</TableCell>
            <TableCell>{row.amount}</TableCell>
            <TableCell><Badge variant={row.status}>{row.status}</Badge></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function PaginationDemo() {
  const [page, setPage] = useState(1);
  return (
    <div className="w-full">
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Amount</TableHeader>
            <TableHeader>Status</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {ROWS.slice(0, 2).map(row => (
            <TableRow key={row.id}>
              <TableCell className="font-medium text-gray-900">{row.name}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell><Badge variant={row.status}>{row.status}</Badge></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination page={page} totalPages={6} totalItems={12} onPageChange={setPage} />
    </div>
  );
}

export default function TablePage() {
  return (
    <div>
      <p className="text-xs font-mono text-gray-400 mb-2">Components</p>
      <h1 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">Table</h1>
      <p className="text-gray-500 mb-8 leading-relaxed">
        Compound table primitives for displaying structured data. Compose{" "}
        <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">Table</code>,{" "}
        <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">TableHead</code>,{" "}
        <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">TableBody</code>,{" "}
        <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">TableRow</code>,{" "}
        <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">TableHeader</code>, and{" "}
        <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">TableCell</code>{" "}
        exactly like native HTML table elements — the design system handles borders, hover states, and typography.
      </p>

      {/* Basic */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Basic</h2>
      <ComponentPreview code={snippets.basic} className="mb-8">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Name</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader>Amount</TableHeader>
              <TableHeader>Date</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {ROWS.map(row => (
              <TableRow key={row.id}>
                <TableCell className="font-medium text-gray-900">{row.name}</TableCell>
                <TableCell><Badge variant={row.status}>{row.status}</Badge></TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell className="text-gray-500">{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ComponentPreview>

      {/* Sortable headers */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Sortable headers</h2>
      <ComponentPreview code={snippets.sortable} className="mb-8">
        <SortableDemo />
      </ComponentPreview>

      {/* Loading state */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Loading state</h2>
      <ComponentPreview code={snippets.loading} className="mb-8">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Name</TableHeader>
              <TableHeader>Amount</TableHeader>
              <TableHeader>Status</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableLoading cols={3} />
          </TableBody>
        </Table>
      </ComponentPreview>

      {/* Empty state */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Empty state</h2>
      <ComponentPreview code={snippets.empty} className="mb-8">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Name</TableHeader>
              <TableHeader>Amount</TableHeader>
              <TableHeader>Status</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableEmpty
              message="No transactions yet"
              description="Transactions will appear here once customers make payments."
            />
          </TableBody>
        </Table>
      </ComponentPreview>

      {/* Pagination */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">With pagination</h2>
      <ComponentPreview code={snippets.pagination} className="mb-10">
        <PaginationDemo />
      </ComponentPreview>

      {/* Usage */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Usage</h2>
      <CodeBlock code={snippets.install} lang="tsx" />

      {/* TableHeader props */}
      <h2 className="text-lg font-semibold text-gray-900 mt-8 mb-3">TableHeader props</h2>
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
              ["sortable", "boolean", "false", "Renders a button with sort indicator"],
              ["sortDirection", `"asc" | "desc" | null`, "null", "Current sort direction — controls the ↑↓ indicator"],
              ["onSort", "() => void", "—", "Called when the sort button is clicked"],
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

      {/* Pagination props */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Pagination props</h2>
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
              ["page", "number", "—", "Current page (1-indexed)"],
              ["totalPages", "number", "—", "Total number of pages"],
              ["totalItems", "number", "—", "Optional total item count shown in the label"],
              ["onPageChange", "(page: number) => void", "—", "Called with the new page number"],
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

      <p className="text-sm text-gray-500 mt-4">
        All sub-components accept <code>className</code> for{" "}
        <strong>layout utilities only</strong> (alignment, padding, width).
        The design system controls borders, hover states, and typography.
      </p>
    </div>
  );
}
