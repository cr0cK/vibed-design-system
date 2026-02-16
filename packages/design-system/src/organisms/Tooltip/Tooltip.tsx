import type { HTMLAttributes, ReactNode } from "react";
import { useEffect, useId, useState } from "react";
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
      zIndex: 20,
      pointerEvents: "none",
      animation: "ds-tooltip-in .14s ease-out",
      "@keyframes ds-tooltip-in": {
        from: { opacity: 0, transform: "translateX(-50%) translateY(4px)" },
        to: { opacity: 1, transform: "translateX(-50%) translateY(0)" }
      },
      "@media (prefers-reduced-motion: reduce)": {
        animation: "none"
      }
    })
    .end();
});

export function Tooltip(props: TooltipProps) {
  const [open, setOpen] = useState(false);
  const tooltipId = useId();

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
    <Root
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
      {open ? <Bubble id={tooltipId} role="tooltip">{props.tooltipContent}</Bubble> : null}
    </Root>
  );
}
