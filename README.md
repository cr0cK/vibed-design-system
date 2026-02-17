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

## CI-equivalent validation

```bash
pnpm ci:validate
```

## Release dry run

```bash
pnpm release:dry-run
```

## Conventions applied

- Explicit props interfaces
- No prop destructuring inside components
- Context for design-system level concerns
- Small store slices in `zustand`
- Pragmatic atomic hierarchy without ceremony

## Documentation

- Primary docs are published in Storybook under the `Documentation/*` section.
- Source files for those pages live in `apps/storybook/src/stories/documentation`.
- Story map: `apps/storybook/src/stories/INDEX.md`
- Changelog: `CHANGELOG.md`
- Migration notes: `MIGRATIONS.md`
