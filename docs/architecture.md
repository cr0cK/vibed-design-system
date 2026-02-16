# Architecture

## Workspace

- `packages/design-system`: reusable UI library
- `apps/storybook`: showcase and component documentation

## Layering

- Atoms: small reusable primitives with focused APIs
- Molecules: lightweight composition of atoms
- Organisms: feature-level composition with state/context integration

## Source layout

- `src/atoms`
- `src/molecules`
- `src/organisms`
- `src/context`
- `src/stores`
- `src/theme`
- `src/utils`

## Key decisions

- React + TypeScript only
- CSS-in-JS through `@emotion/styled`
- Variants declared via `buildVariants(props).css().variant().end()`
- Shared concerns via Context when appropriate
- Local UI state with small Zustand stores

## Phase 1 components

- Foundations/layout: `Grid`, `Container`, `Spacer`, `Divider`, `Heading`, `Link`
- Controls: `ButtonGroup`, `Checkbox`, `Radio`, `Switch`
- Inputs/forms: `Textarea`, `Select`, `FormControl`, `HelperText`
- Feedback: `Badge`, `Alert`, `Spinner`, `Skeleton`
- Navigation: `Tabs`, `Breadcrumb`, `Pagination`
- Overlays: `Modal`, `Drawer`, `Tooltip`, `Popover`
