import type { HTMLAttributes, ReactNode } from "react";
import { useState } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";

export interface TooltipProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  tooltipContent: ReactNode;
}

const Root = styled.span(function style() {
  return buildVariants<Record<string, never>>({})
    .css({ position: "relative", display: "inline-flex" })
    .end();
});

const Bubble = styled.span(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      position: "absolute",
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)",
      backgroundColor: "var(--ds-color-text)",
      color: "var(--ds-color-surface)",
      borderRadius: "var(--ds-radius-sm)",
      padding: "0.35rem 0.5rem",
      fontSize: "0.75rem",
      whiteSpace: "nowrap",
      zIndex: 20
    })
    .end();
});

export function Tooltip(props: TooltipProps) {
  const [open, setOpen] = useState(false);

  return (
    <Root
      className={props.className}
      onMouseEnter={function onMouseEnter() { setOpen(true); }}
      onMouseLeave={function onMouseLeave() { setOpen(false); }}
    >
      {props.children}
      {open ? <Bubble role="tooltip">{props.tooltipContent}</Bubble> : null}
    </Root>
  );
}
