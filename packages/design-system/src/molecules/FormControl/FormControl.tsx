import type { HTMLAttributes, ReactNode } from "react";
import { cloneElement, isValidElement, useId } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";
import { HelperText } from "../HelperText/HelperText";

interface FormControlLayoutProps {
  controlSize?: "sm" | "md" | "lg";
}

const Root = styled.div<FormControlLayoutProps>(function style(props) {
  return buildVariants<FormControlLayoutProps>(props)
    .css({ display: "grid", gap: "var(--ds-space-xs)" })
    .variant("controlSize", props.controlSize ?? "md", {
      sm: { gap: "var(--ds-space-xxs)" },
      md: { gap: "var(--ds-space-xs)" },
      lg: { gap: "var(--ds-space-sm)" }
    })
    .end();
});

const Label = styled.label<FormControlLayoutProps>(function style(props) {
  return buildVariants<FormControlLayoutProps>(props)
    .css({ fontSize: "0.9rem", fontWeight: 600 })
    .variant("controlSize", props.controlSize ?? "md", {
      sm: { fontSize: "0.82rem", lineHeight: 1.35 },
      md: { fontSize: "0.9rem", lineHeight: 1.4 },
      lg: { fontSize: "0.98rem", lineHeight: 1.45 }
    })
    .end();
});

export interface FormControlProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  label?: string;
  htmlFor?: string;
  hint?: string;
  error?: string;
  controlSize?: "sm" | "md" | "lg";
  size?: "sm" | "md" | "lg";
}

/**
 * Molecule component that renders the FormControl primitive.
 */
export function FormControl(props: FormControlProps) {
  const controlSize = props.controlSize ?? props.size ?? "md";
  const helperTextId = useId();
  const helperId = props.error || props.hint ? helperTextId : undefined;
  let controlNode: ReactNode = props.children;
  let controlId = props.htmlFor;

  if (isValidElement<Record<string, unknown>>(props.children)) {
    const currentId = typeof props.children.props.id === "string" ? props.children.props.id : undefined;
    const currentDescribedBy = typeof props.children.props["aria-describedby"] === "string" ? props.children.props["aria-describedby"] : undefined;
    const describedBy = helperId ? [currentDescribedBy, helperId].filter(Boolean).join(" ") : currentDescribedBy;
    const invalid = props.error ? true : props.children.props["aria-invalid"];
    controlId = props.htmlFor ?? currentId;

    controlNode = cloneElement(props.children, {
      id: controlId,
      "aria-describedby": describedBy || undefined,
      "aria-invalid": invalid
    });
  }

  return (
    <Root data-attr-name="FormControl" className={props.className} controlSize={controlSize}>
      {props.label ? <Label htmlFor={controlId} controlSize={controlSize}>{props.label}</Label> : null}
      {controlNode}
      {props.error ? (
        <HelperText id={helperId} controlSize={controlSize} tone="danger">{props.error}</HelperText>
      ) : props.hint ? (
        <HelperText id={helperId} controlSize={controlSize}>{props.hint}</HelperText>
      ) : null}
    </Root>
  );
}
