import type { HTMLAttributes, ReactNode } from "react";
import { useEffect, useId, useRef } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";
import { Button } from "../../atoms/Button/Button";
import { Heading } from "../../atoms/Heading/Heading";
import { Portal } from "../../utilities/Portal/Portal";
import { FocusTrap } from "../../utilities/FocusTrap/FocusTrap";
import { ClickOutside } from "../../utilities/ClickOutside/ClickOutside";

export interface SheetProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  side?: "left" | "right" | "top" | "bottom";
  title?: string;
  children?: ReactNode;
  onClose: () => void;
  closeOnEscape?: boolean;
  portalTarget?: HTMLElement | null;
  overlayMode?: "viewport" | "container";
}

interface PanelProps {
  side?: "left" | "right" | "top" | "bottom";
  overlayMode?: "viewport" | "container";
}

interface BackdropProps {
  overlayMode?: "viewport" | "container";
}

const Backdrop = styled.div<BackdropProps>(function style(props) {
  return buildVariants<BackdropProps>(props)
    .css({
      position: "fixed",
      inset: 0,
      backgroundColor: "rgba(0,0,0,0.28)",
      zIndex: 60,
      animation: "ds-sheet-backdrop-in .18s ease-out",
      "@keyframes ds-sheet-backdrop-in": {
        from: { opacity: 0 },
        to: { opacity: 1 }
      },
      "@media (prefers-reduced-motion: reduce)": {
        animation: "none"
      }
    })
    .variant("overlayMode", props.overlayMode ?? "viewport", {
      viewport: { position: "fixed" },
      container: { position: "absolute" }
    })
    .end();
});

const Panel = styled.div<PanelProps>(function style(props) {
  const overlayMode = props.overlayMode ?? "viewport";

  return buildVariants<PanelProps>(props)
    .css({
      position: "fixed",
      backgroundColor: "var(--ds-color-surface)",
      border: "1px solid var(--ds-color-border)",
      boxShadow: "var(--ds-shadow-md)",
      zIndex: 61,
      padding: "var(--ds-space-md)",
      display: "grid",
      gap: "var(--ds-space-sm)",
      alignContent: "start",
      overflowY: "auto",
      willChange: "transform, opacity",
      animationDuration: ".24s",
      animationTimingFunction: "cubic-bezier(.2,.8,.2,1)",
      animationFillMode: "both",
      "@keyframes ds-sheet-in-right": {
        from: { opacity: 0, transform: "translateX(16px)" },
        to: { opacity: 1, transform: "translateX(0)" }
      },
      "@keyframes ds-sheet-in-left": {
        from: { opacity: 0, transform: "translateX(-16px)" },
        to: { opacity: 1, transform: "translateX(0)" }
      },
      "@keyframes ds-sheet-in-top": {
        from: { opacity: 0, transform: "translateY(-14px)" },
        to: { opacity: 1, transform: "translateY(0)" }
      },
      "@keyframes ds-sheet-in-bottom": {
        from: { opacity: 0, transform: "translateY(14px)" },
        to: { opacity: 1, transform: "translateY(0)" }
      },
      "@media (prefers-reduced-motion: reduce)": {
        animation: "none"
      }
    })
    .variant("overlayMode", props.overlayMode ?? "viewport", {
      viewport: { position: "fixed", maxHeight: "100dvh" },
      container: { position: "absolute" }
    })
    .variant("side", props.side ?? "right", {
      right: {
        top: 0,
        right: 0,
        bottom: 0,
        width: "min(26rem, 96vw)",
        height: overlayMode === "viewport" ? "100dvh" : "100%",
        animationName: "ds-sheet-in-right"
      },
      left: {
        top: 0,
        left: 0,
        bottom: 0,
        width: "min(26rem, 96vw)",
        height: overlayMode === "viewport" ? "100dvh" : "100%",
        animationName: "ds-sheet-in-left"
      },
      top: { top: 0, left: 0, right: 0, width: "100%", minHeight: "12rem", animationName: "ds-sheet-in-top" },
      bottom: { bottom: 0, left: 0, right: 0, width: "100%", minHeight: "12rem", animationName: "ds-sheet-in-bottom" }
    })
    .end();
});

/**
 * Organism component that renders the Sheet primitive.
 */
export function Sheet(props: SheetProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const titleId = useId();
  const overlayMode = props.overlayMode ?? "viewport";

  useEffect(function onOpenKeyboard() {
    if (!props.open) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && (props.closeOnEscape ?? true) && panelRef.current?.contains(document.activeElement)) {
        event.preventDefault();
        props.onClose();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return function cleanup() {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [props.closeOnEscape, props.onClose, props.open]);

  if (!props.open) {
    return null;
  }

  const content = (
      <Backdrop overlayMode={overlayMode}>
        <ClickOutside onClickOutside={props.onClose}>
          <FocusTrap active initialFocusRef={closeButtonRef}>
            <Panel
              data-attr-name="Sheet"
              ref={panelRef}
              className={props.className}
              overlayMode={overlayMode}
              side={props.side}
              role="dialog"
              aria-modal="true"
              aria-labelledby={props.title ? titleId : undefined}
              tabIndex={-1}
              id={props.id}
              style={props.style}
              aria-label={props["aria-label"]}
              aria-describedby={props["aria-describedby"]}
            >
              {props.title ? <Heading id={titleId} level={4}>{props.title}</Heading> : null}
              <Button ref={closeButtonRef} tone="neutral" size="sm" onClick={props.onClose}>Close</Button>
              {props.children}
            </Panel>
          </FocusTrap>
        </ClickOutside>
      </Backdrop>
  );

  if (overlayMode === "container") {
    if (props.portalTarget) {
      return <Portal target={props.portalTarget}>{content}</Portal>;
    }
    return content;
  }

  return <Portal target={props.portalTarget}>{content}</Portal>;
}
