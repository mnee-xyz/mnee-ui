import figma from "@figma/code-connect";
import { BadgeTypePill } from "components/ui/badge-type-pill";

const FIGMA_URL =
  "https://www.figma.com/design/qzjrgEgx4q7MAU9ypgwp48?node-id=3656-78";

figma.connect(BadgeTypePill, FIGMA_URL, {
  props: {
    variant: figma.enum("variant", {
      receive: "receive",
      send:    "send",
    }),
  },
  example: ({ variant }) => (
    <BadgeTypePill variant={variant}>Receive</BadgeTypePill>
  ),
  links: [
    {
      name: "Documentation",
      url: "https://mnee-ui.vercel.app/docs/components/badge-type-pill",
    },
  ],
});
