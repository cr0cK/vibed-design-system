import type { ButtonHTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";
import { toBooleanVariant } from "../../utils/variantValue";

export interface SwitchProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  label?: ReactNode;
}

interface SwitchTrackProps {
  checked?: boolean;
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
      padding: "0.1rem"
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
    .variant("checked", toBooleanVariant(props.checked), {
      true: { transform: "translateX(1rem)" },
      false: { transform: "translateX(0)" }
    })
    .end();
});

const SwitchLabel = styled.label(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--ds-space-xs)"
    })
    .end();
});

export function Switch(props: SwitchProps) {
  return (
    <SwitchLabel>
      <SwitchTrack
        {...props}
        role="switch"
        aria-checked={props.checked}
        checked={props.checked}
        onClick={function onClick(event) {
          if (props.onClick) {
            props.onClick(event);
          }

          if (!event.defaultPrevented && props.onCheckedChange) {
            props.onCheckedChange(!props.checked);
          }
        }}
      >
        <SwitchThumb checked={props.checked} />
      </SwitchTrack>
      {props.label}
    </SwitchLabel>
  );
}
