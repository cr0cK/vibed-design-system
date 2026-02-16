import type { HTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";

export interface HelperTextProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
  tone?: "muted" | "danger" | "success";
  controlSize?: "sm" | "md" | "lg";
  size?: "sm" | "md" | "lg";
}

const HelperTextRoot = styled.p<HelperTextProps>(function style(props) {
  return buildVariants<HelperTextProps>(props)
    .css({
      margin: 0,
      fontSize: "0.85rem"
    })
    .variant("controlSize", props.controlSize ?? props.size ?? "md", {
      sm: { fontSize: "0.78rem", lineHeight: 1.35 },
      md: { fontSize: "0.85rem", lineHeight: 1.4 },
      lg: { fontSize: "0.92rem", lineHeight: 1.45 }
    })
    .variant("tone", props.tone ?? "muted", {
      muted: { color: "var(--ds-color-text-muted)" },
      danger: { color: "var(--ds-color-danger)" },
      success: { color: "var(--ds-color-success)" }
    })
    .end();
});

export function HelperText(props: HelperTextProps) {
  return <HelperTextRoot {...props}>{props.children}</HelperTextRoot>;
}
