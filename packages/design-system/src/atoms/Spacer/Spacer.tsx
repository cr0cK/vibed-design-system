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
      xs: { height: "var(--ds-space-xs)" },
      sm: { height: "var(--ds-space-sm)" },
      md: { height: "var(--ds-space-md)" },
      lg: { height: "var(--ds-space-lg)" },
      xl: { height: "var(--ds-space-xl)" }
    })
    .end();
});

export function Spacer(props: SpacerProps) {
  return <SpacerRoot {...props} aria-hidden="true" />;
}
