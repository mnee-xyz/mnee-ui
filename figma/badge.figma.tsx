import figma from "@figma/code-connect";
import { Badge } from "components/ui/badge";
import { CircleCheck } from "lucide-react";

const FIGMA_URL =
  "https://www.figma.com/design/qzjrgEgx4q7MAU9ypgwp48?node-id=3656-73";

// ─── 1. Without icon ──────────────────────────────────────────────────────────
figma.connect(Badge, FIGMA_URL, {
  variant: { "has icon": false },
  props: {
    variant: figma.enum("variant", {
      default:     "default",
      secondary:   "secondary",
      destructive: "destructive",
      outline:     "outline",
      success:     "success",
      warning:     "warning",
      info:        "info",
    }),
  },
  example: ({ variant }) => (
    <Badge variant={variant}>Label</Badge>
  ),
  links: [
    {
      name: "Documentation",
      url: "https://mnee-ui.vercel.app/docs/components/badge",
    },
  ],
});

// ─── 2. With icon ─────────────────────────────────────────────────────────────
figma.connect(Badge, FIGMA_URL, {
  variant: { "has icon": true },
  props: {
    variant: figma.enum("variant", {
      default:     "default",
      secondary:   "secondary",
      destructive: "destructive",
      outline:     "outline",
      success:     "success",
      warning:     "warning",
      info:        "info",
    }),
  },
  example: ({ variant }) => (
    <Badge variant={variant} icon={<CircleCheck className="size-3" />}>
      Label
    </Badge>
  ),
  links: [
    {
      name: "Documentation",
      url: "https://mnee-ui.vercel.app/docs/components/badge",
    },
  ],
});
