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

const Item = styled.article(function style() {
  return buildVariants<Record<string, never>>({})
    .css({
      border: "1px solid var(--ds-color-border)",
      backgroundColor: "var(--ds-color-surface)",
      borderRadius: "var(--ds-radius-md)",
      padding: "var(--ds-space-md)",
      boxShadow: "var(--ds-shadow-sm)",
      display: "grid",
      gap: "var(--ds-space-xs)"
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

export function NotificationCenter(props: NotificationCenterProps) {
  const items = useNotificationsStore((state) => state.items);
  const dismissNotification = useNotificationsStore((state) => state.dismissNotification);

  if (!items.length) {
    return (
      <Root>
        <Text tone="muted">{props.emptyText ?? "No notifications"}</Text>
      </Root>
    );
  }

  return (
    <Root>
      {items.map((item) => {
        return (
          <Item key={item.id}>
            <ItemHeader>
              <Text as="h4" size="md" weight="semibold" tone={item.tone === "danger" ? "danger" : "default"}>
                {item.title}
              </Text>
              <Button tone="neutral" size="sm" onClick={() => dismissNotification(item.id)}>
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
