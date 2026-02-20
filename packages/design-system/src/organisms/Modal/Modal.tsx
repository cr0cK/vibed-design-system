import type { HTMLAttributes, ReactNode } from "react";
import { useEffect, useId, useRef } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";
import { Heading } from "../../atoms/Heading/Heading";
import { Portal } from "../../utilities/Portal/Portal";
import { FocusTrap } from "../../utilities/FocusTrap/FocusTrap";
import { ClickOutside } from "../../utilities/ClickOutside/ClickOutside";

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  title?: string;
  children?: ReactNode;
  onClose: () => void;
  closeOnEscape?: boolean;
  showCloseIcon?: boolean;
  portalTarget?: HTMLElement | null;
}

const Backdrop = styled.div(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      position: "fixed",
      inset: 0,
      backgroundColor: "rgba(0, 0, 0, 0.35)",
      display: "grid",
      placeItems: "center",
      zIndex: 50,
      animation: "ds-modal-backdrop-in .18s ease-out",
      "@keyframes ds-modal-backdrop-in": {
        from: { opacity: 0 },
        to: { opacity: 1 }
      },
      "@media (prefers-reduced-motion: reduce)": {
        animation: "none"
      }
    })
    .end();
});

const Panel = styled.div(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      position: "relative",
      width: "min(32rem, 90vw)",
      borderRadius: "var(--ds-radius-lg)",
      border: "1px solid var(--ds-color-border)",
      backgroundColor: "var(--ds-color-surface)",
      boxShadow: "var(--ds-shadow-md)",
      padding: "var(--ds-space-lg)",
      display: "grid",
      gap: "var(--ds-space-md)",
      animation: "ds-modal-panel-in .2s cubic-bezier(.2,.8,.2,1)",
      transformOrigin: "top center",
      "@keyframes ds-modal-panel-in": {
        from: { opacity: 0, transform: "translateY(10px) scale(0.98)" },
        to: { opacity: 1, transform: "translateY(0) scale(1)" }
      },
      "@media (prefers-reduced-motion: reduce)": {
        animation: "none"
      }
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

/**
 * Organism component that renders the Modal primitive.
 */
export function Modal(props: ModalProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const iconCloseButtonRef = useRef<HTMLButtonElement | null>(null);
  const titleId = useId();
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
  }, [props.open, props.onClose, props.closeOnEscape]);

  if (!props.open) {
    return null;
  }

  return (
    <Portal target={props.portalTarget}>
      <Backdrop>
        <ClickOutside onClickOutside={props.onClose}>
          <FocusTrap active initialFocusRef={initialFocusRef}>
            <Panel
              data-attr-name="Modal"
              ref={panelRef}
              className={props.className}
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
                  aria-label="Close dialog"
                  title="Close"
                  onClick={props.onClose}
                >
                  ×
                </CloseIconButton>
              ) : null}
              <Heading id={props.title ? titleId : undefined} level={3}>{props.title ?? "Dialog"}</Heading>
              <div>{props.children}</div>
            </Panel>
          </FocusTrap>
        </ClickOutside>
      </Backdrop>
    </Portal>
  );
}
