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
      borderRadius: "var(--ds-radius-md)",
      transition: "border-color .16s ease, box-shadow .16s ease",
      "&:focus-within": {
        borderColor: "var(--ds-color-primary)",
        boxShadow: "0 0 0 2px color-mix(in oklab, var(--ds-color-primary) 20%, transparent)"
      }
    })
    .variant("controlSize", props.controlSize ?? "md", {
      sm: { minHeight: "2rem" },
      md: { minHeight: "2.3rem" },
      lg: { minHeight: "2.7rem" }
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
      sm: { fontSize: "0.84rem", padding: "0.2rem 0.35rem" },
      md: { fontSize: "0.92rem", padding: "0.28rem 0.45rem" },
      lg: { fontSize: "1rem", padding: "0.36rem 0.5rem" }
    })
    .end();
});

const StepButton = styled.button<NumberInputLayoutProps>(function style(props) {
  return buildVariants<NumberInputLayoutProps>(props)
    .css({
      border: "1px solid transparent",
      backgroundColor: "transparent",
      color: "var(--ds-color-text-muted)",
      cursor: "pointer",
      fontFamily: "var(--ds-font-body)",
      fontWeight: 600,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "0.45rem",
      marginInline: "0.3rem",
      marginBlock: "0.2rem",
      lineHeight: 1,
      transition: "background-color .14s ease, border-color .14s ease, color .14s ease",
      "&:hover": {
        backgroundColor: "color-mix(in oklab, var(--ds-color-primary) 8%, var(--ds-color-surface))",
        borderColor: "color-mix(in oklab, var(--ds-color-primary) 22%, var(--ds-color-border))",
        color: "var(--ds-color-text)"
      },
      "&:focus-visible": {
        outline: "none",
        borderColor: "var(--ds-color-primary)",
        boxShadow: "0 0 0 2px color-mix(in oklab, var(--ds-color-primary) 18%, transparent)"
      },
      "&:disabled": {
        cursor: "not-allowed",
        color: "var(--ds-color-text-muted)",
        borderColor: "transparent",
        backgroundColor: "transparent"
      }
    })
    .variant("controlSize", props.controlSize ?? "md", {
      sm: { width: "1.35rem", height: "1.35rem", fontSize: "0.9rem" },
      md: { width: "1.55rem", height: "1.55rem", fontSize: "1rem" },
      lg: { width: "1.75rem", height: "1.75rem", fontSize: "1.08rem" }
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

/**
 * Atom component that renders the NumberInput primitive.
 */
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
    <Root data-attr-name="NumberInput" className={props.className} controlSize={controlSize}>
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
