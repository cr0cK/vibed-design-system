import { Box, Button, ClickOutside, Stack, Text } from "@vibed/design-system";
import { useState } from "react";

const meta = { title: "Utilities/ClickOutside", component: ClickOutside, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
  const [open, setOpen] = useState(false);

  return (
    <Stack gap="sm">
      <Button tone="neutral" size="sm" onClick={function onClick() { setOpen(!open); }}>Toggle panel</Button>
      {open ? (
        <ClickOutside onClickOutside={function onOutside() { setOpen(false); }}>
          <Box surface="surface" padding="sm" radius="md" border="subtle">
            <Text size="sm">Click outside this box to close it.</Text>
          </Box>
        </ClickOutside>
      ) : null}
    </Stack>
  );
  }
};
