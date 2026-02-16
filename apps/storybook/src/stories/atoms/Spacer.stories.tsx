import { Box, Spacer, Stack, Text } from "@vibed/design-system";

const meta = { title: "Atoms/Spacer", component: Spacer, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Box surface="elevated" padding="md" radius="md">
        <Stack>
          <Text>Top</Text>
          <Spacer size="lg" />
          <Text>Bottom</Text>
        </Stack>
      </Box>
    );
  }
};
