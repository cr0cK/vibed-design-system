import type { HTMLAttributes, ReactNode } from "react";
import { Modal } from "../Modal/Modal";
import { Stack } from "../../atoms/Stack/Stack";
import { Text } from "../../atoms/Text/Text";
import { Inline } from "../../atoms/Inline/Inline";
import { Button } from "../../atoms/Button/Button";

export type DialogVariant = "info" | "confirm" | "destructive";

export interface DialogProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  title: string;
  description?: ReactNode;
  variant?: DialogVariant;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  onClose: () => void;
}

/**
 * Organism component that renders the Dialog primitive.
 */
export function Dialog(props: DialogProps) {
  const variant = props.variant ?? "info";
  const confirmTone = variant === "destructive" ? "danger" : "primary";
  const confirmLabel = props.confirmLabel ?? (variant === "confirm" ? "Confirm" : variant === "destructive" ? "Delete" : "Done");
  const cancelLabel = props.cancelLabel ?? "Cancel";

  return (
    <Modal data-attr-name="Dialog" open={props.open} title={props.title} onClose={props.onClose}>
      <Stack gap="sm">
        {props.description ? <Text size="sm" tone="muted">{props.description}</Text> : null}
        <Inline gap="xs" justify="end">
          <Button
            tone="neutral"
            size="sm"
            onClick={function onClick() {
              if (props.onCancel) {
                props.onCancel();
              }
              props.onClose();
            }}
          >
            {cancelLabel}
          </Button>
          <Button
            tone={confirmTone}
            size="sm"
            onClick={function onClick() {
              if (props.onConfirm) {
                props.onConfirm();
              }
              props.onClose();
            }}
          >
            {confirmLabel}
          </Button>
        </Inline>
      </Stack>
    </Modal>
  );
}
