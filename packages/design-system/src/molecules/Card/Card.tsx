import type { HTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";
import { Box } from "../../atoms/Box/Box";
import { Text } from "../../atoms/Text/Text";
import { buildVariants } from "../../utils/buildVariants";

const TitleRow = styled.div(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "var(--ds-space-sm)",
      marginBottom: "var(--ds-space-md)"
    })
    .end();
});

const Body = styled.div(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      display: "grid",
      gap: "var(--ds-space-sm)"
    })
    .end();
});

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  children?: ReactNode;
  "data-testid"?: string;
}

export function Card(props: CardProps) {
  return (
    <Box
      padding="lg"
      radius="lg"
      surface="elevated"
      className={props.className}
      data-testid={props["data-testid"]}
    >
      <TitleRow>
        <div>
          <Text as="h3" size="lg" weight="semibold">
            {props.title}
          </Text>
          {props.subtitle ? (
            <Text as="p" size="sm" tone="muted">
              {props.subtitle}
            </Text>
          ) : null}
        </div>
        {props.actions}
      </TitleRow>
      <Body>{props.children}</Body>
    </Box>
  );
}
