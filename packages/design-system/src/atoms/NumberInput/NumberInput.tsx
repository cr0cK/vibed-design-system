import type { InputHTMLAttributes } from "react";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";

export interface NumberInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  controlSize?: "sm" | "md" | "lg";
  onValueChange?: (nextValue: number) => void;
}

interface NumberInputLayoutProps {
  controlSize?: "sm" | "md" | "lg";
}

const Root = styled.div<NumberInputLayoutProps>(function style(props) {
  return buildVariants<NumberInputLayoutProps>(props)
    .css({
      width: "100%",
      minWidth: 0,
      display: "grid",
      gridTemplateColumns: "auto 1fr auto",
      alignItems: "center",
      border: "1px solid var(--ds-color-border)",
      backgroundColor: "var(--ds-color-surface)",
      borderRadius: "var(--ds-radius-sm)",
      overflow: "hidden",
      transition: "border-color .16s ease, box-shadow .16s ease",
      "&:focus-within": {
        borderColor: "var(--ds-color-primary)",
        boxShadow: "0 0 0 2px color-mix(in oklab, var(--ds-color-primary) 20%, transparent)"
      }
    })
    .end();
});

const InputElement = styled.input<NumberInputLayoutProps>(function style(props) {
  return buildVariants<NumberInputLayoutProps>(props)
    .css({
      border: "none",
      outline: "none",
      backgroundColor: "transparent",
      color: "var(--ds-color-text)",
      fontFamily: "var(--ds-font-body)",
      width: "100%",
      minWidth: 0,
      textAlign: "center",
      appearance: "textfield",
      "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
        appearance: "none",
        margin: 0
      }
    })
    .variant("controlSize", props.controlSize ?? "md", {
      sm: { fontSize: "0.85rem", padding: "0.4rem 0.35rem", minHeight: "2rem" },
      md: { fontSize: "0.92rem", padding: "0.52rem 0.45rem", minHeight: "2.25rem" },
      lg: { fontSize: "1rem", padding: "0.65rem 0.5rem", minHeight: "2.5rem" }
    })
    .end();
});

const StepButton = styled.button<NumberInputLayoutProps>(function style(props) {
  return buildVariants<NumberInputLayoutProps>(props)
    .css({
      border: "none",
      backgroundColor: "var(--ds-color-surface-muted)",
      color: "var(--ds-color-text)",
      cursor: "pointer",
      fontFamily: "var(--ds-font-body)",
      fontWeight: 600,
      minWidth: "2rem",
      transition: "background-color .14s ease",
      "&:hover": {
        backgroundColor: "color-mix(in oklab, var(--ds-color-primary) 10%, var(--ds-color-surface-muted))"
      },
      "&:disabled": {
        cursor: "not-allowed",
        color: "var(--ds-color-text-muted)"
      }
    })
    .variant("controlSize", props.controlSize ?? "md", {
      sm: { minWidth: "1.8rem", fontSize: "0.92rem" },
      md: { minWidth: "2rem", fontSize: "1rem" },
      lg: { minWidth: "2.2rem", fontSize: "1.05rem" }
    })
    .end();
});

function clampValue(nextValue: number, minValue?: number, maxValue?: number): number {
  let clampedValue = nextValue;
  if (minValue !== undefined) {
    clampedValue = Math.max(minValue, clampedValue);
  }
  if (maxValue !== undefined) {
    clampedValue = Math.min(maxValue, clampedValue);
  }
  return clampedValue;
}

export function NumberInput(props: NumberInputProps) {
  const controlSize = props.controlSize ?? "md";
  const stepValue = props.step !== undefined ? Number(props.step) : 1;
  const [internalValue, setInternalValue] = useState<number>(props.defaultValue !== undefined ? Number(props.defaultValue) : Number(props.min ?? 0));

  useEffect(function syncExternalValue() {
    if (props.value !== undefined) {
      const numericValue = Number(props.value);
      if (!Number.isNaN(numericValue)) {
        setInternalValue(numericValue);
      }
    }
  }, [props.value]);

  const currentValue = props.value !== undefined ? Number(props.value) : internalValue;

  function commitValue(nextValue: number) {
    const clampedValue = clampValue(nextValue, props.min !== undefined ? Number(props.min) : undefined, props.max !== undefined ? Number(props.max) : undefined);
    if (props.value === undefined) {
      setInternalValue(clampedValue);
    }
    if (props.onValueChange) {
      props.onValueChange(clampedValue);
    }
  }

  return (
    <Root className={props.className} controlSize={controlSize}>
      <StepButton
        type="button"
        controlSize={controlSize}
        aria-label="Decrease value"
        onClick={function onClick() {
          commitValue((Number.isNaN(currentValue) ? 0 : currentValue) - stepValue);
        }}
        disabled={props.disabled}
      >
        -
      </StepButton>
      <InputElement
        {...props}
        controlSize={controlSize}
        type="number"
        value={Number.isNaN(currentValue) ? "" : String(currentValue)}
        onChange={function onChange(event) {
          if (props.onChange) {
            props.onChange(event);
          }
          const parsedValue = Number(event.target.value);
          if (!Number.isNaN(parsedValue)) {
            commitValue(parsedValue);
          }
        }}
      />
      <StepButton
        type="button"
        controlSize={controlSize}
        aria-label="Increase value"
        onClick={function onClick() {
          commitValue((Number.isNaN(currentValue) ? 0 : currentValue) + stepValue);
        }}
        disabled={props.disabled}
      >
        +
      </StepButton>
    </Root>
  );
}
