# Vibed Design System for LLMs

This document is the fast path for AI agents and external tools that need to use `@vibed/design-system` correctly.

## Package

- npm package: `@vibed/design-system`
- repository: `https://github.com/cr0cK/vibed-design-system`

## Install

```bash
pnpm add @vibed/design-system
# or npm i @vibed/design-system
```

## Minimal Setup

Always wrap your app (or story) with `DesignSystemProvider`.

```tsx
import { DesignSystemProvider, Stack, Button } from "@vibed/design-system";

export function App() {
  return (
    <DesignSystemProvider mode="light" density="comfortable">
      <Stack gap="sm">
        <Button tone="primary">Launch</Button>
      </Stack>
    </DesignSystemProvider>
  );
}
```

## Themes

Use built-in modes or pass a custom theme.

```tsx
import { DesignSystemProvider, orangeMotionTheme, neoMintTheme } from "@vibed/design-system";

<DesignSystemProvider mode="dark">{/* ... */}</DesignSystemProvider>;
<DesignSystemProvider mode="light" theme={orangeMotionTheme}>{/* ... */}</DesignSystemProvider>;
<DesignSystemProvider mode="light" theme={neoMintTheme}>{/* ... */}</DesignSystemProvider>;
```

## Core Conventions

- Prefer DS layout primitives (`Box`, `Stack`, `Inline`, `Grid`) over inline CSS.
- Use semantic props/tokens (`surface`, `tone`, `radius`, spacing variants) instead of hard-coded values.
- Keep controls consistent with `controlSize` (`sm`, `md`, `lg`) where supported.
- Use DS molecules/organisms for complex UX before composing from scratch.

## Components (high-level)

- Atoms: `Button`, `Input`, `Select`, `Checkbox`, `Radio`, `NumberInput`, `IconButton`, `Text`, `Heading`, `Box`, `Stack`, `Inline`, `Grid`, etc.
- Molecules: `Field`, `FormControl`, `Table`, `Tabs`, `Menu`, `SearchBar`, `MultiSelect`, `Combobox`, etc.
- Organisms: `Modal`, `Drawer`, `Sheet`, `Popover`, `Tooltip`, `DropdownMenu`, `CommandPalette`, `AppShell`, etc.

## Overlay Guidance

- Overlays already include keyboard and outside-click patterns.
- Prefer default behavior first.
- Use `overlayMode` (`viewport`/`container`) only when needed by layout context.

## Good vs Bad

Good:

- compose UI with DS primitives and tokens
- use provider + theme
- keep spacing/alignment via DS props

Avoid:

- mixing raw HTML + large inline styles when DS primitives can do it
- bypassing tokens with arbitrary one-off styling
- re-implementing overlay behavior manually

## Storybook as Source of Truth

For examples and API behavior, use Storybook docs/stories in this repo:

- `apps/storybook/src/stories/documentation`
- `apps/storybook/src/stories/atoms`
- `apps/storybook/src/stories/molecules`
- `apps/storybook/src/stories/organisms`
