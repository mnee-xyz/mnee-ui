---
name: explore-source
description: Use when searching for a component in the main product (merchant-portal-frontend or live app). Triggers on "find this component", "where is this in the code", "look up", "explore", "research" when given an image, description, or URL of something in the product. Output is always a research report — no files are created.
---

# MNEE UI — Explore Source

Find a component in the existing product codebase. Input can be a screenshot, a description, or a URL to the live app. Output is a research report — this skill never creates or modifies files.

---

## Phase 1: Locate the component

**If a URL to the live app is provided:**
Use the Playwright MCP browser tools to navigate to the URL.
Take a screenshot. Identify the component visually.
Then proceed to search the codebase.

**If a screenshot or image is provided:**
Look at the visual. Identify: what is this? A table? A card? A modal? A form input?
Note distinctive features: colors, layout, text patterns, icons.

**If only a description is provided:**
Use the description to form search terms.

**Search the product codebase:**
Source root: `/Users/fostan/merchant-portal-frontend/src/components/`
```
ui/            — form inputs, generic UI primitives
wallet/        — balance, APY, action buttons
transactions/  — table, rows, detail views
icons/         — SVG icon components
```

Use Grep to search for component names, class names, or text strings visible in the UI.
Use Glob to scan directories when unsure where a component might live.
Read all related files in parallel if a component imports others (e.g., TransactionTable → TransactionRow + TransactionDetails).

---

## Phase 2: Analyze the component

**A. Props** — list every prop: name, type, required/optional, what it does.

**B. Dependencies:**

| Import | Status |
|--------|--------|
| react, useState, useEffect | Fine |
| lucide-react | Fine |
| @/components/ui/* | Check if already in design system |
| @/redux/*, useAppDispatch, useAppSelector | App-specific — not portable as-is |
| dispatch(someThunk()) | App-specific — would need callback prop replacement |
| @/hooks/* | Evaluate — some may be replaceable |
| @/types/* | Evaluate — may need local interface replacement |

**C. Visual states** — list every state visible in the UI: default, hover, active, loading, empty, error.

**D. Design token opportunities** — flag hardcoded colors that map to tokens:
| Hardcoded | Token |
|-----------|-------|
| #D97706, bg-[#D97706] | bg-brand |
| #B45309 | bg-brand-dark |
| #15803D | bg-success |
| bg-red-600, #B91C1C | bg-error |
| bg-red-100 | bg-error-bg |
| #E5E5E5 | border-surface-border |
| #F9FAFB | bg-muted-bg |
| #6B7280 | text-muted |

---

## Phase 3: Research report

Always use this structure:

---

### Research Report: `<ComponentName>`

**Found at:** `src/components/<path>/<File>.tsx`
**Related files read:** (list all co-read files)
**Visual source:** (URL, screenshot description, or "described by user")

#### What it does
One paragraph: purpose, when it's used in the product, what data it displays.

#### Current Props
```ts
interface ComponentNameProps {
  // as found in source
}
```

#### Visual States
- Default: ...
- Hover: ...
- Loading / empty / error (if applicable): ...

#### Dependencies
| Import | Portable? | Notes |
|--------|-----------|-------|
| useAppDispatch | No | Would need callback prop |
| @/redux/walletSlice | No | Would need data passed as prop |
| lucide-react | Yes | Keep |

#### Already in design system?
Yes → `components/ui/<name>.tsx` — link it.
No → state portability rating.

#### Portability Rating
**High** — mostly pure UI, trivial to strip dependencies
**Medium** — has app dependencies but replaceable with props
**Low** — deeply coupled to Redux/app state, not viable to port

#### Recommended Next Step
- "Ready to add — run `add-component` skill"
- "Needs cleanup first — strip X and Y before adding"
- "Already in design system at components/ui/<name>.tsx"
- "Not portable — skip"

---
