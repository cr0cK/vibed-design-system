import type { InputHTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
}

const LabelRoot = styled.label(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--ds-space-xs)",
      cursor: "pointer"
    })
    .end();
});

const CheckboxInput = styled.input<CheckboxProps>(function style() {
  return buildVariants<CheckboxProps>({})
    .css({
      width: "1rem",
      height: "1rem",
      accentColor: "var(--ds-color-primary)"
    })
    .end();
});

export function Checkbox(props: CheckboxProps) {
  return (
    <LabelRoot>
      <CheckboxInput {...props} type="checkbox" />
      {props.label}
    </LabelRoot>
  );
}
