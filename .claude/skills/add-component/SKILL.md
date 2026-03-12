---
name: add-component
description: Use when a new component is ready to be added to the MNEE UI design system. Triggers on "add this component", "merge this to the design system", "port this", "build this component", or when a Figma link or component description is provided for a component that doesn't yet exist in components/ui/.
---

# MNEE UI — Add Component

A component is ready (designed in Figma or described). This skill merges it into the design system: creates the component file, exports it, and produces full shadcn-quality documentation so engineers can use it immediately from `@mnee/ui`.

**Design ownership philosophy:** MNEE UI is a designer-owned system. Engineers pick a variant, provide their content, and wire their handler or route — they never choose colors, tokens, or styles. Every doc page must communicate this explicitly so engineers know up front.

---

## Phase 1: Understand the component

Get full design context before writing anything.

**If a Figma URL is provided:**
**First invoke the `figma-import` skill** and complete all phases (extraction, design system audit, fidelity mapping) before continuing here. The `figma-import` skill handles all `get_design_context`, `get_screenshot`, and `get_variable_defs` calls, and produces the extraction notes and component mapping table needed for Phase 3 below. Do not call Figma MCP tools directly from this skill when `figma-import` has already been invoked.

**If a description is provided (no Figma):**
Ask: what are all the visual states? What props does it need? What does it look like?
Do not proceed until you have enough to define the full props interface.

**Inventory before writing:**
- What variants exist? (e.g., checked/unchecked, selected/default, sizes)
- What are all interactive states? (hover, focus, disabled, loading)
- What does it compose with? (does it nest inside Modal, Card, Table, etc.)
- Does it need to be a compound component? (e.g., like Table → TableRow → TableCell)
- **Do variants share the same layout and props, or do they have different layouts and different required props?**
  - Same layout, different styles → simple variant with `Record<Variant, string>` (see simple template below)
  - Different layouts or different required props → **discriminated union** (see discriminated union template below — this is preferred for complex components)

---

## Phase 2: Check for existing work

```bash
# Don't duplicate
grep -r "ComponentName" /Users/fostan/mnee-ui/components/ui/index.ts
```

If already exported → stop, suggest using `update-component` skill instead.

---

## Phase 3: Create `components/ui/<name>.tsx`

### Which template to use?

| Situation | Template |
|-----------|----------|
| Variants share the same HTML structure, only styles differ (e.g. Badge colors, Button sizes) | **Simple variant** |
| Variants have different layouts, different sections, or different required props (e.g. Card balance vs module) | **Discriminated union** ← preferred for complex components |

---

### Template A — Simple variant (same layout, different styles)

```tsx
"use client"; // only if useState, useEffect, or event handlers are used

import { cn } from "@/lib/utils";

export type FooVariant = "a" | "b" | "c";

export interface FooProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: FooVariant;
}

const variantStyles: Record<FooVariant, string> = {
  a: "...",
  b: "...",
  c: "...",
};

export function Foo({ variant = "a", className, children, ...props }: FooProps) {
  return (
    <div className={cn("base-classes", variantStyles[variant], className)} {...props}>
      {children}
    </div>
  );
}
```

---

### Template B — Discriminated union (different layouts or different required props)

Use this when different variants genuinely need different props. TypeScript enforces the correct props per variant at compile time — invalid combinations become type errors, not runtime bugs.

The pattern:
1. Define one type per variant, each with a `variant` literal field
2. Export a union of those types as `FooProps`
3. The public `Foo` function branches on `props.variant`
4. Each variant renders in its own internal function — never exported
5. Shared structure (e.g. the outer shell) lives in an internal helper

```tsx
"use client"; // only if event handlers or hooks are used

import { cn } from "@/lib/utils";

/* ── Discriminated union ──────────────────────────────── */

type FooAProps = {
  variant: "a";
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
};

type FooBProps = {
  variant: "b";
  title: string;
  status?: "success" | "warning" | "error" | "info";
  onEdit?: () => void;
  className?: string;
};

export type FooProps = FooAProps | FooBProps;

/* ── Public component ─────────────────────────────────── */

export function Foo(props: FooProps) {
  if (props.variant === "a") return <FooA {...props} />;
  return <FooB {...props} />;
}

/* ── Internal: shared shell ───────────────────────────── */

function FooShell({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("base-shell-classes", className)}>
      {children}
    </div>
  );
}

/* ── Internal: variant A ──────────────────────────────── */

function FooA({ title, description, action, className }: FooAProps) {
  return (
    <FooShell className={className}>
      <div>{title}</div>
      {description && <p>{description}</p>}
      {action && <div>{action}</div>}
    </FooShell>
  );
}

/* ── Internal: variant B ──────────────────────────────── */

function FooB({ title, status, onEdit, className }: FooBProps) {
  return (
    <FooShell className={className}>
      <div>{title}</div>
      {onEdit && <button onClick={onEdit}>Edit</button>}
    </FooShell>
  );
}
```

**Key benefits of this pattern:**
- Engineers can't pass `onEdit` to the `"a"` variant — TypeScript catches it at compile time
- Each variant's internal layout is isolated — changing one never breaks another
- The public `export` surface stays minimal: one component, one type
- Sub-components (FooShell, FooA, FooB) are internal implementation — not exported

---

