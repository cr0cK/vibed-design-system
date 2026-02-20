import type { HTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";

export interface MenuItem {
  id: string;
  label: ReactNode;
  disabled?: boolean;
}

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  items: MenuItem[];
  selectedId?: string;
  onItemSelect?: (id: string) => void;
}

const Root = styled.div(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      display: "grid",
      gap: "0.2rem",
      padding: "0.25rem",
      border: "1px solid var(--ds-color-border)",
      borderRadius: "var(--ds-radius-md)",
      backgroundColor: "var(--ds-color-surface)",
      fontFamily: "var(--ds-font-body)",
      fontSize: "0.875rem",
      lineHeight: 1.4
    })
    .end();
});

interface ItemProps {
  selected?: boolean;
  disabled?: boolean;
}

const ItemButton = styled.button<ItemProps>(function style(props) {
  return buildVariants<ItemProps>(props)
    .css({
      appearance: "none",
      border: "none",
      textAlign: "left",
      borderRadius: "var(--ds-radius-sm)",
      padding: "0.5rem 0.6rem",
      font: "inherit",
      backgroundColor: props.selected ? "color-mix(in oklab, var(--ds-color-primary) 14%, var(--ds-color-surface))" : "transparent",
      color: props.disabled ? "var(--ds-color-text-muted)" : "var(--ds-color-text)",
      cursor: props.disabled ? "not-allowed" : "pointer"
    })
    .end();
});

/**
 * Molecule component that renders the Menu primitive.
 */
export function Menu(props: MenuProps) {
  const { items, selectedId, onItemSelect, className, ...restProps } = props;

  return (
    <Root data-attr-name="Menu" className={className} role="menu" {...restProps}>
      {items.map(function mapItem(item) {
        return (
          <ItemButton
            key={item.id}
            type="button"
            role="menuitem"
              disabled={item.disabled}
              selected={selectedId === item.id}
              onClick={function onClick() {
              if (!item.disabled && onItemSelect) {
                onItemSelect(item.id);
              }
            }}
          >
            {item.label}
          </ItemButton>
        );
      })}
    </Root>
  );
}
