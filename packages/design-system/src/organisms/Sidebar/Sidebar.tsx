import type { HTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";
import { Text } from "../../atoms/Text/Text";

export interface SidebarItem {
  id: string;
  label: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
}

export interface SidebarGroup {
  id: string;
  label?: ReactNode;
  items: SidebarItem[];
}

export interface SidebarProps extends HTMLAttributes<HTMLElement> {
  heading?: ReactNode;
  groups: SidebarGroup[];
  activeItemId?: string;
  onItemSelect?: (id: string) => void;
  footer?: ReactNode;
  collapsed?: boolean;
}

interface RootProps {
  collapsed?: boolean;
}

const Root = styled.aside<RootProps>(function style(props) {
  return buildVariants<RootProps>(props)
    .css({
      boxSizing: "border-box",
      width: props.collapsed ? "4.2rem" : "min(15rem, 100%)",
      maxWidth: "100%",
      height: "100%",
      minHeight: 0,
      borderRight: "1px solid var(--ds-color-border)",
      backgroundColor: "var(--ds-color-surface)",
      padding: "var(--ds-space-sm)",
      display: "grid",
      gridTemplateRows: "auto 1fr auto",
      gap: "var(--ds-space-sm)",
      transition: "width .18s ease"
    })
    .end();
});

const Group = styled.section(function style() {
  return buildVariants<Record<string, never>>({})
    .css({ display: "grid", gap: "0.2rem", marginBottom: "var(--ds-space-sm)" })
    .end();
});

interface ItemProps {
  active?: boolean;
  disabled?: boolean;
  collapsed?: boolean;
}

const ItemButton = styled.button<ItemProps>(function style(props) {
  return buildVariants<ItemProps>(props)
    .css({
      border: "none",
      borderRadius: "var(--ds-radius-sm)",
      backgroundColor: props.active ? "color-mix(in oklab, var(--ds-color-primary) 13%, var(--ds-color-surface))" : "transparent",
      color: props.disabled ? "var(--ds-color-text-muted)" : "var(--ds-color-text)",
      cursor: props.disabled ? "not-allowed" : "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: props.collapsed ? "center" : "flex-start",
      gap: "var(--ds-space-xs)",
      width: "100%",
      padding: "0.5rem 0.55rem",
      fontSize: "0.9rem"
    })
    .end();
});

const Scroll = styled.div(function style() {
  return buildVariants<Record<string, never>>({})
    .css({ overflowY: "auto", minHeight: 0 })
    .end();
});

/**
 * Organism component that renders the Sidebar primitive.
 */
export function Sidebar(props: SidebarProps) {
  return (
    <Root data-attr-name="Sidebar" className={props.className} collapsed={props.collapsed}>
      <div>
        {props.heading ? <Text size="sm" weight="semibold">{props.heading}</Text> : null}
      </div>
      <Scroll>
        {props.groups.map(function mapGroup(group) {
          return (
            <Group key={group.id}>
              {group.label && !props.collapsed ? <Text size="sm" tone="muted">{group.label}</Text> : null}
              {group.items.map(function mapItem(item) {
                return (
                  <ItemButton
                    key={item.id}
                    type="button"
                    active={props.activeItemId === item.id}
                    disabled={item.disabled}
                    collapsed={props.collapsed}
                    onClick={function onClick() {
                      if (!item.disabled && props.onItemSelect) {
                        props.onItemSelect(item.id);
                      }
                    }}
                    aria-label={typeof item.label === "string" ? item.label : undefined}
                  >
                    {item.icon ? <span aria-hidden="true">{item.icon}</span> : null}
                    {props.collapsed ? null : item.label}
                  </ItemButton>
                );
              })}
            </Group>
          );
        })}
      </Scroll>
      <div>{props.footer}</div>
    </Root>
  );
}
