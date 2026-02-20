import type { HTMLAttributes, ReactNode, RefObject } from "react";
import { useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";

export interface FocusTrapProps extends HTMLAttributes<HTMLDivElement> {
  active?: boolean;
  children?: ReactNode;
  initialFocusRef?: RefObject<HTMLElement | null>;
  returnFocus?: boolean;
}

const Root = styled.div(function style() {
  return buildVariants<Record<string, never>>({})
    .css({ minWidth: 0 })
    .end();
});

function getFocusable(root: HTMLElement): HTMLElement[] {
  return Array.from(
    root.querySelectorAll<HTMLElement>("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])")
  ).filter(function filter(item) {
    return !item.hasAttribute("disabled") && item.getAttribute("aria-hidden") !== "true";
  });
}

/**
 * Utility component that renders the FocusTrap primitive.
 */
export function FocusTrap(props: FocusTrapProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const previousFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(function setupTrap() {
    if (!props.active) {
      return;
    }

    previousFocusedRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;

    const root = rootRef.current;
    if (root) {
      const initialFocus = props.initialFocusRef?.current;
      const focusable = getFocusable(root);
      if (initialFocus) {
        initialFocus.focus();
      } else if (focusable.length > 0) {
        focusable[0]?.focus();
      } else {
        root.focus();
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Tab") {
        return;
      }

      const nextRoot = rootRef.current;
      if (!nextRoot) {
        return;
      }

      const focusable = getFocusable(nextRoot);
      if (focusable.length === 0) {
        event.preventDefault();
        nextRoot.focus();
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
      if (props.returnFocus ?? true) {
        previousFocusedRef.current?.focus();
      }
    };
  }, [props.active, props.initialFocusRef, props.returnFocus]);

  return (
    <Root
      data-attr-name="FocusTrap"
      ref={rootRef}
      className={props.className}
      id={props.id}
      role={props.role}
      style={props.style}
      tabIndex={props.tabIndex ?? -1}
      onKeyDown={props.onKeyDown}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      aria-label={props["aria-label"]}
      aria-labelledby={props["aria-labelledby"]}
      aria-describedby={props["aria-describedby"]}
    >
      {props.children}
    </Root>
  );
}
