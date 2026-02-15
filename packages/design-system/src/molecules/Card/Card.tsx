import type { HTMLAttributes, ReactNode } from "react";
import { newBuildVariants } from "@productive-codebases/build-variants";
import { Box } from "../../atoms/Box/Box";
import { Text } from "../../atoms/Text/Text";
import { toClassName } from "../../utils/styleVariants";

const titleRowStyle = newBuildVariants<Record<string, never>, Record<string, unknown>>({})
  .css({
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "var(--ds-space-sm)",
    marginBottom: "var(--ds-space-md)"
  })
  .end();

const bodyStyle = newBuildVariants<Record<string, never>, Record<string, unknown>>({})
  .css({
    display: "grid",
    gap: "var(--ds-space-sm)"
  })
  .end();

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
      <div className={toClassName(titleRowStyle)}>
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
      <div className={toClassName(bodyStyle)}>{props.children}</div>
    </Box>
  );
}
