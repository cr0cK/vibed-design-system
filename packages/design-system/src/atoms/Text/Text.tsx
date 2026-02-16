import type { ElementType, HTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";

export interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children?: ReactNode;
  tone?: "default" | "muted" | "success" | "danger";
  size?: "sm" | "md" | "lg" | "xl";
  weight?: "regular" | "medium" | "semibold" | "bold";
  align?: "left" | "center" | "right";
}

const TextRoot = styled.p<TextProps>(function style(props) {
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
    .variant("align", props.align ?? "left", {
      left: { textAlign: "left" },
      center: { textAlign: "center" },
      right: { textAlign: "right" }
    })
    .end();
});

export function Text(props: TextProps) {
  return (
    <TextRoot
      {...props}
      as={props.as ?? "p"}
    >
      {props.children}
    </TextRoot>
  );
}
