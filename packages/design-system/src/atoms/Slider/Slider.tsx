import type { InputHTMLAttributes } from "react";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";
import { Text } from "../Text/Text";

export interface SliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  controlSize?: "sm" | "md" | "lg";
  showValue?: boolean;
  onValueChange?: (nextValue: number) => void;
}

interface SliderLayoutProps {
  controlSize?: "sm" | "md" | "lg";
}

const Root = styled.div<SliderLayoutProps>(function style(props) {
  return buildVariants<SliderLayoutProps>(props)
    .css({
      display: "grid",
      gap: "var(--ds-space-xs)"
    })
    .variant("controlSize", props.controlSize ?? "md", {
      sm: { gap: "var(--ds-space-xxs)" },
      md: { gap: "var(--ds-space-xs)" },
      lg: { gap: "var(--ds-space-sm)" }
    })
    .end();
});

const SliderInput = styled.input<SliderLayoutProps>(function style(props) {
  return buildVariants<SliderLayoutProps>(props)
    .css({
      width: "100%",
      appearance: "none",
      background: "transparent",
      cursor: "pointer",
      "&::-webkit-slider-runnable-track": {
        height: "0.4rem",
        backgroundColor: "color-mix(in oklab, var(--ds-color-primary) 18%, var(--ds-color-surface-muted))",
        borderRadius: "var(--ds-radius-full)"
      },
      "&::-webkit-slider-thumb": {
        appearance: "none",
        width: "1rem",
        height: "1rem",
        marginTop: "-0.3rem",
        borderRadius: "var(--ds-radius-full)",
        border: "2px solid var(--ds-color-surface)",
        backgroundColor: "var(--ds-color-primary)",
        boxShadow: "var(--ds-shadow-sm)"
      },
      "&::-moz-range-track": {
        height: "0.4rem",
        backgroundColor: "color-mix(in oklab, var(--ds-color-primary) 18%, var(--ds-color-surface-muted))",
        borderRadius: "var(--ds-radius-full)"
      },
      "&::-moz-range-thumb": {
        width: "1rem",
        height: "1rem",
        border: "2px solid var(--ds-color-surface)",
        borderRadius: "var(--ds-radius-full)",
        backgroundColor: "var(--ds-color-primary)",
        boxShadow: "var(--ds-shadow-sm)"
      },
      "&:focus-visible": {
        outline: "none"
      },
      "&:focus-visible::-webkit-slider-thumb": {
        boxShadow: "0 0 0 3px color-mix(in oklab, var(--ds-color-primary) 24%, transparent)"
      },
      "&:focus-visible::-moz-range-thumb": {
        boxShadow: "0 0 0 3px color-mix(in oklab, var(--ds-color-primary) 24%, transparent)"
      }
    })
    .variant("controlSize", props.controlSize ?? "md", {
      sm: {
        "&::-webkit-slider-runnable-track": { height: "0.3rem" },
        "&::-webkit-slider-thumb": { width: "0.85rem", height: "0.85rem", marginTop: "-0.28rem" },
        "&::-moz-range-track": { height: "0.3rem" },
        "&::-moz-range-thumb": { width: "0.85rem", height: "0.85rem" }
      },
      md: {
        "&::-webkit-slider-runnable-track": { height: "0.4rem" },
        "&::-webkit-slider-thumb": { width: "1rem", height: "1rem", marginTop: "-0.3rem" },
        "&::-moz-range-track": { height: "0.4rem" },
        "&::-moz-range-thumb": { width: "1rem", height: "1rem" }
      },
      lg: {
        "&::-webkit-slider-runnable-track": { height: "0.5rem" },
        "&::-webkit-slider-thumb": { width: "1.1rem", height: "1.1rem", marginTop: "-0.3rem" },
        "&::-moz-range-track": { height: "0.5rem" },
        "&::-moz-range-thumb": { width: "1.1rem", height: "1.1rem" }
      }
    })
    .end();
});

export function Slider(props: SliderProps) {
  const controlSize = props.controlSize ?? "md";
  const minimumValue = props.min !== undefined ? Number(props.min) : 0;
  const [internalValue, setInternalValue] = useState<number>(props.defaultValue !== undefined ? Number(props.defaultValue) : minimumValue);

  useEffect(function syncExternalValue() {
    if (props.value !== undefined) {
      const numericValue = Number(props.value);
      if (!Number.isNaN(numericValue)) {
        setInternalValue(numericValue);
      }
    }
  }, [props.value]);

  const currentValue = props.value !== undefined ? Number(props.value) : internalValue;

  function updateValue(nextValue: number) {
    if (props.value === undefined) {
      setInternalValue(nextValue);
    }
    if (props.onValueChange) {
      props.onValueChange(nextValue);
    }
  }

  return (
    <Root data-attr-name="Slider" className={props.className} controlSize={controlSize}>
      <SliderInput
        {...props}
        controlSize={controlSize}
        type="range"
        value={Number.isNaN(currentValue) ? minimumValue : currentValue}
        onChange={function onChange(event) {
          if (props.onChange) {
            props.onChange(event);
          }
          updateValue(Number(event.target.value));
        }}
      />
      {props.showValue ? <Text size={controlSize === "lg" ? "md" : "sm"} tone="muted">Value: {Number.isNaN(currentValue) ? minimumValue : currentValue}</Text> : null}
    </Root>
  );
}
