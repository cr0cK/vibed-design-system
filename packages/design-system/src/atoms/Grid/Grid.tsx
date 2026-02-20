import type { HTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  columns?: number;
  template?: "equal" | "app-shell";
  gap?: "xs" | "sm" | "md" | "lg";
  minHeight?: "auto" | "screen";
}

const GridRoot = styled.div<GridProps>(function style(props) {
  const gridTemplateColumns = props.template === "app-shell"
    ? "240px minmax(0, 1fr) minmax(28rem, 40rem)"
    : `repeat(${props.columns ?? 2}, minmax(0, 1fr))`;

  return buildVariants<GridProps>(props)
    .css({
      display: "grid",
      gridTemplateColumns,
      ...(props.template === "app-shell"
        ? {
            "@media (max-width: 1200px)": {
              gridTemplateColumns: "220px minmax(0, 1fr)"
            },
            "@media (max-width: 860px)": {
              gridTemplateColumns: "1fr"
            }
          }
        : {})
    })
    .variant("gap", props.gap ?? "md", {
      xs: { gap: "var(--ds-space-xs)" },
      sm: { gap: "var(--ds-space-sm)" },
      md: { gap: "var(--ds-space-md)" },
      lg: { gap: "var(--ds-space-lg)" }
    })
    .variant("minHeight", props.minHeight ?? "auto", {
      auto: { minHeight: "auto" },
      screen: { minHeight: "100vh" }
    })
    .end();
});

/**
 * Atom component that renders the Grid primitive.
 */
export function Grid(props: GridProps) {
  return <GridRoot data-attr-name="Grid" {...props}>{props.children}</GridRoot>;
}
