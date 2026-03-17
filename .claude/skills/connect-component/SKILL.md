---
name: connect-component
description: Connect an MNEE UI component to Figma via Code Connect so Figma Dev Mode shows accurate live code snippets. Trigger on "connect [component] to Figma", "add Code Connect for [component]", "wire [component] to Figma Dev Mode", "set up Code Connect mapping", or after adding a new component to the design system. Also trigger when the user mentions figma.connect(), .figma.tsx, or wants designers to see code in Figma.
---

# MNEE UI — Connect Component to Figma (Code Connect)

Wires a design system component to Figma Dev Mode via `@figma/code-connect` so that selecting any instance in Figma Dev Mode shows a live, accurate JSX snippet with that instance's exact prop values.

**What you need before starting:**
- The component already exists in `components/ui/<name>.tsx`
- The Figma file key: `qzjrgEgx4q7MAU9ypgwp48`
- A rough idea of which Figma component to connect (name is enough — you'll find the node ID)

**Reference docs:**
- Context7: Always query `/figma/code-connect` for latest API docs before starting
- Key APIs: `figma.instance()`, `figma.children()`, `figma.nestedProps()`, `figma.enum()`, `figma.boolean()`, `figma.string()`

---

## Step 0: Fetch latest Code Connect docs via Context7

Before any Code Connect work, fetch up-to-date API docs to avoid relying on stale knowledge:

1. `resolve-library-id`: search for `@figma/code-connect`
2. `query-docs` with libraryId `/figma/code-connect` for the specific API needed (e.g., "figma.instance nested components", "figma.children child layers", "figma.nestedProps")
3. Also query for any recent breaking changes or new APIs

This ensures correct usage of `figma.children()` vs `figma.instance()` vs `figma.nestedProps()` — these have distinct use cases that are easy to confuse.

---

## Step 1: Discover the Figma component structure

Call `get_code_connect_suggestions` with the Figma file key and the component's node ID if known, or any node in the area of the component if not. This returns the component's properties (variants, booleans, text, nested instances) and confirms what's unmapped.

```
get_code_connect_suggestions(
  fileKey: "qzjrgEgx4q7MAU9ypgwp48",
  nodeId: "<node-id>",          // hyphens: "73-3681"
  clientFrameworks: "react",
  clientLanguages: "typescript"
)
```

**If the exact node ID is unknown**, start from any known reference node and use `get_metadata` to explore nearby nodes until you find a `<frame>` that contains `<symbol>` children named with property patterns like `Size=Lg, Type=Primary, State=Default` — that frame is the component set.

Read `components/ui/<name>.tsx` in parallel to understand the code props (names, types, defaults).

**Detecting nested component instances (critical):**
When reviewing `get_code_connect_suggestions` output, specifically look for:
- Boolean properties like `"has Button"`, `"has Icon"` — these toggle nested component instances on/off
- Properties with INSTANCE_SWAP type — these are swappable nested component slots
- Child layers that are component instances (visible in `get_metadata` output)
- Any component instance visible in the preview screenshots but NOT listed as a property

For each nested instance found:
1. Check if the nested component already has its own `.figma.tsx` Code Connect file in `figma/`
2. If not, the parent's preview **WILL fail** — connect the nested component first, or use `figma.children()` / `figma.instance()` to map it

---

## Step 2: Find the component SET node (critical)

> **The most common failure point.** Figma URLs usually point to a specific variant (e.g. the default state). Code Connect requires the **component set** node — the parent frame that contains all variants. Connecting to a variant gives: `"node is not a top level component or component set"`.

**How to identify the component set:**
- Run `get_design_context` on a known variant node. The returned code will contain a `data-node-id` attribute on the **outer wrapper** — that outer wrapper ID is the component set.
- Alternatively, call `get_metadata` on candidate IDs (one step up in the ID sequence) until you find a `<frame>` that contains multiple `<symbol>` children with variant-style names.

Once found, build the correct URL:
```
https://www.figma.com/design/qzjrgEgx4q7MAU9ypgwp48?node-id=<SET-ID-with-hyphens>
```

---

## Step 3: Build the property mapping

Map each Figma property to a `figma.*()` call:

| Figma property type | API call | When to use |
|---|---|---|
| Enum / variant (2+ named values) | `figma.enum("PropName", { FigmaVal: "codeVal", ... })` | Standard variant or multi-value property |
| Boolean (True/False toggle) | `figma.boolean("PropName")` | Simple on/off toggle |
| Text content | `figma.string("PropName")` | Text labels, placeholder values |
| Nested component (instance swap) | `figma.instance("PropName")` | Property is an INSTANCE_SWAP type |
| Nested component (child layer) | `figma.children("LayerName")` | Need to render a child by its layer name |
| Nested component (access sub-props) | `figma.nestedProps("LayerName", {...})` | Need to map properties from within a nested instance |
| Boolean toggle for nested component | Split into two `figma.connect()` calls with `variant: {}` | Boolean controls whether a nested instance is visible |

**Important details:**
- Figma enum values are case-sensitive — match them exactly (e.g. `"Disable"` not `"Disabled"`, `"Primary"` not `"primary"`)
- When a Figma property is a **multi-value enum** (like `State: Default/Hover/Disable`), always use `figma.enum()` even if the target code prop is boolean. Map only the values that translate to truthy code values; map the rest to `undefined` (they'll be omitted from the snippet).
- CSS-only states like Hover have no code representation — map them to `undefined` and add a comment
- **`figma.instance()` vs `figma.children()`**: Use `figma.instance("PropName")` when the property itself is an INSTANCE_SWAP type. Use `figma.children("LayerName")` when the nested component is a child layer identified by its layer name (not a property). If unsure, check the property types in `get_code_connect_suggestions` output.

---

## Step 3b: Handle nested components

For each nested component instance detected in Step 1:

**A. Boolean toggle (e.g., `"has Button": true/false`):**
Split into two `figma.connect()` calls using variant restrictions:

```tsx
// With nested component
figma.connect(Input, FIGMA_URL, {
  variant: { "has Button": true },
  props: {
    // ... other props ...
    action: figma.children("Button"),  // child layer named "Button"
  },
  example: ({ action, ...rest }) => (
    <Input {...rest} action={action} />
  ),
});

// Without nested component
figma.connect(Input, FIGMA_URL, {
  variant: { "has Button": false },
  props: {
    // ... other props (no action) ...
  },
  example: ({ ...rest }) => (
    <Input {...rest} />
  ),
});
```

**B. Instance swap property:**
Use `figma.instance("PropName")` directly in props:

```tsx
props: {
  icon: figma.instance("icon"),  // INSTANCE_SWAP property
}
```

**C. Always-present child instance (no toggle):**
Use `figma.children("LayerName")` in the single connect call:

```tsx
props: {
  action: figma.children("Button"),  // always present, no boolean toggle
}
```

**D. Nested component needs property extraction:**
Use `figma.nestedProps("LayerName", { ... })` to access sub-properties:

```tsx
props: {
  nested: figma.nestedProps("Icon Container", {
    iconName: figma.string("Icon Name"),
    iconSize: figma.enum("Size", { Small: 16, Large: 24 }),
  }),
}
```

**E. Verify the nested component is itself Code Connected:**
- Check `figma/` directory for `<nested-component>.figma.tsx`
- If missing, connect the nested component FIRST (recursive application of this skill)
- If the nested component can't be connected yet, document it as a known gap in a comment

---

## Step 4: Create `figma/<name>.figma.tsx`

One file per component, with one `figma.connect()` call per distinct instance shape.

**Multiple connect calls for the same node** — use `variant: {}` restriction to target different instance configurations:

```tsx
import figma from "@figma/code-connect";
import { Button } from "components/ui/button";  // ← NOT @/ or @mnee-ui/ui

const FIGMA_URL = "https://www.figma.com/design/qzjrgEgx4q7MAU9ypgwp48?node-id=73-3681";

// ─── Default state ────────────────────────────────────────────────────────────
figma.connect(Button, FIGMA_URL, {
  variant: { "has Icon": false },   // restrict to instances where has Icon=false
  props: {
    variant: figma.enum("Type", {
      Primary: "primary",
      Secondary: "secondary",
      Destructive: "destructive",
      Ghost: "ghost",
      Outline: "outline",
    }),
    size: figma.enum("Size", { Sm: "sm", Md: "md", Lg: "lg" }),
    loading: figma.boolean("is Loading"),
    children: figma.string("Label"),
    // State is a 3-way enum — only Disable maps to a code prop
    disabled: figma.enum("State", {
      Disable: true,
      Default: undefined,  // omitted from snippet
      Hover: undefined,    // CSS-only, no code equivalent
    }),
  },
  example: ({ variant, size, loading, children, disabled }) => (
    <Button variant={variant} size={size} loading={loading} disabled={disabled}>
      {children}
    </Button>
  ),
  links: [{ name: "Documentation", url: "https://mnee-ui.vercel.app/docs/components/button" }],
});

// ─── With icon ────────────────────────────────────────────────────────────────
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
    size: figma.enum("Size", { Sm: "sm", Md: "md", Lg: "lg" }),
    loading: figma.boolean("is Loading"),
    children: figma.string("Label"),
    disabled: figma.enum("State", { Disable: true, Default: undefined, Hover: undefined }),
    icon: figma.instance("icon"),
  },
  example: ({ variant, size, loading, children, disabled, icon }) => (
    <Button variant={variant} size={size} loading={loading} disabled={disabled}>
      {icon}
      {children}
    </Button>
  ),
  links: [{ name: "Documentation", url: "https://mnee-ui.vercel.app/docs/components/button" }],
});
```

**Parser rules (violations fail `figma:parse`):**
- `props: {}` must be an **object literal** — no spreads, no variables, no helper functions
- Import path must be `components/ui/<name>` — not `@/components/...` or `@mnee-ui/ui`
- Every value in `props` must be a `figma.*()` call

---

## Step 5: Check `figma.config.json`

The parser must be able to find the component source file to resolve the import. Verify `include` covers both the `.figma.tsx` files and the component source:

```json
{
  "codeConnect": {
    "parser": "react",
    "include": ["figma/**/*.figma.tsx", "components/ui/**/*.tsx"],
    "exclude": ["node_modules/**", ".next/**"],
    "importPaths": {
      "components/ui/*": "@mnee-ui/ui"
    }
  }
}
```

If `components/ui/**/*.tsx` is missing from `include`, add it. This is a one-time fix — once added, all future components benefit.

---

## Step 6: Validate

```bash
npm run figma:parse
```

This runs a dry-run. Expected clean output:
```
/Users/fostan/mnee-ui/figma/<name>.figma.tsx
Dry run complete
```

**Common errors and fixes:**

| Error | Cause | Fix |
|---|---|---|
| `node is not a top level component or component set` | Node ID is a variant, not the component set | Use `get_design_context` on the variant → find outer wrapper ID → use that |
| `Import for X could not be resolved` | `components/ui/**/*.tsx` missing from `include` | Add it to `figma.config.json` |
| `Expected spread object to be an object literal` | `...spread` in props | Duplicate props explicitly — no spreads allowed |
| `Enum value not found: "Disabled"` | Key casing doesn't match Figma exactly | Open Figma, check exact enum value spelling |

---

## Step 6b: Troubleshooting — "Connected but preview fails"

If the component shows "Connected" in Figma Dev Mode but the preview fails with "Error loading Code Connect" or "Failed to load Code Connect example", use this debug flow:

| Symptom | Likely cause | Fix |
|---|---|---|
| "Error loading Code Connect" / "Failed to load Code Connect example" | Unmapped nested component instance | Find all boolean/instance properties in Figma, ensure each is mapped with `figma.instance()`, `figma.children()`, or split via `variant: {}` restrictions |
| Preview shows but nested part is blank | Nested component not Code Connected | Create `.figma.tsx` for the nested component first |
| Preview shows wrong variant | `variant: {}` restriction doesn't match | Verify variant key/value casing matches Figma exactly |
| "node is not a top level component" | Connected to variant instead of component set | Use `get_code_connect_suggestions` to find parent component set node |
| Parse succeeds but publish shows 0 uploads | Node ID doesn't match any component in file | Double-check node ID; use `get_metadata` to verify |

### Debug checklist (run when preview fails):
1. Run `npm run figma:parse` — does it pass?
2. Compare Figma properties (from `get_code_connect_suggestions`) vs. mapped props in `.figma.tsx`
3. Look for ANY unmapped properties — **especially booleans and instances**
4. Check if nested components have their own Code Connect files
5. Verify node IDs point to component **SETS**, not individual variants

---

## Step 7: Publish

```bash
source .env && npm run figma:publish
```

The `FIGMA_ACCESS_TOKEN` is in `.env`. On success:
```
Successfully uploaded to Figma, for React:
-> Button(has Icon=false) https://www.figma.com/design/...
-> Button(has Icon=true) https://www.figma.com/design/...
```

Then open the Figma file in Dev Mode, select a Button instance, and verify the Code tab shows the correct JSX snippet with that instance's prop values.

---

## Notes on common Figma gaps

Document any gaps found during the audit as comments in the `.figma.tsx` file so Federico can address them in Figma:

```tsx
// Note: Secondary variant is missing from the icon-only button component set.
// Federico should add it to component set 3364:200.
```

Common gaps to look for:
- A variant that exists in code but not in Figma (or vice versa)
- An icon sub-component that isn't yet Code Connected (snippet will show a placeholder — expected until icons are connected)
- State values in Figma that have no code equivalent (CSS-only like Hover) — map to `undefined`
