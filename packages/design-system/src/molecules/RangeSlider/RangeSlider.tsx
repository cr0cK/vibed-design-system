import type { HTMLAttributes } from "react";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";
import { Text } from "../../atoms/Text/Text";

export interface RangeSliderProps extends Omit<HTMLAttributes<HTMLDivElement>, "defaultValue" | "value"> {
  min?: number;
  max?: number;
  step?: number;
  value?: [number, number];
  defaultValue?: [number, number];
  onValueChange?: (nextValue: [number, number]) => void;
  controlSize?: "sm" | "md" | "lg";
}

interface LayoutProps {
  controlSize?: "sm" | "md" | "lg";
}

const Root = styled.div<LayoutProps>(function style(props) {
  return buildVariants<LayoutProps>(props)
    .css({ display: "grid", gap: "var(--ds-space-xs)" })
    .variant("controlSize", props.controlSize ?? "md", {
      sm: { gap: "var(--ds-space-xxs)" },
      md: { gap: "var(--ds-space-xs)" },
      lg: { gap: "var(--ds-space-sm)" }
    })
    .end();
});

const TrackWrap = styled.div(function style() {
  return buildVariants<Record<string, never>>({})
    .css({ position: "relative", height: "1.4rem", display: "grid", alignItems: "center" })
    .end();
});

const TrackBase = styled.div(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      height: "0.42rem",
      borderRadius: "var(--ds-radius-full)",
      backgroundColor: "var(--ds-color-surface-muted)",
      width: "100%"
    })
    .end();
});

interface TrackFillProps {
  startPercent: number;
  endPercent: number;
}

const TrackFill = styled.div<TrackFillProps>(function style(props) {
  return buildVariants<TrackFillProps>(props)
    .css({
      position: "absolute",
      height: "0.42rem",
      borderRadius: "var(--ds-radius-full)",
      backgroundColor: "var(--ds-color-primary)",
      left: `${props.startPercent}%`,
      width: `${Math.max(0, props.endPercent - props.startPercent)}%`
    })
    .end();
});

const RangeInput = styled.input(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      position: "absolute",
      width: "100%",
      height: "1.4rem",
      pointerEvents: "none",
      appearance: "none",
      background: "transparent",
      margin: 0,
      "&::-webkit-slider-thumb": {
        pointerEvents: "all",
        appearance: "none",
        width: "0.95rem",
        height: "0.95rem",
        borderRadius: "var(--ds-radius-full)",
        border: "2px solid var(--ds-color-surface)",
        backgroundColor: "var(--ds-color-primary)",
        boxShadow: "var(--ds-shadow-sm)"
      },
      "&::-moz-range-thumb": {
        pointerEvents: "all",
        width: "0.95rem",
        height: "0.95rem",
        borderRadius: "var(--ds-radius-full)",
        border: "2px solid var(--ds-color-surface)",
        backgroundColor: "var(--ds-color-primary)",
        boxShadow: "var(--ds-shadow-sm)"
      }
    })
    .end();
});

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function RangeSlider(props: RangeSliderProps) {
  const min = props.min ?? 0;
  const max = props.max ?? 100;
  const step = props.step ?? 1;
  const [internalRange, setInternalRange] = useState<[number, number]>(props.defaultValue ?? [min, max]);

  useEffect(function syncControlled() {
    if (props.value) {
      setInternalRange(props.value);
    }
  }, [props.value]);

  const range = props.value ?? internalRange;
  const safeStart = clamp(Math.min(range[0], range[1]), min, max);
  const safeEnd = clamp(Math.max(range[0], range[1]), min, max);
  const startPercent = ((safeStart - min) / (max - min || 1)) * 100;
  const endPercent = ((safeEnd - min) / (max - min || 1)) * 100;

  function commit(nextStart: number, nextEnd: number) {
    const finalRange: [number, number] = [clamp(nextStart, min, max), clamp(nextEnd, min, max)];
    if (!props.value) {
      setInternalRange(finalRange);
    }
    if (props.onValueChange) {
      props.onValueChange(finalRange);
    }
  }

  return (
    <Root className={props.className} controlSize={props.controlSize}>
      <TrackWrap>
        <TrackBase />
        <TrackFill startPercent={startPercent} endPercent={endPercent} />
        <RangeInput
          type="range"
          min={min}
          max={max}
          step={step}
          value={safeStart}
          onChange={function onChange(event) {
            const nextValue = Math.min(Number(event.target.value), safeEnd);
            commit(nextValue, safeEnd);
          }}
          aria-label="Minimum value"
        />
        <RangeInput
          type="range"
          min={min}
          max={max}
          step={step}
          value={safeEnd}
          onChange={function onChange(event) {
            const nextValue = Math.max(Number(event.target.value), safeStart);
            commit(safeStart, nextValue);
          }}
          aria-label="Maximum value"
        />
      </TrackWrap>
      <Text size="sm" tone="muted">{safeStart} - {safeEnd}</Text>
    </Root>
  );
}
