import type { HTMLAttributes, ReactNode } from "react";
import { useEffect, useId, useState } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";

export type TooltipPlacement =
  | "top"
  | "top-left"
  | "top-right"
  | "bottom"
  | "bottom-left"
  | "bottom-right"
  | "left"
  | "right";

export interface TooltipProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  tooltipContent: ReactNode;
  placement?: TooltipPlacement;
}

const Root = styled.span(function style() {
  return buildVariants<Record<string, never>>({})
    .css({ position: "relative", display: "inline-flex" })
    .end();
});

interface BubbleProps {
  placement: TooltipPlacement;
}

const Bubble = styled.span<BubbleProps>(function style(props) {
  return buildVariants<BubbleProps>(props)
    .css({
      position: "absolute",
      backgroundColor: "var(--ds-color-text)",
      color: "var(--ds-color-surface)",
      borderRadius: "var(--ds-radius-sm)",
      padding: "0.35rem 0.5rem",
      fontSize: "0.75rem",
      whiteSpace: "nowrap",
      zIndex: 20,
      pointerEvents: "none",
      animation: "ds-tooltip-in .14s ease-out",
      "@keyframes ds-tooltip-in": {
        from: { opacity: 0 },
        to: { opacity: 1 }
      },
      "@media (prefers-reduced-motion: reduce)": {
        animation: "none"
      }
    })
    .variant("placement", props.placement, {
      top: { bottom: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)" },
      "top-left": { bottom: "calc(100% + 8px)", left: 0 },
      "top-right": { bottom: "calc(100% + 8px)", right: 0 },
      bottom: { top: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)" },
      "bottom-left": { top: "calc(100% + 8px)", left: 0 },
      "bottom-right": { top: "calc(100% + 8px)", right: 0 },
      left: { right: "calc(100% + 8px)", top: "50%", transform: "translateY(-50%)" },
      right: { left: "calc(100% + 8px)", top: "50%", transform: "translateY(-50%)" }
    })
    .end();
});

export function Tooltip(props: TooltipProps) {
  const [open, setOpen] = useState(false);
  const tooltipId = useId();
  const placement = props.placement ?? "top";

  useEffect(function closeOnEscape() {
    if (!open) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return function cleanup() {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <Root data-attr-name="Tooltip"
      className={props.className}
      onMouseEnter={function onMouseEnter() { setOpen(true); }}
      onMouseLeave={function onMouseLeave() { setOpen(false); }}
      onFocus={function onFocus() { setOpen(true); }}
      onBlur={function onBlur() { setOpen(false); }}
      onKeyDown={function onKeyDown(event) {
        if (event.key === "Escape") {
          event.preventDefault();
          setOpen(false);
        }
      }}
      aria-describedby={open ? tooltipId : undefined}
    >
      {props.children}
      {open ? (
        <Bubble id={tooltipId} role="tooltip" placement={placement}>
          {props.tooltipContent}
        </Bubble>
      ) : null}
    </Root>
  );
}
