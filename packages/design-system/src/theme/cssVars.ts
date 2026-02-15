import type { CSSProperties } from "react";
import type { ThemeTokens } from "./tokens";

export function toThemeCssVars(theme: ThemeTokens): CSSProperties {
  const style: CSSProperties = {
    ["--ds-color-background" as string]: theme.colors.background,
    ["--ds-color-surface" as string]: theme.colors.surface,
    ["--ds-color-surface-muted" as string]: theme.colors.surfaceMuted,
    ["--ds-color-border" as string]: theme.colors.border,
    ["--ds-color-text" as string]: theme.colors.text,
    ["--ds-color-text-muted" as string]: theme.colors.textMuted,
    ["--ds-color-primary" as string]: theme.colors.primary,
    ["--ds-color-primary-contrast" as string]: theme.colors.primaryContrast,
    ["--ds-color-danger" as string]: theme.colors.danger,
    ["--ds-color-danger-contrast" as string]: theme.colors.dangerContrast,
    ["--ds-color-success" as string]: theme.colors.success,
    ["--ds-space-xxs" as string]: theme.spacing.xxs,
    ["--ds-space-xs" as string]: theme.spacing.xs,
    ["--ds-space-sm" as string]: theme.spacing.sm,
    ["--ds-space-md" as string]: theme.spacing.md,
    ["--ds-space-lg" as string]: theme.spacing.lg,
    ["--ds-space-xl" as string]: theme.spacing.xl,
    ["--ds-radius-sm" as string]: theme.radii.sm,
    ["--ds-radius-md" as string]: theme.radii.md,
    ["--ds-radius-lg" as string]: theme.radii.lg,
    ["--ds-radius-full" as string]: theme.radii.full,
    ["--ds-font-body" as string]: theme.typography.body,
    ["--ds-font-display" as string]: theme.typography.display,
    ["--ds-font-mono" as string]: theme.typography.mono,
    ["--ds-shadow-sm" as string]: theme.shadows.sm,
    ["--ds-shadow-md" as string]: theme.shadows.md
  };

  return style;
}