**Hard rules:**
- Named export only (no default export)
- Extend native HTML element props (`React.HTMLAttributes<HTMLDivElement>`, etc.)
- Input-based + string `size` prop: `Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">`
- Variants as `Record<VariantType, string>` — never switch statements
- Animated show/hide: CSS opacity + pointer-events-none (stay in DOM) — not conditional rendering
- No hardcoded hex colors — use design tokens: `bg-brand`, `bg-error`, `text-muted`, `border-surface-border`, etc.
- No external component libraries — Tailwind + lucide-react only
- No `console.log`

**Design tokens reference:**
| Token | Value |
|-------|-------|
| `bg-brand` | #D97706 amber |
| `bg-brand-dark` | #B45309 |
| `bg-success` / `bg-success-bg` | green |
| `bg-error` / `bg-error-bg` | red |
| `bg-warning` / `bg-warning-bg` | yellow |
| `border-surface-border` | #E5E5E5 |
| `bg-muted-bg` / `text-muted` | gray |

---

## Phase 4: Export from `components/ui/index.ts`

Add in alphabetical order.

**Simple variant component** — re-export everything:
```ts
export * from "./<name>";
```

**Discriminated union component** — named exports only (internal sub-components must NOT be exported):
```ts
export { Foo } from "./<name>";
export type { FooProps } from "./<name>";
```

---

## Phase 5: Create `app/docs/components/<name>/page.tsx`

This is the most important phase — this is what engineers read.

**Golden rule:** Every component or element visible in a live demo MUST be importable from `@mnee/ui`. Never define local helper components inside a doc page. If a helper is needed to make the demo work, it must be a real design system component.

**Structure of every doc page:**

```tsx
// "use client" only if demos need useState
// otherwise server component

import { ComponentName } from "@/components/ui/<name>";
import { ComponentPreview } from "@/components/site/ComponentPreview";
import { CodeBlock } from "@/components/site/CodeBlock";

const snippets = {
  // Each snippet must exactly match what the corresponding ComponentPreview renders
  // Engineers copy these — they must work as-is
  basic: `import { ComponentName } from "@mnee/ui";\n\n<ComponentName />`,
  install: `import { ComponentName } from "@mnee/ui"`,
};
```

**Sections to include (in order):**

1. **Breadcrumb + title + description** — one sentence explaining what the component does and when to use it
2. **Design ownership callout** — amber info box telling engineers the component is fully styled:
```tsx
{/* Design ownership callout */}
<div className="mb-8 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
  <span className="font-semibold">Design system component.</span>{" "}
  Fully styled by the UX team — no color or style changes needed. Choose a variant, provide your content, and wire your handler or route.
</div>
```
3. **Default / basic demo** — simplest usage, the most common case
4. **All variant demos** — one ComponentPreview per meaningful variant or state
5. **Composition example** — show it nested inside its natural parent (e.g., DescriptionList inside Modal, SelectableCard inside a form)
6. **Usage (npm install)** — CodeBlock with the import statement
7. **Props table** — every prop documented

**Props table pattern (exact Tailwind — copy from button/page.tsx):**
```tsx
<div className="overflow-auto rounded-lg border border-[#E5E5E5]">
  <table className="w-full text-sm border-collapse">
    <thead>
      <tr>
        <th className="text-left px-4 py-2.5 border-b border-[#E5E5E5] text-xs font-semibold text-gray-500 uppercase bg-gray-50">Prop</th>
        <th className="text-left px-4 py-2.5 border-b border-[#E5E5E5] text-xs font-semibold text-gray-500 uppercase bg-gray-50">Type</th>
        <th className="text-left px-4 py-2.5 border-b border-[#E5E5E5] text-xs font-semibold text-gray-500 uppercase bg-gray-50">Default</th>
        <th className="text-left px-4 py-2.5 border-b border-[#E5E5E5] text-xs font-semibold text-gray-500 uppercase bg-gray-50">Description</th>
      </tr>
    </thead>
    <tbody>
      {[
        ["propName", `"type" | "union"`, `"default"`, "Clear description of what this prop does"],
      ].map(([prop, type, def, desc]) => (
        <tr key={prop} className="hover:bg-gray-50">
          <td className="px-4 py-2.5 border-b border-[#E5E5E5] font-mono text-xs text-gray-800">{prop}</td>
          <td className="px-4 py-2.5 border-b border-[#E5E5E5] font-mono text-xs text-amber-700">{type}</td>
          <td className="px-4 py-2.5 border-b border-[#E5E5E5] font-mono text-xs text-gray-500">{def}</td>
          <td className="px-4 py-2.5 border-b border-[#E5E5E5] text-xs text-gray-600">{desc}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
```

**Interactive demos** (need useState): add `"use client"` and wrap each demo in a named sub-component (`function BasicDemo()`). Reference: `modal/page.tsx`.
**Static demos**: no `"use client"`. Reference: `button/page.tsx`.

---

## Phase 6: Add Sidebar entry in `components/site/Sidebar.tsx`

Find the Components section in the `navigation` array → add in alphabetical order:
```ts
{ label: "ComponentName", href: "/docs/components/<name>" },
```

---

## Phase 7: Validate

```bash
cd /Users/fostan/mnee-ui && npm run build
```

Common errors:
- New variant in union type but missing from Record → TS error
- `size` prop collision on input components → use `Omit`
- Missing `"use client"` when hooks or event handler props are used
- Local helper component in doc page that should be a real component → promote it
- Discriminated union component using `export *` → internal sub-components leak into public API; use named exports instead
- Event handler props (`onClick`, `onEdit`, etc.) on a Server Component → add `"use client"` to the component file
