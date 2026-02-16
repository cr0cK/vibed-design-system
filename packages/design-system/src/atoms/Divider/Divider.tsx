import type { HTMLAttributes } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  orientation?: "horizontal" | "vertical";
}

const DividerRoot = styled.hr<DividerProps>(function style(props) {
  return buildVariants<DividerProps>(props)
    .css({
      border: "none",
      margin: 0,
      backgroundColor: "var(--ds-color-border)"
    })
    .variant("orientation", props.orientation ?? "horizontal", {
      horizontal: { height: "1px", width: "100%" },
      vertical: { height: "100%", width: "1px" }
    })
    .end();
});

export function Divider(props: DividerProps) {
  return <DividerRoot {...props} />;
}
