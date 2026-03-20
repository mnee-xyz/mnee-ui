import figma from "@figma/code-connect";
import { DropdownToken } from "components/ui/dropdown-token";

const FIGMA_URL = "https://www.figma.com/design/qzjrgEgx4q7MAU9ypgwp48?node-id=3467-1874";

// ─── DropdownToken (empty state) ──────────────────────────────────────────────
// is Empty=True — placeholder icon, placeholder title/subtitle
figma.connect(DropdownToken, FIGMA_URL, {
  variant: { "is Empty": "True" },
  props: {
    hasLabel: figma.boolean("has Label"),
    label: figma.string("Label"),
    title: figma.string("Title placeholder"),
    subtitle: figma.string("Placeholder"),
  },
  example: ({ hasLabel, label, title, subtitle }) => (
    <DropdownToken
      hasLabel={hasLabel}
      label={label}
      title={title}
      subtitle={subtitle}
    />
  ),
  links: [{ name: "Documentation", url: "https://mnee-ui.vercel.app/docs/components/dropdown-token" }],
});

// ─── DropdownToken (filled state) ─────────────────────────────────────────────
// is Empty=False — token icon, real title/subtitle
// Hovered and is Open are CSS/runtime states, no code mapping needed.
figma.connect(DropdownToken, FIGMA_URL, {
  variant: { "is Empty": "False" },
  props: {
    hasLabel: figma.boolean("has Label"),
    label: figma.string("Label"),
    title: figma.string("Token"),
    subtitle: figma.string("Chain"),
    isOpen: figma.enum("is Open", { True: true, False: undefined }),
  },
  example: ({ hasLabel, label, title, subtitle, isOpen }) => (
    <DropdownToken
      hasLabel={hasLabel}
      label={label}
      icon={<TokenIcon token="USDC" network="ethereum" />}
      title={title}
      subtitle={subtitle}
      isOpen={isOpen}
    />
  ),
  links: [{ name: "Documentation", url: "https://mnee-ui.vercel.app/docs/components/dropdown-token" }],
});
