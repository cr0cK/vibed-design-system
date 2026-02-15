import { newBuildVariants } from "@productive-codebases/build-variants";
import { useNotificationsStore } from "../../stores/notificationsStore";
import { Button } from "../../atoms/Button/Button";
import { Text } from "../../atoms/Text/Text";
import { toClassName } from "../../utils/styleVariants";

const rootStyle = newBuildVariants<Record<string, never>, Record<string, unknown>>({})
  .css({
    display: "grid",
    gap: "var(--ds-space-sm)",
    width: "100%"
  })
  .end();

const itemStyle = newBuildVariants<Record<string, never>, Record<string, unknown>>({})
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

const itemHeaderStyle = newBuildVariants<Record<string, never>, Record<string, unknown>>({})
  .css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "var(--ds-space-sm)"
  })
  .end();

export interface NotificationCenterProps {
  emptyText?: string;
}

export function NotificationCenter(props: NotificationCenterProps) {
  const items = useNotificationsStore((state) => state.items);
  const dismissNotification = useNotificationsStore((state) => state.dismissNotification);

  if (!items.length) {
    return (
      <div className={toClassName(rootStyle)}>
        <Text tone="muted">{props.emptyText ?? "No notifications"}</Text>
      </div>
    );
  }

  return (
    <div className={toClassName(rootStyle)}>
      {items.map((item) => {
        return (
          <article key={item.id} className={toClassName(itemStyle)}>
            <div className={toClassName(itemHeaderStyle)}>
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
