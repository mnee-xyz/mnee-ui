import figma from "@figma/code-connect";
import { Button } from "components/ui/button";

const FIGMA_URL =
  "https://www.figma.com/design/qzjrgEgx4q7MAU9ypgwp48?node-id=73-3681";

// ─── 1. Labeled button — no icon ─────────────────────────────────────────────
figma.connect(Button, FIGMA_URL, {
  variant: { "has Icon": false },
  props: {
    variant: figma.enum("Type", {
      Primary: "primary",
      Secondary: "secondary",
      Destructive: "destructive",
      Ghost: "ghost",
      Outline: "outline",
    }),
    size: figma.enum("Size", {
      Sm: "sm",
      Md: "md",
      Lg: "lg",
    }),
    loading: figma.boolean("is Loading"),
    children: figma.string("Label"),
    disabled: figma.enum("State", {
      Disable: true,
      Default: undefined,
      Hover: undefined,
    }),
  },
  example: ({ variant, size, loading, children, disabled }) => (
    <Button variant={variant} size={size} loading={loading} disabled={disabled}>
      {children}
    </Button>
  ),
  links: [
    {
      name: "Documentation",
      url: "https://mnee-ui.vercel.app/docs/components/button",
    },
  ],
});

// ─── 2. Labeled button — with icon ───────────────────────────────────────────
figma.connect(Button, FIGMA_URL, {
  variant: { "has Icon": true },
  props: {
    variant: figma.enum("Type", {
      Primary: "primary",
      Secondary: "secondary",
      Destructive: "destructive",
      Ghost: "ghost",
      Outline: "outline",
    }),
    size: figma.enum("Size", {
      Sm: "sm",
      Md: "md",
      Lg: "lg",
    }),
    loading: figma.boolean("is Loading"),
    children: figma.string("Label"),
    disabled: figma.enum("State", {
      Disable: true,
      Default: undefined,
      Hover: undefined,
    }),
    icon: figma.instance("icon"),
  },
  example: ({ variant, size, loading, children, disabled, icon }) => (
    <Button variant={variant} size={size} loading={loading} disabled={disabled}>
      {icon}
      {children}
    </Button>
  ),
  links: [
    {
      name: "Documentation",
      url: "https://mnee-ui.vercel.app/docs/components/button",
    },
  ],
});

// ─── 3. Icon-only button ──────────────────────────────────────────────────────
// Note: Secondary variant is missing from this component set in Figma.
// Federico should add it to the icon button component set.
figma.connect(
  Button,
  "https://www.figma.com/design/qzjrgEgx4q7MAU9ypgwp48?node-id=3364-200",
  {
    props: {
      variant: figma.enum("Type", {
        Primary: "primary",
        Destructive: "destructive",
        Ghost: "ghost",
        Outline: "outline",
      }),
      loading: figma.boolean("is Loading"),
      icon: figma.instance("icon"),
      disabled: figma.enum("State", {
        Disable: true,
        Default: undefined,
        Hover: undefined,
      }),
    },
    example: ({ variant, loading, icon, disabled }) => (
      <Button variant={variant} loading={loading} disabled={disabled}>
        {icon}
      </Button>
    ),
  }
);
