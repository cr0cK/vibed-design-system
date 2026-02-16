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
      minWidth: 0,
      boxSizing: "border-box",
      borderRadius: "var(--ds-radius-sm)",
      border: "1px solid var(--ds-color-border)",
      padding: "0.6rem 2.25rem 0.6rem 0.75rem",
      fontSize: "0.95rem",
      fontFamily: "var(--ds-font-body)",
      backgroundColor: "var(--ds-color-surface)",
      color: "var(--ds-color-text)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      appearance: "none",
      backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none' stroke='%236e737c' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 8l4 4 4-4'/%3E%3C/svg%3E\")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "0.9rem 0.9rem",
      backgroundPosition: "right 0.95rem center"
    })
    .end();
});

export function Select(props: SelectProps) {
  return <SelectRoot {...props}>{props.children}</SelectRoot>;
}
