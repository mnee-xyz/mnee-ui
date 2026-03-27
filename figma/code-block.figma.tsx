import figma from "@figma/code-connect";
import { CodeBlock } from "components/ui/code-block";

const FIGMA_URL = "https://www.figma.com/design/qzjrgEgx4q7MAU9ypgwp48?node-id=3510-2";

// ─── Basic (no title, no filename) ────────────────────────────────────────────
figma.connect(CodeBlock, FIGMA_URL, {
  variant: { Type: "Basic" },
  props: {
    code: figma.string("Code#basic"),
  },
  example: ({ code }) => <CodeBlock code={code} />,
  links: [{ name: "Documentation", url: "https://mnee-ui.vercel.app/docs/components/code-block" }],
});

// ─── With Title ───────────────────────────────────────────────────────────────
figma.connect(CodeBlock, FIGMA_URL, {
  variant: { Type: "With Title" },
  props: {
    title: figma.string("Title"),
    code: figma.string("Code#title"),
  },
  example: ({ title, code }) => <CodeBlock title={title} code={code} />,
  links: [{ name: "Documentation", url: "https://mnee-ui.vercel.app/docs/components/code-block" }],
});

// ─── With Filename ────────────────────────────────────────────────────────────
figma.connect(CodeBlock, FIGMA_URL, {
  variant: { Type: "With Filename" },
  props: {
    filename: figma.string("Filename"),
    code: figma.string("Code#filename"),
  },
  example: ({ filename, code }) => <CodeBlock filename={filename} code={code} />,
  links: [{ name: "Documentation", url: "https://mnee-ui.vercel.app/docs/components/code-block" }],
});
