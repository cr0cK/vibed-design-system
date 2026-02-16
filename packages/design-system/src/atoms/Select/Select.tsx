import type { ReactNode, SelectHTMLAttributes } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children?: ReactNode;
}

const SelectRoot = styled.select<SelectProps>(function style(props) {
  return buildVariants<SelectProps>(props)
    .css({
      width: "100%",
      borderRadius: "var(--ds-radius-sm)",
      border: "1px solid var(--ds-color-border)",
      padding: "0.55rem 0.75rem",
      fontFamily: "var(--ds-font-body)",
      backgroundColor: "var(--ds-color-surface)",
      color: "var(--ds-color-text)"
    })
    .end();
});

export function Select(props: SelectProps) {
  return <SelectRoot {...props}>{props.children}</SelectRoot>;
}
