import { Button, Drawer, Select, Stack, Text } from "@vibed/design-system";
import { useState } from "react";
import type { DrawerProps } from "@vibed/design-system";

const meta = { title: "Organisms/Drawer", component: Drawer, tags: ["autodocs"] };
export default meta;

export const Showcase = {
  render: function Render() {
  const [open, setOpen] = useState(false);
  const [overlayMode, setOverlayMode] = useState<NonNullable<DrawerProps["overlayMode"]>>("viewport");

  return (
    <Stack gap="sm">
      <Select
        value={overlayMode}
        onChange={function onChange(event) {
          setOverlayMode(event.target.value as NonNullable<DrawerProps["overlayMode"]>);
        }}
      >
        <option value="viewport">viewport</option>
        <option value="container">container</option>
      </Select>
      <Button tone="neutral" onClick={function onClick() { setOpen(true); }}>Open drawer</Button>
      <Drawer open={open} overlayMode={overlayMode} onClose={function onClose() { setOpen(false); }}>
        <Text size="sm">Drawer content</Text>
      </Drawer>
    </Stack>
  );
  }
};
