import type { HTMLAttributes, ReactNode } from "react";
import { useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";

export interface FocusTrapProps extends HTMLAttributes<HTMLDivElement> {
  active?: boolean;
  children?: ReactNode;
}

const Root = styled.div(function style() {
  return buildVariants<Record<string, never>>({})
    .css({ width: "100%" })
    .end();
});

function getFocusable(root: HTMLElement): HTMLElement[] {
  return Array.from(
    root.querySelectorAll<HTMLElement>("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])")
  ).filter(function filter(item) {
    return !item.hasAttribute("disabled") && item.getAttribute("aria-hidden") !== "true";
  });
}

export function FocusTrap(props: FocusTrapProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(function setupTrap() {
    if (!props.active) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Tab") {
        return;
      }

      const root = rootRef.current;
      if (!root) {
        return;
      }

      const focusable = getFocusable(root);
      if (focusable.length === 0) {
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
    };
  }, [props.active]);

  return <Root ref={rootRef} className={props.className}>{props.children}</Root>;
}
