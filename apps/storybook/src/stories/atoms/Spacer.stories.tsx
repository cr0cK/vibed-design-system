import { Box, Spacer, Stack, Text } from "@vibed/design-system";

const meta = { title: "Atoms/Spacer", component: Spacer, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Box surface="elevated" padding="md" radius="md" border="subtle">
        <Stack gap="md">
          <Text weight="semibold">Spacer sizes</Text>

          <Box surface="muted" padding="sm" radius="sm">
            <Stack gap="sm">
              <Text size="sm">`xs` (1px)</Text>
              <Box surface="primary" radius="sm">
                <Spacer size="xs" />
              </Box>
              <Text size="sm">`sm` (2px)</Text>
              <Box surface="primary" radius="sm">
                <Spacer size="sm" />
              </Box>
              <Text size="sm">`md` (3px)</Text>
              <Box surface="primary" radius="sm">
                <Spacer size="md" />
              </Box>
              <Text size="sm">`lg` (4px)</Text>
              <Box surface="primary" radius="sm">
                <Spacer size="lg" />
              </Box>
              <Text size="sm">`xl` (5px)</Text>
              <Box surface="primary" radius="sm">
                <Spacer size="xl" />
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    );
  }
};

export const Playground = {
  args: {
    size: "md"
  },
  argTypes: {
    size: { control: "select", options: ["xs", "sm", "md", "lg", "xl"] }
  },
  render: function Render(args: any) {
    return (
      <Box surface="muted" padding="sm" radius="sm">
        <Text size="sm">Top</Text>
        <Spacer size={args.size} />
        <Text size="sm">Bottom</Text>
      </Box>
    );
  }
};
