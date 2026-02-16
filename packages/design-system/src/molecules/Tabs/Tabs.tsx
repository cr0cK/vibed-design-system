import type { HTMLAttributes, KeyboardEvent, ReactNode } from "react";
import { useId, useRef } from "react";
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
  const tabsId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const selectedIndex = props.items.findIndex(function findById(item) {
    return item.id === props.value;
  });

  function focusAndSelect(index: number) {
    if (props.items.length === 0) {
      return;
    }

    const bounded = (index + props.items.length) % props.items.length;
    const next = props.items[bounded];
    if (!next) {
      return;
    }

    props.onValueChange(next.id);
    tabRefs.current[bounded]?.focus();
  }

  function onListKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (props.items.length === 0) {
      return;
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      focusAndSelect((selectedIndex >= 0 ? selectedIndex : 0) + 1);
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      focusAndSelect((selectedIndex >= 0 ? selectedIndex : 0) - 1);
      return;
    }

    if (event.key === "Home") {
      event.preventDefault();
      focusAndSelect(0);
      return;
    }

    if (event.key === "End") {
      event.preventDefault();
      focusAndSelect(props.items.length - 1);
    }
  }

  return (
    <Root className={props.className} controlSize={controlSize}>
      <List role="tablist" aria-label="Tabs" controlSize={controlSize} onKeyDown={onListKeyDown}>
        {props.items.map((item, index) => {
          const isActive: boolean = props.value === item.id;
          const tabId = `${tabsId}-tab-${item.id}`;
          const panelId = `${tabsId}-panel-${item.id}`;
          return (
            <Button
              key={item.id}
              ref={function setRef(node) {
                tabRefs.current[index] = node;
              }}
              id={tabId}
              role="tab"
              aria-controls={panelId}
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
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
      <Panel
        id={`${tabsId}-panel-${props.value}`}
        role="tabpanel"
        aria-labelledby={`${tabsId}-tab-${props.value}`}
        controlSize={controlSize}
      >
        {props.panels?.[props.value]}
      </Panel>
    </Root>
  );
}
