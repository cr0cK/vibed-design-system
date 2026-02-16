import { Box, Stack, Text } from "@vibed/design-system";

const meta = { title: "Atoms/Box", component: Box, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Stack gap="sm">
        <Box padding="sm" radius="sm" surface="muted"><Text size="sm">Muted</Text></Box>
        <Box padding="md" radius="md" surface="elevated"><Text size="sm">Elevated</Text></Box>
      </Stack>
    );
  }
};
