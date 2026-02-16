import type { HTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";
import { Text } from "../../atoms/Text/Text";

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  title?: string;
  tone?: "neutral" | "success" | "danger";
  controlSize?: "sm" | "md" | "lg";
  size?: "sm" | "md" | "lg";
}

const AlertRoot = styled.div<AlertProps>(function style(props) {
  return buildVariants<AlertProps>(props)
    .css({
      borderRadius: "var(--ds-radius-md)",
      border: "1px solid",
      padding: "var(--ds-space-sm) var(--ds-space-md)",
      display: "grid",
      gap: "var(--ds-space-xs)",
      animation: "ds-alert-in .2s ease-out",
      "@keyframes ds-alert-in": {
        from: { opacity: 0, transform: "translateY(6px)" },
        to: { opacity: 1, transform: "translateY(0)" }
      },
      "@media (prefers-reduced-motion: reduce)": {
        animation: "none"
      }
    })
    .variant("controlSize", props.controlSize ?? props.size ?? "md", {
      sm: { padding: "var(--ds-space-xs) var(--ds-space-sm)", gap: "var(--ds-space-xxs)" },
      md: { padding: "var(--ds-space-sm) var(--ds-space-md)", gap: "var(--ds-space-xs)" },
      lg: { padding: "var(--ds-space-md) var(--ds-space-lg)", gap: "var(--ds-space-sm)" }
    })
    .variant("tone", props.tone ?? "neutral", {
      neutral: { borderColor: "var(--ds-color-border)", backgroundColor: "var(--ds-color-surface)" },
      success: { borderColor: "var(--ds-color-success)", backgroundColor: "color-mix(in oklab, var(--ds-color-success) 12%, var(--ds-color-surface))" },
      danger: { borderColor: "var(--ds-color-danger)", backgroundColor: "color-mix(in oklab, var(--ds-color-danger) 12%, var(--ds-color-surface))" }
    })
    .end();
});

export function Alert(props: AlertProps) {
  const controlSize = props.controlSize ?? props.size ?? "md";
  const titleSize = controlSize === "sm" ? "sm" : "md";
  const contentSize = controlSize === "sm" ? "sm" : controlSize === "lg" ? "md" : "sm";

  return (
    <AlertRoot {...props} role="alert">
      {props.title ? (
        <Text as="strong" size={titleSize} weight="bold">
          {props.title}
        </Text>
      ) : null}
      <Text as="span" size={contentSize}>
        {props.children}
      </Text>
    </AlertRoot>
  );
}
