import type { ElementType, HTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";

export interface BoxProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children?: ReactNode;
  padding?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  paddingTop?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  surface?: "transparent" | "background" | "surface" | "muted" | "elevated" | "primary";
  radius?: "none" | "sm" | "md" | "lg";
  border?: "none" | "subtle";
  borderSide?: "all" | "top" | "right" | "bottom" | "left";
  minHeight?: "auto" | "screen";
  overflow?: "visible" | "hidden";
  marginTop?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  flex?: "none" | "fill" | "field";
}

const BoxRoot = styled.div<BoxProps>(function style(props) {
  const borderStyle = props.border ?? "none";
  const borderSide = props.borderSide ?? "all";

  return buildVariants<BoxProps>(props)
    .css({
      boxSizing: "border-box",
      ...(borderStyle === "subtle" && borderSide === "all" ? { border: "1px solid var(--ds-color-border)" } : {}),
      ...(borderStyle === "subtle" && borderSide === "top" ? { borderTop: "1px solid var(--ds-color-border)" } : {}),
      ...(borderStyle === "subtle" && borderSide === "right" ? { borderRight: "1px solid var(--ds-color-border)" } : {}),
      ...(borderStyle === "subtle" && borderSide === "bottom" ? { borderBottom: "1px solid var(--ds-color-border)" } : {}),
      ...(borderStyle === "subtle" && borderSide === "left" ? { borderLeft: "1px solid var(--ds-color-border)" } : {})
    })
    .variant("padding", props.padding ?? "none", {
      none: { padding: 0 },
      xs: { padding: "var(--ds-space-xs)" },
      sm: { padding: "var(--ds-space-sm)" },
      md: { padding: "var(--ds-space-md)" },
      lg: { padding: "var(--ds-space-lg)" },
      xl: { padding: "var(--ds-space-xl)" }
    })
    .variant("paddingTop", props.paddingTop ?? "none", {
      none: { paddingTop: 0 },
      xs: { paddingTop: "var(--ds-space-xs)" },
      sm: { paddingTop: "var(--ds-space-sm)" },
      md: { paddingTop: "var(--ds-space-md)" },
      lg: { paddingTop: "var(--ds-space-lg)" },
      xl: { paddingTop: "var(--ds-space-xl)" }
    })
    .variant("surface", props.surface ?? "transparent", {
      transparent: { backgroundColor: "transparent" },
      background: { backgroundColor: "var(--ds-color-background)" },
      surface: { backgroundColor: "var(--ds-color-surface)" },
      muted: { backgroundColor: "var(--ds-color-surface-muted)" },
      elevated: {
        backgroundColor: "var(--ds-color-surface)",
        boxShadow: "var(--ds-shadow-sm)",
        border: "1px solid var(--ds-color-border)"
      },
      primary: {
        backgroundColor: "var(--ds-color-primary)",
        color: "var(--ds-color-primary-contrast)"
      }
    })
    .variant("radius", props.radius ?? "none", {
      none: { borderRadius: 0 },
      sm: { borderRadius: "var(--ds-radius-sm)" },
      md: { borderRadius: "var(--ds-radius-md)" },
      lg: { borderRadius: "var(--ds-radius-lg)" }
    })
    .variant("minHeight", props.minHeight ?? "auto", {
      auto: { minHeight: "auto" },
      screen: { minHeight: "100vh" }
    })
    .variant("marginTop", props.marginTop ?? "none", {
      none: { marginTop: 0 },
      xs: { marginTop: "var(--ds-space-xs)" },
      sm: { marginTop: "var(--ds-space-sm)" },
      md: { marginTop: "var(--ds-space-md)" },
      lg: { marginTop: "var(--ds-space-lg)" },
      xl: { marginTop: "var(--ds-space-xl)" }
    })
    .variant("flex", props.flex ?? "none", {
      none: { flex: "0 0 auto" },
      fill: { flex: "1 1 0" },
      field: { flex: "1 1 14rem" }
    })
    .variant("overflow", props.overflow ?? "visible", {
      visible: { overflow: "visible" },
      hidden: { overflow: "hidden" }
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
