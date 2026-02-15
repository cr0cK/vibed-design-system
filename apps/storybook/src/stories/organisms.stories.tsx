import type { Meta, StoryObj } from "@storybook/react";
import { AppShell, Button, Card, NotificationCenter, Text, useNotificationsStore } from "@vibed/design-system";

const meta: Meta<typeof AppShell> = {
  title: "Organisms/AppShell",
  component: AppShell,
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof AppShell>;

function NotificationControls() {
  const pushNotification = useNotificationsStore((state) => state.pushNotification);

  return (
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
      <Button
        tone="primary"
        onClick={function onClick() {
          pushNotification({
            title: "Build completed",
            body: "Your design-system package is ready for publish.",
            tone: "success"
          });
        }}
      >
        Push success
      </Button>

      <Button
        tone="danger"
        onClick={function onClick() {
          pushNotification({
            title: "Failed visual snapshot",
            body: "Check tokens for contrast regression.",
            tone: "danger"
          });
        }}
      >
        Push alert
      </Button>
    </div>
  );
}

export const WorkspaceShell: Story = {
  render: function Render() {
    return (
      <AppShell
        title="Design System Workspace"
        navigation={
          <div style={{ display: "grid", gap: "0.6rem" }}>
            <Text weight="semibold">Navigation</Text>
            <Text tone="muted">Foundations</Text>
            <Text tone="muted">Components</Text>
            <Text tone="muted">Patterns</Text>
          </div>
        }
      >
        <Card title="Release Feed" subtitle="Store-backed organism example">
          <NotificationControls />
          <NotificationCenter emptyText="No recent events" />
        </Card>
      </AppShell>
    );
  }
};
