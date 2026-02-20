import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export interface PortalProps {
  children?: ReactNode;
  target?: HTMLElement | null;
}

/**
 * Utility component that renders the Portal primitive.
 */
export function Portal(props: PortalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(function onMount() {
    setMounted(true);
    return function cleanup() {
      setMounted(false);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  const inferredTarget =
    typeof document !== "undefined"
      ? (function resolveInnermostPortalRoot() {
          const roots = document.querySelectorAll<HTMLElement>("[data-ds-portal-root='true']");
          return roots.length > 0 ? roots[roots.length - 1] : null;
        })()
      : null;
  const target = props.target ?? inferredTarget ?? (typeof document !== "undefined" ? document.body : null);
  if (!target) {
    return null;
  }

  return createPortal(props.children, target);
}
