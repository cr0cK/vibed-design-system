---
name: storybook-doc-authoring
description: "Use when creating or updating Storybook docs/stories in vibed-design-system. Trigger phrases: Storybook MDX docs, stories.tsx, Documentation/*, atoms/molecules/organisms stories, autodocs, story controls, @vibed/storybook."
---

# Storybook Doc Authoring (Vibed)

## Purpose

Focused guidance for authoring high-quality Storybook docs and stories in this repository.

Assumes `vibed-design-system` umbrella skill is already loaded for repository context.

## Paths and Structure

- Story docs (MDX): `apps/storybook/src/stories/documentation/*.mdx`
- Component stories: `apps/storybook/src/stories/{atoms,molecules,organisms,utilities,themes}/*.stories.tsx`
- Story index map: `apps/storybook/src/stories/INDEX.md`
- Storybook config: `apps/storybook/.storybook/main.ts`, `apps/storybook/.storybook/preview.tsx`

## Authoring Rules

1. Keep docs and stories aligned with existing taxonomy: `Atoms`, `Molecules`, `Organisms`, `Utilities`, `Themes`, `Documentation`.
2. Use DS components (`Box`, `Stack`, `Grid`, `Text`, `Heading`, `Link`, `Spacer`) in docs instead of ad hoc HTML/CSS.
3. For MDX docs pages, use `<Meta title="Documentation/..." parameters={{ options: { showPanel: false } }} />`.
4. For component stories, prefer `tags: ["autodocs"]` and simple `meta` exports consistent with existing files.
5. Keep story examples pragmatic and product-like; avoid noisy or unrealistic demo data.
6. Prefer tokenized DS props over inline style overrides.
7. Ensure examples are provider-safe (wrapped by global Storybook provider config).

For component source implementation rules (props contracts, `data-attr-name`, export surface), use `component-implementation`.

## Story Patterns

Use two baseline story types when relevant:

- `Showcase`: opinionated, realistic usage.
- `Playground`: args + argTypes for interactive API exploration.

Typical pattern:

```ts
const meta = { title: "Molecules/Card", component: Card, tags: ["autodocs"] };
export default meta;
```

## Documentation Patterns

- Keep docs concise and scannable with small sections.
- Cross-link to adjacent docs using stable Storybook `?path=` links when needed.
- Reflect architecture and implementation constraints from repository docs, not personal preference.

## Validation Checklist

Before finalizing doc/story changes:

1. `pnpm --filter @vibed/storybook typecheck`
2. `pnpm --filter @vibed/storybook build`
3. If library APIs changed, also run:
   - `pnpm --filter @vibed/design-system build`
   - `pnpm typecheck`

## Common Pitfalls

- Adding a new story/docs file but forgetting consistent `title` taxonomy.
- Using raw inline styles instead of DS primitives/tokens.
- Forgetting to update affected docs when component APIs change.
- Overly verbose docs that duplicate code without clarifying intent.
