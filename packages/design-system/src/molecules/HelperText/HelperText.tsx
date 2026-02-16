import type { HTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";

export interface HelperTextProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
  tone?: "muted" | "danger" | "success";
}

const HelperTextRoot = styled.p<HelperTextProps>(function style(props) {
  return buildVariants<HelperTextProps>(props)
    .css({
      margin: 0,
      fontSize: "0.85rem"
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
