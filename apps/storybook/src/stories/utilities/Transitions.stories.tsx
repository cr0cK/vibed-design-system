import { Box, Stack, Text, fadeTransition, getTransitionCss, scaleTransition } from "@vibed/design-system";

const meta = { title: "Utilities/Transitions", tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
    return (
      <Stack gap="sm">
        <Text size="sm">fade transition: {getTransitionCss(fadeTransition)}</Text>
        <Text size="sm">scale transition: {getTransitionCss(scaleTransition)}</Text>
        <Box surface="muted" padding="sm" radius="md" border="subtle">
          <Text size="sm" tone="muted">Transition presets are utility tokens for component motion.</Text>
        </Box>
      </Stack>
    );
  }
};
