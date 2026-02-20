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
              <Spacer size="xs" style={{ backgroundColor: "color-mix(in oklab, var(--ds-color-primary) 45%, var(--ds-color-surface))", borderRadius: "var(--ds-radius-sm)" }} />
              <Text size="sm">`sm` (2px)</Text>
              <Spacer size="sm" style={{ backgroundColor: "color-mix(in oklab, var(--ds-color-primary) 45%, var(--ds-color-surface))", borderRadius: "var(--ds-radius-sm)" }} />
              <Text size="sm">`md` (3px)</Text>
              <Spacer size="md" style={{ backgroundColor: "color-mix(in oklab, var(--ds-color-primary) 45%, var(--ds-color-surface))", borderRadius: "var(--ds-radius-sm)" }} />
              <Text size="sm">`lg` (4px)</Text>
              <Spacer size="lg" style={{ backgroundColor: "color-mix(in oklab, var(--ds-color-primary) 45%, var(--ds-color-surface))", borderRadius: "var(--ds-radius-sm)" }} />
              <Text size="sm">`xl` (5px)</Text>
              <Spacer size="xl" style={{ backgroundColor: "color-mix(in oklab, var(--ds-color-primary) 45%, var(--ds-color-surface))", borderRadius: "var(--ds-radius-sm)" }} />
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

(Showcase as any).args = (Playground as any).args;
(Showcase as any).argTypes = (Playground as any).argTypes;
(Showcase as any).render = (Playground as any).render;

