import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export interface PortalProps {
  children?: ReactNode;
  target?: HTMLElement | null;
}

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
      ? document.querySelector<HTMLElement>("[data-ds-portal-root='true']")
      : null;
  const target = props.target ?? inferredTarget ?? (typeof document !== "undefined" ? document.body : null);
  if (!target) {
    return null;
  }

  return createPortal(props.children, target);
}
