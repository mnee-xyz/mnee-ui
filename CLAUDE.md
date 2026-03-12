# MNEE UI — Design System

## Purpose
This is the MNEE design system owned by the UX Design team (Federico, Head of UX).
Components are pre-built here and consumed by the product via `npm install @mnee/ui`.
The source of truth for which components to port is: `/Users/fostan/merchant-portal-frontend`
(repo: MERCHANT-PORTAL-FRONTEND). Workflow: identify components in the product repo → port them here → document.

## Dual-purpose repo
- `components/ui/` — the published npm package (`@mnee/ui`)
- `app/docs/` — the Next.js documentation website (component playground + MDX docs)

## Commands
- `npm run dev` — start local doc site (Next.js 15, port 3000)
- `npm run build` — build doc site + validate TS

## Adding a new component — checklist
1. Create `components/ui/<name>.tsx` (see existing components for pattern)
2. Export from `components/ui/index.ts`
3. Create `app/docs/components/<name>/page.tsx` with ComponentPreview + props table
4. Add sidebar entry in `components/site/Sidebar.tsx`

## Component authoring conventions
- Use `cn()` from `@/lib/utils` (clsx + tailwind-merge) for class merging
- Variant styles as `Record<VariantType, string>` objects — not switch statements
- Extend native HTML element props: `interface FooProps extends React.HTMLAttributes<HTMLDivElement>`
- No external component libraries — vanilla Tailwind + lucide-react only
- Design tokens live in `app/globals.css` (@theme block, Tailwind v4 syntax)

## Design tokens (globals.css)
Brand: `brand` (#D97706 amber), `brand-dark` (#B45309)
Semantic: `success`, `warning`, `error`, `info` — each has `-bg` and `-fg` variants
Surface: `surface-border` (#E5E5E5), `muted`, `muted-bg`

## Component inventory
### Already in design system
- Button (`variants: primary|secondary|destructive|ghost|outline`, `sizes: sm|md|lg`, `loading`)
- Badge (`variants: success|warning|error|info|default`)
- Card + CardHeader + CardTitle + CardDescription + CardContent + CardFooter

### To port from merchant-portal-frontend
**UI primitives** (highest priority):
- Toast + ToastContext — `src/components/ui/Toast.tsx`, `src/components/ui/ToastContext.tsx`
- AmountInput — `src/components/ui/AmountInput.tsx`

**Wallet / data display:**
- BalanceCard — `src/components/wallet/BalanceCard.tsx`
- APYBanner — `src/components/wallet/APYBanner.tsx`
- ActionButtons — `src/components/wallet/ActionButtons.tsx`

**Transactions table:**
- TransactionTable — `src/components/transactions/TransactionTable.tsx`
- TransactionRow — `src/components/transactions/TransactionRow.tsx`
- TransactionDetails — `src/components/transactions/TransactionDetails.tsx`

**Icons** (consider an Icon component wrapper):
- `src/components/icons/` — ArrowsExchange, Businessplan, Coins, CreditCard, DragDrop, Logout2, SortAscending, SortDescending, Tool, Undo2, Wallet, World, Zap

**Skip** (app-specific, not reusable): auth/*, merchant/*, Payment/*, layout/Header, layout/Sidebar

## Doc page pattern
Each doc page: imports the component + `ComponentPreview` + `CodeBlock`.
`ComponentPreview` takes `code` (string) + `children` (live render) — client component.
`CodeBlock` is a server component with shiki syntax highlighting.
Props table is a plain HTML `<table>` with inline Tailwind (see button/page.tsx as reference).
