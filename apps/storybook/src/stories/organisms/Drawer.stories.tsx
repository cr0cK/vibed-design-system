import { Button, Drawer, Stack, Text } from "@vibed/design-system";
import { useState } from "react";

const meta = { title: "Organisms/Drawer", component: Drawer, tags: ["autodocs"] };
export default meta;

function Demo() {
  const [open, setOpen] = useState(false);

  return (
    <Stack gap="sm">
      <Button tone="neutral" onClick={function onClick() { setOpen(true); }}>Open drawer</Button>
      <Drawer open={open} onClose={function onClose() { setOpen(false); }}>
        <Text size="sm">Drawer content</Text>
      </Drawer>
    </Stack>
  );
}

export const Showcase = { render: function Render() { return <Demo />; } };
