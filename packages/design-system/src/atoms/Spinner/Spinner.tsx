import type { HTMLAttributes } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
}

const SpinnerRoot = styled.div<SpinnerProps>(function style(props) {
  return buildVariants<SpinnerProps>(props)
    .css({
      display: "inline-block",
      borderStyle: "solid",
      borderColor: "var(--ds-color-border)",
      borderTopColor: "var(--ds-color-primary)",
      borderRadius: "var(--ds-radius-full)",
      animation: "ds-spin 0.8s linear infinite",
      "@keyframes ds-spin": {
        to: { transform: "rotate(360deg)" }
      }
    })
    .variant("size", props.size ?? "md", {
      sm: { width: "1rem", height: "1rem", borderWidth: "2px" },
      md: { width: "1.4rem", height: "1.4rem", borderWidth: "2px" },
      lg: { width: "2rem", height: "2rem", borderWidth: "3px" }
    })
    .end();
});

export function Spinner(props: SpinnerProps) {
  return <SpinnerRoot {...props} role="status" aria-label="Loading" />;
}
