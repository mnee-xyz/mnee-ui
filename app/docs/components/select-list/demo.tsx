"use client";

import { useState } from "react";
import { SelectList } from "@/components/ui/select-list";
import { TokenIcon } from "@/components/ui/token-icon";

const options = [
  // USDC — Base, Ethereum, Tron, Optimism, Arbitrum, Solana
  { id: "usdc-base", icon: <TokenIcon token="USDC" network="base" size="lg" />, title: "USD Coin", subtitle: "USDC on Base" },
  { id: "usdc-ethereum", icon: <TokenIcon token="USDC" network="ethereum" size="lg" />, title: "USD Coin", subtitle: "USDC on Ethereum" },
  { id: "usdc-tron", icon: <TokenIcon token="USDC" network="tron" size="lg" />, title: "USD Coin", subtitle: "USDC on Tron" },
  { id: "usdc-optimism", icon: <TokenIcon token="USDC" network="optimism" size="lg" />, title: "USD Coin", subtitle: "USDC on Optimism" },
  { id: "usdc-arbitrum", icon: <TokenIcon token="USDC" network="arbitrum" size="lg" />, title: "USD Coin", subtitle: "USDC on Arbitrum" },
  { id: "usdc-solana", icon: <TokenIcon token="USDC" network="solana" size="lg" />, title: "USD Coin", subtitle: "USDC on Solana" },
  // USDT — Ethereum, Tron, Arbitrum, Optimism, Solana
  { id: "usdt-ethereum", icon: <TokenIcon token="USDT" network="ethereum" size="lg" />, title: "Tether", subtitle: "USDT on Ethereum" },
  { id: "usdt-tron", icon: <TokenIcon token="USDT" network="tron" size="lg" />, title: "Tether", subtitle: "USDT on Tron" },
  { id: "usdt-arbitrum", icon: <TokenIcon token="USDT" network="arbitrum" size="lg" />, title: "Tether", subtitle: "USDT on Arbitrum" },
  { id: "usdt-optimism", icon: <TokenIcon token="USDT" network="optimism" size="lg" />, title: "Tether", subtitle: "USDT on Optimism" },
  { id: "usdt-solana", icon: <TokenIcon token="USDT" network="solana" size="lg" />, title: "Tether", subtitle: "USDT on Solana" },
];

export function SelectListDemo() {
  const [selected, setSelected] = useState("usdc-base");
  return (
    <div className="w-[430px]">
      <SelectList
        options={options}
        selectedId={selected}
        onSelect={(opt) => setSelected(opt.id)}
      />
    </div>
  );
}
