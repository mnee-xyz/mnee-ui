"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowLeft, ArrowLeftRight, Check, X } from "lucide-react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { InputAddress } from "@/components/ui/input-address";
import { TokenIcon } from "@/components/ui/token-icon";
import { AmountDisplay } from "@/components/ui/amount-display";
import { DropdownToken } from "@/components/ui/dropdown-token";
import { SelectList, SelectOption } from "@/components/ui/select-list";
import { DetailRow } from "@/components/ui/detail-row";
import { ToastProvider, useToast } from "@/components/ui/toast";
import { networkIcons } from "@/components/ui/token-icons/registry";

// ─── Types ────────────────────────────────────────────────────────────────────

type Step = "form" | "confirm" | "success";
type Denomination = "usd" | "crypto";

interface Token {
  id: string;
  name: string;
  symbol: string;
  network: string;
  networkName: string;
  /** Balance in native token units (e.g. 24567.54 USDC) — comes from backend */
  balance: number;
  /** Token price in USD — comes from backend price API */
  price: number;
}

// ─── Price API placeholder ────────────────────────────────────────────────────
// In production, replace with a real API call:
//   const { data } = useSWR(`/api/prices/${symbol}`, fetcher)
//   return data?.price ?? fallbackPrice
//
// For stablecoins (USDC/USDT) the price is always ~1.0 USD.
// For volatile tokens, poll the price API on an interval.

function getTokenPrice(symbol: string): number {
  // Fallback prices — replace with live API in production
  const fallbackPrices: Record<string, number> = {
    USDC: 1.0,
    USDT: 1.0,
  };
  return fallbackPrices[symbol] ?? 1.0;
}

// ─── Mock data ────────────────────────────────────────────────────────────────

const TOKENS: Token[] = [
  // USDC — Base, Ethereum, Tron, Optimism, Arbitrum, Solana
  { id: "usdc-base", name: "USD Coin", symbol: "USDC", network: "base", networkName: "Base", balance: 24567.54, price: 1.0 },
  { id: "usdc-ethereum", name: "USD Coin", symbol: "USDC", network: "ethereum", networkName: "Ethereum", balance: 8120.0, price: 1.0 },
  { id: "usdc-tron", name: "USD Coin", symbol: "USDC", network: "tron", networkName: "Tron", balance: 3200.0, price: 1.0 },
  { id: "usdc-optimism", name: "USD Coin", symbol: "USDC", network: "optimism", networkName: "Optimism", balance: 1450.0, price: 1.0 },
  { id: "usdc-arbitrum", name: "USD Coin", symbol: "USDC", network: "arbitrum", networkName: "Arbitrum", balance: 3450.0, price: 1.0 },
  { id: "usdc-solana", name: "USD Coin", symbol: "USDC", network: "solana", networkName: "Solana", balance: 1200.0, price: 1.0 },
  // USDT — Ethereum, Tron, Arbitrum, Optimism, Solana
  { id: "usdt-ethereum", name: "Tether", symbol: "USDT", network: "ethereum", networkName: "Ethereum", balance: 5230.0, price: 1.0 },
  { id: "usdt-tron", name: "Tether", symbol: "USDT", network: "tron", networkName: "Tron", balance: 2800.0, price: 1.0 },
  { id: "usdt-arbitrum", name: "Tether", symbol: "USDT", network: "arbitrum", networkName: "Arbitrum", balance: 2100.0, price: 1.0 },
  { id: "usdt-optimism", name: "Tether", symbol: "USDT", network: "optimism", networkName: "Optimism", balance: 890.0, price: 1.0 },
  { id: "usdt-solana", name: "Tether", symbol: "USDT", network: "solana", networkName: "Solana", balance: 750.0, price: 1.0 },
];

const tokenOptions: SelectOption[] = TOKENS.map((t) => ({
  id: t.id,
  icon: <TokenIcon token={t.symbol} network={t.network} size="lg" />,
  title: t.name,
  subtitle: `${t.symbol} on ${t.networkName}`,
}));

// ─── Helper: render a 16px network icon ───────────────────────────────────────

function NetworkBadge({ network }: { network: string }) {
  const Icon = networkIcons[network.toLowerCase()];
  if (!Icon) return null;
  return <Icon className="w-4 h-4 rounded-full" />;
}

// ─── Inner component (needs toast context) ────────────────────────────────────

