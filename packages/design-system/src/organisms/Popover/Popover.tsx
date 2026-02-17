import type { HTMLAttributes, ReactNode } from "react";
import { useEffect, useId, useRef, useState } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";
import { Button } from "../../atoms/Button/Button";

export type PopoverPlacement = "bottom-left" | "bottom-right" | "top-left" | "top-right";

export interface PopoverProps extends HTMLAttributes<HTMLDivElement> {
  triggerLabel: string;
  popoverContent: ReactNode;
  placement?: PopoverPlacement;
}

interface RootProps {
  placement: PopoverPlacement;
}

const Root = styled.div<RootProps>(function style(props) {
  return buildVariants<RootProps>(props)
    .css({ position: "relative", display: "inline-block", width: "max-content", maxWidth: "100%" })
    .end();
});

interface SurfaceProps {
  placement: PopoverPlacement;
}

const Surface = styled.div<SurfaceProps>(function style(props) {
  return buildVariants<SurfaceProps>(props)
    .css({
      position: "absolute",
      minWidth: "14rem",
      border: "1px solid var(--ds-color-border)",
      borderRadius: "var(--ds-radius-md)",
      backgroundColor: "var(--ds-color-surface)",
      boxShadow: "var(--ds-shadow-sm)",
      padding: "var(--ds-space-sm)",
      zIndex: 30,
      animation: "ds-popover-in .16s ease-out",
      "@keyframes ds-popover-in": {
        from: { opacity: 0, transform: "translateY(-4px) scale(0.985)" },
        to: { opacity: 1, transform: "translateY(0) scale(1)" }
      },
      "@media (prefers-reduced-motion: reduce)": {
        animation: "none"
      }
    })
    .variant("placement", props.placement, {
      "bottom-left": { top: "calc(100% + 8px)", left: 0, transformOrigin: "top left" },
      "bottom-right": { top: "calc(100% + 8px)", right: 0, transformOrigin: "top right" },
      "top-left": { bottom: "calc(100% + 8px)", left: 0, transformOrigin: "bottom left" },
      "top-right": { bottom: "calc(100% + 8px)", right: 0, transformOrigin: "bottom right" }
    })
    .end();
});

export function Popover(props: PopoverProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const surfaceRef = useRef<HTMLDivElement | null>(null);
  const popoverId = useId();
  const placement = props.placement ?? "bottom-left";

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
      placement={placement}
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
      {open ? (
        <Surface ref={surfaceRef} id={popoverId} role="dialog" tabIndex={-1} placement={placement}>
          {props.popoverContent}
        </Surface>
      ) : null}
    </Root>
  );
}
