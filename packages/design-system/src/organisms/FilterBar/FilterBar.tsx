import type { HTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";

export interface FilterBarProps extends HTMLAttributes<HTMLDivElement> {
  controls?: ReactNode;
  actions?: ReactNode;
}

const Root = styled.div(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--ds-space-sm)",
      width: "100%",
      border: "1px solid var(--ds-color-border)",
      borderRadius: "var(--ds-radius-md)",
      padding: "var(--ds-space-sm)",
      backgroundColor: "var(--ds-color-surface)"
    })
    .end();
});

const Left = styled.div(function style() {
  return buildVariants<Record<string, never>>({})
    .css({ display: "flex", alignItems: "center", gap: "var(--ds-space-xs)", flexWrap: "wrap", minWidth: 0 })
    .end();
});

const Right = styled.div(function style() {
  return buildVariants<Record<string, never>>({})
    .css({ display: "flex", alignItems: "center", gap: "var(--ds-space-xs)" })
    .end();
});

export function FilterBar(props: FilterBarProps) {
  return (
    <Root className={props.className}>
      <Left>{props.controls}</Left>
      <Right>{props.actions}</Right>
    </Root>
  );
}
