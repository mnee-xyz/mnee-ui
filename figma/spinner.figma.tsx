import figma from "@figma/code-connect";
import { Spinner } from "components/ui/spinner";
import { Badge } from "components/ui/badge";
import { Button } from "components/ui/button";

const DOCS_URL = "https://mnee-ui.vercel.app/docs/components/spinner";

// ─── loader-circle (circle arc, default) ─────────────────────────────────────
figma.connect(
  Spinner,
  "https://www.figma.com/design/qzjrgEgx4q7MAU9ypgwp48?node-id=128-1622",
  {
    example: () => <Spinner />,
    links: [{ name: "Documentation", url: DOCS_URL }],
  }
);

// ─── loader (8-spoke asterisk) ───────────────────────────────────────────────
figma.connect(
  Spinner,
  "https://www.figma.com/design/qzjrgEgx4q7MAU9ypgwp48?node-id=128-1626",
  {
    example: () => <Spinner variant="loader" />,
    links: [{ name: "Documentation", url: DOCS_URL }],
  }
);

// ─── Size variants (component set 1202:641) ───────────────────────────────────
figma.connect(
  Spinner,
  "https://www.figma.com/design/qzjrgEgx4q7MAU9ypgwp48?node-id=1202-641",
  {
    props: {
      size: figma.enum("Size", {
        "12": "sm",
        "16": "md",
        "24": "lg",
        // Note: Size=32 has no MNEE equivalent; falls back to lg
        "32": "lg",
      }),
    },
    example: ({ size }) => <Spinner size={size} />,
    links: [{ name: "Documentation", url: DOCS_URL }],
  }
);

// ─── Color variants (component set 1202:668) ──────────────────────────────────
figma.connect(
  Spinner,
  "https://www.figma.com/design/qzjrgEgx4q7MAU9ypgwp48?node-id=1202-668",
  {
    props: {
      color: figma.enum("Color", {
        Red:    "error",
        Green:  "success",
        Blue:   "info",
        Yellow: "warning",
      }),
    },
    example: ({ color }) => <Spinner size="lg" color={color} />,
    links: [{ name: "Documentation", url: DOCS_URL }],
  }
);

// ─── Badge spinner (component set 1202:731, named "Badge") ────────────────────
figma.connect(
  Badge,
  "https://www.figma.com/design/qzjrgEgx4q7MAU9ypgwp48?node-id=1202-731",
  {
    props: {
      variant: figma.enum("Type", {
        Default:   "default",
        Secondary: "secondary",
        Outline:   "outline",
      }),
    },
    example: ({ variant }) => (
      <Badge variant={variant} icon={<Spinner size="sm" />}>
        Syncing
      </Badge>
    ),
    links: [{ name: "Documentation", url: DOCS_URL }],
  }
);

// ─── Brik — loading button (component set 1202:699, named "Brik") ─────────────
// Distinct from the regular Button component set (73:3681).
// Shows Button in its loading/disabled state with an inline spinner.
figma.connect(
  Button,
  "https://www.figma.com/design/qzjrgEgx4q7MAU9ypgwp48?node-id=1202-699",
  {
    props: {
      variant: figma.enum("Type", {
        Default:   "primary",
        Secondary: "secondary",
        Outline:   "outline",
      }),
    },
    example: ({ variant }) => (
      <Button variant={variant} loading>
        Loading...
      </Button>
    ),
    links: [{ name: "Documentation", url: DOCS_URL }],
  }
);
