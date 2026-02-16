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
      cursor: "pointer",
      userSelect: "none",
      minHeight: "1.375rem"
    })
    .end();
});

const CheckboxInput = styled.input<CheckboxProps>(function style() {
  return buildVariants<CheckboxProps>({})
    .css({
      width: "1rem",
      height: "1rem",
      margin: 0,
      borderRadius: "0.2rem",
      border: "1px solid color-mix(in oklab, var(--ds-color-border) 95%, #d9d9d9)",
      appearance: "none",
      backgroundColor: "var(--ds-color-surface)",
      display: "inline-grid",
      placeContent: "center",
      position: "relative",
      cursor: "pointer",
      transition: "all .2s",
      "&::after": {
        content: "\"\"",
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "0.28rem",
        height: "0.5rem",
        transform: "translate(-50%, -58%) rotate(45deg) scale(0)",
        transition: "transform .16s ease-in-out",
        transformOrigin: "center",
        border: "2px solid var(--ds-color-primary-contrast)",
        borderTop: "none",
        borderLeft: "none",
        boxSizing: "border-box"
      },
      "&:hover": {
        borderColor: "color-mix(in oklab, var(--ds-color-primary) 55%, var(--ds-color-border))"
      },
      "&:checked": {
        borderColor: "var(--ds-color-primary)",
        backgroundColor: "var(--ds-color-primary)"
      },
      "&:checked::after": {
        transform: "translate(-50%, -58%) rotate(45deg) scale(1)"
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
      "&:disabled::after": {
        backgroundColor: "color-mix(in oklab, var(--ds-color-text-muted) 70%, var(--ds-color-surface-muted))"
      },
      "&:disabled + span": {
        color: "var(--ds-color-text-muted)"
      }
    })
    .end();
});

const CheckboxText = styled.span(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      color: "var(--ds-color-text)",
      fontFamily: "var(--ds-font-body)",
      fontSize: "0.875rem",
      lineHeight: 1.45
    })
    .end();
});

export function Checkbox(props: CheckboxProps) {
  return (
    <LabelRoot>
      <CheckboxInput {...props} type="checkbox" />
      <CheckboxText>{props.label}</CheckboxText>
    </LabelRoot>
  );
}
