import type { HTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";
import { Button } from "../../atoms/Button/Button";

export interface TabItem {
  id: string;
  label: string;
}

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  items: TabItem[];
  value: string;
  onValueChange: (nextValue: string) => void;
  panels?: Record<string, ReactNode>;
}

const Root = styled.div(function style() {
  return buildVariants<Record<string, never>>({})
    .css({ display: "grid", gap: "var(--ds-space-sm)" })
    .end();
});

const List = styled.div(function style() {
  return buildVariants<Record<string, never>>({})
    .css({ display: "inline-flex", gap: "var(--ds-space-xs)" })
    .end();
});

const Panel = styled.div(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      border: "1px solid var(--ds-color-border)",
      borderRadius: "var(--ds-radius-md)",
      padding: "var(--ds-space-md)",
      backgroundColor: "var(--ds-color-surface)"
    })
    .end();
});

export function Tabs(props: TabsProps) {
  return (
    <Root className={props.className}>
      <List role="tablist" aria-label="Tabs">
        {props.items.map((item) => {
          const isActive: boolean = props.value === item.id;
          return (
            <Button
              key={item.id}
              role="tab"
              aria-selected={isActive}
              tone={isActive ? "primary" : "neutral"}
              onClick={function onClick() {
                props.onValueChange(item.id);
              }}
            >
              {item.label}
            </Button>
          );
        })}
      </List>
      <Panel role="tabpanel">{props.panels?.[props.value]}</Panel>
    </Root>
  );
}
