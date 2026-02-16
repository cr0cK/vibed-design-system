import type { HTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";
import { Button } from "../../atoms/Button/Button";
import { Heading } from "../../atoms/Heading/Heading";

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  title?: string;
  children?: ReactNode;
  onClose: () => void;
}

const Backdrop = styled.div(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      position: "fixed",
      inset: 0,
      backgroundColor: "rgba(0, 0, 0, 0.35)",
      display: "grid",
      placeItems: "center",
      zIndex: 50
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
      gap: "var(--ds-space-md)"
    })
    .end();
});

export function Modal(props: ModalProps) {
  if (!props.open) {
    return null;
  }

  return (
    <Backdrop onClick={props.onClose}>
      <Panel
        role="dialog"
        aria-modal="true"
        onClick={function onClick(event) {
          event.stopPropagation();
        }}
      >
        <Heading level={3}>{props.title ?? "Dialog"}</Heading>
        <div>{props.children}</div>
        <Button tone="neutral" onClick={props.onClose}>Close</Button>
      </Panel>
    </Backdrop>
  );
}
