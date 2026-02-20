import type { HTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";
import { Text } from "../../atoms/Text/Text";

export interface DataListItem {
  id: string;
  label: ReactNode;
  value: ReactNode;
  description?: ReactNode;
}

export interface DataListProps extends HTMLAttributes<HTMLDListElement> {
  items: DataListItem[];
  controlSize?: "sm" | "md" | "lg";
}

interface LayoutProps {
  controlSize?: "sm" | "md" | "lg";
}

const Root = styled.dl<LayoutProps>(function style(props) {
  return buildVariants<LayoutProps>(props)
    .css({
      margin: 0,
      padding: 0,
      display: "grid",
      border: "1px solid var(--ds-color-border)",
      borderRadius: "var(--ds-radius-md)",
      backgroundColor: "var(--ds-color-surface)"
    })
    .variant("controlSize", props.controlSize ?? "md", {
      sm: { gap: "0" },
      md: { gap: "0" },
      lg: { gap: "0" }
    })
    .end();
});

const Row = styled.div(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      display: "grid",
      gridTemplateColumns: "minmax(8rem, 14rem) 1fr",
      gap: "var(--ds-space-sm)",
      padding: "0.7rem 0.85rem",
      borderBottom: "1px solid var(--ds-color-border)",
      "&:last-of-type": {
        borderBottom: "none"
      }
    })
    .end();
});

const Term = styled.dt(function style() {
  return buildVariants<Record<string, never>>({})
    .css({ margin: 0 })
    .end();
});

const Details = styled.dd(function style() {
  return buildVariants<Record<string, never>>({})
    .css({ margin: 0, display: "grid", gap: "0.2rem" })
    .end();
});

/**
 * Molecule component that renders the DataList primitive.
 */
export function DataList(props: DataListProps) {
  return (
    <Root data-attr-name="DataList" className={props.className} controlSize={props.controlSize}>
      {props.items.map(function mapItem(item) {
        return (
          <Row key={item.id}>
            <Term>
              <Text size="sm" tone="muted">{item.label}</Text>
            </Term>
            <Details>
              <Text size="sm" weight="medium">{item.value}</Text>
              {item.description ? <Text size="sm" tone="muted">{item.description}</Text> : null}
            </Details>
          </Row>
        );
      })}
    </Root>
  );
}
