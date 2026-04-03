---
name: vibed-design-system
description: "Use when implementing or reviewing changes in this vibed-design-system monorepo: components, stories, docs, themes, stores, and quality gates. Trigger phrases: @vibed/design-system, DesignSystemProvider, Storybook atoms/molecules/organisms, data-attr-name, pnpm test:verify."
---

# Vibed Design System (Repo Skill)

## Purpose

Umbrella skill for repository context, architecture, and shared quality gates.

Use this skill for cross-cutting tasks and initial orientation.

For focused tasks, load specialized skills:

- `component-implementation` for component code changes.
- `storybook-doc-authoring` for stories and MDX docs.

## Architecture

- Library package: `packages/design-system`
- Public docs/examples: `apps/storybook`
- E2E coverage: `e2e`
- Monorepo config: `pnpm-workspace.yaml`

## Rules

1. Always wrap examples with `DesignSystemProvider`.
2. Prefer DS primitives and tokenized props over inline style workarounds.
3. Treat Storybook as the public contract for behavior and usage.
4. Keep architecture explicit: atoms -> molecules -> organisms, with pragmatic composition.

## Overlay and Accessibility

- Prefer built-in overlay behavior before custom logic.
- Use existing utilities for focus/outside-click patterns.
- Respect reduced-motion behavior for interactive components.

## Validation Commands

Run from repo root:

```bash
pnpm typecheck
pnpm --filter @vibed/design-system build
pnpm --filter @vibed/storybook build
```

Run `pnpm test:e2e` when behavior/interactions changed.

Full gate:

```bash
pnpm ci:validate
```

## Implementation Flow

1. Load this umbrella skill for context.
2. Load one specialist skill based on task type.
3. Apply specialist checklist.
4. Execute validation commands and report outcomes.
