import type { HTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";
import { Button } from "../../atoms/Button/Button";
import { Heading } from "../../atoms/Heading/Heading";

export interface SheetProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  side?: "left" | "right" | "top" | "bottom";
  title?: string;
  children?: ReactNode;
  onClose: () => void;
}

interface PanelProps {
  side?: "left" | "right" | "top" | "bottom";
}

const Backdrop = styled.div(function style() {
  return buildVariants<Record<string, never>>({})
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
    .end();
});

const Panel = styled.div<PanelProps>(function style(props) {
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
    .variant("side", props.side ?? "right", {
      right: { top: 0, right: 0, width: "min(26rem, 96vw)", height: "100vh", animationName: "ds-sheet-in-right" },
      left: { top: 0, left: 0, width: "min(26rem, 96vw)", height: "100vh", animationName: "ds-sheet-in-left" },
      top: { top: 0, left: 0, width: "100vw", minHeight: "12rem", animationName: "ds-sheet-in-top" },
      bottom: { bottom: 0, left: 0, width: "100vw", minHeight: "12rem", animationName: "ds-sheet-in-bottom" }
    })
    .end();
});

export function Sheet(props: SheetProps) {
  if (!props.open) {
    return null;
  }

  return (
    <>
      <Backdrop onClick={props.onClose} />
      <Panel side={props.side} role="dialog" aria-modal="true">
        {props.title ? <Heading level={4}>{props.title}</Heading> : null}
        <Button tone="neutral" size="sm" onClick={props.onClose}>Close</Button>
        {props.children}
      </Panel>
    </>
  );
}
