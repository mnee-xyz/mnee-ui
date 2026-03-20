"use client";

import { useState, useRef, useEffect } from "react";
import { DropdownToken } from "@/components/ui/dropdown-token";
import { SelectList } from "@/components/ui/select-list";
import { TokenIcon } from "@/components/ui/token-icon";

const tokens = [
  { id: "usdc-base", token: "USDC", network: "base", title: "USD Coin", subtitle: "USDC on Base" },
  { id: "usdc-eth", token: "USDC", network: "ethereum", title: "USD Coin", subtitle: "USDC on Ethereum" },
  { id: "usdt-eth", token: "USDT", network: "ethereum", title: "Tether", subtitle: "USDT on Ethereum" },
  { id: "eth", token: "ETH", network: "ethereum", title: "Ethereum", subtitle: "ETH on Ethereum" },
];

const options = tokens.map((t) => ({
  id: t.id,
  icon: <TokenIcon token={t.token} network={t.network} size="lg" />,
  title: t.title,
  subtitle: t.subtitle,
}));

export function DropdownTokenDemo() {
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState("usdc-base");
  const selected = tokens.find((t) => t.id === selectedId)!;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div className="w-[430px]" ref={containerRef}>
      <DropdownToken
        label="Convert in"
        icon={<TokenIcon token={selected.token} network={selected.network} size="lg" />}
        title={selected.title}
        subtitle={selected.subtitle}
        isOpen={open}
        onClick={() => setOpen(!open)}
      />
      {open && (
        <SelectList
          options={options}
          selectedId={selectedId}
          onSelect={(opt) => {
            setSelectedId(opt.id);
            setOpen(false);
          }}
          className="mt-1"
        />
      )}
    </div>
  );
}
