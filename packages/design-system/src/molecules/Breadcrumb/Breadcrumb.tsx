import type { HTMLAttributes } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";
import { Link } from "../../atoms/Link/Link";
import { Text } from "../../atoms/Text/Text";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
}

const Nav = styled.nav(function style() {
  return buildVariants<Record<string, never>>({})
    .css({ display: "flex", alignItems: "center", gap: "0.4rem", flexWrap: "wrap" })
    .end();
});

export function Breadcrumb(props: BreadcrumbProps) {
  return (
    <Nav aria-label="Breadcrumb" className={props.className}>
      {props.items.map((item, index) => {
        const isLast: boolean = index === props.items.length - 1;
        return (
          <span key={`${item.label}-${index}`}>
            {item.href && !isLast ? <Link href={item.href}>{item.label}</Link> : <Text as="span" tone={isLast ? "default" : "muted"}>{item.label}</Text>}
            {!isLast ? <Text as="span" tone="muted"> / </Text> : null}
          </span>
        );
      })}
    </Nav>
  );
}
