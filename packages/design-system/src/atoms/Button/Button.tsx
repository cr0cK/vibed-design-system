import type { ButtonHTMLAttributes, ReactNode, Ref } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";
import { toBooleanVariant } from "../../utils/variantValue";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  ref?: Ref<HTMLButtonElement>;
  tone?: "primary" | "neutral" | "danger";
  controlSize?: "sm" | "md" | "lg";
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
      transition: "transform .14s ease, border-color .14s ease, background-color .14s ease, color .14s ease",
      "&:hover": {
        transform: "translateY(-1px)"
      },
      "&:active": {
        transform: "translateY(0)"
      },
      "@media (prefers-reduced-motion: reduce)": {
        transition: "background-color .14s ease",
        "&:hover": {
          transform: "none"
        },
        "&:active": {
          transform: "none"
        }
      }
    })
    .variant("tone", props.tone ?? "primary", {
      primary: {
        backgroundColor: "var(--ds-color-primary)",
        color: "var(--ds-color-primary-contrast)",
        boxShadow: "0 1px 2px color-mix(in oklab, var(--ds-color-primary) 30%, transparent)",
        "&:hover": {
          backgroundColor: "color-mix(in oklab, var(--ds-color-primary) 90%, white)"
        },
        "&:active": {
          backgroundColor: "color-mix(in oklab, var(--ds-color-primary) 86%, black)"
        }
      },
      neutral: {
        backgroundColor: "var(--ds-color-surface)",
        color: "var(--ds-color-text)",
        border: "1px solid var(--ds-color-border)",
        "&:hover": {
          borderColor: "color-mix(in oklab, var(--ds-color-primary) 34%, var(--ds-color-border))",
          backgroundColor: "color-mix(in oklab, var(--ds-color-surface) 92%, var(--ds-color-primary))"
        },
        "&:active": {
          borderColor: "color-mix(in oklab, var(--ds-color-primary) 42%, var(--ds-color-border))",
          backgroundColor: "color-mix(in oklab, var(--ds-color-surface) 86%, var(--ds-color-primary))"
        }
      },
      danger: {
        backgroundColor: "var(--ds-color-danger)",
        color: "var(--ds-color-danger-contrast)",
        boxShadow: "0 1px 2px color-mix(in oklab, var(--ds-color-danger) 28%, transparent)",
        "&:hover": {
          backgroundColor: "color-mix(in oklab, var(--ds-color-danger) 90%, white)"
        },
        "&:active": {
          backgroundColor: "color-mix(in oklab, var(--ds-color-danger) 86%, black)"
        }
      }
    })
    .variant("controlSize", props.controlSize ?? props.size ?? "md", {
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

/**
 * Atom component that renders the Button primitive.
 */
export function Button(props: ButtonProps) {
  return (
    <ButtonRoot data-attr-name="Button"
      {...props}
      ref={props.ref}
      disabled={props.disabled || props.loading}
      type={props.type ?? "button"}
      aria-busy={props.loading}
    >
      {props.children}
    </ButtonRoot>
  );
}
