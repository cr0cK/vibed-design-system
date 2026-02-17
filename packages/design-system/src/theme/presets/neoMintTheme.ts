import type { ThemeTokens } from "../tokens";

export const neoMintTheme: ThemeTokens = {
  colors: {
    background: "#f4f7fb",
    surface: "#fcfdff",
    surfaceMuted: "#eef3fa",
    border: "#ccd7e6",
    text: "#162033",
    textMuted: "#5a6880",
    primary: "#0f9d94",
    primaryContrast: "#f5fffe",
    danger: "#d64063",
    dangerContrast: "#ffffff",
    success: "#16946f"
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
    sm: "0.5rem",
    md: "0.75rem",
    lg: "1rem",
    full: "999px"
  },
  typography: {
    body: "'Nunito Sans Local', 'Nunito Sans', 'Segoe UI', sans-serif",
    display: "'Nunito Sans Local', 'Nunito Sans', 'Segoe UI', sans-serif",
    mono: "'JetBrains Mono', ui-monospace, monospace"
  },
  shadows: {
    sm: "0 1px 2px rgba(8, 18, 38, 0.06), 0 4px 10px rgba(8, 18, 38, 0.06)",
    md: "0 10px 30px rgba(8, 18, 38, 0.14)"
  }
};
