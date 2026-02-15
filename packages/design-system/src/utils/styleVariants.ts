import { css, cx } from "@emotion/css";

export type StyleObject = Parameters<typeof css>[0];

type BuildVariantStyle = Record<string, unknown>;

export function toClassName(style: StyleObject | BuildVariantStyle | string, className?: string): string {
  const baseClassName: string = typeof style === "string" ? style : css(style as StyleObject);

  if (className) {
    return cx(baseClassName, className);
  }

  return baseClassName;
}

export function toBooleanVariant(value: boolean | undefined): "true" | "false" {
  return value ? "true" : "false";
}
