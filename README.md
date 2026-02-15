# vibed-design-system

Monorepo with a React design-system library and Storybook showcase.

## Workspace layout

- `packages/design-system`: reusable component library
- `apps/storybook`: Storybook docs/sandbox consuming the library
- `.github/workflows/ci.yml`: CI for install, typecheck, and build

## Stack

- React 19
- TypeScript
- `@productive-codebases/build-variants` (`newBuildVariants`) for CSS-in-JS declarations
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

## Validate all

```bash
pnpm check
```

## Conventions applied

- Explicit props interfaces
- No prop destructuring inside components
- Context for design-system level concerns
- Small store slices in `zustand`
- Pragmatic atomic hierarchy without ceremony
