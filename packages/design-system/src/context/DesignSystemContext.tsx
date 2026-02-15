import { createContext, useContext } from "react";
import type { ThemeTokens } from "../theme/tokens";
import { lightTheme } from "../theme/tokens";

export type DensityMode = "comfortable" | "compact";

export interface DesignSystemContextValue {
  density: DensityMode;
  theme: ThemeTokens;
}

const defaultContextValue: DesignSystemContextValue = {
  density: "comfortable",
  theme: lightTheme
};

export const DesignSystemContext = createContext<DesignSystemContextValue>(defaultContextValue);

export function useDesignSystemContext(): DesignSystemContextValue {
  return useContext(DesignSystemContext);
}
