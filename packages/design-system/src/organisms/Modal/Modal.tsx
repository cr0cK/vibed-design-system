import type { HTMLAttributes, KeyboardEvent as ReactKeyboardEvent, ReactNode } from "react";
import { useEffect, useId, useRef } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";
import { Button } from "../../atoms/Button/Button";
import { Heading } from "../../atoms/Heading/Heading";

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  title?: string;
  children?: ReactNode;
  onClose: () => void;
  closeOnEscape?: boolean;
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

export function Modal(props: ModalProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const previousFocusedRef = useRef<HTMLElement | null>(null);
  const titleId = useId();

  useEffect(function onOpenFocusAndKeyboard() {
    if (!props.open) {
      return;
    }

    previousFocusedRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;

    const panel = panelRef.current;
    const closeButton = closeButtonRef.current;
    if (closeButton) {
      closeButton.focus();
    } else if (panel) {
      panel.focus();
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && (props.closeOnEscape ?? true)) {
        event.preventDefault();
        props.onClose();
      }

      if (event.key !== "Tab") {
        return;
      }

      const root = panelRef.current;
      if (!root) {
        return;
      }

      const focusable = Array.from(
        root.querySelectorAll<HTMLElement>(
          "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
        )
      ).filter(function filterFocusable(node) {
        return !node.hasAttribute("disabled") && node.getAttribute("aria-hidden") !== "true";
      });

      if (focusable.length === 0) {
        event.preventDefault();
        root.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;
      if (!first || !last) {
        return;
      }

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return function cleanup() {
      document.removeEventListener("keydown", onKeyDown);
      previousFocusedRef.current?.focus();
    };
  }, [props.open, props.onClose, props.closeOnEscape]);

  function onPanelKeyDown(event: ReactKeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape" && (props.closeOnEscape ?? true)) {
      event.preventDefault();
      props.onClose();
    }
  }

  if (!props.open) {
    return null;
  }

  return (
    <Backdrop onClick={props.onClose}>
      <Panel
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={props.title ? titleId : undefined}
        tabIndex={-1}
        onKeyDown={onPanelKeyDown}
        onClick={function onClick(event) {
          event.stopPropagation();
        }}
      >
        <Heading id={props.title ? titleId : undefined} level={3}>{props.title ?? "Dialog"}</Heading>
        <div>{props.children}</div>
        <Button ref={closeButtonRef} tone="neutral" onClick={props.onClose}>Close</Button>
      </Panel>
    </Backdrop>
  );
}
