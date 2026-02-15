import type { ThemeTokens } from "./tokens";
import { lightTheme } from "./tokens";

export function createTheme(partialTheme: Partial<ThemeTokens>): ThemeTokens {
  return {
    colors: {
      ...lightTheme.colors,
      ...(partialTheme.colors ?? {})
    },
    spacing: {
      ...lightTheme.spacing,
      ...(partialTheme.spacing ?? {})
    },
    radii: {
      ...lightTheme.radii,
      ...(partialTheme.radii ?? {})
    },
    typography: {
      ...lightTheme.typography,
      ...(partialTheme.typography ?? {})
    },
    shadows: {
      ...lightTheme.shadows,
      ...(partialTheme.shadows ?? {})
    }
  };
}
