import type { HTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";
import { Text } from "../../atoms/Text/Text";
import { buildVariants } from "../../utils/buildVariants";

const FieldRoot = styled.div(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      display: "grid",
      gap: "var(--ds-space-xs)"
    })
    .end();
});

const LabelRow = styled.div(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--ds-space-xs)"
    })
    .end();
});

const MessageRow = styled.div(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      minHeight: "1.2em"
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
}

export function Field(props: FieldProps) {
  return (
    <FieldRoot className={props.className}>
      <LabelRow>
        <label htmlFor={props.inputId}>
          <Text as="span" size="sm" weight="semibold">
            {props.label}
            {props.required ? " *" : ""}
          </Text>
        </label>
        {props.action}
      </LabelRow>

      {props.children}

      <MessageRow>
        {props.error ? (
          <Text as="span" size="sm" tone="danger">
            {props.error}
          </Text>
        ) : (
          <Text as="span" size="sm" tone="muted">
            {props.hint}
          </Text>
        )}
      </MessageRow>
    </FieldRoot>
  );
}
