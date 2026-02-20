import type { HTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";
import { Heading } from "../../atoms/Heading/Heading";
import { Text } from "../../atoms/Text/Text";

export interface PageHeaderProps extends HTMLAttributes<HTMLDivElement> {
  heading: ReactNode;
  subtitle?: ReactNode;
  actions?: ReactNode;
}

const Root = styled.header(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "var(--ds-space-md)",
      width: "100%"
    })
    .end();
});

const Content = styled.div(function style() {
  return buildVariants<Record<string, never>>({})
    .css({ display: "grid", gap: "var(--ds-space-xxs)" })
    .end();
});

export function PageHeader(props: PageHeaderProps) {
  return (
    <Root data-attr-name="PageHeader" className={props.className}>
      <Content>
        <Heading level={2}>{props.heading}</Heading>
        {props.subtitle ? <Text tone="muted">{props.subtitle}</Text> : null}
      </Content>
      {props.actions ? <div>{props.actions}</div> : null}
    </Root>
  );
}
