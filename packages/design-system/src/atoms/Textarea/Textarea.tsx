import type { TextareaHTMLAttributes } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";
import { toBooleanVariant } from "../../utils/variantValue";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  controlSize?: "sm" | "md" | "lg";
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
    .variant("controlSize", props.controlSize ?? "md", {
      sm: { padding: "0.5rem 0.65rem", fontSize: "0.875rem", lineHeight: 1.4 },
      md: { padding: "0.65rem 0.75rem", fontSize: "0.95rem", lineHeight: 1.45 },
      lg: { padding: "0.78rem 0.9rem", fontSize: "1rem", lineHeight: 1.5 }
    })
    .variant("invalid", toBooleanVariant(props.invalid), {
      true: { borderColor: "var(--ds-color-danger)" },
      false: { borderColor: "var(--ds-color-border)" }
    })
    .end();
});

/**
 * Atom component that renders the Textarea primitive.
 */
export function Textarea(props: TextareaProps) {
  return <TextareaRoot data-attr-name="Textarea" {...props} aria-invalid={props.invalid} />;
}
