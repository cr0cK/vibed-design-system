import { Box, Button, Portal, Stack, Text } from "@vibed/design-system";
import { useState } from "react";

const meta = { title: "Utilities/Portal", component: Portal, tags: ["autodocs"] };
export default meta;

function Demo() {
  const [open, setOpen] = useState(false);

  return (
    <Stack gap="sm">
      <Button tone="primary" onClick={function onClick() { setOpen(!open); }}>
        Toggle portal content
      </Button>
      {open ? (
        <Portal>
          <Box surface="surface" padding="md" radius="md" border="subtle">
            <Text size="sm">Rendered in document body via Portal.</Text>
          </Box>
        </Portal>
      ) : null}
    </Stack>
  );
}

export const Showcase = { render: function Render() { return <Demo />; } };
