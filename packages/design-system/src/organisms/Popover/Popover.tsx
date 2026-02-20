import type { HTMLAttributes, ReactNode } from "react";
import { useEffect, useId, useRef, useState } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";
import { Button } from "../../atoms/Button/Button";
import { ClickOutside } from "../../utilities/ClickOutside/ClickOutside";

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
  const surfaceRef = useRef<HTMLDivElement | null>(null);
  const popoverId = useId();
  const placement = props.placement ?? "bottom-left";

  useEffect(function focusSurfaceOnOpen() {
    if (open) {
      surfaceRef.current?.focus();
    }
  }, [open]);

  return (
    <ClickOutside enabled={open} onClickOutside={function onClickOutside() { setOpen(false); }}>
      <Root
        data-attr-name="Popover"
        placement={placement}
        className={props.className}
        id={props.id}
        style={props.style}
        onKeyDown={function onKeyDown(event) {
          if (event.key === "Escape") {
            event.preventDefault();
            setOpen(false);
          }
          if (props.onKeyDown) {
            props.onKeyDown(event);
          }
        }}
        aria-label={props["aria-label"]}
        aria-labelledby={props["aria-labelledby"]}
        aria-describedby={props["aria-describedby"]}
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
    </ClickOutside>
  );
}
