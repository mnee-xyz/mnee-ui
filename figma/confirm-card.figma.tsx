import figma from "@figma/code-connect";
import { ConfirmCard } from "components/ui/confirm-card";

const FIGMA_URL =
  "https://www.figma.com/design/qzjrgEgx4q7MAU9ypgwp48?node-id=3599-80";

// ─── 1. Default state ─────────────────────────────────────────────────────────
figma.connect(ConfirmCard, FIGMA_URL, {
  variant: { State: "default" },
  props: {
    subtitle: figma.string("Subtitle"),
    amount: figma.string("Amount"),
  },
  example: ({ subtitle, amount }) => (
    <ConfirmCard
      subtitle={subtitle}
      amount={amount}
      rows={[
        { label: "Token", value: "USDC" },
        { label: "Network", value: "Ethereum" },
        { label: "Destination", value: "038123...2301" },
      ]}
      belowDivider={[
        { label: "Est. network fee", value: "~$0.02" },
        { label: "Recipient receives", value: "~119.98 USDC", variant: "brand" },
      ]}
    />
  ),
  links: [
    {
      name: "Documentation",
      url: "https://mnee-ui.vercel.app/docs/components/confirm-card",
    },
  ],
});

// ─── 2. Loading state ─────────────────────────────────────────────────────────
figma.connect(ConfirmCard, FIGMA_URL, {
  variant: { State: "loading" },
  props: {
    subtitle: figma.string("Subtitle"),
    amount: figma.string("Amount"),
  },
  example: ({ subtitle, amount }) => (
    <ConfirmCard
      subtitle={subtitle}
      amount={amount}
      rows={[]}
      state="loading"
    />
  ),
  links: [
    {
      name: "Documentation",
      url: "https://mnee-ui.vercel.app/docs/components/confirm-card",
    },
  ],
});
