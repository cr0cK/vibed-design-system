import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { createElement } from "react";
import { newBuildVariants } from "@productive-codebases/build-variants";
import { omitProps } from "../../utils/omitProps";
import { toClassName } from "../../utils/styleVariants";

export interface BoxProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children?: ReactNode;
  padding?: "none" | "sm" | "md" | "lg";
  surface?: "transparent" | "muted" | "elevated";
  radius?: "none" | "sm" | "md" | "lg";
}

export function Box(props: BoxProps) {
  const element: ElementType = props.as ?? "div";
  const nativeProps = omitProps(props as Record<string, unknown>, [
    "as",
    "padding",
    "surface",
    "radius"
  ] as const) as HTMLAttributes<HTMLElement>;

  const style = newBuildVariants<BoxProps, Record<string, unknown>>(props)
    .css({
      boxSizing: "border-box"
    })
    .variant("padding", props.padding ?? "none", {
      none: { padding: 0 },
      sm: { padding: "var(--ds-space-sm)" },
      md: { padding: "var(--ds-space-md)" },
      lg: { padding: "var(--ds-space-lg)" }
    })
    .variant("surface", props.surface ?? "transparent", {
      transparent: { backgroundColor: "transparent" },
      muted: { backgroundColor: "var(--ds-color-surface-muted)" },
      elevated: {
        backgroundColor: "var(--ds-color-surface)",
        boxShadow: "var(--ds-shadow-sm)",
        border: "1px solid var(--ds-color-border)"
      }
    })
    .variant("radius", props.radius ?? "none", {
      none: { borderRadius: 0 },
      sm: { borderRadius: "var(--ds-radius-sm)" },
      md: { borderRadius: "var(--ds-radius-md)" },
      lg: { borderRadius: "var(--ds-radius-lg)" }
    })
    .end();

  return createElement(
    element,
    {
      ...nativeProps,
      className: toClassName(style, props.className)
    },
    props.children
  );
}
