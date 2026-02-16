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
