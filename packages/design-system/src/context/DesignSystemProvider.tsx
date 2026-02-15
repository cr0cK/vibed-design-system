import type { ReactNode } from "react";
import { useMemo } from "react";
import { newBuildVariants } from "@productive-codebases/build-variants";
import { DesignSystemContext } from "./DesignSystemContext";
import type { DensityMode } from "./DesignSystemContext";
import type { ThemeModeSet, ThemeTokens } from "../theme/tokens";
import { defaultThemes } from "../theme/tokens";
import { createTheme } from "../theme/createTheme";
import { toThemeCssVars } from "../theme/cssVars";
import { toClassName } from "../utils/styleVariants";

const rootStyle = newBuildVariants<Record<string, never>, Record<string, unknown>>({})
  .css({
    minHeight: "100%",
    color: "var(--ds-color-text)",
    backgroundColor: "var(--ds-color-background)",
    fontFamily: "var(--ds-font-body)",
    lineHeight: 1.4
  })
  .end();

export interface DesignSystemProviderProps {
  children: ReactNode;
  density?: DensityMode;
  mode?: keyof ThemeModeSet;
  themeOverrides?: Partial<ThemeTokens>;
}

export function DesignSystemProvider(props: DesignSystemProviderProps) {
  const selectedTheme: ThemeTokens = useMemo(() => {
    const modeKey: keyof ThemeModeSet = props.mode ?? "light";
    const baseTheme: ThemeTokens = defaultThemes[modeKey];

    if (!props.themeOverrides) {
      return baseTheme;
    }

    return createTheme({
      ...baseTheme,
      ...props.themeOverrides,
      colors: {
        ...baseTheme.colors,
        ...(props.themeOverrides.colors ?? {})
      },
      spacing: {
        ...baseTheme.spacing,
        ...(props.themeOverrides.spacing ?? {})
      },
      radii: {
        ...baseTheme.radii,
        ...(props.themeOverrides.radii ?? {})
      },
      typography: {
        ...baseTheme.typography,
        ...(props.themeOverrides.typography ?? {})
      },
      shadows: {
        ...baseTheme.shadows,
        ...(props.themeOverrides.shadows ?? {})
      }
    });
  }, [props.mode, props.themeOverrides]);

  const contextValue = useMemo(() => {
    return {
      density: props.density ?? "comfortable",
      theme: selectedTheme
    };
  }, [props.density, selectedTheme]);

  return (
    <DesignSystemContext.Provider value={contextValue}>
      <div className={toClassName(rootStyle)} style={toThemeCssVars(selectedTheme)}>
        {props.children}
      </div>
    </DesignSystemContext.Provider>
  );
}
