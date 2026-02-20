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

export const Playground = {
  args: {
    gap: "sm",
    align: "stretch"
  },
  argTypes: {
    gap: { control: "select", options: ["xxs", "xs", "sm", "md", "lg", "xl"] },
    align: { control: "select", options: ["stretch", "start", "center", "end"] }
  },
  render: function Render(args: any) {
    return (
      <Stack gap={args.gap} align={args.align}>
        <Box padding="sm" surface="muted" radius="sm"><Text size="sm">One</Text></Box>
        <Box padding="sm" surface="muted" radius="sm"><Text size="sm">Two</Text></Box>
        <Box padding="sm" surface="muted" radius="sm"><Text size="sm">Three</Text></Box>
      </Stack>
    );
  }
};

