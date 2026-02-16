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
      zIndex: 40
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
      alignContent: "start"
    })
    .variant("side", props.side ?? "right", {
      left: { left: 0 },
      right: { right: 0 }
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
