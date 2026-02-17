import { Box, Button, DesignSystemProvider, Grid, Heading, Inline, Input, Select, Stack, Text, neoMintTheme, orangeMotionTheme } from "@vibed/design-system";

const meta = {
  title: "Themes/Overview",
  component: DesignSystemProvider,
  tags: ["autodocs"]
};

export default meta;

interface ThemePreviewCardProps {
  title: string;
  description: string;
  mode?: "light" | "dark";
  useOrangeMotion?: boolean;
  useNeoMint?: boolean;
}

function ThemePreviewCard(props: ThemePreviewCardProps) {
  const selectedTheme = props.useOrangeMotion ? orangeMotionTheme : props.useNeoMint ? neoMintTheme : undefined;

  return (
    <DesignSystemProvider mode={props.mode ?? "light"} theme={selectedTheme}>
      <Box surface="background" padding="md" radius="md" border="subtle">
        <Stack gap="sm">
          <Stack gap="xxs">
            <Heading level={4}>{props.title}</Heading>
            <Text size="sm" tone="muted">{props.description}</Text>
          </Stack>
          <Stack gap="xs">
            <Text size="sm" weight="semibold">Status</Text>
            <Select defaultValue="active" controlSize="sm">
              <option value="active">Active</option>
              <option value="paused">Paused</option>
            </Select>
          </Stack>
          <Stack gap="xs">
            <Text size="sm" weight="semibold">Audience</Text>
            <Input controlSize="sm" defaultValue="Team leads" />
          </Stack>
          <Inline gap="xs">
            <Button controlSize="sm" tone="neutral">Cancel</Button>
            <Button controlSize="sm" tone="primary">Apply</Button>
          </Inline>
        </Stack>
      </Box>
    </DesignSystemProvider>
  );
}

export const Gallery = {
  render: function Render() {
    return (
      <Grid columns={2} gap="md">
        <ThemePreviewCard title="Default Light" description="Balanced daytime palette with neutral surfaces." mode="light" />
        <ThemePreviewCard title="Default Dark" description="Higher contrast for low-light environments." mode="dark" />
        <ThemePreviewCard title="Orange Motion" description="Warm accent theme focused on energetic primary actions." useOrangeMotion />
        <ThemePreviewCard title="Neo Mint" description="Modern aqua accents with cooler neutrals and softer geometry." useNeoMint />
      </Grid>
    );
  }
};
