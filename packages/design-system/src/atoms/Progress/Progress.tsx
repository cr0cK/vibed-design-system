import type { HTMLAttributes } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  tone?: "primary" | "success" | "danger";
  controlSize?: "sm" | "md" | "lg";
  size?: "sm" | "md" | "lg";
}

interface ProgressLayoutProps {
  tone?: "primary" | "success" | "danger";
  controlSize?: "sm" | "md" | "lg";
}

const Track = styled.div<ProgressLayoutProps>(function style(props) {
  return buildVariants<ProgressLayoutProps>(props)
    .css({
      width: "100%",
      backgroundColor: "var(--ds-color-surface-muted)",
      borderRadius: "var(--ds-radius-full)",
      overflow: "hidden"
    })
    .variant("controlSize", props.controlSize ?? "md", {
      sm: { height: "0.35rem" },
      md: { height: "0.5rem" },
      lg: { height: "0.65rem" }
    })
    .end();
});

interface IndicatorProps extends ProgressLayoutProps {
  percent: number;
}

const Indicator = styled.div<IndicatorProps>(function style(props) {
  return buildVariants<IndicatorProps>(props)
    .css({
      height: "100%",
      width: `${props.percent}%`,
      transition: "width .2s ease"
    })
    .variant("tone", props.tone ?? "primary", {
      primary: { backgroundColor: "var(--ds-color-primary)" },
      success: { backgroundColor: "var(--ds-color-success)" },
      danger: { backgroundColor: "var(--ds-color-danger)" }
    })
    .end();
});

function toPercent(value: number, maxValue: number): number {
  if (maxValue <= 0) {
    return 0;
  }
  const rawPercent = (value / maxValue) * 100;
  return Math.max(0, Math.min(100, rawPercent));
}

export function Progress(props: ProgressProps) {
  const maxValue = props.max ?? 100;
  const percent = toPercent(props.value, maxValue);
  const controlSize = props.controlSize ?? props.size ?? "md";

  return (
    <Track
      className={props.className}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={maxValue}
      aria-valuenow={Math.max(0, Math.min(maxValue, props.value))}
      controlSize={controlSize}
      tone={props.tone}
    >
      <Indicator percent={percent} tone={props.tone} controlSize={controlSize} />
    </Track>
  );
}
