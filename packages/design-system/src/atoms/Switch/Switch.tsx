import type { ButtonHTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";
import { toBooleanVariant } from "../../utils/variantValue";

export interface SwitchProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  label?: ReactNode;
  controlSize?: "sm" | "md" | "lg";
  size?: "sm" | "md" | "lg";
}

interface SwitchTrackProps {
  checked?: boolean;
  controlSize?: "sm" | "md" | "lg";
}

const SwitchTrack = styled.button<SwitchTrackProps>(function style(props) {
  return buildVariants<SwitchTrackProps>(props)
    .css({
      border: "none",
      cursor: "pointer",
      width: "2.4rem",
      height: "1.4rem",
      borderRadius: "var(--ds-radius-full)",
      position: "relative",
      padding: "0.1rem",
      transition: "background-color .16s ease, box-shadow .16s ease"
    })
    .variant("controlSize", props.controlSize ?? "md", {
      sm: { width: "2rem", height: "1.15rem", padding: "0.1rem" },
      md: { width: "2.4rem", height: "1.4rem", padding: "0.1rem" },
      lg: { width: "2.8rem", height: "1.6rem", padding: "0.12rem" }
    })
    .variant("checked", toBooleanVariant(props.checked), {
      true: { backgroundColor: "var(--ds-color-primary)" },
      false: { backgroundColor: "var(--ds-color-border)" }
    })
    .end();
});

const SwitchThumb = styled.span<SwitchTrackProps>(function style(props) {
  return buildVariants<SwitchTrackProps>(props)
    .css({
      display: "block",
      width: "1.2rem",
      height: "1.2rem",
      borderRadius: "var(--ds-radius-full)",
      backgroundColor: "var(--ds-color-surface)",
      transition: "transform .16s ease"
    })
    .variant("controlSize", props.controlSize ?? "md", {
      sm: { width: "0.95rem", height: "0.95rem" },
      md: { width: "1.2rem", height: "1.2rem" },
      lg: { width: "1.35rem", height: "1.35rem" }
    })
    .variant("checked", toBooleanVariant(props.checked), {
      true: {
        transform:
          props.controlSize === "sm"
            ? "translateX(0.85rem)"
            : props.controlSize === "lg"
              ? "translateX(1.2rem)"
              : "translateX(1rem)"
      },
      false: { transform: "translateX(0)" }
    })
    .end();
});

const SwitchLabel = styled.label<SwitchTrackProps>(function style(props) {
  return buildVariants<SwitchTrackProps>(props)
    .css({
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--ds-space-xs)",
      color: "var(--ds-color-text)",
      fontFamily: "var(--ds-font-body)"
    })
    .variant("controlSize", props.controlSize ?? "md", {
      sm: { gap: "var(--ds-space-xxs)", fontSize: "0.82rem", lineHeight: 1.35 },
      md: { gap: "var(--ds-space-xs)", fontSize: "0.875rem", lineHeight: 1.45 },
      lg: { gap: "var(--ds-space-sm)", fontSize: "0.95rem", lineHeight: 1.5 }
    })
    .end();
});

/**
 * Atom component that renders the Switch primitive.
 */
export function Switch(props: SwitchProps) {
  const controlSize = props.controlSize ?? props.size ?? "md";

  return (
    <SwitchLabel data-attr-name="Switch" controlSize={controlSize}>
      <SwitchTrack
        {...props}
        role="switch"
        aria-checked={props.checked}
        checked={props.checked}
        controlSize={controlSize}
        onClick={function onClick(event) {
          if (props.onClick) {
            props.onClick(event);
          }

          if (!event.defaultPrevented && props.onCheckedChange) {
            props.onCheckedChange(!props.checked);
          }
        }}
      >
        <SwitchThumb checked={props.checked} controlSize={controlSize} />
      </SwitchTrack>
      {props.label}
    </SwitchLabel>
  );
}
