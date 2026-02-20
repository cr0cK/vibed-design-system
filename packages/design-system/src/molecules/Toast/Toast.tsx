import type { HTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";
import { Button } from "../../atoms/Button/Button";

export type ToastTone = "neutral" | "success" | "danger";

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  heading: ReactNode;
  description?: ReactNode;
  tone?: ToastTone;
  onClose?: () => void;
}

const Root = styled.div<Pick<ToastProps, "tone">>(function style(props) {
  return buildVariants<Pick<ToastProps, "tone">>(props)
    .css({
      border: "1px solid var(--ds-color-border)",
      borderRadius: "var(--ds-radius-md)",
      backgroundColor: "var(--ds-color-surface)",
      boxShadow: "var(--ds-shadow-md)",
      padding: "var(--ds-space-sm)",
      display: "grid",
      gap: "var(--ds-space-xs)",
      minWidth: "16rem",
      maxWidth: "26rem"
    })
    .variant("tone", props.tone ?? "neutral", {
      neutral: { borderColor: "var(--ds-color-border)" },
      success: { borderColor: "color-mix(in oklab, var(--ds-color-success) 40%, var(--ds-color-border))" },
      danger: { borderColor: "color-mix(in oklab, var(--ds-color-danger) 45%, var(--ds-color-border))" }
    })
    .end();
});

const Header = styled.div(function style() {
  return buildVariants<Record<string, never>>({})
    .css({ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--ds-space-sm)" })
    .end();
});

const Title = styled.strong(function style() {
  return buildVariants<Record<string, never>>({})
    .css({ fontSize: "0.9rem", fontWeight: 600 })
    .end();
});

const Description = styled.p(function style() {
  return buildVariants<Record<string, never>>({})
    .css({ margin: 0, fontSize: "0.85rem", color: "var(--ds-color-text-muted)" })
    .end();
});

/**
 * Molecule component that renders the Toast primitive.
 */
export function Toast(props: ToastProps) {
  return (
    <Root data-attr-name="Toast" className={props.className} tone={props.tone} role="status">
      <Header>
        <Title>{props.heading}</Title>
        {props.onClose ? (
          <Button tone="neutral" size="sm" onClick={props.onClose}>Dismiss</Button>
        ) : null}
      </Header>
      {props.description ? <Description>{props.description}</Description> : null}
    </Root>
  );
}
