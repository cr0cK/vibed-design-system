import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { createElement } from "react";
import { css, cx } from "@emotion/css";
import { buildVariants } from "../../utils/buildVariants";

export interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children?: ReactNode;
  tone?: "default" | "muted" | "success" | "danger";
  size?: "sm" | "md" | "lg" | "xl";
  weight?: "regular" | "medium" | "semibold" | "bold";
}

function getTextStyle(props: TextProps){
  return buildVariants<TextProps>(props)
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
}

export function Text(props: TextProps) {
  const className: string = cx(css(getTextStyle(props)), props.className);

  return createElement(
    props.as ?? "p",
    {
      ...props,
      className
    },
    props.children
  );
}