function ConvertWithdrawInner() {
  const { showToast } = useToast();

  const [modalOpen, setModalOpen] = useState(false);
  const [step, setStep] = useState<Step>("form");
  const [denomination, setDenomination] = useState<Denomination>("usd");
  const [selectedTokenId, setSelectedTokenId] = useState(TOKENS[0].id);
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [tokenDropdownOpen, setTokenDropdownOpen] = useState(false);
  const [confirming, setConfirming] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedToken = TOKENS.find((t) => t.id === selectedTokenId)!;

  // Close dropdown on outside click
  useEffect(() => {
    if (!tokenDropdownOpen) return;
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setTokenDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [tokenDropdownOpen]);

  // ─── Denomination & conversion logic ──────────────────────────────────────
  // The user types in either USD or crypto units.
  // We convert to the other denomination using the token's price.
  // In production, `price` comes from a live price API (see getTokenPrice).

  const price = getTokenPrice(selectedToken.symbol);
  const numericAmount = parseFloat(amount) || 0;

  // Convert the typed amount to both USD and crypto values
  const usdValue = denomination === "usd"
    ? numericAmount
    : numericAmount * price;
  const cryptoValue = denomination === "crypto"
    ? numericAmount
    : price > 0 ? numericAmount / price : 0;

  // Available balance in the current denomination
  const availableCrypto = selectedToken.balance;
  const availableUsd = selectedToken.balance * price;
  const availableDisplay = denomination === "usd"
    ? `Available: $${availableUsd.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
    : `Available: ${availableCrypto.toLocaleString("en-US", { maximumFractionDigits: 2 })} ${selectedToken.symbol}`;

  // Max amount in the current denomination
  const maxAmount = denomination === "usd" ? availableUsd : availableCrypto;

  const canContinue = numericAmount > 0 && numericAmount <= maxAmount && address.length > 10;
  const networkFee = 0.02; // USD — from backend fee estimation API
  const recipientReceives = cryptoValue > 0 ? cryptoValue - (price > 0 ? networkFee / price : 0) : 0;

  function resetModal() {
    setStep("form");
    setDenomination("usd");
    setSelectedTokenId(TOKENS[0].id);
    setAddress("");
    setAmount("");
    setTokenDropdownOpen(false);
    setConfirming(false);
  }

  function openModal() {
    resetModal();
    setModalOpen(true);
  }

  function handleConfirm() {
    setConfirming(true);
    setTimeout(() => {
      setConfirming(false);
      setStep("success");
    }, 1500);
  }

  function handleClose() {
    setModalOpen(false);
    if (step === "success") {
      showToast("Withdrawal submitted successfully!", "success");
    }
  }

  return (
    <>
      {/* Page shell */}
      <div className="min-h-[600px] bg-gray-50 rounded-xl border border-[#E5E5E5] p-8">
        <div className="max-w-md mx-auto text-center space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Wallet</h2>
            <p className="text-[#737373] mt-1">Manage your digital assets</p>
          </div>

          <div className="bg-white rounded-xl border border-[#E5E5E5] p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-sm text-[#737373]">Total Balance</div>
              <div className="text-2xl font-semibold text-gray-900">
                ${(TOKENS.reduce((sum, t) => sum + t.balance * t.price, 0)).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="primary" className="flex-1" onClick={openModal}>
                Convert &amp; Withdraw
              </Button>
              <Button variant="outline" className="flex-1" disabled>
                Deposit
              </Button>
            </div>
          </div>

          {/* Aggregated token list */}
          <div className="bg-white rounded-xl border border-[#E5E5E5] divide-y divide-gray-100">
            {[
              { symbol: "USDC", name: "USD Coin" },
              { symbol: "USDT", name: "Tether" },
            ].map((group) => {
              const total = TOKENS.filter((t) => t.symbol === group.symbol).reduce((sum, t) => sum + t.balance, 0);
              const networks = TOKENS.filter((t) => t.symbol === group.symbol).length;
              return (
                <div key={group.symbol} className="flex items-center gap-3 px-4 py-3">
                  <div className="shrink-0 w-8 h-8">
                    <TokenIcon token={group.symbol} size="lg" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-medium text-gray-900">{group.name}</p>
                    <p className="text-xs text-[#737373]">{group.symbol} across {networks} networks</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">
                      ${total.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                    <p className="text-xs text-[#737373]">
                      {total.toLocaleString("en-US", { maximumFractionDigits: 2 })} {group.symbol}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ─── Modal ─────────────────────────────────────────────────────── */}
      <Modal
        isOpen={modalOpen}
        onClose={handleClose}
        size="md"
        title={
          step === "confirm" ? (
            <div className="flex items-center gap-3">
              <button
                onClick={() => setStep("form")}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Go back"
              >
                <ArrowLeft size={20} />
              </button>
              Convert &amp; Withdraw
            </div>
          ) : "Convert & Withdraw"
        }
        footer={
          step === "form" ? (
            <Button variant="primary" size="lg" className="w-full" disabled={!canContinue} onClick={() => setStep("confirm")}>
              Continue
            </Button>
          ) : step === "success" ? (
            <Button variant="outline" className="w-full" onClick={handleClose}>
              Close
            </Button>
          ) : undefined
        }
      >
          {/* ── Form step ────────────────────────────────────────── */}
          {step === "form" && (
            <div className="space-y-5">
              {/* Crypto toggle — right-aligned */}
              <div className="flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setDenomination(denomination === "usd" ? "crypto" : "usd")}
                >
                  <ArrowLeftRight size={12} />
                  {denomination === "usd" ? "Crypto" : "USD"}
                </Button>
              </div>

              {/* Amount — the big number IS the input
                  USD mode:    $120        | Available: $24,567.54
                  Crypto mode: 120 USDC    | Available: 24,567.54 USDC */}
              <AmountDisplay
                value={amount}
                onChange={setAmount}
                prefix={denomination === "usd" ? "$" : ""}
                suffix={denomination === "crypto" ? selectedToken.symbol : undefined}
                placeholder="0"
                subtitle={availableDisplay}
                subtitleAction={{
                  label: "Max",
                  onClick: () => setAmount(String(maxAmount)),
                }}
                className="py-2"
              />

              {/* Token selector */}
              <div ref={dropdownRef}>
                <DropdownToken
                  label="Convert in"
                  icon={<TokenIcon token={selectedToken.symbol} network={selectedToken.network} size="lg" />}
                  title={selectedToken.name}
                  subtitle={`${selectedToken.symbol} on ${selectedToken.networkName}`}
                  isOpen={tokenDropdownOpen}
                  onClick={() => setTokenDropdownOpen(!tokenDropdownOpen)}
                />
                {tokenDropdownOpen && (
                  <SelectList
                    options={tokenOptions}
                    selectedId={selectedTokenId}
                    onSelect={(opt) => {
                      setSelectedTokenId(opt.id);
                      setTokenDropdownOpen(false);
                    }}
                    className="mt-1"
                  />
                )}
              </div>

              {/* Destination address */}
              <InputAddress
                label="Withdraw to"
                value={address}
                onChange={setAddress}
              />

              {/* Footer text */}
              <p className="text-sm text-[#737373] text-center">
                Your MNEE balance will be automatically converted
              </p>
            </div>
          )}

          {/* ── Confirm step ─────────────────────────────────────── */}
          {step === "confirm" && (
            <div className="space-y-8">
              {/* Confirmation card */}
              <div className="rounded-xl border border-[#e5e5e5] overflow-hidden">
                {/* Header — gray */}
                <div className="bg-[#f5f5f5] pt-3 px-4 pb-4">
                  <p className="text-sm text-[#737373] leading-[21px]">You are sending</p>
                  <p className="text-2xl font-semibold text-gray-900 leading-9">
                    ${usdValue.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </p>
                </div>
                {/* Detail rows */}
                <div className="flex flex-col gap-3 px-4 py-4">
                  <DetailRow
                    label="Token"
                    value={<>{selectedToken.symbol} <TokenIcon token={selectedToken.symbol} size="sm" /></>}
                  />
                  <DetailRow
                    label="Network"
                    value={<>{selectedToken.networkName} <NetworkBadge network={selectedToken.network} /></>}
                  />
                  <DetailRow
                    label="Destination"
                    value={<span className="font-mono">{address.slice(0, 6)}...{address.slice(-4)}</span>}
                  />
                  <div className="border-t border-[#e5e5e5]" />
                  <DetailRow label="Est. network fee" value={`~$${networkFee.toFixed(2)}`} />
                  <DetailRow
                    label="Recipient receives"
                    value={`~${recipientReceives.toLocaleString("en-US", { maximumFractionDigits: 2 })} ${selectedToken.symbol}`}
                    variant="brand"
                  />
                </div>
              </div>

              {/* Confirm button + disclaimer */}
              <div className="flex flex-col gap-3">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                  loading={confirming}
                  onClick={handleConfirm}
                >
                  Confirm
                </Button>
                <p className="text-sm text-[#737373] text-center">
                  Your MNEE balance will be automatically converted
                </p>
              </div>
            </div>
          )}

          {/* ── Success step ─────────────────────────────────────── */}
          {step === "success" && (
            <div className="space-y-4 text-center py-4">
              <div className="mx-auto w-14 h-14 rounded-full bg-success-bg flex items-center justify-center">
                <Check size={28} className="text-success" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Withdrawal Submitted</h3>
                <p className="text-sm text-[#737373] mt-1">
                  Your withdrawal of {cryptoValue.toLocaleString("en-US", { maximumFractionDigits: 6 })} {selectedToken.symbol} is being processed.
                </p>
              </div>

              <div className="rounded-xl border border-[#e5e5e5] overflow-hidden text-left">
                <div className="flex flex-col gap-3 p-4">
                  <DetailRow label="Amount" value={`${cryptoValue.toLocaleString("en-US", { maximumFractionDigits: 6 })} ${selectedToken.symbol}`} />
                  <DetailRow label="USD Value" value={`$${usdValue.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`} />
                  <DetailRow label="Network" value={<>{selectedToken.networkName} <NetworkBadge network={selectedToken.network} /></>} />
                  <DetailRow
                    label="Destination"
                    value={<span className="font-mono">{address.slice(0, 6)}...{address.slice(-4)}</span>}
                  />
                  <DetailRow label="Status" value="Processing" variant="success" />
                </div>
              </div>
            </div>
          )}
      </Modal>
    </>
  );
}

// ─── Exported page component ──────────────────────────────────────────────────

export function ConvertWithdrawPage() {
  return (
    <ToastProvider>
      <ConvertWithdrawInner />
    </ToastProvider>
  );
}
