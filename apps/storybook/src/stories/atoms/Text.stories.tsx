import { Stack, Text } from "@vibed/design-system";

const meta = { title: "Atoms/Text", component: Text, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Stack gap="sm">
        <Text size="xl" weight="bold">Display text</Text>
        <Text size="md">Body text</Text>
        <Text size="sm" tone="muted">Helper text</Text>
      </Stack>
    );
  }
};
