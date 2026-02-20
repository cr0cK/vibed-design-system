import type { HTMLAttributes } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";
import { DatePicker } from "../../atoms/DatePicker/DatePicker";

export interface DateRangePickerProps extends HTMLAttributes<HTMLDivElement> {
  startValue?: string;
  endValue?: string;
  startPlaceholder?: string;
  endPlaceholder?: string;
  onRangeChange?: (nextStart: string, nextEnd: string) => void;
  controlSize?: "sm" | "md" | "lg";
}

interface LayoutProps {
  controlSize?: "sm" | "md" | "lg";
}

const Root = styled.div<LayoutProps>(function style(props) {
  return buildVariants<LayoutProps>(props)
    .css({
      display: "grid",
      gridTemplateColumns: "1fr auto 1fr",
      alignItems: "center",
      gap: "var(--ds-space-xs)"
    })
    .variant("controlSize", props.controlSize ?? "md", {
      sm: { gap: "var(--ds-space-xxs)" },
      md: { gap: "var(--ds-space-xs)" },
      lg: { gap: "var(--ds-space-sm)" }
    })
    .end();
});

const Separator = styled.span<LayoutProps>(function style(props) {
  return buildVariants<LayoutProps>(props)
    .css({ color: "var(--ds-color-text-muted)", fontFamily: "var(--ds-font-body)" })
    .variant("controlSize", props.controlSize ?? "md", {
      sm: { fontSize: "0.85rem" },
      md: { fontSize: "0.95rem" },
      lg: { fontSize: "1rem" }
    })
    .end();
});

/**
 * Molecule component that renders the DateRangePicker primitive.
 */
export function DateRangePicker(props: DateRangePickerProps) {
  return (
    <Root data-attr-name="DateRangePicker" className={props.className} controlSize={props.controlSize}>
      <DatePicker
        controlSize={props.controlSize}
        value={props.startValue}
        placeholder={props.startPlaceholder}
        onChange={function onChange(event) {
          if (props.onRangeChange) {
            props.onRangeChange(event.target.value, props.endValue ?? "");
          }
        }}
      />
      <Separator controlSize={props.controlSize}>to</Separator>
      <DatePicker
        controlSize={props.controlSize}
        value={props.endValue}
        placeholder={props.endPlaceholder}
        onChange={function onChange(event) {
          if (props.onRangeChange) {
            props.onRangeChange(props.startValue ?? "", event.target.value);
          }
        }}
      />
    </Root>
  );
}
