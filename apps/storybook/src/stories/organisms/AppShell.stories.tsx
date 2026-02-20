import { AppShell, Card, Stack, Text } from "@vibed/design-system";

const meta = { title: "Organisms/AppShell", component: AppShell, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <AppShell title="Workspace" navigation={<Stack gap="xs"><Text>Foundations</Text><Text>Components</Text></Stack>}>
        <Card title="Main content"><Text>App shell content area.</Text></Card>
      </AppShell>
    );
  }
};

export const Playground = {
  args: { title: "Workspace" },
  argTypes: { title: { control: "text" } },
  render: function Render(args: any) {
    return (
      <AppShell title={args.title} navigation={<Stack gap="xs"><Text>Foundations</Text><Text>Components</Text></Stack>}>
        <Card title="Main content"><Text>App shell content area.</Text></Card>
      </AppShell>
    );
  }
};

