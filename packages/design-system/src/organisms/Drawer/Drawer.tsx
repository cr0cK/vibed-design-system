import type { HTMLAttributes, ReactNode } from "react";
import { useEffect, useId, useRef } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";
import { Heading } from "../../atoms/Heading/Heading";
import { Portal } from "../../utilities/Portal/Portal";
import { FocusTrap } from "../../utilities/FocusTrap/FocusTrap";
import { ClickOutside } from "../../utilities/ClickOutside/ClickOutside";

export interface DrawerProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  side?: "left" | "right";
  title?: string;
  children?: ReactNode;
  onClose: () => void;
  closeOnEscape?: boolean;
  showCloseIcon?: boolean;
  portalTarget?: HTMLElement | null;
  overlayMode?: "viewport" | "container";
}

interface PanelProps {
  side?: "left" | "right";
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
      backgroundColor: "rgba(0, 0, 0, 0.28)",
      zIndex: 40,
      animation: "ds-drawer-backdrop-in .18s ease-out",
      "@keyframes ds-drawer-backdrop-in": {
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
  return buildVariants<PanelProps>(props)
    .css({
      position: "relative",
      top: 0,
      height: "100vh",
      width: "min(22rem, 92vw)",
      border: "1px solid var(--ds-color-border)",
      backgroundColor: "var(--ds-color-surface)",
      boxShadow: "var(--ds-shadow-md)",
      zIndex: 41,
      padding: "var(--ds-space-lg)",
      display: "grid",
      gap: "var(--ds-space-md)",
      alignContent: "start",
      willChange: "transform, opacity",
      animationTimingFunction: "cubic-bezier(.2,.8,.2,1)",
      animationDuration: ".22s",
      animationFillMode: "both",
      "@keyframes ds-drawer-in-right": {
        from: { opacity: 0, transform: "translateX(18px)" },
        to: { opacity: 1, transform: "translateX(0)" }
      },
      "@keyframes ds-drawer-in-left": {
        from: { opacity: 0, transform: "translateX(-18px)" },
        to: { opacity: 1, transform: "translateX(0)" }
      },
      "@media (prefers-reduced-motion: reduce)": {
        animation: "none"
      }
    })
    .variant("overlayMode", props.overlayMode ?? "viewport", {
      viewport: { position: "fixed", height: "100vh" },
      container: { position: "absolute", height: "100%" }
    })
    .variant("side", props.side ?? "right", {
      left: { left: 0, animationName: "ds-drawer-in-left" },
      right: { right: 0, animationName: "ds-drawer-in-right" }
    })
    .end();
});

const CloseIconButton = styled.button(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      position: "absolute",
      top: "0.6rem",
      right: "0.6rem",
      width: "1.5rem",
      height: "1.5rem",
      borderRadius: "var(--ds-radius-sm)",
      border: "none",
      backgroundColor: "transparent",
      color: "var(--ds-color-text-muted)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.15rem",
      lineHeight: 1,
      cursor: "pointer",
      transition: "background-color .14s ease, color .14s ease",
      "&:hover": {
        color: "var(--ds-color-text)",
        backgroundColor: "color-mix(in oklab, var(--ds-color-primary) 10%, transparent)"
      },
      "&:focus-visible": {
        outline: "none",
        boxShadow: "0 0 0 2px color-mix(in oklab, var(--ds-color-primary) 20%, transparent)"
      }
    })
    .end();
});

export function Drawer(props: DrawerProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const iconCloseButtonRef = useRef<HTMLButtonElement | null>(null);
  const titleId = useId();
  const overlayMode = props.overlayMode ?? "viewport";
  const showCloseIcon = props.showCloseIcon ?? true;
  const initialFocusRef = showCloseIcon ? iconCloseButtonRef : undefined;

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
  }, [props.open, props.closeOnEscape, props.onClose]);

  if (!props.open) {
    return null;
  }

  const content = (
      <Backdrop overlayMode={overlayMode}>
        <ClickOutside onClickOutside={props.onClose}>
          <FocusTrap active initialFocusRef={initialFocusRef}>
            <Panel
              data-attr-name="Drawer"
              ref={panelRef}
              className={props.className}
              overlayMode={overlayMode}
              side={props.side ?? "right"}
              role="dialog"
              aria-modal="true"
              aria-labelledby={props.title ? titleId : undefined}
              tabIndex={-1}
              id={props.id}
              style={props.style}
              aria-label={props["aria-label"]}
              aria-describedby={props["aria-describedby"]}
            >
              {showCloseIcon ? (
                <CloseIconButton
                  ref={iconCloseButtonRef}
                  type="button"
                  aria-label="Close drawer"
                  title="Close"
                  onClick={props.onClose}
                >
                  ×
                </CloseIconButton>
              ) : null}
              {props.title ? <Heading id={titleId} level={4}>{props.title}</Heading> : null}
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
