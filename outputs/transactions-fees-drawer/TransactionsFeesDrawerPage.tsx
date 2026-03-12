"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Copy, Download } from "lucide-react";
import { Drawer, DrawerBody } from "@/components/ui/drawer";
import { Badge, BadgeVariant } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TableCell,
} from "@/components/ui/table";
import { ToastProvider, useToast } from "@/components/ui/toast";

// ─── Types ────────────────────────────────────────────────────────────────────

type TxType = "PAYMENT" | "SEND";
type TxStatus = "COMPLETED" | "PENDING" | "FAILED";

interface MockTransaction {
  id: string;
  referenceId: string;
  date: string;
  type: TxType;
  moduleType: string;
  moduleName: string;
  amountUsd: number;
  stablecoin: string;
  status: TxStatus;
  customerEmail: string;
  rwId: string;
  mneeTxId: string;
  createdAt: string;
}

// ─── Mock data ────────────────────────────────────────────────────────────────

const MOCK_TRANSACTIONS: MockTransaction[] = [
  {
    id: "1",
    referenceId: "#12347",
    date: "Mar 10, 2026",
    type: "PAYMENT",
    moduleType: "Stripe",
    moduleName: "Main Store",
    amountUsd: 120.0,
    stablecoin: "USDC",
    status: "COMPLETED",
    customerEmail: "alice@example.com",
    rwId: "rw_8xK2mNp4qR",
    mneeTxId: "0xabc123def456789012345678901234567890abcd",
    createdAt: "Mar 10, 2026, 09:14 AM",
  },
  {
    id: "2",
    referenceId: "#12348",
    date: "Mar 10, 2026",
    type: "SEND",
    moduleType: "Manual",
    moduleName: "Payout",
    amountUsd: 55.5,
    stablecoin: "USDT",
    status: "COMPLETED",
    customerEmail: "bob@example.com",
    rwId: "rw_3hL9nQw7vS",
    mneeTxId: "0xdef456abc789012345678901234567890abcdef",
    createdAt: "Mar 10, 2026, 10:02 AM",
  },
  {
    id: "3",
    referenceId: "#12349",
    date: "Mar 10, 2026",
    type: "PAYMENT",
    moduleType: "Stripe",
    moduleName: "Main Store",
    amountUsd: 200.0,
    stablecoin: "USDC",
    status: "PENDING",
    customerEmail: "carol@example.com",
    rwId: "rw_5jM1oTx8yU",
    mneeTxId: "0x789012abcdef345678901234567890abcdef12",
    createdAt: "Mar 10, 2026, 11:30 AM",
  },
  {
    id: "4",
    referenceId: "#12350",
    date: "Mar 9, 2026",
    type: "PAYMENT",
    moduleType: "API",
    moduleName: "Mobile App",
    amountUsd: 35.0,
    stablecoin: "USDC",
    status: "FAILED",
    customerEmail: "dan@example.com",
    rwId: "rw_2gK0mPv6wT",
    mneeTxId: "0x012345abcdef678901234567890abcdef1234",
    createdAt: "Mar 9, 2026, 03:45 PM",
  },
  {
    id: "5",
    referenceId: "#12351",
    date: "Mar 9, 2026",
    type: "SEND",
    moduleType: "Manual",
    moduleName: "Payroll",
    amountUsd: 1500.0,
    stablecoin: "USDT",
    status: "COMPLETED",
    customerEmail: "eve@example.com",
    rwId: "rw_7fJ4lNu5vR",
    mneeTxId: "0x345678abcdef901234567890abcdef012345678",
    createdAt: "Mar 9, 2026, 04:20 PM",
  },
  {
    id: "6",
    referenceId: "#12352",
    date: "Mar 8, 2026",
    type: "PAYMENT",
    moduleType: "Stripe",
    moduleName: "Checkout v2",
    amountUsd: 89.99,
    stablecoin: "USDC",
    status: "COMPLETED",
    customerEmail: "frank@example.com",
    rwId: "rw_9eI3kMt4uQ",
    mneeTxId: "0x678901abcdef234567890abcdef012345678901",
    createdAt: "Mar 8, 2026, 08:00 AM",
  },
  {
    id: "7",
    referenceId: "#12353",
    date: "Mar 8, 2026",
    type: "PAYMENT",
    moduleType: "API",
    moduleName: "Mobile App",
    amountUsd: 14.5,
    stablecoin: "USDT",
    status: "PENDING",
    customerEmail: "grace@example.com",
    rwId: "rw_1dH2jLs3tP",
    mneeTxId: "0x901234abcdef567890abcdef01234567890abc",
    createdAt: "Mar 8, 2026, 02:15 PM",
  },
  {
    id: "8",
    referenceId: "#12354",
    date: "Mar 7, 2026",
    type: "SEND",
    moduleType: "Manual",
    moduleName: "Refund",
    amountUsd: 42.0,
    stablecoin: "USDC",
    status: "COMPLETED",
    customerEmail: "henry@example.com",
    rwId: "rw_4cG1iKr2sO",
    mneeTxId: "0xabcdef012345678901234567890abcdef012345",
    createdAt: "Mar 7, 2026, 11:50 AM",
  },
];

