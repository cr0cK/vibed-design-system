import type { TextareaHTMLAttributes } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";
import { toBooleanVariant } from "../../utils/variantValue";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
}

const TextareaRoot = styled.textarea<TextareaProps>(function style(props) {
  return buildVariants<TextareaProps>(props)
    .css({
      width: "100%",
      minWidth: 0,
      boxSizing: "border-box",
      borderRadius: "var(--ds-radius-sm)",
      border: "1px solid var(--ds-color-border)",
      padding: "0.65rem 0.75rem",
      fontFamily: "var(--ds-font-body)",
      backgroundColor: "var(--ds-color-surface)",
      color: "var(--ds-color-text)"
    })
    .variant("invalid", toBooleanVariant(props.invalid), {
      true: { borderColor: "var(--ds-color-danger)" },
      false: { borderColor: "var(--ds-color-border)" }
    })
    .end();
});

export function Textarea(props: TextareaProps) {
  return <TextareaRoot {...props} aria-invalid={props.invalid} />;
}
