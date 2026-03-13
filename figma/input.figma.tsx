import figma from "@figma/code-connect";
import { Input } from "components/ui/input";

// ─── InputField ───────────────────────────────────────────────────────────────
figma.connect(Input, "https://www.figma.com/design/qzjrgEgx4q7MAU9ypgwp48?node-id=520-3062", {
  props: {
    placeholder: figma.string("Placeholder"),
    disabled: figma.enum("State", { Disable: true, Default: undefined, Focus: undefined, Error: undefined }),
    error: figma.enum("State", { Error: "Invalid value", Default: undefined, Focus: undefined, Disable: undefined }),
    leadingIcon: figma.boolean("has Leading icon", { true: <span>icon</span>, false: undefined }),
    prefix: figma.boolean("has Prefix", { true: "$", false: undefined }),
    suffix: figma.boolean("has Sufix", { true: "USD", false: undefined }),
  },
  example: ({ placeholder, disabled, error, leadingIcon, prefix, suffix }) => (
    <Input placeholder={placeholder} disabled={disabled} error={error}
      leadingIcon={leadingIcon} prefix={prefix} suffix={suffix} />
  ),
  links: [{ name: "Documentation", url: "https://mnee-ui.vercel.app/docs/components/input" }],
});

// ─── InputStack ───────────────────────────────────────────────────────────────
figma.connect(Input, "https://www.figma.com/design/qzjrgEgx4q7MAU9ypgwp48?node-id=588-108", {
  props: {
    label: figma.string("Label"),
    hint: figma.string("Hint value"),
    required: figma.boolean("is Required"),
    disabled: figma.enum("State", { Disable: true, Default: undefined, Focus: undefined, Error: undefined }),
    error: figma.enum("State", { Error: "Invalid value", Default: undefined, Focus: undefined, Disable: undefined }),
  },
  example: ({ label, hint, required, disabled, error }) => (
    <Input layout="stacked" label={label} hint={hint} required={required}
      disabled={disabled} error={error} placeholder="Email" />
  ),
  links: [{ name: "Documentation", url: "https://mnee-ui.vercel.app/docs/components/input" }],
});

// ─── InputInline ──────────────────────────────────────────────────────────────
figma.connect(Input, "https://www.figma.com/design/qzjrgEgx4q7MAU9ypgwp48?node-id=3384-10681", {
  props: {
    label: figma.string("Label"),
    required: figma.boolean("is Required"),
    disabled: figma.enum("Property 1", { Disable: true, Default: undefined, Focus: undefined, Error: undefined }),
    error: figma.enum("Property 1", { Error: "Invalid value", Default: undefined, Focus: undefined, Disable: undefined }),
  },
  example: ({ label, required, disabled, error }) => (
    <Input layout="inline" label={label} required={required}
      disabled={disabled} error={error} placeholder="Email" />
  ),
  links: [{ name: "Documentation", url: "https://mnee-ui.vercel.app/docs/components/input" }],
});
