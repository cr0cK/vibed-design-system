import type { HTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";

export interface VisuallyHiddenProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
}

const Root = styled.span(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      border: 0,
      clip: "rect(0 0 0 0)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      whiteSpace: "nowrap",
      width: "1px"
    })
    .end();
});

/**
 * Utility component that renders the VisuallyHidden primitive.
 */
export function VisuallyHidden(props: VisuallyHiddenProps) {
  return <Root data-attr-name="VisuallyHidden" {...props}>{props.children}</Root>;
}
