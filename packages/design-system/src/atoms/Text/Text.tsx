import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { createElement } from "react";
import { newBuildVariants } from "@productive-codebases/build-variants";
import { omitProps } from "../../utils/omitProps";
import { toClassName } from "../../utils/styleVariants";

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

  const style = newBuildVariants<TextProps, Record<string, unknown>>(props)
    .css({
      margin: 0,
      color: "var(--ds-color-text)",
      fontFamily: "var(--ds-font-body)"
    })
    .variant("tone", props.tone ?? "default", {
      default: { color: "var(--ds-color-text)" },
      muted: { color: "var(--ds-color-text-muted)" },
      success: { color: "var(--ds-color-success)" },
      danger: { color: "var(--ds-color-danger)" }
    })
    .variant("size", props.size ?? "md", {
      sm: { fontSize: "0.875rem" },
      md: { fontSize: "1rem" },
      lg: { fontSize: "1.25rem" },
      xl: {
        fontSize: "1.75rem",
        fontFamily: "var(--ds-font-display)",
        letterSpacing: "-0.03em"
      }
    })
    .variant("weight", props.weight ?? "regular", {
      regular: { fontWeight: 400 },
      medium: { fontWeight: 500 },
      semibold: { fontWeight: 600 },
      bold: { fontWeight: 700 }
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
