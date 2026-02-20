import type { HTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
  tone?: "neutral" | "primary" | "success" | "danger";
  controlSize?: "sm" | "md" | "lg";
  size?: "sm" | "md" | "lg";
}

const Root = styled.span<TagProps>(function style(props) {
  return buildVariants<TagProps>(props)
    .css({
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.3rem",
      borderRadius: "var(--ds-radius-full)",
      border: "1px solid var(--ds-color-border)",
      fontFamily: "var(--ds-font-body)",
      fontWeight: 600,
      lineHeight: 1
    })
    .variant("controlSize", props.controlSize ?? props.size ?? "md", {
      sm: { fontSize: "0.7rem", padding: "0.2rem 0.45rem" },
      md: { fontSize: "0.78rem", padding: "0.25rem 0.55rem" },
      lg: { fontSize: "0.85rem", padding: "0.3rem 0.62rem" }
    })
    .variant("tone", props.tone ?? "neutral", {
      neutral: {
        backgroundColor: "var(--ds-color-surface-muted)",
        borderColor: "var(--ds-color-border)",
        color: "var(--ds-color-text)"
      },
      primary: {
        backgroundColor: "color-mix(in oklab, var(--ds-color-primary) 16%, var(--ds-color-surface))",
        borderColor: "color-mix(in oklab, var(--ds-color-primary) 44%, var(--ds-color-border))",
        color: "var(--ds-color-text)"
      },
      success: {
        backgroundColor: "color-mix(in oklab, var(--ds-color-success) 18%, var(--ds-color-surface))",
        borderColor: "color-mix(in oklab, var(--ds-color-success) 45%, var(--ds-color-border))",
        color: "var(--ds-color-text)"
      },
      danger: {
        backgroundColor: "color-mix(in oklab, var(--ds-color-danger) 18%, var(--ds-color-surface))",
        borderColor: "color-mix(in oklab, var(--ds-color-danger) 45%, var(--ds-color-border))",
        color: "var(--ds-color-text)"
      }
    })
    .end();
});

export function Tag(props: TagProps) {
  return <Root data-attr-name="Tag" {...props}>{props.children}</Root>;
}
