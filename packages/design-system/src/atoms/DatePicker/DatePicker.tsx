import type { InputHTMLAttributes } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";
import { toBooleanVariant } from "../../utils/variantValue";

export interface DatePickerProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  controlSize?: "sm" | "md" | "lg";
  invalid?: boolean;
}

const DatePickerRoot = styled.input<DatePickerProps>(function style(props) {
  return buildVariants<DatePickerProps>(props)
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
    .variant("controlSize", props.controlSize ?? "md", {
      sm: { padding: "0.4rem 0.62rem", fontSize: "0.86rem", minHeight: "2rem" },
      md: { padding: "0.55rem 0.72rem", fontSize: "0.95rem", minHeight: "2.25rem" },
      lg: { padding: "0.68rem 0.86rem", fontSize: "1rem", minHeight: "2.5rem" }
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

export function DatePicker(props: DatePickerProps) {
  return <DatePickerRoot {...props} type="date" aria-invalid={props.invalid} />;
}
