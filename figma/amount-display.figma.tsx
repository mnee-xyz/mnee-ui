import figma from "@figma/code-connect";
import { AmountDisplay } from "components/ui/amount-display";

const FIGMA_URL = "https://www.figma.com/design/qzjrgEgx4q7MAU9ypgwp48?node-id=3485-1982";

// ─── USD — empty ──────────────────────────────────────────────────────────────
figma.connect(AmountDisplay, FIGMA_URL, {
  variant: { "Currency": "USD", "is Empty": "True" },
  props: {
    availableAmount: figma.string("Available amount"),
  },
  example: ({ availableAmount }) => (
    <AmountDisplay
      value=""
      onChange={setValue}
      subtitle={`Available: $${availableAmount}`}
      subtitleAction={{ label: "Max", onClick: handleMax }}
    />
  ),
  links: [{ name: "Documentation", url: "https://mnee-ui.vercel.app/docs/components/amount-display" }],
});

// ─── USD — filled ─────────────────────────────────────────────────────────────
figma.connect(AmountDisplay, FIGMA_URL, {
  variant: { "Currency": "USD", "is Empty": "False" },
  props: {
    value: figma.string("Input Value"),
    availableAmount: figma.string("Available amount"),
  },
  example: ({ value, availableAmount }) => (
    <AmountDisplay
      value={value}
      onChange={setValue}
      subtitle={`Available: $${availableAmount}`}
      subtitleAction={{ label: "Max", onClick: handleMax }}
    />
  ),
  links: [{ name: "Documentation", url: "https://mnee-ui.vercel.app/docs/components/amount-display" }],
});

// ─── Crypto — empty ───────────────────────────────────────────────────────────
figma.connect(AmountDisplay, FIGMA_URL, {
  variant: { "Currency": "Crypto", "is Empty": "True" },
  props: {
    availableAmount: figma.string("Available amount"),
  },
  example: ({ availableAmount }) => (
    <AmountDisplay
      value=""
      onChange={setValue}
      prefix=""
      suffix="USDC"
      subtitle={`Available: ${availableAmount} USDC`}
      subtitleAction={{ label: "Max", onClick: handleMax }}
    />
  ),
  links: [{ name: "Documentation", url: "https://mnee-ui.vercel.app/docs/components/amount-display" }],
});

// ─── Crypto — filled ──────────────────────────────────────────────────────────
figma.connect(AmountDisplay, FIGMA_URL, {
  variant: { "Currency": "Crypto", "is Empty": "False" },
  props: {
    value: figma.string("Input Value"),
    availableAmount: figma.string("Available amount"),
  },
  example: ({ value, availableAmount }) => (
    <AmountDisplay
      value={value}
      onChange={setValue}
      prefix=""
      suffix="USDC"
      subtitle={`Available: ${availableAmount} USDC`}
      subtitleAction={{ label: "Max", onClick: handleMax }}
    />
  ),
  links: [{ name: "Documentation", url: "https://mnee-ui.vercel.app/docs/components/amount-display" }],
});

// ─── Figma gaps (for Federico) ────────────────────────────────────────────────
// 1. No `readOnly` variant — code supports readOnly mode (static text, no input).
//    Consider adding a boolean property "is Read Only" to the component set 3485:1982.
// 2. No `placeholder` property — Figma hardcodes "0". Code allows a custom placeholder string.
//    Low priority since "0" is the default in code anyway.
