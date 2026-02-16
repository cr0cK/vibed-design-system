import type { HTMLAttributes, ReactNode } from "react";
import { cloneElement, isValidElement, useId } from "react";
import styled from "@emotion/styled";
import { Text } from "../../atoms/Text/Text";
import { buildVariants } from "../../utils/buildVariants";

interface FieldLayoutProps {
  controlSize?: "sm" | "md" | "lg";
}

const FieldRoot = styled.div<FieldLayoutProps>(function style(props) {
  return buildVariants<FieldLayoutProps>(props)
    .css({
      display: "grid",
      gap: "var(--ds-space-xs)"
    })
    .variant("controlSize", props.controlSize ?? "md", {
      sm: { gap: "var(--ds-space-xxs)" },
      md: { gap: "var(--ds-space-xs)" },
      lg: { gap: "var(--ds-space-sm)" }
    })
    .end();
});

const LabelRow = styled.div<FieldLayoutProps>(function style(props) {
  return buildVariants<FieldLayoutProps>(props)
    .css({
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--ds-space-xs)"
    })
    .variant("controlSize", props.controlSize ?? "md", {
      sm: { gap: "var(--ds-space-xxs)" },
      md: { gap: "var(--ds-space-xs)" },
      lg: { gap: "var(--ds-space-sm)" }
    })
    .end();
});

const MessageRow = styled.div<FieldLayoutProps>(function style(props) {
  return buildVariants<FieldLayoutProps>(props)
    .css({
      minHeight: "1.2em"
    })
    .variant("controlSize", props.controlSize ?? "md", {
      sm: { minHeight: "1.1em" },
      md: { minHeight: "1.2em" },
      lg: { minHeight: "1.35em" }
    })
    .end();
});

export interface FieldProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  inputId: string;
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  action?: ReactNode;
  controlSize?: "sm" | "md" | "lg";
  size?: "sm" | "md" | "lg";
}

export function Field(props: FieldProps) {
  const controlSize = props.controlSize ?? props.size ?? "md";
  const textSize = controlSize === "sm" ? "sm" : controlSize === "lg" ? "md" : "sm";
  const messageId = useId();
  const describedById = props.error || props.hint ? messageId : undefined;
  let controlNode: ReactNode = props.children;

  if (isValidElement<Record<string, unknown>>(props.children)) {
    const currentDescribedBy = typeof props.children.props["aria-describedby"] === "string" ? props.children.props["aria-describedby"] : undefined;
    const describedBy = describedById ? [currentDescribedBy, describedById].filter(Boolean).join(" ") : currentDescribedBy;

    controlNode = cloneElement(props.children, {
      id: props.inputId,
      "aria-describedby": describedBy || undefined,
      "aria-invalid": props.error ? true : props.children.props["aria-invalid"]
    });
  }

  return (
    <FieldRoot className={props.className} controlSize={controlSize}>
      <LabelRow controlSize={controlSize}>
        <label htmlFor={props.inputId}>
          <Text as="span" size={textSize} weight="semibold">
            {props.label}
            {props.required ? " *" : ""}
          </Text>
        </label>
        {props.action}
      </LabelRow>

      {controlNode}

      <MessageRow id={describedById} controlSize={controlSize}>
        {props.error ? (
          <Text as="span" size={textSize} tone="danger">
            {props.error}
          </Text>
        ) : (
          <Text as="span" size={textSize} tone="muted">
            {props.hint}
          </Text>
        )}
      </MessageRow>
    </FieldRoot>
  );
}
