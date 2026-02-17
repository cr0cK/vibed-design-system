import { Button, Drawer, Select, Stack, Text } from "@vibed/design-system";
import { useState } from "react";

const meta = { title: "Organisms/Drawer", component: Drawer, tags: ["autodocs"] };
export default meta;

function Demo() {
  const [open, setOpen] = useState(false);
  const [overlayMode, setOverlayMode] = useState("viewport");

  return (
    <Stack gap="sm">
      <Select
        value={overlayMode}
        onChange={function onChange(event) {
          setOverlayMode(event.target.value);
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

export const Showcase = { render: function Render() { return <Demo />; } };
