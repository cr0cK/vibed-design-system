import { Box, Button, Text } from "@vibed/design-system";

const meta = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Launch",
    tone: "primary",
    size: "md"
  }
};

export default meta;

export const Playground = {};

export const Composition = {
  render: function Render() {
    return (
      <Box surface="elevated" padding="lg" radius="lg" style={{ maxWidth: 420 }}>
        <Text as="h3" size="lg" weight="semibold">
          Component-level Composition
        </Text>
        <Text tone="muted" style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>
          Atoms stay intentionally small so molecules and organisms can compose behavior.
        </Text>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <Button tone="primary">Primary</Button>
          <Button tone="neutral">Neutral</Button>
          <Button tone="danger">Danger</Button>
        </div>
      </Box>
    );
  }
};
