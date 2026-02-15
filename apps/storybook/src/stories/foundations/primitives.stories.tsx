import { Box, Button, Inline, Input, Stack, Text, IconButton } from "@vibed/design-system";

const meta = {
  title: "Foundations/Primitives",
  component: Stack,
  tags: ["autodocs"]
};

export default meta;

export const LayoutAndInput = {
  render: function Render() {
    return (
      <Box surface="elevated" radius="lg" padding="lg" style={{ maxWidth: 560 }}>
        <Stack gap="md">
          <Text as="h3" size="lg" weight="semibold">
            Small primitives, composable UI
          </Text>

          <Stack gap="xs">
            <label htmlFor="email-field">
              <Text as="span" size="sm" weight="semibold">
                Email
              </Text>
            </label>
            <Input id="email-field" placeholder="you@example.com" />
          </Stack>

          <Inline gap="sm" justify="between">
            <Inline gap="xs">
              <Button tone="neutral">Cancel</Button>
              <Button tone="primary">Save</Button>
            </Inline>
            <IconButton
              label="Delete"
              tone="danger"
              icon={<span aria-hidden="true" style={{ fontWeight: 700 }}>x</span>}
            />
          </Inline>
        </Stack>
      </Box>
    );
  }
};
