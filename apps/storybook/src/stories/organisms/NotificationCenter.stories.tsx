import { Button, NotificationCenter, Stack, useNotificationsStore } from "@vibed/design-system";

const meta = { title: "Organisms/NotificationCenter", component: NotificationCenter, tags: ["autodocs"] };
export default meta;

function Demo() {
  const pushNotification = useNotificationsStore((state) => state.pushNotification);

  return (
    <Stack gap="sm">
      <Button
        tone="primary"
        onClick={function onClick() {
          pushNotification({ title: "Build done", body: "Artifacts published", tone: "success" });
        }}
      >
        Push notification
      </Button>
      <NotificationCenter emptyText="No notifications" />
    </Stack>
  );
}

export const Showcase = { render: function Render() { return <Demo />; } };
