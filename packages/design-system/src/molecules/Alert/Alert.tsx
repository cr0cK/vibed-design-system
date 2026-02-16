import type { HTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";
import { Text } from "../../atoms/Text/Text";

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  title?: string;
  tone?: "neutral" | "success" | "danger";
}

const AlertRoot = styled.div<AlertProps>(function style(props) {
  return buildVariants<AlertProps>(props)
    .css({
      borderRadius: "var(--ds-radius-md)",
      border: "1px solid",
      padding: "var(--ds-space-sm) var(--ds-space-md)",
      display: "grid",
      gap: "var(--ds-space-xs)"
    })
    .variant("tone", props.tone ?? "neutral", {
      neutral: { borderColor: "var(--ds-color-border)", backgroundColor: "var(--ds-color-surface)" },
      success: { borderColor: "var(--ds-color-success)", backgroundColor: "color-mix(in oklab, var(--ds-color-success) 12%, var(--ds-color-surface))" },
      danger: { borderColor: "var(--ds-color-danger)", backgroundColor: "color-mix(in oklab, var(--ds-color-danger) 12%, var(--ds-color-surface))" }
    })
    .end();
});

export function Alert(props: AlertProps) {
  return (
    <AlertRoot {...props} role="alert">
      {props.title ? (
        <Text as="strong" size="sm" weight="bold">
          {props.title}
        </Text>
      ) : null}
      <Text as="span" size="sm">
        {props.children}
      </Text>
    </AlertRoot>
  );
}
