import type { HTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";
import { Heading } from "../../atoms/Heading/Heading";
import { Text } from "../../atoms/Text/Text";

export interface EmptyStateProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  icon?: ReactNode;
  action?: ReactNode;
  controlSize?: "sm" | "md" | "lg";
  size?: "sm" | "md" | "lg";
}

interface EmptyStateLayoutProps {
  controlSize?: "sm" | "md" | "lg";
}

const Root = styled.section<EmptyStateLayoutProps>(function style(props) {
  return buildVariants<EmptyStateLayoutProps>(props)
    .css({
      border: "1px dashed var(--ds-color-border)",
      borderRadius: "var(--ds-radius-md)",
      backgroundColor: "var(--ds-color-surface)",
      textAlign: "center",
      display: "grid",
      justifyItems: "center"
    })
    .variant("controlSize", props.controlSize ?? "md", {
      sm: { gap: "var(--ds-space-xs)", padding: "var(--ds-space-md)" },
      md: { gap: "var(--ds-space-sm)", padding: "var(--ds-space-lg)" },
      lg: { gap: "var(--ds-space-md)", padding: "var(--ds-space-xl)" }
    })
    .end();
});

const IconWrap = styled.div<EmptyStateLayoutProps>(function style(props) {
  return buildVariants<EmptyStateLayoutProps>(props)
    .css({
      display: "grid",
      placeItems: "center",
      borderRadius: "var(--ds-radius-full)",
      color: "var(--ds-color-primary)",
      backgroundColor: "color-mix(in oklab, var(--ds-color-primary) 12%, transparent)"
    })
    .variant("controlSize", props.controlSize ?? "md", {
      sm: { width: "2rem", height: "2rem", fontSize: "1rem" },
      md: { width: "2.6rem", height: "2.6rem", fontSize: "1.3rem" },
      lg: { width: "3.2rem", height: "3.2rem", fontSize: "1.6rem" }
    })
    .end();
});

export function EmptyState(props: EmptyStateProps) {
  const controlSize = props.controlSize ?? props.size ?? "md";

  return (
    <Root className={props.className} controlSize={controlSize}>
      {props.icon ? <IconWrap controlSize={controlSize} aria-hidden="true">{props.icon}</IconWrap> : null}
      <Heading level={controlSize === "lg" ? 3 : 4}>{props.title}</Heading>
      {props.description ? <Text tone="muted" size={controlSize === "lg" ? "md" : "sm"}>{props.description}</Text> : null}
      {props.action ? props.action : null}
    </Root>
  );
}
