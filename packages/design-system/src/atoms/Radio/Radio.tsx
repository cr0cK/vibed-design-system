import type { InputHTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
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

const RadioInput = styled.input<RadioProps>(function style() {
  return buildVariants<RadioProps>({})
    .css({
      width: "1rem",
      height: "1rem",
      accentColor: "var(--ds-color-primary)"
    })
    .end();
});

export function Radio(props: RadioProps) {
  return (
    <LabelRoot>
      <RadioInput {...props} type="radio" />
      {props.label}
    </LabelRoot>
  );
}
