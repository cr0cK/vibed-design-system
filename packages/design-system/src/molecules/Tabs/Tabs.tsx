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
  controlSize?: "sm" | "md" | "lg";
  size?: "sm" | "md" | "lg";
}

interface TabsLayoutProps {
  controlSize?: "sm" | "md" | "lg";
}

const Root = styled.div<TabsLayoutProps>(function style(props) {
  return buildVariants<TabsLayoutProps>(props)
    .css({ display: "grid", gap: "var(--ds-space-sm)" })
    .variant("controlSize", props.controlSize ?? "md", {
      sm: { gap: "var(--ds-space-xs)" },
      md: { gap: "var(--ds-space-sm)" },
      lg: { gap: "var(--ds-space-md)" }
    })
    .end();
});

const List = styled.div<TabsLayoutProps>(function style(props) {
  return buildVariants<TabsLayoutProps>(props)
    .css({ display: "inline-flex", gap: "var(--ds-space-xs)" })
    .variant("controlSize", props.controlSize ?? "md", {
      sm: { gap: "var(--ds-space-xxs)" },
      md: { gap: "var(--ds-space-xs)" },
      lg: { gap: "var(--ds-space-sm)" }
    })
    .end();
});

const Panel = styled.div<TabsLayoutProps>(function style(props) {
  return buildVariants<TabsLayoutProps>(props)
    .css({
      border: "1px solid var(--ds-color-border)",
      borderRadius: "var(--ds-radius-md)",
      padding: "var(--ds-space-md)",
      backgroundColor: "var(--ds-color-surface)"
    })
    .variant("controlSize", props.controlSize ?? "md", {
      sm: { padding: "var(--ds-space-sm)" },
      md: { padding: "var(--ds-space-md)" },
      lg: { padding: "var(--ds-space-lg)" }
    })
    .end();
});

export function Tabs(props: TabsProps) {
  const controlSize = props.controlSize ?? props.size ?? "md";

  return (
    <Root className={props.className} controlSize={controlSize}>
      <List role="tablist" aria-label="Tabs" controlSize={controlSize}>
        {props.items.map((item) => {
          const isActive: boolean = props.value === item.id;
          return (
            <Button
              key={item.id}
              role="tab"
              aria-selected={isActive}
              tone={isActive ? "primary" : "neutral"}
              controlSize={controlSize}
              onClick={function onClick() {
                props.onValueChange(item.id);
              }}
            >
              {item.label}
            </Button>
          );
        })}
      </List>
      <Panel role="tabpanel" controlSize={controlSize}>{props.panels?.[props.value]}</Panel>
    </Root>
  );
}
