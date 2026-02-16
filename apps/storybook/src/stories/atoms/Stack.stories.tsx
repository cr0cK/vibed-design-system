import { Box, Stack, Text } from "@vibed/design-system";

const meta = { title: "Atoms/Stack", component: Stack, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Stack gap="sm">
        <Box padding="sm" surface="muted" radius="sm"><Text size="sm">One</Text></Box>
        <Box padding="sm" surface="muted" radius="sm"><Text size="sm">Two</Text></Box>
        <Box padding="sm" surface="muted" radius="sm"><Text size="sm">Three</Text></Box>
      </Stack>
    );
  }
};
