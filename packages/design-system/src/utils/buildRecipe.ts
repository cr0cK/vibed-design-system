import { css, cx } from "@emotion/css";
import { buildVariants } from "build-variants";

type StyleValue = Parameters<typeof css>[0];
type ComposableValue = string | StyleValue | null | undefined | false;

function toClassName(value: ComposableValue): string {
  if (!value) {
    return "";
  }

  if (typeof value === "string") {
    return value;
  }

  return css(value);
}

function composeValues(values: ComposableValue[]): string {
  const tokens: string[] = [];

  for (const value of values) {
    const token: string = toClassName(value);
    if (token) {
      tokens.push(token);
    }
  }

  return cx(tokens);
}

export function buildRecipe(config: unknown): any {
  return buildVariants(config as never, {
    composeFn: composeValues
  });
}
