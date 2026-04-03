# AGENTS

Repository guidance for Copilot agent sessions in `vibed-design-system`.

## Skill Routing

Load these skills when their scope matches the task.

Routing order:

1. Load `vibed-design-system` first for shared repository context.
2. Load exactly one specialist skill for the primary task type.
3. Load both specialists only when a change set spans both source implementation and Storybook documentation.

1. `vibed-design-system`
- Use for architecture-level or cross-cutting work in this monorepo.
- Triggers: `@vibed/design-system`, `DesignSystemProvider`, tokens/themes, stores/context, quality gates.

2. `component-implementation`
- Use for implementing or modifying components in `packages/design-system/src/**`.
- Triggers: atoms/molecules/organisms, `buildVariants`, `controlSize`, `data-attr-name`, exports in `src/index.ts`.

3. `storybook-doc-authoring`
- Use for Storybook stories and MDX docs in `apps/storybook/src/stories/**`.
- Triggers: `*.stories.tsx`, `Documentation/*`, `autodocs`, controls, Storybook docs organization.

## Working Rules

1. Prefer DS primitives and semantic tokens over inline style hacks.
2. Keep explicit props interfaces and avoid prop destructuring in component signatures.
3. Keep Storybook docs/stories aligned with current API behavior.
4. Add or update exports in `packages/design-system/src/index.ts` when public API changes.
5. Run required validation before finalizing.

## Validation Baseline

Run from repo root:

```bash
pnpm typecheck
pnpm --filter @vibed/design-system build
pnpm --filter @vibed/storybook build
```

If behavior/interactions changed:

```bash
pnpm test:e2e
```
