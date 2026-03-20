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

export function InputAddressErrorDemo() {
  const [address, setAddress] = useState("0x0h12321412413");
  return (
    <div className="w-[430px]">
      <InputAddress
        label="Send to"
        value={address}
        onChange={setAddress}
        error="Invalid address"
        hint="Not an Ethereum address"
      />
    </div>
  );
}
