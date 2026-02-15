import type { ButtonHTMLAttributes, ReactNode } from "react";
import { css, cx } from "@emotion/css";
import { buildVariants } from "../../utils/buildVariants";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  label: string;
  size?: "sm" | "md" | "lg";
  tone?: "neutral" | "primary" | "danger";
}

function getIconButtonStyle(props: IconButtonProps){
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
      transition: "transform .15s ease, border-color .15s ease"
    })
    .variant("size", props.size ?? "md", {
      sm: { width: "1.9rem", height: "1.9rem" },
      md: { width: "2.2rem", height: "2.2rem" },
      lg: { width: "2.6rem", height: "2.6rem" }
    })
    .variant("tone", props.tone ?? "neutral", {
      neutral: { borderColor: "var(--ds-color-border)" },
      primary: { borderColor: "var(--ds-color-primary)", color: "var(--ds-color-primary)" },
      danger: { borderColor: "var(--ds-color-danger)", color: "var(--ds-color-danger)" }
    })
    .end();
}

export function IconButton(props: IconButtonProps) {
  const className: string = cx(css(getIconButtonStyle(props)), props.className);

  return (
    <button
      {...props}
      type={props.type ?? "button"}
      className={className}
      aria-label={props.label}
      title={props.label}
    >
      {props.icon}
    </button>
  );
}
