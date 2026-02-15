import type { ButtonHTMLAttributes, ReactNode } from "react";
import { buildRecipe } from "../../utils/buildRecipe";
import { omitProps } from "../../utils/omitProps";

const buttonRecipe = buildRecipe({
  base: {
    border: "none",
    appearance: "none",
    cursor: "pointer",
    borderRadius: "var(--ds-radius-md)",
    fontFamily: "var(--ds-font-body)",
    fontWeight: 600,
    transition: "transform .14s ease, box-shadow .14s ease, background-color .14s ease",
    boxShadow: "var(--ds-shadow-sm)"
  },
  variants: {
    tone: {
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
    },
    size: {
      sm: { fontSize: "0.875rem", padding: "0.45rem 0.8rem" },
      md: { fontSize: "0.95rem", padding: "0.6rem 1rem" },
      lg: { fontSize: "1rem", padding: "0.8rem 1.25rem" }
    },
    block: {
      true: { display: "inline-flex", width: "100%", justifyContent: "center" },
      false: { display: "inline-flex", width: "auto", justifyContent: "center" }
    },
    loading: {
      true: { opacity: 0.7, cursor: "progress" },
      false: { opacity: 1 }
    }
  },
  defaultVariants: {
    tone: "primary",
    size: "md",
    block: false,
    loading: false
  }
});

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  tone?: "primary" | "neutral" | "danger";
  size?: "sm" | "md" | "lg";
  block?: boolean;
  loading?: boolean;
}

export function Button(props: ButtonProps) {
  const nativeProps = omitProps(props as Record<string, unknown>, [
    "tone",
    "size",
    "block",
    "loading"
  ] as const) as ButtonHTMLAttributes<HTMLButtonElement>;

  const className: string = buttonRecipe({
    tone: props.tone,
    size: props.size,
    block: props.block,
    loading: props.loading,
    className: props.className
  });

  return (
    <button
      {...nativeProps}
      className={className}
      disabled={props.disabled || props.loading}
      type={props.type ?? "button"}
      aria-busy={props.loading}
    >
      {props.children}
    </button>
  );
}
