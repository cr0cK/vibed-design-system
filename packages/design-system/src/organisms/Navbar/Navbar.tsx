import type { HTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";
import { Inline } from "../../atoms/Inline/Inline";
import { Heading } from "../../atoms/Heading/Heading";

export interface NavbarItem {
  id: string;
  label: ReactNode;
}

export interface NavbarProps extends HTMLAttributes<HTMLElement> {
  brand: ReactNode;
  items?: NavbarItem[];
  activeItemId?: string;
  onItemSelect?: (id: string) => void;
  actions?: ReactNode;
}

const Root = styled.header(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      width: "100%",
      boxSizing: "border-box",
      borderBottom: "1px solid var(--ds-color-border)",
      backgroundColor: "var(--ds-color-surface)",
      padding: "0.65rem var(--ds-space-md)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--ds-space-md)"
    })
    .end();
});

const Nav = styled.nav(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--ds-space-xs)",
      flexWrap: "wrap",
      minWidth: 0
    })
    .end();
});

const Left = styled.div(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      minWidth: 0,
      flex: "1 1 auto"
    })
    .end();
});

const Actions = styled.div(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      display: "inline-flex",
      alignItems: "center",
      flexShrink: 0
    })
    .end();
});

interface ItemButtonProps {
  active?: boolean;
}

const ItemButton = styled.button<ItemButtonProps>(function style(props) {
  return buildVariants<ItemButtonProps>(props)
    .css({
      border: "none",
      borderRadius: "var(--ds-radius-sm)",
      backgroundColor: props.active ? "color-mix(in oklab, var(--ds-color-primary) 14%, var(--ds-color-surface))" : "transparent",
      color: "var(--ds-color-text)",
      padding: "0.45rem 0.6rem",
      fontFamily: "var(--ds-font-body)",
      fontSize: "0.9rem",
      cursor: "pointer"
    })
    .end();
});

/**
 * Organism component that renders the Navbar primitive.
 */
export function Navbar(props: NavbarProps) {
  return (
    <Root data-attr-name="Navbar" className={props.className}>
      <Left>
        <Inline gap="md" align="center">
          <Heading level={5}>{props.brand}</Heading>
          {props.items && props.items.length > 0 ? (
            <Nav aria-label="Primary navigation">
              {props.items.map(function mapItem(item) {
                return (
                  <ItemButton
                    key={item.id}
                    type="button"
                    active={props.activeItemId === item.id}
                    onClick={function onClick() {
                      if (props.onItemSelect) {
                        props.onItemSelect(item.id);
                      }
                    }}
                  >
                    {item.label}
                  </ItemButton>
                );
              })}
            </Nav>
          ) : null}
        </Inline>
      </Left>
      {props.actions ? <Actions>{props.actions}</Actions> : null}
    </Root>
  );
}
