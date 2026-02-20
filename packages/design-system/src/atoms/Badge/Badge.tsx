import type { HTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
  tone?: "neutral" | "primary" | "success" | "danger";
}

const BadgeRoot = styled.span<BadgeProps>(function style(props) {
  return buildVariants<BadgeProps>(props)
    .css({
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--ds-radius-full)",
      padding: "0.1rem 0.5rem",
      minHeight: "1.35rem",
      fontSize: "0.75rem",
      lineHeight: 1,
      fontWeight: 600,
      border: "1px solid transparent"
    })
    .variant("tone", props.tone ?? "neutral", {
      neutral: { backgroundColor: "var(--ds-color-surface-muted)", color: "var(--ds-color-text)" },
      primary: { backgroundColor: "var(--ds-color-primary)", color: "var(--ds-color-primary-contrast)" },
      success: { backgroundColor: "var(--ds-color-success)", color: "#ffffff" },
      danger: { backgroundColor: "var(--ds-color-danger)", color: "var(--ds-color-danger-contrast)" }
    })
    .end();
});

export function Badge(props: BadgeProps) {
  return <BadgeRoot data-attr-name="Badge" {...props}>{props.children}</BadgeRoot>;
}
