import { css } from "@emotion/css";
import { useNotificationsStore } from "../../stores/notificationsStore";
import { Button } from "../../atoms/Button/Button";
import { Text } from "../../atoms/Text/Text";
import { buildVariants } from "../../utils/buildVariants";

const rootClassName: string = css(
  buildVariants<Record<string, never>>({})
    .css({
      display: "grid",
      gap: "var(--ds-space-sm)",
      width: "100%"
    })
    .end()
);

const itemClassName: string = css(
  buildVariants<Record<string, never>>({})
    .css({
      border: "1px solid var(--ds-color-border)",
      backgroundColor: "var(--ds-color-surface)",
      borderRadius: "var(--ds-radius-md)",
      padding: "var(--ds-space-md)",
      boxShadow: "var(--ds-shadow-sm)",
      display: "grid",
      gap: "var(--ds-space-xs)"
    })
    .end()
);

const itemHeaderClassName: string = css(
  buildVariants<Record<string, never>>({})
    .css({
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--ds-space-sm)"
    })
    .end()
);

export interface NotificationCenterProps {
  emptyText?: string;
}

export function NotificationCenter(props: NotificationCenterProps) {
  const items = useNotificationsStore((state) => state.items);
  const dismissNotification = useNotificationsStore((state) => state.dismissNotification);

  if (!items.length) {
    return (
      <div className={rootClassName}>
        <Text tone="muted">{props.emptyText ?? "No notifications"}</Text>
      </div>
    );
  }

  return (
    <div className={rootClassName}>
      {items.map((item) => {
        return (
          <article key={item.id} className={itemClassName}>
            <div className={itemHeaderClassName}>
              <Text as="h4" size="md" weight="semibold" tone={item.tone === "danger" ? "danger" : "default"}>
                {item.title}
              </Text>
              <Button tone="neutral" size="sm" onClick={() => dismissNotification(item.id)}>
                Dismiss
              </Button>
            </div>
            {item.body ? <Text tone="muted">{item.body}</Text> : null}
          </article>
        );
      })}
    </div>
  );
}
