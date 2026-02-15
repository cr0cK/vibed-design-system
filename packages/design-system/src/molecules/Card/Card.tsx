import type { HTMLAttributes, ReactNode } from "react";
import { css } from "@emotion/css";
import { Box } from "../../atoms/Box/Box";
import { Text } from "../../atoms/Text/Text";

const titleRowClassName: string = css({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: "var(--ds-space-sm)",
  marginBottom: "var(--ds-space-md)"
});

const bodyClassName: string = css({
  display: "grid",
  gap: "var(--ds-space-sm)"
});

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  children?: ReactNode;
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
      <div className={titleRowClassName}>
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
      </div>
      <div className={bodyClassName}>{props.children}</div>
    </Box>
  );
}
