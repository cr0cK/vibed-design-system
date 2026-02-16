import { Divider, Stack, Text } from "@vibed/design-system";

const meta = { title: "Atoms/Divider", component: Divider, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Stack gap="sm">
        <Text>Section A</Text>
        <Divider />
        <Text>Section B</Text>
      </Stack>
    );
  }
};
