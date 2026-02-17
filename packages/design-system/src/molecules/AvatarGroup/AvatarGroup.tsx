import type { HTMLAttributes } from "react";
import styled from "@emotion/styled";
import { buildVariants } from "../../utils/buildVariants";
import { Avatar } from "../../atoms/Avatar/Avatar";

export interface AvatarGroupItem {
  id: string;
  name?: string;
  src?: string;
  alt?: string;
}

export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
  items: AvatarGroupItem[];
  max?: number;
  controlSize?: "sm" | "md" | "lg";
}

interface LayoutProps {
  controlSize?: "sm" | "md" | "lg";
}

const Root = styled.div<LayoutProps>(function style(props) {
  return buildVariants<LayoutProps>(props)
    .css({ display: "inline-flex", alignItems: "center" })
    .variant("controlSize", props.controlSize ?? "md", {
      sm: { marginInlineStart: "0.35rem" },
      md: { marginInlineStart: "0.45rem" },
      lg: { marginInlineStart: "0.55rem" }
    })
    .end();
});

const ItemWrap = styled.div<LayoutProps>(function style(props) {
  return buildVariants<LayoutProps>(props)
    .css({
      border: "2px solid var(--ds-color-surface)",
      borderRadius: "var(--ds-radius-full)",
      marginInlineStart: "-0.45rem"
    })
    .variant("controlSize", props.controlSize ?? "md", {
      sm: { marginInlineStart: "-0.35rem" },
      md: { marginInlineStart: "-0.45rem" },
      lg: { marginInlineStart: "-0.55rem" }
    })
    .end();
});

const Overflow = styled.span(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      display: "inline-grid",
      placeItems: "center",
      width: "2.2rem",
      height: "2.2rem",
      borderRadius: "var(--ds-radius-full)",
      border: "1px solid var(--ds-color-border)",
      backgroundColor: "var(--ds-color-surface-muted)",
      fontSize: "0.8rem",
      fontWeight: 600
    })
    .end();
});

export function AvatarGroup(props: AvatarGroupProps) {
  const max = props.max ?? props.items.length;
  const visible = props.items.slice(0, max);
  const overflowCount = Math.max(0, props.items.length - visible.length);

  return (
    <Root className={props.className} controlSize={props.controlSize}>
      {visible.map(function mapItem(item) {
        return (
          <ItemWrap key={item.id} controlSize={props.controlSize}>
            <Avatar controlSize={props.controlSize} name={item.name} src={item.src} alt={item.alt} />
          </ItemWrap>
        );
      })}
      {overflowCount > 0 ? <Overflow>+{overflowCount}</Overflow> : null}
    </Root>
  );
}
