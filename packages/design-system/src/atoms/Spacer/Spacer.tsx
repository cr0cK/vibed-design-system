import type { HTMLAttributes } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";

export interface SpacerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const SpacerRoot = styled.div<SpacerProps>(function style(props) {
  return buildVariants<SpacerProps>(props)
    .css({
      width: "100%"
    })
    .variant("size", props.size ?? "md", {
      xs: { height: "1px" },
      sm: { height: "2px" },
      md: { height: "3px" },
      lg: { height: "4px" },
      xl: { height: "5px" }
    })
    .end();
});

/**
 * Atom component that renders the Spacer primitive.
 */
export function Spacer(props: SpacerProps) {
  return <SpacerRoot data-attr-name="Spacer" {...props} aria-hidden="true" />;
}
