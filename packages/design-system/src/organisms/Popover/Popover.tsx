import type { HTMLAttributes, ReactNode } from "react";
import { useEffect, useId, useRef, useState } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";
import { Button } from "../../atoms/Button/Button";

export interface PopoverProps extends HTMLAttributes<HTMLDivElement> {
  triggerLabel: string;
  popoverContent: ReactNode;
}

const Root = styled.div(function style() {
  return buildVariants<Record<string, never>>({})
    .css({ position: "relative", display: "inline-block" })
    .end();
});

const Surface = styled.div(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      position: "absolute",
      top: "calc(100% + 8px)",
      right: 0,
      minWidth: "14rem",
      border: "1px solid var(--ds-color-border)",
      borderRadius: "var(--ds-radius-md)",
      backgroundColor: "var(--ds-color-surface)",
      boxShadow: "var(--ds-shadow-sm)",
      padding: "var(--ds-space-sm)",
      zIndex: 30,
      transformOrigin: "top right",
      animation: "ds-popover-in .16s ease-out",
      "@keyframes ds-popover-in": {
        from: { opacity: 0, transform: "translateY(-4px) scale(0.98)" },
        to: { opacity: 1, transform: "translateY(0) scale(1)" }
      },
      "@media (prefers-reduced-motion: reduce)": {
        animation: "none"
      }
    })
    .end();
});

export function Popover(props: PopoverProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const surfaceRef = useRef<HTMLDivElement | null>(null);
  const popoverId = useId();

  useEffect(function closeOnOutsideClick() {
    if (!open) {
      return;
    }

    function onMouseDown(event: MouseEvent) {
      if (rootRef.current && event.target instanceof Node && !rootRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", onMouseDown);
    return function cleanup() {
      document.removeEventListener("mousedown", onMouseDown);
    };
  }, [open]);

  useEffect(function focusSurfaceOnOpen() {
    if (open) {
      surfaceRef.current?.focus();
    }
  }, [open]);

  return (
    <Root
      ref={rootRef}
      className={props.className}
      onKeyDown={function onKeyDown(event) {
        if (event.key === "Escape") {
          event.preventDefault();
          setOpen(false);
        }
      }}
    >
      <Button
        tone="neutral"
        size="sm"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={popoverId}
        onClick={function onClick() {
          setOpen(!open);
        }}
      >
        {props.triggerLabel}
      </Button>
      {open ? <Surface ref={surfaceRef} id={popoverId} role="dialog" tabIndex={-1}>{props.popoverContent}</Surface> : null}
    </Root>
  );
}
