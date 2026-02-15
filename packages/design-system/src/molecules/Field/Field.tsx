import type { HTMLAttributes, ReactNode } from "react";
import { css } from "@emotion/css";
import { Text } from "../../atoms/Text/Text";

const rootClassName: string = css({
  display: "grid",
  gap: "var(--ds-space-xs)"
});

const labelRowClassName: string = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "var(--ds-space-xs)"
});

const messageClassName: string = css({
  minHeight: "1.2em"
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
    <div className={props.className ?? rootClassName}>
      <div className={labelRowClassName}>
        <label htmlFor={props.inputId}>
          <Text as="span" size="sm" weight="semibold">
            {props.label}
            {props.required ? " *" : ""}
          </Text>
        </label>
        {props.action}
      </div>

      {props.children}

      <div className={messageClassName}>
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
