import type { ElementType, HTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";

export interface BoxProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children?: ReactNode;
  padding?: "none" | "sm" | "md" | "lg";
  surface?: "transparent" | "muted" | "elevated";
  radius?: "none" | "sm" | "md" | "lg";
}

const BoxRoot = styled.div<BoxProps>(function style(props) {
  return buildVariants<BoxProps>(props)
    .css({
      boxSizing: "border-box"
    })
    .variant("padding", props.padding ?? "none", {
      none: { padding: 0 },
      sm: { padding: "var(--ds-space-sm)" },
      md: { padding: "var(--ds-space-md)" },
      lg: { padding: "var(--ds-space-lg)" }
    })
    .variant("surface", props.surface ?? "transparent", {
      transparent: { backgroundColor: "transparent" },
      muted: { backgroundColor: "var(--ds-color-surface-muted)" },
      elevated: {
        backgroundColor: "var(--ds-color-surface)",
        boxShadow: "var(--ds-shadow-sm)",
        border: "1px solid var(--ds-color-border)"
      }
    })
    .variant("radius", props.radius ?? "none", {
      none: { borderRadius: 0 },
      sm: { borderRadius: "var(--ds-radius-sm)" },
      md: { borderRadius: "var(--ds-radius-md)" },
      lg: { borderRadius: "var(--ds-radius-lg)" }
    })
    .end();
});

export function Box(props: BoxProps) {
  return (
    <BoxRoot
      {...props}
      as={props.as ?? "div"}
    >
      {props.children}
    </BoxRoot>
  );
}
