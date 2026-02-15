import type { HTMLAttributes, ReactNode } from "react";
import { css, cx } from "@emotion/css";
import { Text } from "../../atoms/Text/Text";
import { buildVariants } from "../../utils/buildVariants";

const rootClassName: string = css(
  buildVariants<Record<string, never>>({})
    .css({
      display: "grid",
      gap: "var(--ds-space-xs)"
    })
    .end()
);

const labelRowClassName: string = css(
  buildVariants<Record<string, never>>({})
    .css({
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--ds-space-xs)"
    })
    .end()
);

const messageRowClassName: string = css(
  buildVariants<Record<string, never>>({})
    .css({
      minHeight: "1.2em"
    })
    .end()
);

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
    <div className={cx(rootClassName, props.className)}>
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

      <div className={messageRowClassName}>
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
