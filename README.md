# vibed-design-system

LLM-guided React design system, built with explicit engineering rules.

This repo is both:

- a reusable component library (`@vibed/design-system`)
- the public Storybook contract for architecture, patterns, features, and roadmap

## Presentation

The project follows a vibed-coded workflow:

- define strict implementation rules first
- implement in small iterative loops
- validate continuously with typecheck, build, Storybook, and E2E
- keep architecture and quality decisions explicit in docs

## Architecture Baseline

- React 19 + TypeScript
- CSS-in-JS with `@emotion/styled` + `@productive-codebases/build-variants`
- explicit props interfaces, no prop destructuring in component signatures
- context for cross-tree concerns, avoid unnecessary prop drilling
- pragmatic atoms/molecules/organisms layering
- lightweight state slices with Zustand
- Storybook as primary public documentation surface

## Workspace

- `packages/design-system`: publishable DS library
- `apps/storybook`: showcase + documentation site

## Install

```bash
pnpm install
```

## Quick Usage

Run Storybook with library watch:

```bash
pnpm dev:storybook
```

Build the library only:

```bash
pnpm build:design-system
```

Build Storybook static site:

```bash
pnpm build:storybook
```

Run full quality gate:

```bash
pnpm test:verify
```

## Library Example

```tsx
import { DesignSystemProvider, Button, Stack } from "@vibed/design-system";

export function Example() {
  return (
    <DesignSystemProvider mode="light" density="comfortable">
      <Stack gap="sm">
        <Button tone="primary">Launch</Button>
      </Stack>
    </DesignSystemProvider>
  );
}
```

## Storybook Docs Map

- `Documentation/1. Presentation`
- `Documentation/2. Architecture`
- `Documentation/3. Patterns`
- `Documentation/4. Features`
- `Documentation/5. Roadmap`
- `Documentation/6. Contributions`
- `Documentation/7. Public Usage`
