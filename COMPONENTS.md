# MNEE UI — Component Inventory

> Source of truth: `merchant-portal-frontend/src/components/`
> Design system package: `@mnee-ui/ui`

---

## Group A — Already Built

- [x] Button — `components/ui/button.tsx`
- [x] Badge — `components/ui/badge.tsx`
- [x] Card — `components/ui/card.tsx`

---

## Group B — UI Primitives

- [x] Input — `components/ui/input.tsx`
- [x] Toast + ToastProvider + useToast — `components/ui/toast.tsx` (from `src/components/ui/Toast.tsx` + `ToastContext.tsx`)

---

## Group C — Icons

- [x] Icons (14 icons + MneeIcon brand logo) — `components/ui/icons.tsx` (from `src/components/icons/`)
  - MneeIcon, ArrowsExchangeIcon, BusinessplanIcon, CoinsIcon, CreditCardIcon
  - DragDropIcon, Logout2Icon, SortAscendingIcon, SortDescendingIcon
  - ToolIcon, Undo2Icon, WalletIcon, WorldIcon, ZapIcon

---

## Group D — Composite Components

- [x] Banner — `components/ui/banner.tsx` (genericized from `src/components/wallet/APYBanner.tsx`)
- [x] Table + Pagination — `components/ui/table.tsx` (genericized from `src/components/transactions/TransactionTable.tsx`)
- [x] Drawer — `components/ui/drawer.tsx` (right-side panel from `src/components/transactions/TransactionDetails.tsx`)

---

## Group E — App-Specific (Skip — not portable)

- [ ] ~~Layout / Sidebar~~ — Redux-dependent portal navigation
- [ ] ~~ActionButtons~~ — Redux + API calls
- [ ] ~~BalanceCard~~ — Redux + API calls
- [ ] ~~TransactionRow~~ — Domain data bound
- [ ] ~~TransactionDetailsModal~~ — Domain data bound + Redux
- [ ] ~~Login / Onboarding / ProtectedRoute / PublicRoute~~ — Auth flows
- [ ] ~~ButtonBuilder / StripeModule / Modules / ModuleCard~~ — Merchant tooling
- [ ] ~~StripePaymentPage~~ — Payment processing

---

## Doc Pages

Each component has a doc page at `app/docs/components/<name>/page.tsx` and a sidebar entry in `components/site/Sidebar.tsx`.
