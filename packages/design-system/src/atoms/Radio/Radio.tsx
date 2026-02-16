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
      cursor: "pointer",
      userSelect: "none",
      minHeight: "1.375rem"
    })
    .end();
});

const RadioInput = styled.input<RadioProps>(function style() {
  return buildVariants<RadioProps>({})
    .css({
      width: "1rem",
      height: "1rem",
      margin: 0,
      borderRadius: "999px",
      border: "1px solid color-mix(in oklab, var(--ds-color-border) 95%, #d9d9d9)",
      appearance: "none",
      backgroundColor: "var(--ds-color-surface)",
      display: "inline-grid",
      placeContent: "center",
      cursor: "pointer",
      transition: "all .2s",
      "&::before": {
        content: "\"\"",
        width: "0.5rem",
        height: "0.5rem",
        borderRadius: "999px",
        transform: "scale(0)",
        transition: "transform .16s ease-in-out",
        backgroundColor: "var(--ds-color-primary)"
      },
      "&:hover": {
        borderColor: "color-mix(in oklab, var(--ds-color-primary) 55%, var(--ds-color-border))"
      },
      "&:checked": {
        borderColor: "var(--ds-color-primary)",
        backgroundColor: "var(--ds-color-surface)"
      },
      "&:checked::before": {
        transform: "scale(1)"
      },
      "&:focus-visible": {
        outline: "none",
        borderColor: "var(--ds-color-primary)",
        boxShadow: "0 0 0 2px color-mix(in oklab, var(--ds-color-primary) 20%, transparent)"
      },
      "&:disabled": {
        cursor: "not-allowed",
        borderColor: "color-mix(in oklab, var(--ds-color-border) 80%, var(--ds-color-surface-muted))",
        backgroundColor: "var(--ds-color-surface-muted)"
      },
      "&:disabled::before": {
        backgroundColor: "color-mix(in oklab, var(--ds-color-text-muted) 70%, var(--ds-color-surface-muted))"
      },
      "&:disabled + span": {
        color: "var(--ds-color-text-muted)"
      }
    })
    .end();
});

const RadioText = styled.span(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      color: "var(--ds-color-text)",
      fontFamily: "var(--ds-font-body)",
      fontSize: "0.875rem",
      lineHeight: 1.45
    })
    .end();
});

export function Radio(props: RadioProps) {
  return (
    <LabelRoot>
      <RadioInput {...props} type="radio" />
      <RadioText>{props.label}</RadioText>
    </LabelRoot>
  );
}
