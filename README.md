# vibed-design-system

Monorepo with a React design-system library and Storybook showcase.

## Workspace layout

- `packages/design-system`: reusable component library
- `apps/storybook`: Storybook docs/sandbox consuming the library

## Stack

- React 19
- TypeScript
- `build-variants` with Emotion compose function for CSS-in-JS recipes
- `zustand` for lightweight state
- Storybook (React + Vite)
- `pnpm` workspace

## Quick start

```bash
pnpm install
pnpm dev:storybook
```

## Build all

```bash
pnpm build
```

## Conventions applied

- Explicit props interfaces
- No prop destructuring inside components
- Context for design-system level concerns
- Small store slices in `zustand`
- Pragmatic atomic hierarchy without ceremony
