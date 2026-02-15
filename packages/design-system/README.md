# @vibed/design-system

Pragmatic React design-system library focused on composable small components.

## Principles

- Use small primitives first (`atoms`), then compose (`molecules`, `organisms`).
- Prefer context/store for shared state instead of prop drilling.
- Keep component APIs explicit with TypeScript interfaces.
- Avoid prop destructuring in component implementations.
- Use CSS-in-JS variant recipes through `build-variants` + Emotion compose function.

## Package structure

- `src/atoms`: `Box`, `Text`, `Button`
- `src/molecules`: `Field`, `Card`
- `src/organisms`: `AppShell`, `NotificationCenter`
- `src/context`: design-system density/theme context
- `src/stores`: `zustand` stores (`uiStore`, `notificationsStore`)
- `src/theme`: tokens + `createTheme`

## Theme tooling

Build CSS variables from a theme JSON file:

```bash
node tools/build-theme.mjs ./theme.json ./theme.css
```

Input JSON shape should match exported `ThemeTokens`.

## Development

```bash
pnpm --filter @vibed/design-system dev
pnpm --filter @vibed/design-system build
pnpm --filter @vibed/design-system typecheck
```
