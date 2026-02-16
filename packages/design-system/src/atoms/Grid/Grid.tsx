import type { HTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  columns?: number;
  gap?: "xs" | "sm" | "md" | "lg";
}

const GridRoot = styled.div<GridProps>(function style(props) {
  return buildVariants<GridProps>(props)
    .css({
      display: "grid",
      gridTemplateColumns: `repeat(${props.columns ?? 2}, minmax(0, 1fr))`
    })
    .variant("gap", props.gap ?? "md", {
      xs: { gap: "var(--ds-space-xs)" },
      sm: { gap: "var(--ds-space-sm)" },
      md: { gap: "var(--ds-space-md)" },
      lg: { gap: "var(--ds-space-lg)" }
    })
    .end();
});

export function Grid(props: GridProps) {
  return <GridRoot {...props}>{props.children}</GridRoot>;
}
