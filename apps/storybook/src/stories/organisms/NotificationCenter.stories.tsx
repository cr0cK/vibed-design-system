import { Button, NotificationCenter, Stack, useNotificationsStore } from "@vibed/design-system";

const meta = { title: "Organisms/NotificationCenter", component: NotificationCenter, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
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
};

export const Playground = {
  args: { emptyText: "No notifications" },
  argTypes: { emptyText: { control: "text" } },
  render: function Render(args: any) {
    return <NotificationCenter emptyText={args.emptyText} />;
  }
};

(Showcase as any).args = (Playground as any).args;
(Showcase as any).argTypes = (Playground as any).argTypes;

