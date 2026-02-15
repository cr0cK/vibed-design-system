import type { ButtonHTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";
import { toBooleanVariant } from "../../utils/variantValue";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  tone?: "primary" | "neutral" | "danger";
  size?: "sm" | "md" | "lg";
  block?: boolean;
  loading?: boolean;
}

const ButtonRoot = styled.button<ButtonProps>(function style(props) {
  return buildVariants<ButtonProps>(props)
    .css({
      border: "none",
      appearance: "none",
      cursor: "pointer",
      borderRadius: "var(--ds-radius-md)",
      fontFamily: "var(--ds-font-body)",
      fontWeight: 600,
      transition: "transform .14s ease, box-shadow .14s ease, background-color .14s ease",
      boxShadow: "var(--ds-shadow-sm)"
    })
    .variant("tone", props.tone ?? "primary", {
      primary: {
        backgroundColor: "var(--ds-color-primary)",
        color: "var(--ds-color-primary-contrast)"
      },
      neutral: {
        backgroundColor: "var(--ds-color-surface)",
        color: "var(--ds-color-text)",
        border: "1px solid var(--ds-color-border)"
      },
      danger: {
        backgroundColor: "var(--ds-color-danger)",
        color: "var(--ds-color-danger-contrast)"
      }
    })
    .variant("size", props.size ?? "md", {
      sm: { fontSize: "0.875rem", padding: "0.45rem 0.8rem" },
      md: { fontSize: "0.95rem", padding: "0.6rem 1rem" },
      lg: { fontSize: "1rem", padding: "0.8rem 1.25rem" }
    })
    .variant("block", toBooleanVariant(props.block), {
      true: { display: "inline-flex", width: "100%", justifyContent: "center" },
      false: { display: "inline-flex", width: "auto", justifyContent: "center" }
    })
    .variant("loading", toBooleanVariant(props.loading), {
      true: { opacity: 0.7, cursor: "progress" },
      false: { opacity: 1 }
    })
    .end();
});

export function Button(props: ButtonProps) {
  return (
    <ButtonRoot
      {...props}
      disabled={props.disabled || props.loading}
      type={props.type ?? "button"}
      aria-busy={props.loading}
    >
      {props.children}
    </ButtonRoot>
  );
}
