import type { HTMLAttributes, ReactNode } from "react";
import { newBuildVariants } from "@productive-codebases/build-variants";
import { Text } from "../../atoms/Text/Text";
import { toClassName } from "../../utils/styleVariants";

const rootStyle = newBuildVariants<Record<string, never>, Record<string, unknown>>({})
  .css({
    display: "grid",
    gap: "var(--ds-space-xs)"
  })
  .end();

const labelRowStyle = newBuildVariants<Record<string, never>, Record<string, unknown>>({})
  .css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "var(--ds-space-xs)"
  })
  .end();

const messageStyle = newBuildVariants<Record<string, never>, Record<string, unknown>>({})
  .css({
    minHeight: "1.2em"
  })
  .end();

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
    <div className={toClassName(rootStyle, props.className)}>
      <div className={toClassName(labelRowStyle)}>
        <label htmlFor={props.inputId}>
          <Text as="span" size="sm" weight="semibold">
            {props.label}
            {props.required ? " *" : ""}
          </Text>
        </label>
        {props.action}
      </div>

      {props.children}

      <div className={toClassName(messageStyle)}>
        {props.error ? (
          <Text as="span" size="sm" tone="danger">
            {props.error}
          </Text>
        ) : (
          <Text as="span" size="sm" tone="muted">
            {props.hint}
          </Text>
        )}
      </div>
    </div>
  );
}
