import type { InputHTMLAttributes } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";
import { toBooleanVariant } from "../../utils/variantValue";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: "sm" | "md" | "lg";
  invalid?: boolean;
}

const InputRoot = styled.input<InputProps>(function style(props) {
  return buildVariants<InputProps>(props)
    .css({
      width: "100%",
      minWidth: 0,
      boxSizing: "border-box",
      border: "1px solid var(--ds-color-border)",
      borderRadius: "var(--ds-radius-sm)",
      backgroundColor: "var(--ds-color-surface)",
      color: "var(--ds-color-text)",
      fontFamily: "var(--ds-font-body)",
      transition: "border-color .16s ease, box-shadow .16s ease",
      outline: "none"
    })
    .variant("size", props.inputSize ?? "md", {
      sm: { padding: "0.45rem 0.65rem", fontSize: "0.875rem" },
      md: { padding: "0.6rem 0.75rem", fontSize: "0.95rem" },
      lg: { padding: "0.75rem 0.9rem", fontSize: "1rem" }
    })
    .variant("invalid", toBooleanVariant(props.invalid), {
      true: {
        borderColor: "var(--ds-color-danger)",
        boxShadow: "0 0 0 3px color-mix(in oklab, var(--ds-color-danger) 20%, transparent)"
      },
      false: { borderColor: "var(--ds-color-border)", boxShadow: "none" }
    })
    .end();
});

export function Input(props: InputProps) {
  return (
    <InputRoot
      {...props}
      aria-invalid={props.invalid}
    />
  );
}
