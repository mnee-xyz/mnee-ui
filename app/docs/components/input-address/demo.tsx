"use client";

import { useState } from "react";
import { InputAddress } from "@/components/ui/input-address";

export function InputAddressDemo() {
  const [address, setAddress] = useState("");
  return (
    <div className="w-[430px]">
      <InputAddress
        label="Withdraw to"
        value={address}
        onChange={setAddress}
      />
    </div>
  );
}
