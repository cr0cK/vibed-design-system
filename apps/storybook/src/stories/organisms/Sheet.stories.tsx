import { Button, Select, Sheet, Stack, Text } from "@vibed/design-system";
import { useState } from "react";

const meta = { title: "Organisms/Sheet", component: Sheet, tags: ["autodocs"] };
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
      <Button tone="neutral" onClick={function onClick() { setOpen(true); }}>Open sheet</Button>
      <Sheet open={open} overlayMode={overlayMode} side="right" title="Quick settings" onClose={function onClose() { setOpen(false); }}>
        <Text size="sm">Lightweight side surface for fast edits.</Text>
      </Sheet>
    </Stack>
  );
}

export const Showcase = { render: function Render() { return <Demo />; } };
