import type { HTMLAttributes, ReactNode } from "react";
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

export function FormControl(props: FormControlProps) {
  const controlSize = props.controlSize ?? props.size ?? "md";

  return (
    <Root className={props.className} controlSize={controlSize}>
      {props.label ? <Label htmlFor={props.htmlFor} controlSize={controlSize}>{props.label}</Label> : null}
      {props.children}
      {props.error ? <HelperText controlSize={controlSize} tone="danger">{props.error}</HelperText> : props.hint ? <HelperText controlSize={controlSize}>{props.hint}</HelperText> : null}
    </Root>
  );
}
