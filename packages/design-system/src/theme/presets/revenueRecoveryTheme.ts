import type { ThemeTokens } from "../tokens";

export const revenueRecoveryTheme: ThemeTokens = {
  colors: {
    background: "#f3f4f6",
    surface: "#ffffff",
    surfaceMuted: "#f8f8f9",
    border: "#d9dce1",
    text: "#2f3136",
    textMuted: "#6e737c",
    primary: "#f26a21",
    primaryContrast: "#ffffff",
    danger: "#d64545",
    dangerContrast: "#ffffff",
    success: "#1f9d68"
  },
  spacing: {
    xxs: "0.25rem",
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem"
  },
  radii: {
    sm: "0.35rem",
    md: "0.5rem",
    lg: "0.75rem",
    full: "999px"
  },
  typography: {
    body: "'Inter', 'Segoe UI', sans-serif",
    display: "'Inter', 'Segoe UI', sans-serif",
    mono: "'IBM Plex Mono', ui-monospace, monospace"
  },
  shadows: {
    sm: "0 1px 3px rgba(17, 24, 39, 0.08)",
    md: "0 8px 24px rgba(17, 24, 39, 0.12)"
  }
};
