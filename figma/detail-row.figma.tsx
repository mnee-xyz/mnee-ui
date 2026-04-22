import figma from "@figma/code-connect";
import { DetailRow } from "components/ui/detail-row";

const FIGMA_URL =
  "https://www.figma.com/design/qzjrgEgx4q7MAU9ypgwp48?node-id=3576-102";

// ─── 1. DetailRow without trailing icon ──────────────────────────────────────
figma.connect(DetailRow, FIGMA_URL, {
  variant: { "Show Icon": false },
  props: {
    label: figma.string("Label"),
    value: figma.string("Value"),
    variant: figma.enum("Variant", {
      default: "default",
      success: "success",
      muted: "muted",
      brand: "brand",
    }),
  },
  example: ({ label, value, variant }) => (
    <DetailRow label={label} value={value} variant={variant} />
  ),
  links: [
    {
      name: "Documentation",
      url: "https://mnee-ui.vercel.app/docs/components/detail-row",
    },
  ],
});

// ─── 2. DetailRow with trailing icon (e.g. TokenIcon) ────────────────────────
figma.connect(DetailRow, FIGMA_URL, {
  variant: { "Show Icon": true },
  props: {
    label: figma.string("Label"),
    value: figma.string("Value"),
    variant: figma.enum("Variant", {
      default: "default",
      success: "success",
      muted: "muted",
      brand: "brand",
    }),
    action: figma.instance("Icon"),
  },
  example: ({ label, value, variant, action }) => (
    <DetailRow label={label} value={value} variant={variant} action={action} />
  ),
  links: [
    {
      name: "Documentation",
      url: "https://mnee-ui.vercel.app/docs/components/detail-row",
    },
  ],
});
