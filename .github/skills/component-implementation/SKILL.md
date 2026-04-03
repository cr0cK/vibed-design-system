---
name: component-implementation
description: "Use when adding or updating components in vibed-design-system. Trigger phrases: implement component, atoms/molecules/organisms, buildVariants, controlSize, data-attr-name, exports in src/index.ts, Emotion styled, TypeScript props."
---

# Component Implementation (Vibed)

## Purpose

Implementation-only guidance for component code changes in `@vibed/design-system`.

Assumes `vibed-design-system` umbrella skill is already loaded for repository context.

## Applies To

- `packages/design-system/src/atoms/**`
- `packages/design-system/src/molecules/**`
- `packages/design-system/src/organisms/**`
- Related exports and stories.

## Authoring Contract

1. Define an explicit `*Props` interface for each component.
2. Do not destructure props in the component function signature.
3. Keep styled declarations outside render functions.
4. Use Emotion `styled` + `buildVariants` from `src/utils/buildVariants.ts`.
5. Prefer semantic variants/tokens over one-off hard-coded styling.
6. Use `controlSize?: "sm" | "md" | "lg"` for control-like components.
7. If legacy `size` exists, treat it as alias:
   - `const controlSize = props.controlSize ?? props.size ?? "md";`
8. Apply `data-attr-name="<ComponentName>"` on the top-level rendered DOM root.
9. Do not expose `data-attr-name` in the public props interface.

## DOM Props Rule

- If component extends `HTMLAttributes<...>`, forward supported DOM props to root.
- If only a narrow set is intended (for example only `className`), prefer a narrow interface instead of broad HTML attributes.
- Do not type broad DOM props and then drop them at runtime.

## Layering Rule

- Atoms: generic, reusable primitives.
- Molecules: compose atoms with minimal behavior.
- Organisms: orchestration and feature-level behavior, may integrate context/store.

## Overlay Rule

For overlays, reuse utilities before custom logic:

- `Portal`
- `FocusTrap`
- `ClickOutside`

Add custom behavior only when component-specific.

## Export Rule

Any new/changed public component types and symbols must be exported from:

- `packages/design-system/src/index.ts`

## Story Coverage Rule

Add or update corresponding stories under:

- `apps/storybook/src/stories/atoms`
- `apps/storybook/src/stories/molecules`
- `apps/storybook/src/stories/organisms`

Prefer a `Showcase` example and a `Playground` args story where appropriate.

Do not define Storybook documentation taxonomy or MDX structure here; use `storybook-doc-authoring` for that.

## Validation Commands

Run from repo root after implementation:

```bash
pnpm typecheck
pnpm --filter @vibed/design-system build
```

Run `pnpm --filter @vibed/storybook build` only when component API or stories changed.

If behavior or interactions changed, also run:

```bash
pnpm test:e2e
```

## Definition Of Done

- Props API is explicit and convention-aligned.
- `data-attr-name` is present on the root DOM node.
- Variants/tokens used instead of ad hoc styling.
- Public exports updated in `src/index.ts`.
- Stories and docs updated for API changes.
- Validation commands pass, or skipped steps are explicitly explained.
