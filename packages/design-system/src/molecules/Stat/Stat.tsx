import type { HTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";
import { Text } from "../../atoms/Text/Text";

export interface StatProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  value: ReactNode;
  trend?: string;
  tone?: "default" | "success" | "danger";
  controlSize?: "sm" | "md" | "lg";
  size?: "sm" | "md" | "lg";
}

interface StatLayoutProps {
  controlSize?: "sm" | "md" | "lg";
}

const Root = styled.article<StatLayoutProps>(function style(props) {
  return buildVariants<StatLayoutProps>(props)
    .css({
      border: "1px solid var(--ds-color-border)",
      borderRadius: "var(--ds-radius-md)",
      backgroundColor: "var(--ds-color-surface)",
      display: "grid",
      gap: "var(--ds-space-xs)"
    })
    .variant("controlSize", props.controlSize ?? "md", {
      sm: { padding: "var(--ds-space-sm)", gap: "var(--ds-space-xxs)" },
      md: { padding: "var(--ds-space-md)", gap: "var(--ds-space-xs)" },
      lg: { padding: "var(--ds-space-lg)", gap: "var(--ds-space-sm)" }
    })
    .end();
});

/**
 * Molecule component that renders the Stat primitive.
 */
export function Stat(props: StatProps) {
  const controlSize = props.controlSize ?? props.size ?? "md";
  const valueSize = controlSize === "lg" ? "xl" : controlSize === "sm" ? "md" : "lg";
  const trendTone = props.tone === "success" ? "success" : props.tone === "danger" ? "danger" : "muted";

  return (
    <Root data-attr-name="Stat" className={props.className} controlSize={controlSize}>
      <Text size="sm" tone="muted">{props.label}</Text>
      <Text size={valueSize} weight="bold">{props.value}</Text>
      {props.trend ? <Text size="sm" tone={trendTone}>{props.trend}</Text> : null}
    </Root>
  );
}
