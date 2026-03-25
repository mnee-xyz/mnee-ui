import figma from "@figma/code-connect";
import { Input } from "components/ui/input";

// ─── InputField (standalone) ─────────────────────────────────────────────────
// The base text input. Works standalone and is also resolved by figma.children()
// when nested inside InputStack / InputInline.
figma.connect(Input, "https://www.figma.com/design/qzjrgEgx4q7MAU9ypgwp48?node-id=520-3062", {
  props: {
    placeholder: figma.string("Placeholder"),
    disabled: figma.enum("State", { Disable: true, Default: undefined, Focus: undefined, Error: undefined, "Error (Focus)": undefined }),
    error: figma.enum("State", { Error: "Invalid value", "Error (Focus)": "Invalid value", Default: undefined, Focus: undefined, Disable: undefined }),
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

// ─── InputStack (588:108) — NOT CONNECTED ────────────────────────────────────
// Figma Dev Mode renderer crashes when a parent component set has child
// instances with their own Code Connect (confirmed via systematic testing).
// Designers selecting InputStack will see the InputField child's snippet.
// See: https://github.com/figma/code-connect/issues/93

// ─── InputInline (3384:10681) — NOT CONNECTED ───────────────────────────────
// Same limitation as InputStack above.
