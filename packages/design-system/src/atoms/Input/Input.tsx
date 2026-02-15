import type { InputHTMLAttributes } from "react";
import { newBuildVariants } from "@productive-codebases/build-variants";
import { omitProps } from "../../utils/omitProps";
import { toBooleanVariant, toClassName } from "../../utils/styleVariants";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: "sm" | "md" | "lg";
  invalid?: boolean;
}

export function Input(props: InputProps) {
  const nativeProps = omitProps(props as Record<string, unknown>, ["inputSize", "invalid"] as const) as InputHTMLAttributes<HTMLInputElement>;

  const style = newBuildVariants<InputProps, Record<string, unknown>>(props)
    .css({
      width: "100%",
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

  return (
    <input
      {...nativeProps}
      className={toClassName(style, props.className)}
      aria-invalid={props.invalid}
    />
  );
}
