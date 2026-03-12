---
name: update-component
description: Use when an existing design system component needs to change. Triggers on "add a variant", "update the button", "the modal now has X", "change the style of", "add loading state", or when a Figma link or description shows a new state for a component already in components/ui/. Updates both the component and its documentation so engineers know about the change.
---

# MNEE UI — Update Component

An existing component in `@mnee/ui` needs to change — a new variant, a new state, a style change, or a new prop. This skill updates the component file and its documentation so everything stays in sync.

**Design ownership philosophy:** MNEE UI is a designer-owned system. Every update must reinforce — never relax — the principle that engineers provide data and wire handlers. They do not choose colors, layout, or structure. If a requested change would expose layout or style decisions to engineers, push back and find a data-only prop instead.

---

## Phase 1: Clarify the change

From the user's request, determine:
- **Which component?** (Button, Badge, Modal, etc.)
- **What is changing?**
  - New variant or size (e.g., adding `loading` to Button)
  - New prop (e.g., adding `icon` to Badge)
  - Style change (e.g., updating border radius)
  - Behavioral change (e.g., new keyboard shortcut)
  - New interactive state (e.g., disabled, loading, error)

If a Figma URL is provided: **First invoke the `figma-import` skill** (extraction + design system audit phases). The notes from that skill replace the need to manually call `get_design_context` and `get_screenshot` here — they will have already been done, and the extraction notes and component mapping table are ready for use in Phase 4 below.

If ambiguous, ask before proceeding.

---

## Phase 2: Read everything before touching anything

Read both files in parallel:
- `components/ui/<name>.tsx`
- `app/docs/components/<name>/page.tsx`

Check for callers that might break:
```bash
grep -r "<ComponentName" /Users/fostan/mnee-ui/app --include="*.tsx" -l
```

Audit the doc page: do the existing code snippets match what the live demos render? If there are local helper functions defined in the doc page, flag them — they should be promoted to real components.

**Also assess the component's current API shape:**
- Is it a compound component (multiple exported sub-components that consumers assemble)?
- Does the current props interface expose layout or style decisions to engineers?
- If yes to either → see "API upgrade" section below before adding new props.

---

## Phase 3: API design — enforce the right prop shape

Before writing any code, evaluate the new prop through this lens:

### The rule: data in, nothing else

Engineers pass **data and handlers**. The component decides everything else.

| Engineer provides | Design system decides |
|-------------------|-----------------------|
| `amount="$1,204"` | How amount is styled (size, weight, color) |
| `status="success"` | Which badge color maps to success |
| `loading={isLoading}` | What the skeleton looks like |
| `onEdit={() => router.push(...)}` | Whether that renders a ghost or primary button |
| `title="Stripe Payments"` | Typography, spacing, layout |

### Red flags — push back on these

If a requested change would add any of these, **do not add them**. Propose a data-only alternative instead:

- `className` on internal sections (e.g. `headerClassName`, `bodyClassName`)
- `color`, `backgroundColor`, `textColor` as free-form strings
- `customIcon` as a raw JSX slot with no constraints
- `style` prop pass-throughs to internal elements
- Any prop whose value is a Tailwind class string

### When to upgrade the API shape

If the component is a **compound component** (exports sub-components like `CardHeader`, `CardTitle`) and the change being requested adds new layout or complexity, evaluate whether the component should be migrated to a **discriminated union** before adding the new prop:

- Same layout, props differ only in optional fields → add prop to existing interface, no migration needed
- Different layout per use case, or different required props per use case → migrate to discriminated union first, then add the new variant

See the `add-component` skill for the full discriminated union template.

### Discriminated union: adding a new variant

If the component already uses discriminated unions, a new variant means a new type branch — not a new optional prop bolted onto an existing type:

```tsx
// WRONG — bolting onto existing type
type CardProps = {
  variant: "balance" | "module" | "summary"; // ← summary shares balance's type
  amount?: string;        // optional because summary doesn't need it
  summaryItems?: Item[];  // optional because balance doesn't need it
}

// RIGHT — new branch with its own required props
type SummaryCardProps = {
  variant: "summary";
  items: Item[];          // required, clearly typed
  className?: string;
}
export type CardProps = BalanceCardProps | ModuleCardProps | SummaryCardProps;
```

---

## Phase 4: Update `components/ui/<name>.tsx`

**Adding a variant or size (simple component):**
- Add to the exported union type
- Add entry to the `Record<VariantType, string>` object
- Use design tokens, not hex values

**Adding a new variant (discriminated union):**
- Define a new named type with its own required/optional props
- Add it to the exported `ComponentProps` union
- Add a new internal render function for that variant's layout
- Add a new branch in the public component function

**Adding a prop:**
- Add to the interface (or the correct variant type in a discriminated union)
- Make it optional with a sensible default
- Input + string `size`: use `Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">`
- Add `"use client"` if hooks or event handlers are introduced for the first time

**Style change:**
- Use `cn()` for class merging
- Replace any hardcoded colors with design tokens

**Animated show/hide:**
- CSS opacity + pointer-events-none — not conditional rendering — so exit animations play

**Behavioral changes:**
- Keyboard handlers: useEffect with cleanup
- Body scroll lock: `document.body.style.overflow` in useEffect with cleanup

---

## Phase 5: Update `app/docs/components/<name>/page.tsx`

Update when:
- New prop added → add row to props table
- Prop removed or renamed → update or remove its row
- New variant/state → add a new ComponentPreview section with a matching snippet

**Design ownership callout:** If the doc page does not already have the amber callout below the title, add it now (immediately before the first ComponentPreview):
```tsx
{/* Design ownership callout */}
<div className="mb-8 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
  <span className="font-semibold">Design system component.</span>{" "}
  Fully styled by the UX team — no color or style changes needed. Choose a variant, provide your content, and wire your handler or route.
</div>
```

**Critical:** The code snippet shown to engineers must exactly match what the live demo renders. If you update a demo, update its snippet. They must always be identical.

**New variant section pattern:**
```tsx
<h2 className="text-lg font-semibold text-gray-900 mb-3">Loading state</h2>
<ComponentPreview code={snippets.loading} className="mb-8">
  <Button loading>Processing</Button>
</ComponentPreview>
```

And in `snippets`:
```ts
loading: `<Button loading>Processing</Button>`,
```

If demos become interactive, add `"use client"` and wrap each in a named sub-component.

**If the API shape was upgraded (compound → discriminated union):**
- Remove all sub-component import references from the doc page
- Rewrite examples using the new flat props API
- Update the props table — split into one table per variant if needed
- Remove any `className` usage from examples that was compensating for missing layout props

---

## Phase 6: Validate

```bash
cd /Users/fostan/mnee-ui && npm run build
```

Common errors after updates:
- New variant in union but missing from Record → TS error on missing key
- `size` collision on input components
- Missing `"use client"` when hooks or event handler props newly introduced
- Snippet shows old API after prop rename
- Discriminated union component using `export *` after migration → internal sub-components leak; switch to named exports
- Sub-component still imported in doc page after compound → discriminated union migration
