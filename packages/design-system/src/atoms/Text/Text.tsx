import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { createElement } from "react";
import { buildRecipe } from "../../utils/buildRecipe";
import { omitProps } from "../../utils/omitProps";

const textRecipe = buildRecipe({
  base: {
    margin: 0,
    color: "var(--ds-color-text)",
    fontFamily: "var(--ds-font-body)"
  },
  variants: {
    tone: {
      default: { color: "var(--ds-color-text)" },
      muted: { color: "var(--ds-color-text-muted)" },
      success: { color: "var(--ds-color-success)" },
      danger: { color: "var(--ds-color-danger)" }
    },
    size: {
      sm: { fontSize: "0.875rem" },
      md: { fontSize: "1rem" },
      lg: { fontSize: "1.25rem" },
      xl: {
        fontSize: "1.75rem",
        fontFamily: "var(--ds-font-display)",
        letterSpacing: "-0.03em"
      }
    },
    weight: {
      regular: { fontWeight: 400 },
      medium: { fontWeight: 500 },
      semibold: { fontWeight: 600 },
      bold: { fontWeight: 700 }
    }
  },
  defaultVariants: {
    tone: "default",
    size: "md",
    weight: "regular"
  }
});

export interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children?: ReactNode;
  tone?: "default" | "muted" | "success" | "danger";
  size?: "sm" | "md" | "lg" | "xl";
  weight?: "regular" | "medium" | "semibold" | "bold";
}

export function Text(props: TextProps) {
  const element: ElementType = props.as ?? "p";
  const nativeProps = omitProps(props as Record<string, unknown>, [
    "as",
    "tone",
    "size",
    "weight"
  ] as const) as HTMLAttributes<HTMLElement>;

  const className: string = textRecipe({
    tone: props.tone,
    size: props.size,
    weight: props.weight,
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
