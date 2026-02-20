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

export const Playground = {
  args: {
    surface: "muted",
    padding: "md",
    radius: "md",
    border: "subtle",
    content: "Preview surface"
  },
  argTypes: {
    surface: { control: "select", options: ["transparent", "background", "surface", "muted", "elevated", "primary"] },
    padding: { control: "select", options: ["none", "xs", "sm", "md", "lg", "xl"] },
    radius: { control: "select", options: ["none", "sm", "md", "lg"] },
    border: { control: "select", options: ["none", "subtle"] },
    content: { control: "text" }
  },
  render: function Render(args: any) {
    return (
      <Box surface={args.surface} padding={args.padding} radius={args.radius} border={args.border}>
        <Text>{args.content}</Text>
      </Box>
    );
  }
};

