import { Box, Grid, Text } from "@vibed/design-system";

const meta = { title: "Atoms/Grid", component: Grid, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Grid columns={3} gap="sm">
        <Box padding="sm" radius="sm" surface="muted"><Text size="sm">1</Text></Box>
        <Box padding="sm" radius="sm" surface="muted"><Text size="sm">2</Text></Box>
        <Box padding="sm" radius="sm" surface="muted"><Text size="sm">3</Text></Box>
      </Grid>
    );
  }
};

export const Playground = {
  args: {
    columns: 3,
    gap: "sm"
  },
  argTypes: {
    columns: { control: { type: "number", min: 1, max: 6, step: 1 } },
    gap: { control: "select", options: ["xs", "sm", "md", "lg"] }
  },
  render: function Render(args: any) {
    return (
      <Grid columns={args.columns} gap={args.gap}>
        <Box padding="sm" radius="sm" surface="muted"><Text size="sm">1</Text></Box>
        <Box padding="sm" radius="sm" surface="muted"><Text size="sm">2</Text></Box>
        <Box padding="sm" radius="sm" surface="muted"><Text size="sm">3</Text></Box>
      </Grid>
    );
  }
};

