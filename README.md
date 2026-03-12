# @mnee/ui

MNEE Design System — the component library that powers the MNEE merchant portal.

## Install

```bash
npm install @mnee/ui
```

## Setup

Add the design tokens to your project's `globals.css` (Tailwind v4):

```css
@import "tailwindcss";

@theme {
  --color-brand:       #D97706;
  --color-brand-dark:  #B45309;
  --color-success:     #15803D;
  --color-success-bg:  #DCFCE7;
  --color-success-fg:  #14532D;
  --color-warning:     #D97706;
  --color-warning-bg:  #FEF3C7;
  --color-warning-fg:  #92400E;
  --color-error:       #B91C1C;
  --color-error-bg:    #FEE2E2;
  --color-error-fg:    #991B1B;
  --color-info:        #1D4ED8;
  --color-info-bg:     #DBEAFE;
  --color-info-fg:     #1E3A8A;
}
```

## Usage

```tsx
import { Button, Badge, Card, CardHeader, CardTitle, CardContent } from "@mnee/ui"

export function PaymentCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Last payment</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center gap-3">
        <Badge variant="success">Completed</Badge>
        <Button variant="outline" size="sm">View receipt</Button>
      </CardContent>
    </Card>
  )
}
```

## Components

| Component | Description |
|-----------|-------------|
| `Button` | primary / secondary / destructive / ghost / outline — sm/md/lg sizes, loading state |
| `Badge` | success / warning / error / info / default status chips |
| `Card` | Container with CardHeader, CardTitle, CardDescription, CardContent, CardFooter |

## Publishing a new version

Tag the commit and push — the GitHub Action in `.github/workflows/publish.yml` handles the rest:

```bash
git tag v0.0.2
git push origin v0.0.2
```

Requires `NPM_TOKEN` set as a repository secret in `github.com/mnee-xyz/ui`.

## Docs site

Run locally:

```bash
npm run dev
# → http://localhost:3000
```

## Project structure

```
components/ui/        ← the library (@mnee/ui exports)
components/site/      ← docs site only (not exported)
app/docs/             ← documentation pages
app/                  ← Next.js App Router
figma/                ← Figma Code Connect (V2)
```
