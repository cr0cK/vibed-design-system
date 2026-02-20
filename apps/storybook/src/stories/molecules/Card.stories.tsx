import { Card, Stack, Text } from "@vibed/design-system";

const meta = { title: "Molecules/Card", component: Card, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Card title="Release Notes" subtitle="Latest updates">
        <Stack gap="xs">
          <Text size="sm">- Added Phase 1 components</Text>
          <Text size="sm">- Updated Storybook organization</Text>
        </Stack>
      </Card>
    );
  }
};

export const Playground = {
  args: { title: "Release Notes", subtitle: "Latest updates" },
  argTypes: { title: { control: "text" }, subtitle: { control: "text" } },
  render: function Render(args: any) {
    return (
      <Card title={args.title} subtitle={args.subtitle}>
        <Stack gap="xs">
          <Text size="sm">- Added Phase 1 components</Text>
          <Text size="sm">- Updated Storybook organization</Text>
        </Stack>
      </Card>
    );
  }
};

(Showcase as any).args = (Playground as any).args;
(Showcase as any).argTypes = (Playground as any).argTypes;
(Showcase as any).render = (Playground as any).render;