// ─── Badge helpers ────────────────────────────────────────────────────────────

const typeBadgeVariant = (type: TxType): BadgeVariant =>
  type === "PAYMENT" ? "brand" : "default";

const statusBadgeVariant = (status: TxStatus): BadgeVariant => {
  if (status === "COMPLETED") return "success";
  if (status === "PENDING") return "warning";
  return "error";
};

const typeLabel = (type: TxType) => (type === "PAYMENT" ? "Payment" : "Send");
const statusLabel = (status: TxStatus) => {
  if (status === "COMPLETED") return "Completed";
  if (status === "PENDING") return "Pending";
  return "Failed";
};

// ─── Fee computation ──────────────────────────────────────────────────────────
// TODO: replace with transactionDetails.fee once backend field is available
const computeFee = (amountUsd: number) =>
  Math.round((amountUsd * 0.0099 + 0.05) * 100) / 100;

// ─── Field row helper ─────────────────────────────────────────────────────────

function FieldRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="py-2 border-b border-gray-100 last:border-0">
      <span className="text-xs text-gray-500">{label}</span>
      <div className="text-sm text-gray-900 mt-1 break-all">{value}</div>
    </div>
  );
}

// ─── Inner page (needs toast context) ────────────────────────────────────────

function TransactionsFeesDrawerInner() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [feeExpanded, setFeeExpanded] = useState(false);
  const [selectedTx, setSelectedTx] = useState<MockTransaction | null>(null);
  const { showToast } = useToast();

  const openDrawer = (tx: MockTransaction) => {
    setSelectedTx(tx);
    setFeeExpanded(false);
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      showToast("Copied to clipboard", "success");
    });
  };

  const fee = selectedTx ? computeFee(selectedTx.amountUsd) : 0;
  const amountReceived = selectedTx
    ? Math.round((selectedTx.amountUsd - fee) * 100) / 100
    : 0;

  return (
    <div className="px-6 py-6 bg-white w-full min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-lg font-bold text-gray-900">Transactions</h1>
        <Button variant="secondary" size="sm">
          <Download className="w-4 h-4 mr-1.5" />
          Download CSV
        </Button>
      </div>

      {/* Transactions table */}
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Transaction ID</TableHeader>
            <TableHeader>Date</TableHeader>
            <TableHeader>Type</TableHeader>
            <TableHeader>Module type</TableHeader>
            <TableHeader>Module name</TableHeader>
            <TableHeader>Amount</TableHeader>
            <TableHeader>Status</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {MOCK_TRANSACTIONS.map((tx) => (
            <TableRow
              key={tx.id}
              className="cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => openDrawer(tx)}
            >
              <TableCell className="font-mono text-xs text-gray-600">{tx.referenceId}</TableCell>
              <TableCell className="text-gray-600 text-sm">{tx.date}</TableCell>
              <TableCell>
                <Badge variant={typeBadgeVariant(tx.type)}>{typeLabel(tx.type)}</Badge>
              </TableCell>
              <TableCell className="text-gray-700 text-sm">{tx.moduleType}</TableCell>
              <TableCell className="text-gray-700 text-sm">{tx.moduleName}</TableCell>
              <TableCell className="text-gray-900 text-sm font-medium">
                ${tx.amountUsd.toFixed(2)}
              </TableCell>
              <TableCell>
                <Badge variant={statusBadgeVariant(tx.status)}>
                  {statusLabel(tx.status)}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Transaction details drawer */}
      <Drawer
        isOpen={drawerOpen}
        onClose={closeDrawer}
        title="Transaction details"
        width="lg"
        side="right"
        footer={
          <Button variant="outline" className="w-full">Issue refund</Button>
        }
      >
        <DrawerBody>
          {selectedTx && (
            <>
              {/* Type & Status rows */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Type</span>
                  <Badge variant={typeBadgeVariant(selectedTx.type)}>
                    {typeLabel(selectedTx.type)}
                  </Badge>
                </div>
                <div className="border-b border-gray-100" />
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Status</span>
                  <Badge variant={statusBadgeVariant(selectedTx.status)}>
                    {statusLabel(selectedTx.status)}
                  </Badge>
                </div>
              </div>

              {/* Fee summary card */}
              <div className="mt-4 border border-[#E5E5E5] rounded-xl px-6 py-5 shadow-sm space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Customer paid</span>
                  <span className="text-sm">${selectedTx.amountUsd.toFixed(2)}</span>
                </div>

                <div>
                  <button
                    className="w-full flex justify-between items-center"
                    onClick={() => setFeeExpanded((v) => !v)}
                  >
                    <span className="text-xs text-gray-500">Fee</span>
                    <span className="flex items-center gap-1 text-sm">
                      ${fee.toFixed(2)}
                      {feeExpanded ? (
                        <ChevronUp className="w-4 h-4 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      )}
                    </span>
                  </button>
                  {feeExpanded && (
                    <div className="mt-2 bg-gray-50 rounded p-3 text-xs text-gray-600">
                      Each transaction includes a 0.99% and $0.05 platform fee.
                    </div>
                  )}
                </div>

                <div className="flex justify-between items-center border-t border-gray-100 pt-3">
                  <span className="text-xs font-medium text-gray-500">Amount received</span>
                  <span className="text-sm font-medium text-green-700">
                    +${amountReceived.toFixed(2)} USD
                  </span>
                </div>
              </div>

              {/* Field rows card */}
              <div className="mt-4 border border-[#E5E5E5] rounded-xl px-6 py-5 shadow-sm">
                <FieldRow label="Module name" value={selectedTx.moduleName} />
                <FieldRow label="Module type" value={selectedTx.moduleType} />
                <FieldRow label="Customer email" value={selectedTx.customerEmail} />
                <FieldRow label="Incoming currency" value={selectedTx.stablecoin} />
                <FieldRow label="Created on" value={selectedTx.createdAt} />
                <FieldRow label="Transaction ID" value={selectedTx.referenceId} />
                <FieldRow label="RW ID" value={selectedTx.rwId} />

                {/* Send hash with copy */}
                <div className="py-2">
                  <span className="text-xs text-gray-500">Send hash</span>
                  <div className="flex items-center justify-between gap-1 mt-1">
                    <span className="text-sm text-gray-900 font-mono break-all">
                      {selectedTx.mneeTxId}
                    </span>
                    <button
                      onClick={() => handleCopy(selectedTx.mneeTxId)}
                      aria-label="Copy send hash"
                      className="shrink-0 text-gray-400 hover:text-gray-700 transition-colors"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DrawerBody>
      </Drawer>
    </div>
  );
}

// ─── Exported page (wrapped in ToastProvider) ─────────────────────────────────

export function TransactionsFeesDrawerPage() {
  return (
    <ToastProvider>
      <TransactionsFeesDrawerInner />
    </ToastProvider>
  );
}

export default TransactionsFeesDrawerPage;
