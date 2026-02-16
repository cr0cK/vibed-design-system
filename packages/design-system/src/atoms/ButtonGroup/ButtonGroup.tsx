import type { HTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  direction?: "row" | "column";
  gap?: "xs" | "sm" | "md";
}

const ButtonGroupRoot = styled.div<ButtonGroupProps>(function style(props) {
  return buildVariants<ButtonGroupProps>(props)
    .css({
      display: "inline-flex"
    })
    .variant("direction", props.direction ?? "row", {
      row: { flexDirection: "row" },
      column: { flexDirection: "column" }
    })
    .variant("gap", props.gap ?? "xs", {
      xs: { gap: "var(--ds-space-xs)" },
      sm: { gap: "var(--ds-space-sm)" },
      md: { gap: "var(--ds-space-md)" }
    })
    .end();
});

export function ButtonGroup(props: ButtonGroupProps) {
  return <ButtonGroupRoot {...props}>{props.children}</ButtonGroupRoot>;
}
