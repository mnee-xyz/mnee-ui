"use client";

import { useState } from "react";
import { AmountDisplay } from "@/components/ui/amount-display";

export function AmountDisplayDemo() {
  const [amount, setAmount] = useState("");
  return (
    <AmountDisplay
      value={amount}
      onChange={setAmount}
      subtitle="Available: $24,567.54"
      subtitleAction={{ label: "Max", onClick: () => setAmount("24567.54") }}
    />
  );
}
