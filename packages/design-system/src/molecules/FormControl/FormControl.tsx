import type { HTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";
import { HelperText } from "../HelperText/HelperText";

const Root = styled.div(function style() {
  return buildVariants<Record<string, never>>({})
    .css({ display: "grid", gap: "var(--ds-space-xs)" })
    .end();
});

const Label = styled.label(function style() {
  return buildVariants<Record<string, never>>({})
    .css({ fontSize: "0.9rem", fontWeight: 600 })
    .end();
});

export interface FormControlProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  label?: string;
  htmlFor?: string;
  hint?: string;
  error?: string;
}

export function FormControl(props: FormControlProps) {
  return (
    <Root className={props.className}>
      {props.label ? <Label htmlFor={props.htmlFor}>{props.label}</Label> : null}
      {props.children}
      {props.error ? <HelperText tone="danger">{props.error}</HelperText> : props.hint ? <HelperText>{props.hint}</HelperText> : null}
    </Root>
  );
}
