# Migration Guide

This document captures consumer migration notes between versions.

## `0.1.x`

### General
- Prefer tokenized style props and exposed variants over inline styles.
- React 19 ref convention is used (`ref` as prop in function components).

### API changes to watch
- `Toast` uses `heading` prop (not `title`) to avoid conflicts with native HTML attributes.
- `Sidebar` uses `heading` prop (not `title`) to avoid conflicts with native HTML attributes.
- `Menu` and `DropdownMenu` use `onItemSelect` (not `onSelect`) to avoid clashes with DOM event props.

### Upgrade checklist
1. Run `pnpm typecheck` after upgrading.
2. Review Storybook docs under `Documentation/Migration Guide`.
3. Update wrappers/adapters for renamed props if you used pre-`0.2.0` APIs.
