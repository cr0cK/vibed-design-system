import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { createElement } from "react";
import { buildRecipe } from "../../utils/buildRecipe";
import { omitProps } from "../../utils/omitProps";

const boxRecipe = buildRecipe({
  base: {
    boxSizing: "border-box"
  },
  variants: {
    padding: {
      none: { padding: 0 },
      sm: { padding: "var(--ds-space-sm)" },
      md: { padding: "var(--ds-space-md)" },
      lg: { padding: "var(--ds-space-lg)" }
    },
    surface: {
      transparent: { backgroundColor: "transparent" },
      muted: { backgroundColor: "var(--ds-color-surface-muted)" },
      elevated: {
        backgroundColor: "var(--ds-color-surface)",
        boxShadow: "var(--ds-shadow-sm)",
        border: "1px solid var(--ds-color-border)"
      }
    },
    radius: {
      none: { borderRadius: 0 },
      sm: { borderRadius: "var(--ds-radius-sm)" },
      md: { borderRadius: "var(--ds-radius-md)" },
      lg: { borderRadius: "var(--ds-radius-lg)" }
    }
  },
  defaultVariants: {
    padding: "none",
    surface: "transparent",
    radius: "none"
  }
});

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

  const className: string = boxRecipe({
    padding: props.padding,
    surface: props.surface,
    radius: props.radius,
    className: props.className
  });

  return createElement(
    element,
    {
      ...nativeProps,
      className
    },
    props.children
  );
}
