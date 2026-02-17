export interface ThemeColors {
  background: string;
  surface: string;
  surfaceMuted: string;
  border: string;
  text: string;
  textMuted: string;
  primary: string;
  primaryContrast: string;
  danger: string;
  dangerContrast: string;
  success: string;
}

export interface ThemeSpacing {
  xxs: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface ThemeRadii {
  sm: string;
  md: string;
  lg: string;
  full: string;
}

export interface ThemeTypography {
  body: string;
  display: string;
  mono: string;
}

export interface ThemeShadows {
  sm: string;
  md: string;
}

export interface ThemeTokens {
  colors: ThemeColors;
  spacing: ThemeSpacing;
  radii: ThemeRadii;
  typography: ThemeTypography;
  shadows: ThemeShadows;
}

export interface ThemeModeSet {
  light: ThemeTokens;
  dark: ThemeTokens;
}

export const lightTheme: ThemeTokens = {
  colors: {
    background: "#f6f7f9",
    surface: "#ffffff",
    surfaceMuted: "#edf1f6",
    border: "#ced5e0",
    text: "#18202f",
    textMuted: "#51607a",
    primary: "#1164ff",
    primaryContrast: "#ffffff",
    danger: "#d11a5c",
    dangerContrast: "#ffffff",
    success: "#0f8d45"
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
    sm: "0.375rem",
    md: "0.625rem",
    lg: "1rem",
    full: "999px"
  },
  typography: {
    body: "'Nunito Sans Local', 'Nunito Sans', 'Segoe UI', sans-serif",
    display: "'Nunito Sans Local', 'Nunito Sans', 'Segoe UI', sans-serif",
    mono: "'IBM Plex Mono', ui-monospace, monospace"
  },
  shadows: {
    sm: "0 2px 8px rgba(9, 30, 66, 0.08)",
    md: "0 12px 30px rgba(9, 30, 66, 0.12)"
  }
};

export const darkTheme: ThemeTokens = {
  colors: {
    background: "#111827",
    surface: "#1f2937",
    surfaceMuted: "#273448",
    border: "#3d4b62",
    text: "#f7fbff",
    textMuted: "#bac7db",
    primary: "#63a4ff",
    primaryContrast: "#0b1d3a",
    danger: "#ff6699",
    dangerContrast: "#2a0f1a",
    success: "#4ad68b"
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
    sm: "0.375rem",
    md: "0.625rem",
    lg: "1rem",
    full: "999px"
  },
  typography: {
    body: "'Nunito Sans Local', 'Nunito Sans', 'Segoe UI', sans-serif",
    display: "'Nunito Sans Local', 'Nunito Sans', 'Segoe UI', sans-serif",
    mono: "'IBM Plex Mono', ui-monospace, monospace"
  },
  shadows: {
    sm: "0 2px 8px rgba(1, 4, 12, 0.35)",
    md: "0 12px 30px rgba(1, 4, 12, 0.4)"
  }
};

export const defaultThemes: ThemeModeSet = {
  light: lightTheme,
  dark: darkTheme
};
