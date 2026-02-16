import type { HTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";
import { Button } from "../../atoms/Button/Button";

export interface DrawerProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  side?: "left" | "right";
  children?: ReactNode;
  onClose: () => void;
}

interface PanelProps {
  side?: "left" | "right";
}

const Backdrop = styled.div(function style() {
  return buildVariants<Record<string, never>>({})
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
    .end();
});

const Panel = styled.div<PanelProps>(function style(props) {
  return buildVariants<PanelProps>(props)
    .css({
      position: "fixed",
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
    .variant("side", props.side ?? "right", {
      left: { left: 0, animationName: "ds-drawer-in-left" },
      right: { right: 0, animationName: "ds-drawer-in-right" }
    })
    .end();
});

export function Drawer(props: DrawerProps) {
  if (!props.open) {
    return null;
  }

  return (
    <>
      <Backdrop onClick={props.onClose} />
      <Panel side={props.side ?? "right"}>
        <Button tone="neutral" onClick={props.onClose}>Close</Button>
        {props.children}
      </Panel>
    </>
  );
}
