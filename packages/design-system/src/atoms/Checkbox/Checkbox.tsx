import type { InputHTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
  controlSize?: "sm" | "md" | "lg";
}

interface CheckboxLabelProps {
  controlSize?: "sm" | "md" | "lg";
}

const LabelRoot = styled.label<CheckboxLabelProps>(function style(props) {
  return buildVariants<CheckboxLabelProps>(props)
    .css({
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--ds-space-xs)",
      cursor: "pointer",
      userSelect: "none",
      minHeight: "1.375rem"
    })
    .variant("controlSize", props.controlSize ?? "md", {
      sm: { minHeight: "1.15rem", gap: "var(--ds-space-xxs)" },
      md: { minHeight: "1.375rem", gap: "var(--ds-space-xs)" },
      lg: { minHeight: "1.7rem", gap: "var(--ds-space-sm)" }
    })
    .end();
});

const CheckboxInput = styled.input<CheckboxProps>(function style(props) {
  return buildVariants<CheckboxProps>(props)
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
    .variant("controlSize", props.controlSize ?? "md", {
      sm: {
        width: "0.875rem",
        height: "0.875rem",
        borderRadius: "0.18rem",
        "&::after": {
          width: "0.22rem",
          height: "0.42rem",
          borderWidth: "2px",
          transform: "translate(-50%, -56%) rotate(45deg) scale(0)"
        },
        "&:checked::after": {
          transform: "translate(-50%, -56%) rotate(45deg) scale(1)"
        }
      },
      md: {
        width: "1rem",
        height: "1rem",
        borderRadius: "0.2rem"
      },
      lg: {
        width: "1.15rem",
        height: "1.15rem",
        borderRadius: "0.24rem",
        "&::after": {
          width: "0.32rem",
          height: "0.58rem",
          borderWidth: "2px",
          transform: "translate(-50%, -58%) rotate(45deg) scale(0)"
        },
        "&:checked::after": {
          transform: "translate(-50%, -58%) rotate(45deg) scale(1)"
        }
      }
    })
    .end();
});

const CheckboxText = styled.span<CheckboxLabelProps>(function style(props) {
  return buildVariants<CheckboxLabelProps>(props)
    .css({
      color: "var(--ds-color-text)",
      fontFamily: "var(--ds-font-body)",
      fontSize: "0.875rem",
      lineHeight: 1.45
    })
    .variant("controlSize", props.controlSize ?? "md", {
      sm: { fontSize: "0.82rem", lineHeight: 1.35 },
      md: { fontSize: "0.875rem", lineHeight: 1.45 },
      lg: { fontSize: "0.95rem", lineHeight: 1.5 }
    })
    .end();
});

/**
 * Atom component that renders the Checkbox primitive.
 */
export function Checkbox(props: CheckboxProps) {
  return (
    <LabelRoot data-attr-name="Checkbox" controlSize={props.controlSize}>
      <CheckboxInput {...props} type="checkbox" />
      <CheckboxText controlSize={props.controlSize}>{props.label}</CheckboxText>
    </LabelRoot>
  );
}
