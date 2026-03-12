import figma from "@figma/code-connect";
import { ButtonIcon } from "components/ui/button-icon";

figma.connect(
  ButtonIcon,
  "https://www.figma.com/design/qzjrgEgx4q7MAU9ypgwp48?node-id=3364-200",
  {
    props: {
      variant: figma.enum("Type", {
        Primary: "primary",
        Secondary: "secondary",
        Destructive: "destructive",
        Outline: "outline",
        Ghost: "ghost",
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
      <ButtonIcon
        variant={variant}
        loading={loading}
        disabled={disabled}
        icon={icon}
      />
    ),
    links: [
      {
        name: "Documentation",
        url: "https://mnee-ui.vercel.app/docs/components/button-icon",
      },
    ],
  }
);
