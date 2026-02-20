import styled from "@emotion/styled";
import { useNotificationsStore } from "../../stores/notificationsStore";
import { Button } from "../../atoms/Button/Button";
import { Text } from "../../atoms/Text/Text";
import { buildVariants } from "../../utils/buildVariants";

const Root = styled.div(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      display: "grid",
      gap: "var(--ds-space-sm)",
      width: "100%"
    })
    .end();
});

interface ItemProps {
  index: number;
}

const Item = styled.article<ItemProps>(function style(props) {
  return buildVariants<ItemProps>(props)
    .css({
      border: "1px solid var(--ds-color-border)",
      backgroundColor: "var(--ds-color-surface)",
      borderRadius: "var(--ds-radius-md)",
      padding: "var(--ds-space-md)",
      boxShadow: "var(--ds-shadow-sm)",
      display: "grid",
      gap: "var(--ds-space-xs)",
      opacity: 0,
      transform: "translateY(8px) scale(0.995)",
      animationName: "ds-notification-in",
      animationDuration: ".26s",
      animationTimingFunction: "cubic-bezier(.2,.8,.2,1)",
      animationFillMode: "forwards",
      animationDelay: `${Math.min(props.index, 6) * 45}ms`,
      willChange: "opacity, transform",
      "@keyframes ds-notification-in": {
        from: { opacity: 0, transform: "translateY(8px) scale(0.995)" },
        to: { opacity: 1, transform: "translateY(0) scale(1)" }
      },
      "@media (prefers-reduced-motion: reduce)": {
        animation: "none",
        opacity: 1,
        transform: "none"
      }
    })
    .end();
});

const ItemHeader = styled.div(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--ds-space-sm)"
    })
    .end();
});

export interface NotificationCenterProps {
  emptyText?: string;
}

/**
 * Organism component that renders the NotificationCenter primitive.
 */
export function NotificationCenter(props: NotificationCenterProps) {
  const items = useNotificationsStore((state) => state.items);
  const dismissNotification = useNotificationsStore((state) => state.dismissNotification);

  if (!items.length) {
    return (
      <Root data-attr-name="NotificationCenter">
        <Text tone="muted">{props.emptyText ?? "No notifications"}</Text>
      </Root>
    );
  }

  return (
    <Root>
      {items.map(function mapItem(item, index) {
        return (
          <Item key={item.id} index={index}>
            <ItemHeader>
              <Text as="h4" size="md" weight="semibold" tone={item.tone === "danger" ? "danger" : "default"}>
                {item.title}
              </Text>
              <Button
                tone="neutral"
                size="sm"
                onClick={function onClick() {
                  dismissNotification(item.id);
                }}
              >
                Dismiss
              </Button>
            </ItemHeader>
            {item.body ? <Text tone="muted">{item.body}</Text> : null}
          </Item>
        );
      })}
    </Root>
  );
}
