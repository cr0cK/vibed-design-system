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
      zIndex: 60
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
      alignContent: "start"
    })
    .variant("side", props.side ?? "right", {
      right: { top: 0, right: 0, width: "min(26rem, 96vw)", height: "100vh" },
      left: { top: 0, left: 0, width: "min(26rem, 96vw)", height: "100vh" },
      top: { top: 0, left: 0, width: "100vw", minHeight: "12rem" },
      bottom: { bottom: 0, left: 0, width: "100vw", minHeight: "12rem" }
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
