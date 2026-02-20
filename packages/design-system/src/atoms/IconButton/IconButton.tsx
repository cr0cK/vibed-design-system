import type { ButtonHTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  children?: ReactNode;
  label: string;
  controlSize?: "sm" | "md" | "lg";
  size?: "sm" | "md" | "lg";
  tone?: "neutral" | "primary" | "danger";
}

const IconButtonRoot = styled.button<IconButtonProps>(function style(props) {
  return buildVariants<IconButtonProps>(props)
    .css({
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid var(--ds-color-border)",
      backgroundColor: "var(--ds-color-surface)",
      color: "var(--ds-color-text)",
      borderRadius: "var(--ds-radius-full)",
      cursor: "pointer",
      boxShadow: "0 1px 2px rgba(17, 24, 39, 0.05)",
      transition: "transform .16s ease, border-color .16s ease, box-shadow .16s ease, background-color .16s ease, color .16s ease",
      "&:hover": {
        transform: "translateY(-1px)",
        boxShadow: "0 6px 16px rgba(17, 24, 39, 0.12)"
      },
      "&:active": {
        transform: "translateY(0)",
        boxShadow: "0 2px 6px rgba(17, 24, 39, 0.1)"
      },
      "&:focus-visible": {
        outline: "none",
        boxShadow: "0 0 0 2px color-mix(in oklab, var(--ds-color-primary) 18%, transparent), 0 4px 12px rgba(17, 24, 39, 0.12)"
      },
      "&:disabled": {
        opacity: 0.55,
        cursor: "not-allowed",
        transform: "none",
        boxShadow: "none"
      },
      "@media (prefers-reduced-motion: reduce)": {
        transition: "border-color .16s ease, box-shadow .16s ease, background-color .16s ease, color .16s ease",
        "&:hover": {
          transform: "none"
        },
        "&:active": {
          transform: "none"
        }
      }
    })
    .variant("controlSize", props.controlSize ?? props.size ?? "md", {
      sm: { width: "2rem", height: "2rem", fontSize: "0.8rem" },
      md: { width: "2.35rem", height: "2.35rem", fontSize: "0.92rem" },
      lg: { width: "2.75rem", height: "2.75rem", fontSize: "1.02rem" }
    })
    .variant("tone", props.tone ?? "neutral", {
      neutral: {
        borderColor: "color-mix(in oklab, var(--ds-color-border) 92%, #cfd6df)",
        color: "var(--ds-color-text-muted)",
        "&:hover": {
          borderColor: "color-mix(in oklab, var(--ds-color-primary) 34%, var(--ds-color-border))",
          color: "var(--ds-color-text)"
        }
      },
      primary: {
        borderColor: "color-mix(in oklab, var(--ds-color-primary) 48%, var(--ds-color-border))",
        color: "var(--ds-color-primary)",
        backgroundColor: "color-mix(in oklab, var(--ds-color-primary) 4%, var(--ds-color-surface))",
        "&:hover": {
          borderColor: "var(--ds-color-primary)",
          backgroundColor: "color-mix(in oklab, var(--ds-color-primary) 10%, var(--ds-color-surface))"
        }
      },
      danger: {
        borderColor: "color-mix(in oklab, var(--ds-color-danger) 42%, var(--ds-color-border))",
        color: "var(--ds-color-danger)",
        backgroundColor: "color-mix(in oklab, var(--ds-color-danger) 4%, var(--ds-color-surface))",
        "&:hover": {
          borderColor: "var(--ds-color-danger)",
          backgroundColor: "color-mix(in oklab, var(--ds-color-danger) 10%, var(--ds-color-surface))"
        }
      }
    })
    .end();
});

const IconContent = styled.span(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "1em",
      height: "1em",
      lineHeight: 1,
      "& > svg": {
        width: "1em",
        height: "1em",
        display: "block"
      }
    })
    .end();
});

export function IconButton(props: IconButtonProps) {
  const content = props.children ?? props.icon;

  return (
    <IconButtonRoot data-attr-name="IconButton"
      {...props}
      type={props.type ?? "button"}
      aria-label={props.label}
      title={props.label}
    >
      <IconContent>{content}</IconContent>
    </IconButtonRoot>
  );
}
