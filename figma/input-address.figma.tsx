import figma from "@figma/code-connect";
import { InputAddress } from "components/ui/input-address";

const FIGMA_URL = "https://www.figma.com/design/qzjrgEgx4q7MAU9ypgwp48?node-id=3468-1454";

// ─── InputAddress (default) ───────────────────────────────────────────────────
// Hovered / Focus / is Filled are CSS or runtime states — no code mapping needed.
figma.connect(InputAddress, FIGMA_URL, {
  variant: { "Error": "False" },
  props: {
    hasLabel: figma.boolean("has Label"),
    label: figma.string("Label"),
  },
  example: ({ hasLabel, label }) => (
    <InputAddress
      hasLabel={hasLabel}
      label={label}
      value=""
      onChange={(v) => {}}
    />
  ),
  links: [{ name: "Documentation", url: "https://mnee-ui.vercel.app/docs/components/input-address" }],
});

// ─── InputAddress (error) ─────────────────────────────────────────────────────
figma.connect(InputAddress, FIGMA_URL, {
  variant: { "Error": "True" },
  props: {
    hasLabel: figma.boolean("has Label"),
    label: figma.string("Label"),
    hint: figma.string("Hint"),
  },
  example: ({ hasLabel, label, hint }) => (
    <InputAddress
      hasLabel={hasLabel}
      label={label}
      error="Invalid address"
      hint={hint}
      value="0x0h12321412413"
      onChange={(v) => {}}
    />
  ),
  links: [{ name: "Documentation", url: "https://mnee-ui.vercel.app/docs/components/input-address" }],
});
