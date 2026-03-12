---
name: figma-import
description: MNEE-specific deep-extraction skill for Figma-to-code. Invoke whenever a Figma URL is provided for the purpose of building or updating UI in the MNEE design system. Enforces mandatory extraction, design system mapping, and fidelity checks before any code is written.
---

# MNEE — Figma Import

A Figma URL has been provided. No code is written until all three phases below are complete.

---

## Phase 0 — Mandatory Figma data extraction

Run all three calls **in parallel** before doing anything else:

```
get_design_context(fileKey, nodeId)   → layout, typography, spacing, colors, component names
get_screenshot(fileKey, nodeId)        → visual source of truth — keep visible throughout
get_variable_defs(fileKey)             → Figma variable definitions for token mapping
```

If `get_design_context` response is too large → call `get_metadata` first, then fetch each child node individually.

### Extraction checklist — document every item before proceeding

- [ ] Every text node copied **verbatim** (character-for-character from `get_design_context` — never from memory)
- [ ] All font specs noted per text node: family, size (px), weight (number), line-height, letter-spacing
- [ ] All spacing values noted: auto-layout gap, padding (top / right / bottom / left) per node
- [ ] All colors noted: mapped to MNEE token if a match exists, else raw hex recorded
- [ ] All Figma variable names listed and mapped to MNEE `@theme` tokens in `app/globals.css`
- [ ] All component/instance names identified (e.g. `"Button/Primary/Large"`, `"Badge/Success"`)

Do not move to Phase 1 until every item above is checked.

---

## Phase 1 — MNEE design system audit

For each Figma component/instance identified in Phase 0:

```bash
ls /Users/fostan/mnee-ui/components/ui/
grep -r "ComponentName" /Users/fostan/mnee-ui/components/ui/index.ts
```

Build this mapping table before writing any code:

| Figma component | MNEE component | Action |
|----------------|----------------|--------|
| Button/Primary/Large | `<Button variant="primary" size="lg">` | **Reuse** |
| Badge/Success | `<Badge variant="success">` | **Reuse** |
| Custom card layout | — | **Build new** → use `add-component` skill |
| Existing component with new state | — | **Update** → use `update-component` skill |

Common MNEE components to check first:
- `Button` (`variant: primary|secondary|destructive|ghost|outline`, `size: sm|md|lg`, `loading`)
- `Badge` (`variant: success|warning|error|info|default`)
- `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`
- `Input`, `AmountInput`
- `Toast`, `ToastProvider`
- `Modal`, `Drawer`
- `Alert`
- `Table`, `TableHead`, `TableBody`, `TableRow`, `TableHeader`, `TableCell`
- `Banner`

---

## Phase 2 — Implementation rules

Use these rules when writing code. They are not optional.

**Text:** Copy verbatim from Phase 0 extraction notes — never retype from memory or paraphrase.

**Components:** Use MNEE design system components wherever the mapping table says "Reuse." Do not rebuild them from scratch.

**Spacing:** When a component's default padding/margin differs from the Figma inspector value, always override with `className`. Never assume a component default matches Figma.

**Typography:** Match every font property from Phase 0 extraction notes:
- `font-size` → Tailwind `text-*` (verify px value against Figma, don't guess)
- `font-weight` → `font-normal` (400) / `font-medium` (500) / `font-semibold` (600) / `font-bold` (700)
- `line-height` → add `leading-*` if Figma specifies it; never leave at browser default
- `letter-spacing` → add `tracking-*` if Figma specifies it
- `font-family` → check which Tailwind token applies; don't assume `font-sans`

**Colors:** Use MNEE design tokens, not raw hex. If no token matches, record it and ask.

**New components not in MNEE:** Invoke the `add-component` skill.

**Updating existing MNEE components:** Invoke the `update-component` skill.

---

## Phase 3 — Pre-completion fidelity check

Invoke the `ui-fidelity` skill explicitly. Do not mark work complete until every item passes:

- [ ] Text verbatim (all nodes — verified against Phase 0 notes)
- [ ] List item counts match (Figma count === code count)
- [ ] All heading words present including trailing words
- [ ] Capitalization exact (no auto title-case)
- [ ] Spacing matches Figma inspector values
- [ ] Typography matches: size, weight, line-height, letter-spacing
- [ ] Component defaults overridden where Figma specifies different values
- [ ] Buttons in flex rows have `whitespace-nowrap`
- [ ] Screenshot from Phase 0 still open — do a final visual comparison before declaring done
